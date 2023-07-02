# SEG3125 Project 2

This repository uses a GitHub Pages `npm` package in React to display a static website. You can navigate to [this link][live-website] to see a live, interactive version of the website.

## Getting Started: [`gh-pages`][gh-pages]

### 1. Install the `gh-pages` npm package

1. First, install the package specified above by executing the following command.

   ```shell
   $ npm install gh-pages --save
   ```

   > In the [official documentation][gh-pages] of the package, it is recommended to install the `npm` package as a development dependency; however, this can be problematic, at least in my personal experience. Instead of deploying the distributable version of the React app, it will assume the `README.md` to be the root of the deployable app.

### 2. Add a `homepage` property to the `package.json` file

1. Open the `package.json` file in a text editor.
1. Add a [`homepage`][commit-example] property.

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
1. Add a `predeploy` and `deploy` property.

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

   At this point, the `predeploy` and `deploy` scripts will run, which will in turn push a distributable version of the app to a new commit in the `gh-pages` branch in the repository.

### 5. Configure GitHub Pages

1. Under your repository name, click **Settings**.
1. In the "Code and automation" section of the sidebar, click **Pages**.
1. Configure the "Build and deployment" settings like this:
   1. **Source**: Deploy from a branch
   2. **Branch**:
      - Branch: `gh-pages`
      - Folder: `/ (root)`
1. Click on the "Save" button

At last, the [`gh-pages`][gh-pages] package is installed correctly and will deploy a GitHub pages application to the specified [URL][live-website].

[live-website]: https://diegobajetti.github.io/seg3125_p2.github.io/
[gh-pages]: https://www.npmjs.com/package/gh-pages
[commit-example]: https://github.com/diegobajetti/seg3125_p2.github.io/commit/f5925299bc25cc1397e1c41f1858c7930c491717
