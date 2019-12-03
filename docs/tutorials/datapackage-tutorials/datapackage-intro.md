An Introduction to Data Packages
---
A Data Package is a simple way of putting collections of data and their descriptions in one place so that they can be easily shared and used. The Data Package format is **very simple**, **web friendly** and **extensible**.

Creating a Data Package is very easy: all you need to do is put a `datapackage.json` "descriptor" file in the top-level directory of your set of data files.


You can package any kind of data as a Data Package.

1. Get your data together
   1. Get your data together in one folder (you can have data in subfolders of that folder too if you wish).
1. Add a `datapackage.json` file to package those data files into a useful whole (with key information like the license, title and format)
   1. The datapackage.json is a small file in JSON format that gives a bit of information about your dataset. You'll need to create this file and then place it in the directory you created.
   1. Don't worry if you don't know what JSON is - we provide some tools that can automatically create your this file for you.
   1. There are 2 options for creating the datapackage.json:
      1. Use the [Data Package Creator][dp-creator]) tool
         1. Just answer a few questions and give it your data files and it will spit out a datapackage.json for you to include in your project
      1. Use the [Python][dp-py], [JavaScript][dp-js], [PHP][dp-php], [Julia][dp-jl], [R][dp-r], [Clojure][dp-clj], [Java][dp-java], [Ruby][dp-rb] or [Go][dp-go] libraries for working with data packages.

*Recommended reading: Find out how to use Frictionless Data software to improve your data publishing workflow in our new and comprehensive [Frictionless Data Field Guide][field-guide].*

### Full Spec
Here is a full **[RFC-style specification of Data Package format](/specs/data-package/)** to complement this quick introduction.


### Tabular Data

The [Tabular Data Package](/docs/tabular-data-package/) format extends Data Packages for tabular data. It supports providing additional information such as data types of columns.

### Software

There is a growing set of [online and offline software](/software) for working with Data
Packages including for creating, viewing and validating.


## Getting Started

A minimal example Data Package would look like this on disk:

```
datapackage.json

# a data file(s) (CSV in this case but could be any type of data). Data files may go either in data subdirectory or in the main directory
data
data/more-data.csv

# (Optional!) A README (in markdown format)
README.md
```

Any number of additional files such as more data files, scripts (for processing
or analyzing the data) and other material may be provided but are not required.

## datapackage.json

`datapackage.json` file is the basic building block of a Data Package and is
the only required file. It provides:

* General metadata such as the name of the package, its license, its publisher and source,
  etc
* A "manifest" in the the form of a list of the data resources (data files)
  included in this data package along with information on those files (e.g.
  schema)

As its file extension indicates, it must be a [JSON][json] file. Here's a very
minimal example of a `datapackage.json` file:

```json
{
  "name": "a-unique-human-readable-and-url-usable-identifier",
  "title": "A nice title",
  "licenses" : [ ... ],
  "sources" : [...],
  "resources": [{
    // see below for what a resource descriptor looks like
  }]
}
```

Here is a much more extensive example of a datapackage JSON file:

!! **Note:** a complete list of potential attributes and their meaning can be found in the
[full Data Package spec][spec].

[spec]: /specs/data-package/

!!! **Note:** the Data Package format is **extensible**: publishers may add their own additional metadata as well as constraints on the format and type of data by adding their own attributes to the `datapackage.json`.


```json
{
  "name": "a-unique-human-readable-and-url-usable-identifier",
  "datapackage_version": "1.0-beta",
  "title": "A nice title",
  "description": "...",
  "version": "2.0",
  "keywords": ["name", "My new keyword"],
  "licenses": [{
    "url": "http://opendatacommons.org/licenses/pddl/",
    "name": "Open Data Commons Public Domain",
    "version": "1.0",
    "id": "odc-pddl"
  }],
  "sources": [{
    "name": "World Bank and OECD",
    "web": "http://data.worldbank.org/indicator/NY.GDP.MKTP.CD"
  }],
  "contributors":[{
    "name": "Joe Bloggs",
    "email": "joe@bloggs.com",
    "web": "http://www.bloggs.com"
  }],
  "maintainers": [{
    // like contributors
  }],
  "publishers": [{
    // like contributors
  }],
  "dependencies": {
    "data-package-name": ">=1.0"
  },
  "resources": [
    {
      // ... see below ...
    }
  ],
  // extend your datapackage.json with attributes that are not
  // part of the data package spec
  // we add a views attribute to display Recline Dataset Graph Views
  // in our Data Package Viewer
  "views" : [
    {
      ... see below ...
    }
  ],
  // you can add your own attributes to a datapackage.json, too
  "my-own-attribute": "data-packages-are-awesome",
}
```

