# Using Data Packages with Pandas
See the [tableschema-pandas-py](https://github.com/frictionlessdata/tableschema-pandas-py) repository for more information.
Run the [original Jupyter Notebook](https://github.com/okfn/okfn.github.com/blob/master/resources/using-data-packages-with-pandas.ipynb).


```python
from tableschema import Storage
from datapackage import Package
import pandas as pd
```


```python
# load resources from a data package as Pandas data frames by using datapackage.push_datapackage function:
url = 'https://raw.githubusercontent.com/frictionlessdata/example-data-packages/master/cpi/datapackage.json'

storage = Storage.connect('pandas')
package = Package(url)
package.save(storage=storage)
```




    True




```python
# Storage works as a container for Pandas data frames
# learn more about storage here: https://github.com/frictionlessdata/tableschema-py#storage
storage.buckets
```




    ['cpi']




```python
type(storage['cpi'])
```




    pandas.core.frame.DataFrame




```python
# you can now use Pandas functions to work with your data package-turned-data frame
storage['cpi'].head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Country Name</th>
      <th>Country Code</th>
      <th>Year</th>
      <th>CPI</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Afghanistan</td>
      <td>AFG</td>
      <td>2004</td>
      <td>63.131893</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Afghanistan</td>
      <td>AFG</td>
      <td>2005</td>
      <td>71.140974</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Afghanistan</td>
      <td>AFG</td>
      <td>2006</td>
      <td>76.302178</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Afghanistan</td>
      <td>AFG</td>
      <td>2007</td>
      <td>82.774807</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Afghanistan</td>
      <td>AFG</td>
      <td>2008</td>
      <td>108.066600</td>
    </tr>
  </tbody>
</table>
</div>




```python
# for example, let's look at the first value in the 'Year' column
storage['cpi']['Year'][0]
```




    2004




```python
# We can get the data types per column
storage['cpi'].dtypes
```




    Country Name     object
    Country Code     object
    Year              int64
    CPI             float64
    dtype: object




```python
# we can get the column names
storage['cpi'].columns
```




    Index(['Country Name', 'Country Code', 'Year', 'CPI'], dtype='object')




```python
# we can sort the data
storage['cpi'].sort_index(axis=0, ascending=False)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Country Name</th>
      <th>Country Code</th>
      <th>Year</th>
      <th>CPI</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>6935</th>
      <td>Zambia</td>
      <td>ZMB</td>
      <td>2014</td>
      <td>130.821971</td>
    </tr>
    <tr>
      <th>6934</th>
      <td>Zambia</td>
      <td>ZMB</td>
      <td>2013</td>
      <td>121.342732</td>
    </tr>
    <tr>
      <th>6933</th>
      <td>Zambia</td>
      <td>ZMB</td>
      <td>2012</td>
      <td>113.428087</td>
    </tr>
    <tr>
      <th>6932</th>
      <td>Zambia</td>
      <td>ZMB</td>
      <td>2011</td>
      <td>106.429397</td>
    </tr>
    <tr>
      <th>6931</th>
      <td>Zambia</td>
      <td>ZMB</td>
      <td>2010</td>
      <td>100.000000</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Afghanistan</td>
      <td>AFG</td>
      <td>2008</td>
      <td>108.066600</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Afghanistan</td>
      <td>AFG</td>
      <td>2007</td>
      <td>82.774807</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Afghanistan</td>
      <td>AFG</td>
      <td>2006</td>
      <td>76.302178</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Afghanistan</td>
      <td>AFG</td>
      <td>2005</td>
      <td>71.140974</td>
    </tr>
    <tr>
      <th>0</th>
      <td>Afghanistan</td>
      <td>AFG</td>
      <td>2004</td>
      <td>63.131893</td>
    </tr>
  </tbody>
</table>
<p>6936 rows × 4 columns</p>
</div>




```python
# we can set new values
storage['cpi'].at[0,'Year'] = 2002
```


```python
# viewing the dataframe

storage['cpi']
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Country Name</th>
      <th>Country Code</th>
      <th>Year</th>
      <th>CPI</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Afghanistan</td>
      <td>AFG</td>
      <td>2002</td>
      <td>63.131893</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Afghanistan</td>
      <td>AFG</td>
      <td>2005</td>
      <td>71.140974</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Afghanistan</td>
      <td>AFG</td>
      <td>2006</td>
      <td>76.302178</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Afghanistan</td>
      <td>AFG</td>
      <td>2007</td>
      <td>82.774807</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Afghanistan</td>
      <td>AFG</td>
      <td>2008</td>
      <td>108.066600</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>6931</th>
      <td>Zambia</td>
      <td>ZMB</td>
      <td>2010</td>
      <td>100.000000</td>
    </tr>
    <tr>
      <th>6932</th>
      <td>Zambia</td>
      <td>ZMB</td>
      <td>2011</td>
      <td>106.429397</td>
    </tr>
    <tr>
      <th>6933</th>
      <td>Zambia</td>
      <td>ZMB</td>
      <td>2012</td>
      <td>113.428087</td>
    </tr>
    <tr>
      <th>6934</th>
      <td>Zambia</td>
      <td>ZMB</td>
      <td>2013</td>
      <td>121.342732</td>
    </tr>
    <tr>
      <th>6935</th>
      <td>Zambia</td>
      <td>ZMB</td>
      <td>2014</td>
      <td>130.821971</td>
    </tr>
  </tbody>
</table>
<p>6936 rows × 4 columns</p>
</div>




```python
# now let's pull this data frame back into a data package:

# note, you can use a local file instead of a URL here
packageURL = 'https://raw.githubusercontent.com/frictionlessdata/examples/master/cpi/datapackage.json'
```


```python
newDatapackage = Package(packageURL, 'country_list', 'pandas', tables={
...     'data': storage['cpi'],
... })
```


```python
newDatapackage.descriptor['resources']
```




    [{'path': 'data/cpi.csv',
      'name': 'cpi',
      'profile': 'tabular-data-resource',
      'schema': {'fields': [{'name': 'Country Name',
         'type': 'string',
         'format': 'default'},
        {'name': 'Country Code', 'type': 'string', 'format': 'default'},
        {'name': 'Year', 'type': 'year', 'format': 'default'},
        {'name': 'CPI',
         'description': 'CPI (where 2005=100)',
         'type': 'number',
         'format': 'default'}],
       'missingValues': ['']}}]


