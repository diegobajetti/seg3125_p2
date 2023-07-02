# SEG3125 Project 2 — PyCodeX

This repository uses the [`gh-pages`][gh-pages] `npm` package to build and deploy a React application. See a live, interactive version of the website [here][live-website].

## Getting Started: [`gh-pages`][gh-pages]

### 1. Install the `gh-pages` `npm` package

1. Install the package specified above by executing the following command.

   ```shell
   $ npm install gh-pages --save
   ```

   > In the [official documentation][gh-pages], it recommends installing the `npm` package as a development dependency; however, this can be problematic, at least in my personal experience. Instead of deploying the distributable version of the website, it will assume the `README.md` file to be the root of the app.

### 2. Add a `homepage` property to the `package.json` file

1. Open the `package.json` file in a text editor.
1. Add a [`homepage`][package-json-homepage] property.

   ```diff
   {
     "name": "seg3125_p2.github.io",
     "version": "0.1.0",
   + "homepage": "http://diegobajetti.github.io/seg3125_p2.github.io",
     [...]
   }
   ```

   > The `homepage` property should follow this format: `http://{github_username}.github.io/{repo-name}`

### 3. Add deployment scripts to the `package.json` file

1. Open the `package.json` file in a text editor.
1. Add a [`predeploy`][package-json-predeploy] and [`deploy`][package-json-deploy] property.

   ```diff
   "scripts": {
     "start": "react-scripts start",
     "build": "react-scripts build",
   + "predeploy": "npm run build",
   + "deploy": "gh-pages -d build"
   },
   ```

### 4. Deploy the React app

1. Push the app to the GitHub repository.

   ```shell
   $ npm run deploy
   ```

   By executing the command above, the `predeploy` and `deploy` scripts will run and the React app will be deployed. Internally, the `predeploy` script creates a distributable version of the app and the `build` script pushes the compiled app to a commit in the `gh-pages` branch.

### 5. Configure GitHub Pages

1. Under the repository name, click **Settings**.
1. In the "Code and automation" section of the sidebar, click **Pages**.
1. Configure the "Build and deployment" settings as follows:
   1. **Source**: Deploy from a branch
   2. **Branch**:
      - Branch: `gh-pages`
      - Folder: `/ (root)`
1. Click on the "Save" button

The [`gh-pages`][gh-pages] package will deploy the application to the specified [URL](#2-add-a-homepage-property-to-the-packagejson-file) whenever the `npm run deploy` command is executed. Once the command is executed successfully, a [GitHub workflow][github-action] links the GitHub page with the source files in the `gh-pages` branch.

[live-website]: https://diegobajetti.github.io/seg3125_p2.github.io/
[gh-pages]: https://www.npmjs.com/package/gh-pages
[package-json-homepage]: https://github.com/diegobajetti/seg3125_p2.github.io/blob/master/package.json#L4
[package-json-predeploy]: https://github.com/diegobajetti/seg3125_p2.github.io/blob/master/package.json#L24
[package-json-deploy]: https://github.com/diegobajetti/seg3125_p2.github.io/blob/master/package.json#L25
[github-action]: https://github.com/diegobajetti/seg3125_p2.github.io/actions
