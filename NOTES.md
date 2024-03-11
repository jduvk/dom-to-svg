### Build

- `npm install`
- `npm run build`

### Pack with Parcel v1

- `npm install parcel-bundler@^1.12.3 -g`
- Modify `./dom-to-svg.js` to import what you need
- Test with `parcel build dom-to-svg.js --no-minify --no-content-hash` (dist folder)
- `parcel build dom-to-svg.js --no-source-maps --no-content-hash`
