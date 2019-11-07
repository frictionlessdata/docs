# documentation

A documentation portal for FrictionlessData

## Development

To start a development server at http://localhost:3000:

```bash
nvm install 12
nvm use 12
npm install
npm run remote
npm run serve
```

To add a new markdown article:
- add under the `documentation` folder
- add to the `documentation/sidebar.md`

To update the `docsify` settings:
- update the `documentation/index.html` file

To update the visual design:
- update the `documentation/theme.css` file

To add tabs with different languages:

```md
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
```

## References

- https://docsify.js.org/#/?id=docsify
- https://github.com/docsifyjs/awesome-docsify#awesome-docsify-
