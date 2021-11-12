# Vue USWDS

A Vue 3 implementation of the [USWDS](https://designsystem.digital.gov).

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com)
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Testing Github Actions Locally

Use [act](https://github.com/nektos/act) to test Github actions locally.

**Note:** Because the [act](https://github.com/nektos/act) docker containers do not have the XVFB dependency installed, you must use a custom docker container from Cypress by adding:

```yaml
container:
  image: cypress/browsers:node14.17.0-chrome91-ff89
```

The specific container can be one of [Cypress's docker images](https://github.com/cypress-io/cypress-docker-images).

You may also need to temporarily adjust the node matrix versions to use the provided by the Cypress container.