### Resources

You list data files in the resources entry of the datapackage.json.

```json
  {
    // one of url or path should be present
    "path": "relative-path-to-file", // e.g. data/mydata.csv
    "url": "online url" // e.g http://mysite.org/some-data.csv
  }
```

### Views

The [Data Package Viewer](http://data.okfn.org/tools/view) will display a [Recline Dataset Graph View](http://okfnlabs.org/recline/docs/views.html) when a `views` entry is provided in the datapackage.json.

* Include the `resourceName` property if you have more than one resource and want to display a graph for a resource other than the first resource

* In the `state` property
  * the `group` property is the name of the resource field whose values will be used on the y axis in the `bars` graph type and the x axis in all other graph types
  * the `series` property is an array of one or more names of resource fields whose values will be used on the x axis in the `bars` graph type and the y axis in all other graph types
  * the `graphType` may be one of `lines-and-points`, `lines`, `points`, `bars`, or `columns`

```json
{
  "id": "graph",
  "label": "Graph",
  "resourceName": "a-resource-name",
  "type": "Graph",
  "state": {
    "group": "a-resource-field-name",
    "series": [
      "another-resource-field-name"
    ],
    "graphType": "lines-and-points"
  }
}
```

## Software

There is a growing set of [online and offline software](/software) for working with Data
Packages including tools for creating, viewing, validating, publishing and
managing Data Packages. See the [Frictionless Data software page for more](/software).


## Examples
Many exemplar data packages can be found on [datahub][]. Specific examples:

### World GDP

A Data Package which includes the data locally in the repo (data is CSV).

<http://datahub.io/core/gdp>

Here's the `datapackage.json`:

<script src="https://pkgstore.datahub.io/core/gdp/9/datapackage.json"></script>

### S&P 500 Companies Data

This is an example with more than one resource in the data package.

<http://datahub.io/core/s-and-p-500-companies>

Here's the `datapackage.json`:

<script src="https://pkgstore.datahub.io/core/s-and-p-500-companies/10/datapackage.json"></script>

### GeoJSON and TopoJSON

You can see an example on how to package GeoJSON files [here](https://datahub.io/examples/geojson-tutorial).

DataHub does not currently support the TopoJSON format. You can use “Vega Graph Spec” and display you TopoJSON data using the [Vega specification][vega]. See an example [here](https://datahub.io/examples/vega-views-tutorial-topojson).


[datahub]: https://datahub.io/core
[vega]: https://vega.github.io/vega/
[ISO 3166-2 country codes]: https://github.com/datasets/country-codes

[dp]: /docs/data-package
[dp-main]: /data-packages
[tdp]: /docs/tabular-data-package/
[ts]: /docs/table-schema/
[ts-types]: /specs/table-schema/#field-descriptors
[csv]: /docs/csv/
[json]: http://en.wikipedia.org/wiki/JSON

[spec-dp]: /specs/data-package/
[spec-tdp]: /specs/tabular-data-package/
[spec-ts]: /specs/table-schema/
[spec-csvddf]: /specs/csv-dialect/

[publish]: /docs/publish/
[pub-tabular]: /docs/publish-tabular/
[pub-online]: /docs/publish-online/
[pub-any]: /docs/publish-any/
[pub-geo]: /docs/publish-geo/
[pub-faq]: /docs/publish-faq/

[tools]: /software/
[dp-viewer]: http://create.frictionlessdata.io

[field-guide]: /field-guide

[dp-creator]: http://create.frictionlessdata.io

[dp-js]: https://github.com/frictionlessdata/datapackage-js
[dp-py]: https://github.com/frictionlessdata/datapackage-py
[dp-php]: https://github.com/frictionlessdata/datapackage-php
[dp-java]: https://github.com/frictionlessdata/datapackage-java
[dp-clj]: https://github.com/frictionlessdata/datapackage-clj
[dp-jl]: https://github.com/frictionlessdata/datapackage-jl
[dp-r]: https://github.com/frictionlessdata/datapackage-r
[dp-go]: https://github.com/frictionlessdata/datapackage-go
[dp-rb]: https://github.com/frictionlessdata/datapackage-rb