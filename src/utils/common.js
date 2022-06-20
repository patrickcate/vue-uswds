import justKebabCase from 'just-kebab-case'

export const objectHasKey = (object, key) =>
  Object.prototype.hasOwnProperty.call(object, key)

export const kebabCase = value => justKebabCase(value)

export const escapeRegExp = string =>
  string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
