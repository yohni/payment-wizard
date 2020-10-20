# payment-wizard

Hallo Everyone, here is my new project about payment process with dynamic form. Here I used Vue 3 and stylus. Here, I bravely trying to implement BEM Methodology in writing styles class. So, you guys feel free to make a PR when you found a mistake (maybe a lot).

## Problem Faced

### Vuelidate

There are many things that I don't understand in developping this apps because I previously used Vue 2 and a lot of React. It is the form validation. I use vuelidate before and its worked greatly. So, I try make it happen again but, its bad. Some validators like requiredif not working correctly and \$invalid return 'false' in not touched form.

### Vue Devtool

I dunno why, but vue devtool not detecting the website as vuejs. Its make dificult to manage the data process.

### Prettier makes stylus looks like Scss on Save

but still works great

## Minus Point

the data does not save in browser storage, so when the page refreshed, the data will refreshed too

### Id Param

To handle the lost data on reload, it can use id params by vue router

### Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
