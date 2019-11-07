const fs = require('fs')
const yaml = require('js-yaml')
const lodash = require('lodash')
const axios = require('axios')


// Main

async function main() {
  const response = await axios.get('https://raw.githubusercontent.com/frictionlessdata/software/master/scripts/status.yml')
  const sources = yaml.safeLoad(response.data)
  for (const [platform, projects] of Object.entries(sources)) {
    for (const project of projects) {
      const url = `https://raw.githubusercontent.com/frictionlessdata/${project.repo}/master/README.md`
      const doc = (await axios.get(url)).data
      const path = `documentation/references/${project.repo}.md`
      fs.writeFileSync(path, doc)
      console.log(`Updated ${path}`)
    }
  }
}


// System

main()
  .then(() => process.exit(0))
  .catch(error => {console.log(error); process.exit(1)})
