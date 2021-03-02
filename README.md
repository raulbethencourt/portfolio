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

- primary: '#458588',
- secondary: '#a89984',
- accent: '#b16286',
- error: '#cc241d',
- info: '#689d6a',
- success: '#98971a',
- warning: '#d79921',
- background: '#3c3836'

### Colors pallete light

- primary: '#458588',
- secondary: '#7c6f64',
- accent: '#b16286',
- error: '#cc241d',
- info: '#689d6a',
- success: '#98971a',
- warning: '#d79921',
- background: '#ebdbb2'

## Fix babel bug

```
rm -rf dist node_modules 
export VUE_CLI_BABEL_TRANSPILE_MODULES=true
npm install
gridsome build
# ... works
```
