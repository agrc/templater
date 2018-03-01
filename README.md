# templater [:link:](http://agrc.github.io/templater)
A web app for quickly templating out new posts or pages for gis.utah.gov.

### Development
`grunt` - set up local web server, build jasmine test page, and start watch task

`grunt build` - build application to `dist\` folder

`grunt deploy` - build application and deploy to `gh-pages`

### New Version
1. Bump `version` in `src/App.js`.
1. Update `src/ChangeLog.html`.
1. `grunt deploy`.
