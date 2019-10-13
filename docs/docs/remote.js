const fs = require('fs')
const yaml = require('js-yaml')
const lodash = require('lodash')
const axios = require('axios')


// Main

async function main() {
  const sources = yaml.safeLoad(fs.readFileSync('remote.yml', 'utf8'))
  for (const source of sources) {
    const repo = lodash.isString(source) ? {name: source, branch: 'master'} : source
    const url = `https://raw.githubusercontent.com/frictionlessdata/${repo.name}/${repo.branch}/README.md`
    const doc = (await axios.get(url)).data
    fs.writeFileSync(`references/${repo.name}.md`, doc)
  }
}


// System

main()
  .then(() => process.exit(0))
  .catch(error => {console.log(error); process.exit(1)})
