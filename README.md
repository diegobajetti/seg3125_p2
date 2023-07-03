# — PyCodeX —

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

   > The `homepage` property should follow this format: `http://{github_username}.github.io/{repo_name}`

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
   1. **Branch**:
      - Branch: `gh-pages`
      - Folder: `/ (root)`
1. Click on the "Save" button

The [`gh-pages`][gh-pages] package will deploy the application to the specified [URL](#2-add-a-homepage-property-to-the-packagejson-file) whenever the `npm run deploy` command is executed. Once the command is executed successfully, a [GitHub workflow][github-action] links the GitHub page with the source files in the `gh-pages` branch.

## Common Issues

### `README.md` file as website

During the initial [`gh-pages`][gh-pages] set up, the package will build the app based on the default GitHub Pages configuration since the `gh-pages` branch has not yet been created. Additionally, GitHub Pages first parses the target branch (`master` by default) for a `index.html`, `index.md`, or `README.md` file<sup>&#91;[1](github-pages-doc)&#93;</sup>, utilizing this file to display the site. Upon creating a React app with the `npx create-react-app` command, a `README.md` file is created and, consequently, is regarded as the source file. The `gh-pages` branch is created _after_ the application is deployed for the first time, and only then the GitHub Pages configuration can be changed to deploy the application against the `gh-pages` branch. After completing [this](#5-configure-github-pages) step, deploy the application to force GitHub Pages to use the correct branch.

### Broken Media Display

More than likely, images and/or videos will not render in the deployed site using common `src` linking:

```html
<img src="./images/img.jpg" />
```

Since the website is deployed under the [`homepage`](#2-add-a-homepage-property-to-the-packagejson-file) URL, it will not recognize the source file for the image or video using local pathing. To overcome this, follow the steps below to change all `src` linking, depending on the use case.

1. Diagnose the type of media.

   - _Background Image_

     1. Open the `.css` file that imports an image with the `background-image` property.
     1. Change the format of the `url()` value.

        ```css
        * {
          background-image: url("https://diegobajetti.github.io/seg3125_p2.github.io/images/img-1.jpg");
        }
        ```

        > The `url()` value should follow this format: `https://{github_username}.github.io/{repo_name}/{file_path}`

   - _Image Tag_

     1. Open the `.html` file that utilizes the `<img/>` tag.
     1. Change the format of the `src` attribute.

        ```html
        <img src="./seg3125_p2.github.io/images/img-1.jpg" />
        ```

        > The `src` attribute's value should follow this format: `./{repo_name}/{file_path}`

   - _Background Video_

     1. Open the `.html` file that utilizes the `<video/>` tag.
     1. Change the format of the `src` attribute.

        ```html
        <video src={"./seg3125_p2.github.io/videos/video-0.mp4"}/>
        ```

        > The `src` attribute's value should follow this format: `{"./<repo_name>/<file_path>"}`

1. Create a `.env` file

   1. Navigate to the root of the project.

      ```shell
      $ git rev-parse --show-toplevel
      ```

   1. Create a `.env` file.

      ```shell
      $ touch .evn
      ```

   1. Add the following property.

      ```shell
      $ echo "PUBLIC_URL=." >> .evn
      ```

Push these changes to the remote repository and [deploy](#4-deploy-the-react-app) the application. This is not a foolproof method as it requires any `img` and `video` tags to be changed back in order to render the images when running locally. Additionally, it is **important** that these changes are not pushed to the remote repository, and to reference the external repository _before_ [deploying](#4-deploy-the-react-app). That is, change all references to image/video files anytime the application is deployed to the remote as shown above, and back to their original values when running locally.

[live-website]: https://diegobajetti.github.io/seg3125_p2.github.io/
[gh-pages]: https://www.npmjs.com/package/gh-pages
[package-json-homepage]: https://github.com/diegobajetti/seg3125_p2.github.io/blob/master/package.json#L4
[package-json-predeploy]: https://github.com/diegobajetti/seg3125_p2.github.io/blob/master/package.json#L24
[package-json-deploy]: https://github.com/diegobajetti/seg3125_p2.github.io/blob/master/package.json#L25
[github-action]: https://github.com/diegobajetti/seg3125_p2.github.io/actions
[github-pages-doc]: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site
