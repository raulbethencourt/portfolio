# RAUL PORTFOLIO

### This is my personal portfolio built with Vue.Js and Gridsome. 

## Default starter for Gridsome

This is the project you get when you run `gridsome create new-project`.

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Create a Gridsome project

1. `gridsome create my-gridsome-site` to install default starter
2. `cd my-gridsome-site` to open the folder
3. `gridsome develop` to start a local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌

## Design

### Colors pallete dark
* green: #6d6e41;
* sand: #a9845c;
* white: #f2f5f7;
* blue: #89bdd6;
* dark: #29586c;

### Colors pallete light
*
*
*
*
*

## Fix babel bug

```
rm -rf dist node_modules package-lock.json
export VUE_CLI_BABEL_TRANSPILE_MODULES=true
npm install
gridsome build
# ... works
```