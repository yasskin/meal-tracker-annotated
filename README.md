setup steps when beginning a new project, or cloning an existing one:
1. Run npm install and bower install to install dependencies.
2. Install any global packages such as gulp, bower, sass, typescript, and our text editor's typescript packages.
3. Build the project with gulp build.
4. Run it with: gulp serve.

1. user npm to install bower globally. user bower to manage front-end dependencies for the app
2. run bower's `init` command to create the manifest file
```
$ npm install bower -g
$ bower init
```
any time we need a front-end dependency we can add it using

```
$ bower install packagename --save
```
SETUP NOTES //////////////////////

/*
- clone repo
- npm install
- bower install
- install globals if needed (gulp, bower, sass, typescript, typescript packages.)
  - npm install gulp -g
  - npm install bower -g
  - gem install sass
  - npm install typescript -g
  - apm install atom-typescript
- gulp build
- gulp serve
*/
