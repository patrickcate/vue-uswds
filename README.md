<!-- markdownlint-disable-next-line -->
<img width="300" src="media/logo.svg" alt="Vue-USWDS logo">

# Vue USWDS

[![Tests](https://github.com/patrickcate/vue-uswds/actions/workflows/tests.yml/badge.svg)](https://github.com/patrickcate/vue-uswds/actions/workflows/tests.yml) [![Docs](https://github.com/patrickcate/vue-uswds/actions/workflows/docs.yml/badge.svg)](https://github.com/patrickcate/vue-uswds/actions/workflows/docs.yml) [![codecov](https://codecov.io/gh/patrickcate/vue-uswds/branch/develop/graph/badge.svg?token=3R49R79IKK)](https://codecov.io/gh/patrickcate/vue-uswds)

A Vue 3 implementation of the [USWDS](https://designsystem.digital.gov). If you need Vue 2 support, check out the [USWDS-Vue](https://github.com/thepipster/uswds-vue) library.

## [Documentation](https://patrickcate.github.io/vue-uswds/)

## Installation

**Note:** You will need to install the [USWDS](https://designsystem.digital.gov) CSS separately.

Vue USWDS can be installed either by including it with a simple `script` tag or using NPM and a build system.

### Script Tag

The easiest way to include the library with a script tag is to use a CDN such as [jsDelivr](https://www.jsdelivr.com) or [unpkg](https://unpkg.com). You can also load the library locally on your server.

When using with a script tag all components will be imported.

```html
<script src="https://unpkg.com/vue@3"></script>
<script src="https://unpkg.com/vue-uswds"></script>
```

### NPM (Node Package Manager)

```shell
npm install vue-uswds

// or

yarn install vue-uswds
```

## Usage

When importing the library via NPM you can import all components or use the _À La Carte_ method to import only specific components. The _À La Carte_ method makes it easier to reduce the final bundle size of your application by only including components you are using.

### All Components

```javascript
import Vue from 'vue'
import VueUswds from 'vue-uswds'

const app = Vue.createApp({})

app.use(VueUswds, {
  // ...options
})

app.mount('#app')
```

### À La Carte

```javascript
// App.vue
import Vue from 'vue'
import VueUswds/core from 'vue-uswds' // Import only the core library.

const app = Vue.createApp({})

app.use(VueUswds, {
  // ...options
})

app.mount('#app')
```

```js
// MyComponent.vue
<script>
import { UsaTag } from 'vue-uswds'

export default {
  components: { UsaTag },
}
</script>

<template>
  <UsaTag>My Custom Tag</UsaTag>
</template>
```

If there are components you wish to use anywhere in your app without first importing them, you can register them globally.

```javascript
// App.vue
import Vue from 'vue'
import VueUswds/core from 'vue-uswds' // Import only the core library.
import { UsaTag } from 'vue-uswds'

const app = Vue.createApp({})

app.use(VueUswds, {
  // ...options
})

// Register any global components...
app.component('UsaTag', UsaTag)

app.mount('#app')
```

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com)
- [Volar](https://marketplace.visualstudio.com/items?itemName=vue.volar)

## Testing Github Actions Locally

Use [act](https://github.com/nektos/act) to test Github actions locally.

**Note:** Because the [act](https://github.com/nektos/act) docker containers do not have the XVFB dependency installed, you must use a custom docker container from Cypress by adding:

```yaml
container:
  image: cypress/browsers:node14.17.0-chrome91-ff89
```

The specific container can be one of [Cypress's docker images](https://github.com/cypress-io/cypress-docker-images).

You may also need to temporarily adjust the node matrix versions to use the provided by the Cypress container.
