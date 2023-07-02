# SEG3125 Project 2 — PyCodeX

This repository uses a GitHub Pages `npm` package in React to display a static website. You can navigate to [this link][live-website] to see a live, interactive version of the website.

## Getting Started: [`gh-pages`][gh-pages]

### 1. Install the `gh-pages` `npm` package

1. First, install the package specified above by executing the following command.

   ```shell
   $ npm install gh-pages --save
   ```

   > In the [official documentation][gh-pages] of the package, it is recommended to install the `npm` package as a development dependency; however, this can be problematic, at least in my personal experience. Instead of deploying the distributable version of the React app, it will assume the `README.md` to be the root of the deployable app.

### 2. Add a `homepage` property to the `package.json` file

1. Open the `package.json` file in a text editor.
1. Add a [`homepage`][package-json-example] property.

   ```diff
   {
     "name": "seg3125_p2.github.io",
     "version": "0.1.0",
   + "homepage": "http://diegobajetti.github.io/seg3125_p2.github.io",
     [...]
   }
   ```

   > The `homepage` property should follow this format `http://{github_username}.github.io/{repo-name}`

### 3. Add deployment scripts to the `package.json` file

1. Open the `package.json` file in a text editor.
1. Add a [`predeploy`][package-json-example] and [`deploy`][package-json-example] property.

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

   By executing the command above, the `predeploy` and `deploy` scripts will run and the React app will be deployed. Internally, the `predeploy` script creates a distributable version of the app and the `build` script pushes the compiled app to a commit in the newly created `gh-pages` branch.

### 5. Configure GitHub Pages

1. Under your repository name, click **Settings**.
1. In the "Code and automation" section of the sidebar, click **Pages**.
1. Configure the "Build and deployment" settings as follows:
   1. **Source**: Deploy from a branch
   2. **Branch**:
      - Branch: `gh-pages`
      - Folder: `/ (root)`
1. Click on the "Save" button

At last, the [`gh-pages`][gh-pages] package will deploy a GitHub Pages application to the specified [URL](#2-add-a-homepage-property-to-the-packagejson-file-homepage). A [GitHub action][github-action] builds and deploys the GitHub page automatically any time a new commit is pushed to the `master` branch.

[live-website]: https://diegobajetti.github.io/seg3125_p2.github.io/
[gh-pages]: https://www.npmjs.com/package/gh-pages
[package-json-example]: https://github.com/diegobajetti/seg3125_p2.github.io/blob/master/package.json
[github-action]: https://github.com/diegobajetti/seg3125_p2.github.io/actions/runs/5434796911
