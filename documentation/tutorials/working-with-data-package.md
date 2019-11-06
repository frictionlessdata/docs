# Working with Data Package

## Local files

Consider we have some local csv files in a `data` directory. Let's create a data package based on this data using a `Package` class:

<!-- tabs:start -->
#### **data/cities.csv**

```csv
city,location
london,"51.50,-0.11"
paris,"48.85,2.30"
rome,"41.89,12.51"
```
<!-- tabs:end -->

<!-- tabs:start -->
#### **data/population.csv**

```csv
city,year,population
london,2017,8780000
paris,2017,2240000
rome,2017,2860000
```
<!-- tabs:end -->

## Inferring metadata

First we create a blank data package:

<!-- tabs:start -->
#### **Python**

```python
package = Package()
```
#### **JavaScript**

```javascript
const packagePackage = await Package.load()
```
<!-- tabs:end -->

Now we're ready to infer a data package descriptor based on data files we have. Because we have two csv files we use glob pattern `**/*.csv`:

<!-- tabs:start -->
#### **Python**

```python
package.infer('**/*.csv')
package.descriptor
#{ profile: 'tabular-data-package',
#  resources:
#   [ { path: 'data/cities.csv',
#       profile: 'tabular-data-resource',
#       encoding: 'utf-8',
#       name: 'cities',
#       format: 'csv',
#       mediatype: 'text/csv',
#       schema: [Object] },
#     { path: 'data/population.csv',
#       profile: 'tabular-data-resource',
#       encoding: 'utf-8',
#       name: 'population',
#       format: 'csv',
#       mediatype: 'text/csv',
#       schema: [Object] } ] }
```
<!-- tabs:end -->

An `infer` method has found all our files and inspected it to extract useful metadata like profile, encoding, format, Table Schema etc. Let's tweak it a little bit:

```python
package.descriptor['resources'][1]['schema']['fields'][1]['type'] = 'year'
package.commit()
package.valid # true
```

Because our resources are tabular we could read it as a tabular data:

```python
package.get_resource('population').read(keyed=True)
#[ { city: 'london', year: 2017, population: 8780000 },
#  { city: 'paris', year: 2017, population: 2240000 },
#  { city: 'rome', year: 2017, population: 2860000 } ]
```

## Saving data package

Let's save our descriptor on the disk as a zip-file:

```python
package.save('datapackage.zip')
```

To continue the work with the data package we just load it again but this time using local `datapackage.zip`:

```python
package = Package('datapackage.zip')
# Continue the work
```
