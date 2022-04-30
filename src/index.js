import core from './core.js'
import * as components from '@/components/index.js'

export function install(app, options) {
  core.install(app, options)

  // Register all components.
  Object.keys(components).forEach(componentName => {
    app.component(componentName, components[componentName])
  })
}

export * from '@/components/index.js'
