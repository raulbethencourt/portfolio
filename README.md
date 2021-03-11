# RAUL PORTFOLIO

## This is my personal portfolio built with Vue.Js and Gridsome

Gridsome use also the GraphQL technologie

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

Thanks to the [Morhetz Gruvbox](https://github.com/morhetz/gruvbox) theme.

### Colors pallete dark

- $dark0_hard: #1d2021;
- $dark0: #282828;
- $dark0_soft: #32302f;
- $bg_dark1: #3c3836;
- $bg_dark2: #504945;
- $bg_dark3: #665c54;
- $secondary_dark: #7c6f64;
- $dark4_256: #7c6f64;

### Colors pallet light

- $light0_hard: #f9f5d7;
- $light0: #fbf1c7;
- $light0_soft: #f2e5bc;
- $bg_light1: #ebdbb2;
- $bg_light2: #d5c4a1;
- $bg_light3: #bdae93;
- $secondary_light: #a89984;
- $light4_256: #a89984;

### General colors

- $bright_red: #fb4934;
- $bright_green: #b8bb26;
- $bright_yellow: #fabd2f;
- $bright_blue: #83a598;
- $bright_purple: #d3869b;
- $bright_aqua: #8ec07c;
- $bright_orange: #fe8019;
- $error: #cc241d;
- $success: #98971a;
- $warning: #d79921;
- $primary: #458588;
- $accent: #b16286;
- $info: #689d6a;
- $neutral_orange: #d65d0e;
- $faded_red: #9d0006;
- $faded_green: #79740e;
- $faded_yellow: #b57614;
- $faded_blue: #076678;
- $faded_purple: #8f3f71;
- $faded_aqua: #427b58;
- $faded_orange: #af3a03;
- $gray_244: #928374;
- $gray_245: #928374;

## Fix babel bug

I've creates an .env.production file at root level and added this varialble.

```.env
VUE_CLI_BABEL_TRANSPILE_MODULES=true
# ... works
```
