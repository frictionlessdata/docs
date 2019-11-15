# Software overview:

The core Frictionless Data software can be grouped into 3 areas:
1. Datapackage: packaging data and using packaged data
2. Goodtables: validating data
3. Tableschema: working with a schema for tabular data

The Frictionless Data software reference language is Python, but we support various other languages as well.

## Datapackage
A Data Package is a simple way of putting collections of data and their descriptions in one place so that they can be easily shared and used. The Data Package format is **very simple**, **web friendly** and **extensible**. We have Datapackage libraries implemented in [Python](software-references/python-libraries/datapackage-py.md), [R](software-references/r-libraries/datapackage-r.md), [Javascript](software-references/javascript-libraries/datapackage-js.md), [Ruby](software-references/ruby-libraries/datapackage-rb.md), [Java](software-references/java-libraries/datapackage-java.md), [Go](software-references/go-libraries/datapackage-go.md), [PHP](software-references/php-libraries/datapackage-php.md), [Julia](software-references/julia-libraries/datapackage-jl.md), and [Clojure](software-references/clojure-libraries/datapackage-clj.md), as well as the [Data Package Creator browser tool](http://create.frictionlessdata.io/).

## Goodtables
Goodtables validates your data by checking its structure, and, optionally, its adherence to a specified schema. If there are any errors, Goodtables will highlight the content errors so you can fix them speedily. We have Goodtables libraries implemented in [Python](software-references/python-libraries/goodtables-py.md), as well as the [Goodtables validator browser tool](http://try.goodtables.io/) and the [Goodtables continuous validation service](http://goodtables.io/).

## Tableschema
Table Schema is a simple language- and implementation-agnostic way to declare a schema for tabular data. Table Schema is well suited for use cases around handling and validating tabular data in text formats such as CSV, but its utility extends well beyond this core usage, towards a range of applications where data benefits from a portable schema format. We have Tableschema libraries implemented in [Python](software-references/python-libraries/tableschema-py.md), [R](software-references/r-libraries/tableschema-r.md), [Javascript](software-references/javascript-libraries/tableschema-js.md), [Ruby](software-references/ruby-libraries/tableschema-rb.md), [Java](software-references/java-libraries/tableschema-java.md), [Go](software-references/go-libraries/tableschema-go.md), [PHP](software-references/php-libraries/tableschema-php.md), [Julia](software-references/julia-libraries/tableschema-jl.md), and [Clojure](software-references/clojure-libraries/tableschema-clj.md).

## Working Openly

All our code is open source, made available under the CC-by license, and can be found on GitHub: [https://github.com/frictionlessdata](https://github.com/frictionlessdata).
We appreciate and encourage community contributions. To contribute, see our [process doc](development/process.md).

## Code of Conduct

We are dedicated to ensuring that the Frictionless Data community is a welcoming, harassment-free environment for everyone. We enforce the Open Knowledge Foundation [Project Participating Guidelines + Code of Conduct](https://okfn.org/project-participation-guidelines/). This applies to all Frictionless Data spaces, including our GitHub repositories, chat rooms, and in-person events. Thank you for following these guidelines and helping make the Frictionless Data community strong and welcoming.

## List of all software

See a list of all Frictionless Data software [here](https://frictionlessdata.io/software).

## Use Cases

Read use cases on our [website](https://frictionlessdata.io/articles/). Have a use case you'd like to see highlighted? Let us know via the Frictionless Data [Discuss Forum](https://discuss.okfn.org/c/frictionless-data)!  