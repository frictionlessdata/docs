# Plotting Data Packages with Pandas and Plotly

A popular tool for working with data science and data analysis in general
is [Jupyter](https://jupyter.org/) Notebook and Jupyter lab. They combine
text, images and code in an interactive environment that is easy to
experiment with and iterate. Many languages are supported for the code
part, such as R, but for the purpose of this tutorial we are going to
stick with Python.

Jupyter files, also called notebooks, are json files that end with an `.ipynb`
extension.

To begin, we are going to need to install either Jupyter Lab or Jupyter
Notebook. If you already do have either of these installed, skip this step.

## Installing Jupyter Lab

There are several ways to install Jupyter: conda, pip, pipenv or Docker. All
of them are pretty straightforward.
Perhaps you should take a look at the
[Jupyter Lab documentation](https://jupyterlab.readthedocs.io/en/stable/getting_started/installation.html)
and decide for yourself which one to use, based on what you already have
installed, what you are most familiar with, and your work environment.

Since we're using Python, let's say we install it with `pip`.

```
pip install jupyterlab
```

On most Linux environments, you're going to need administrator privileges
(prefix the command line with `sudo`) to install it system-wide.
Alternatively, you can install Jupyter Lab just for your user, as that
does not require special privileges, by using pip with the `--user` flag:

```
pip install --user jupyterlab
```

After we're done, you can start Jupyter Lab by typing:

```
jupyter lab
```

Remember to `cd` to the working directory where you will be working with
notebook files, as you can only access the directory from there below
inside the Jupyter Lab (or Notebook) interface.

## Installing libraries

For this tutorial we also need to have `pandas`, `plotly_express`,
`datapackages`, and `tableschema-pandas` installed. To do so, activate your
Python virtual environment if you are using one, then type:

```
pip install pandas plotly_express
```

Also the Frictionless Data tools if you don't already have them:

```
pip install datapackage tableschema-pandas
```

## Running the notebook

To run the notebook, start either Jupyter Lab or Jupyter Notebook, open
the `.ipynb` file and follow from there. Since it combines presentation
text with code, notebooks are quite well suited for tutorials, too. You can
also experiment with it by changing the dataset used, changing the charts
or plotting new ones, doing some data wrangling with Pandas, writing new
Python code, or anything you want, really. Enjoy!

