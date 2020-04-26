# Random User Code Challenge


#### Demo
You can see a Demo at: https://erevol.github.io/random-user-challenge/

### Install Locally

To get the app running locally clone the repository

```bash
$ git clone https://github.com/erevol/random-user-challenge
```

Move into folder and install the dependencies

```bash
$ cd random-user-challenge
$ npm install
```

You can run de the app by using the following command in your command-line
```bash
$ npm start
```
The application will be opened at `http://localhost:3000`

To build the project run the next command

```bash
$ npm build
```

A `dist` folder will be created with index.html and bundle.js files

Make sure git knows about your subtree (the subfolder with your site).

```sh
git add dist
```

or force-add it if you don't want to change your `.gitignore`

```sh
git add dist -f
```
Remember to commit!

```sh
git commit -m "gh-pages commit!"
```

Use subtree push to send it to the `gh-pages` branch on GitHub.

```sh
git subtree push --prefix dist origin gh-pages
```

## Used Libraries

* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)
* [React](https://reactjs.org/)
