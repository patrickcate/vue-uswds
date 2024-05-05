Changelog

# [1.8.0](https://github.com/patrickcate/vue-uswds/compare/v1.7.1...v1.8.0) (2024-04-09)


### Bug Fixes

* **UsaFooterAddress:** move order of `v-bind=\"\\$attrs\"` to prevent overriding CSS classes ([f75efd0](https://github.com/patrickcate/vue-uswds/commit/f75efd031dde1ff4c18f3a16e9ce10faffb6c26b))
* **UsaSidenavItem:** move order of `v-bind=\"\\$attrs\"` to prevent overriding other props ([238ca28](https://github.com/patrickcate/vue-uswds/commit/238ca280556a7b4aa666ec2d9fa58bb626f31dfe))
* **useMobileMenu:** remove invalid underscores from id and use global id prefix ([6ed0dc8](https://github.com/patrickcate/vue-uswds/commit/6ed0dc87248a5397b1562099b6831c22931cce0c))


### Features

* **UsaSidenavItem:** add `sublist` scoped slot ([51a6ac7](https://github.com/patrickcate/vue-uswds/commit/51a6ac7a244ae3dcf96bd53e4f1ca4d40220df24))

# [1.8.0-beta.1](https://github.com/patrickcate/vue-uswds/compare/v1.7.2-beta.2...v1.8.0-beta.1) (2024-03-19)


### Bug Fixes

* **UsaFooterAddress:** move order of `v-bind=\"\\$attrs\"` to prevent overriding CSS classes ([f75efd0](https://github.com/patrickcate/vue-uswds/commit/f75efd031dde1ff4c18f3a16e9ce10faffb6c26b))
* **UsaSidenavItem:** move order of `v-bind=\"\\$attrs\"` to prevent overriding other props ([238ca28](https://github.com/patrickcate/vue-uswds/commit/238ca280556a7b4aa666ec2d9fa58bb626f31dfe))


### Features

* **UsaSidenavItem:** add `sublist` scoped slot ([51a6ac7](https://github.com/patrickcate/vue-uswds/commit/51a6ac7a244ae3dcf96bd53e4f1ca4d40220df24))

## [1.7.2-beta.2](https://github.com/patrickcate/vue-uswds/compare/v1.7.2-beta.1...v1.7.2-beta.2) (2024-03-17)

## [1.7.2-beta.1](https://github.com/patrickcate/vue-uswds/compare/v1.7.1...v1.7.2-beta.1) (2024-02-25)


### Bug Fixes

* **useMobileMenu:** remove invalid underscores from id and use global id prefix ([6ed0dc8](https://github.com/patrickcate/vue-uswds/commit/6ed0dc87248a5397b1562099b6831c22931cce0c))

## [1.7.1](https://github.com/patrickcate/vue-uswds/compare/v1.7.0...v1.7.1) (2024-02-24)


### Bug Fixes

* **UsaNavDropdownButton:** add router link props to fix active class not being applied to button ([92222e7](https://github.com/patrickcate/vue-uswds/commit/92222e7585111713729713520627af54bd84e4df))

# [1.7.0](https://github.com/patrickcate/vue-uswds/compare/v1.6.1...v1.7.0) (2024-02-22)


### Bug Fixes

* **UsaNav:** move mobile menu functionality to `UsaHeader` component ([9e6a103](https://github.com/patrickcate/vue-uswds/commit/9e6a1031f18261e9d5d95ca22fb4b32c21db69d8))


### Features

* allow component level `routerComponentName` prop to be an object ([5ddadab](https://github.com/patrickcate/vue-uswds/commit/5ddadab3750ef39e2fc32b96150c080361a3438f))

## [1.6.1](https://github.com/patrickcate/vue-uswds/compare/v1.6.0...v1.6.1) (2024-02-19)


### Bug Fixes

* **UsaFooterCollapsibleMenu:** add ssr support by delaying collapse until component is mounted ([3df9591](https://github.com/patrickcate/vue-uswds/commit/3df95919c6b1ff7c30ab29a2ae0aa279c752e1a5))
* **UsaModal:** delay visibility until component is mounted for ssr support ([399093c](https://github.com/patrickcate/vue-uswds/commit/399093c2b303e2a7ae31f14fc2506fed51aa9964))
* **UsaNav:** support ssr by adding mounted check to media query evaluation ([aefd68f](https://github.com/patrickcate/vue-uswds/commit/aefd68f94fb686aa547e47b3438439f239b73971))

# [1.6.0](https://github.com/patrickcate/vue-uswds/compare/v1.5.1...v1.6.0) (2023-12-27)


### Bug Fixes

* **UsaRange:** remove redundant ARIA attributes ([f1650d6](https://github.com/patrickcate/vue-uswds/commit/f1650d6e2409e1200fba598abb04fb7798207e92))


### Features

* incorporate date picker a11y improvements from USWDS 3.7.0 ([3fe0c9f](https://github.com/patrickcate/vue-uswds/commit/3fe0c9ffa1b41615dbfc2a1aa919ea8a77e36a25))
* incorporate date picker a11y improvements from USWDS 3.7.0 ([42ea002](https://github.com/patrickcate/vue-uswds/commit/42ea002ace5154e003f9f0d22f538a5ca5383501))
* **UsaRange:** add `unit` and `preposition` props ([dc2bc92](https://github.com/patrickcate/vue-uswds/commit/dc2bc9223172c3c87317deef3f28a7391cb9bc50))

## [1.5.1](https://github.com/patrickcate/vue-uswds/compare/v1.5.0...v1.5.1) (2023-12-17)


### Bug Fixes

* **UsaDatePickerCalendar:** set correct highlighted date when clicked ([b32620f](https://github.com/patrickcate/vue-uswds/commit/b32620fc052e111c4e9ad7eb959a29f03dcc59d0))

# [1.5.0](https://github.com/patrickcate/vue-uswds/compare/v1.4.1...v1.5.0) (2023-12-13)


### Features

* **UsaSearch:** add `name` prop ([62f8a4b](https://github.com/patrickcate/vue-uswds/commit/62f8a4b543db5e03180ec48f3c2b91821de47cb7))
* **vite:** update to Vite 3 to improve component tree shaking ([55c16db](https://github.com/patrickcate/vue-uswds/commit/55c16dbdf8a1bc8311c2c976a9189cc03ff84baf))

## [1.4.1](https://github.com/patrickcate/vue-uswds/compare/v1.4.0...v1.4.1) (2023-12-06)


### Bug Fixes

* fix svg sprite attribute binding ([cf9f6a7](https://github.com/patrickcate/vue-uswds/commit/cf9f6a7752a6efd015fc0f2137560e9535c84e6f))

# [1.4.0](https://github.com/patrickcate/vue-uswds/compare/v1.3.0...v1.4.0) (2023-12-05)


### Bug Fixes

* correct provide/inject configuration names ([c79fd09](https://github.com/patrickcate/vue-uswds/commit/c79fd09f8bc8d9d70b343eac46fa585b1198dc84))


### Features

* **npm:** add separate `components` export to destructure component imports ([557cd45](https://github.com/patrickcate/vue-uswds/commit/557cd45ae0a07faca431f380f8ad22a845e3c74f))

# [1.3.0](https://github.com/patrickcate/vue-uswds/compare/v1.2.0...v1.3.0) (2023-10-10)


### Bug Fixes

* **UsaComboBox:** `space` selects the current highlighted option ([246ed7b](https://github.com/patrickcate/vue-uswds/commit/246ed7b19cf68709b653c480ca25825339374713))


### Features

* **BaseLink:** spacebar triggers navigation if link is styled as button ([b58fc6f](https://github.com/patrickcate/vue-uswds/commit/b58fc6f369ecea937bc9958c32aca90a13aa227f))
* **UsaCheckbox:** add `disabled` prop and render `aria-disabled` attr ([7b40eab](https://github.com/patrickcate/vue-uswds/commit/7b40eab02b43d70f831468aae857333651f0bc0e))
* **UsaFileInput:** improve status text for screen readers ([15a22ba](https://github.com/patrickcate/vue-uswds/commit/15a22ba9152b5dbfb74a2bdf73ab1b7b7d310b4e))
* **UsaPagination:** add `overflowAriaLabel` prop ([7c2c958](https://github.com/patrickcate/vue-uswds/commit/7c2c95898f88435028f5b42ade9d6b386718d5e0))


### Reverts

* Revert "feat(UsaCheckbox): add `disabled` prop and render `aria-disabled` attr" ([6f07c3d](https://github.com/patrickcate/vue-uswds/commit/6f07c3dfcce9ea7d7d999a967309cc5af29f1d21))

# [1.2.0](https://github.com/patrickcate/vue-uswds/compare/v1.1.0...v1.2.0) (2023-01-08)


### Bug Fixes

* remove extra comma from deprecation message ([de825e0](https://github.com/patrickcate/vue-uswds/commit/de825e0d22fa1a922657cc77ac0f253f0e41db08))


### Features

* **UsaDateInput:** add option to use select element for month ([b46289d](https://github.com/patrickcate/vue-uswds/commit/b46289d0b78b237d46252828e44436470cb55d09)), closes [#475](https://github.com/patrickcate/vue-uswds/issues/475)
* **UsaSelect:** add explicit `group` prop option ([aa08448](https://github.com/patrickcate/vue-uswds/commit/aa084488eb91c192690cd6929ac2ad70ca34b562))

# [1.1.0](https://github.com/patrickcate/vue-uswds/compare/v1.0.1...v1.1.0) (2022-12-31)


### Features

* **UsaCharacterCount:** debounce UsaCharacterCount SR-only message ([3394f0f](https://github.com/patrickcate/vue-uswds/commit/3394f0f3ef787ee6ad79b9c6202e88352f7f7de6)), closes [#528](https://github.com/patrickcate/vue-uswds/issues/528)

## [1.0.1](https://github.com/patrickcate/vue-uswds/compare/v1.0.0...v1.0.1) (2022-11-16)


### Bug Fixes

* **UsaTimePicker:** prevent `usa-time-picker` class from being added which each prop change ([869f53b](https://github.com/patrickcate/vue-uswds/commit/869f53b595e05988da84fdc298d25c2529a96dd9))


### Reverts

* **github-actions:** reverse separating dependabot workflow in separate file ([9d1764a](https://github.com/patrickcate/vue-uswds/commit/9d1764a7473a23eff7877a83b2ed783822352cc9))

# [1.0.0](https://github.com/patrickcate/vue-uswds/compare/v0.10.0...v1.0.0) (2022-11-06)


### Features

* add `button` type to all non-form component buttons ([b2c92ad](https://github.com/patrickcate/vue-uswds/commit/b2c92ada9c177f22582461e29b90181f8d090e3a))
* **npm:** replace uswds v2 package with v3 ([0e7893e](https://github.com/patrickcate/vue-uswds/commit/0e7893e61edeebdc993bf01f7bb67c786cfed401))
* **UsaBanner:** update banner component text and simplify aria markup ([f33bc00](https://github.com/patrickcate/vue-uswds/commit/f33bc00b6af77992edb74eea34722afb41024af8))
* **UsaCharacterCount:** debounce status count updating to prevent aria-live updating too fast ([c9afe91](https://github.com/patrickcate/vue-uswds/commit/c9afe913a648c0eccc11a3664de53c5f63db0d6b))
* **UsaSelect:** rename `UsaDropdown` component to `UsaSelect` ([c486b92](https://github.com/patrickcate/vue-uswds/commit/c486b9258d5276a4875e95b54a6f2a2e3b70de1d))
* **UsaValidation:** allow actual validations to be run with component ([104de29](https://github.com/patrickcate/vue-uswds/commit/104de2948ea57114373e9e4e5051936b8d005ea9)), closes [#439](https://github.com/patrickcate/vue-uswds/issues/439)


### BREAKING CHANGES

* **UsaSelect:** The `UsaDropdown` component has been renamed to `UsaSelect`. You will need to update the component
name anywhere it is used.

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.10.0](https://github.com/patrickcate/vue-uswds/compare/v0.9.1...v0.10.0) (2022-10-31)


### Features

* **UsaDatePicker:** implement `UsaDatePicker` and related components ([090be24](https://github.com/patrickcate/vue-uswds/commit/090be249a6df276bfc0e6dcc7617b02e1d9e1d44))
* **UsaDateRangePicker:** implement `UsaDateRangePicker` component ([f768677](https://github.com/patrickcate/vue-uswds/commit/f768677399a65ffe527fd7eb9f6733192aedcb45))
* **UsaFileInput:** implement `UsaFileInput` component ([72bd1b4](https://github.com/patrickcate/vue-uswds/commit/72bd1b456e38f858ab1bd22003bc163edb4d9801)), closes [#26](https://github.com/patrickcate/vue-uswds/issues/26)


### Bug Fixes

* **UsaPaginationArrow:** fix svg icon href binding ([0bbfc4a](https://github.com/patrickcate/vue-uswds/commit/0bbfc4ab95f987a8a07cf9e8d9c02f412bc42dec))
* **UsaTooltip:** fix initial positioning of tooltip ([d840af7](https://github.com/patrickcate/vue-uswds/commit/d840af7921d8cab1b8c1415a2c53cf4518c013f4))

### [0.9.1](https://github.com/patrickcate/vue-uswds/compare/v0.9.0...v0.9.1) (2022-06-20)

## [0.9.0](https://github.com/patrickcate/vue-uswds/compare/v0.8.0...v0.9.0) (2022-06-20)


### Features

* **UsaComboBox:** add support for readonly prop ([0e3ed5a](https://github.com/patrickcate/vue-uswds/commit/0e3ed5a0b09514fc9733039572c2df2130e4d1e8))
* **UsaComboBox:** implement `UsaComboBox` component ([b4d949e](https://github.com/patrickcate/vue-uswds/commit/b4d949ee174fe33f07c27e5169ba9f7f144c06cd)), closes [#97](https://github.com/patrickcate/vue-uswds/issues/97)
* **UsaFooterAddress:** implement `UsaFooterAddress` component ([ab9db2d](https://github.com/patrickcate/vue-uswds/commit/ab9db2d21a195d476c239bcf930e2ac5c682b538)), closes [#32](https://github.com/patrickcate/vue-uswds/issues/32)
* **UsaPasswordMask:** implement `UsaPasswordMask` component ([08f9b80](https://github.com/patrickcate/vue-uswds/commit/08f9b8069ad8129a9bc7056f984fc511ee4d35da)), closes [#36](https://github.com/patrickcate/vue-uswds/issues/36)
* **UsaRange:** allow modalValue to be a string or number ([ed1a966](https://github.com/patrickcate/vue-uswds/commit/ed1a966cffd37788434a296761afbdc0c352dc6f))
* **UsaTimePicker:** implement `UsaTimePicker` component ([626f285](https://github.com/patrickcate/vue-uswds/commit/626f285d33db8b77cf6b380f8fbbbc6b7f7e82f9)), closes [#173](https://github.com/patrickcate/vue-uswds/issues/173)


### Bug Fixes

* **github-actions:** only trigger dependabot automerge step on pull requests ([2d7030d](https://github.com/patrickcate/vue-uswds/commit/2d7030de66b8f54a8fb5c2284a072703ddb0b70b))

## [0.8.0](https://github.com/patrickcate/vue-uswds/compare/v0.7.4...v0.8.0) (2022-05-31)


### Features

* **UsaFooterCollapsibleMenu:** implement `UsaFooterCollapsibleMenu` component ([4c379d3](https://github.com/patrickcate/vue-uswds/commit/4c379d379a674ae93d3418638d0589fdf3f65706))
* **UsaFooterCollapsibleMenuSection:** implement `UsaFooterCollapsibleMenuSection` component ([c31718e](https://github.com/patrickcate/vue-uswds/commit/c31718e303567d2941b4412c6a6a61f04ce2cbc4))
* **UsaFooterMenu:** implement `UsaFooterMenu` component ([23dc8a0](https://github.com/patrickcate/vue-uswds/commit/23dc8a00cbf7d770467bb055cb243402dc177237))
* **UsaFooterNav:** implement `UsaFooterNav` component ([66be9db](https://github.com/patrickcate/vue-uswds/commit/66be9db3ed4683b2724ba424a8978911b4ab0ed9)), closes [#28](https://github.com/patrickcate/vue-uswds/issues/28)
* **UsaIcon:** implement `UsaIcon` component ([ffb9401](https://github.com/patrickcate/vue-uswds/commit/ffb9401a3a5a2692eefa4cb493f61e36f682a4d2)), closes [#174](https://github.com/patrickcate/vue-uswds/issues/174)
* **UsaIconList:** implement `UsaIconList` component ([cafeb54](https://github.com/patrickcate/vue-uswds/commit/cafeb54219ebc837971cf48de17f9330fe0739b6)), closes [#175](https://github.com/patrickcate/vue-uswds/issues/175)
* **UsaIconListItem:** implement `UsaIconListItem` component ([7377534](https://github.com/patrickcate/vue-uswds/commit/7377534023e8886ab6dfaf27ae8107d3193bdef8)), closes [#214](https://github.com/patrickcate/vue-uswds/issues/214)
* **UsaTooltip:** implement `UsaTooltip` component ([678c076](https://github.com/patrickcate/vue-uswds/commit/678c0764eb7fffeecb72bf89f61945b0d84b921f)), closes [#81](https://github.com/patrickcate/vue-uswds/issues/81)
* **useAccordion:** set `multiselectable` default argument value ([86b8ac1](https://github.com/patrickcate/vue-uswds/commit/86b8ac1ccf98c3388f294232a15b879a464184f4))


### Bug Fixes

* **cypress:** replace alias import of global CSS file with relative one ([17d933f](https://github.com/patrickcate/vue-uswds/commit/17d933f2be502f6bb4b5642f2f8297662b3cb68e))
* fix unique id generator function to start with a letter instead of `__` ([2788404](https://github.com/patrickcate/vue-uswds/commit/2788404a89d624b8f7501e7bdeabab8089cc2df1))
* **UsaNavPrimary:** close all open menus with switch to mobile/desktop functionality ([6ecd354](https://github.com/patrickcate/vue-uswds/commit/6ecd354cb5bfcccbe8b0787e9301a229b4841923))

### [0.7.4](https://github.com/patrickcate/vue-uswds/compare/v0.7.3...v0.7.4) (2022-05-10)


### Bug Fixes

* export install function as default so it can be more easily installed ([69e77bd](https://github.com/patrickcate/vue-uswds/commit/69e77bdc762293921aa81be46c4e2e226f795ec7))

### [0.7.3](https://github.com/patrickcate/vue-uswds/compare/v0.7.2...v0.7.3) (2022-05-09)


### Bug Fixes

* **storybook:** move .nojekyll to correct folder for storybook build ([d102457](https://github.com/patrickcate/vue-uswds/commit/d102457d481236a5e93e5c01ca2b0ee1105beb91))

### [0.7.2](https://github.com/patrickcate/vue-uswds/compare/v0.7.1...v0.7.2) (2022-05-09)


### Bug Fixes

* set correct nojekyll filename ([9727ec1](https://github.com/patrickcate/vue-uswds/commit/9727ec1ba1222a4eea79153e39cad57db6b980ed))
* **storybook:** set correct version number for github pages deploy action ([fa9957d](https://github.com/patrickcate/vue-uswds/commit/fa9957db54b8606f23b8ab50b92f16b139f3d95e))

### [0.7.1](https://github.com/patrickcate/vue-uswds/compare/v0.7.0...v0.7.1) (2022-05-08)

## [0.7.0](https://github.com/patrickcate/vue-uswds/compare/v0.6.0...v0.7.0) (2022-05-07)


### Features

* **UsaFooterPrimarySection:** implement `UsaFooterPrimarySection` component ([3bf9c4b](https://github.com/patrickcate/vue-uswds/commit/3bf9c4ba3a0d5fb8cf118ff4aa337830c6206b07)), closes [#33](https://github.com/patrickcate/vue-uswds/issues/33)
* **UsaFooterSecondarySection:** implement `UsaFooterSecondarySection` component ([dfe611d](https://github.com/patrickcate/vue-uswds/commit/dfe611d76672896e5bcf0964eb4e4d62bfdee557)), closes [#34](https://github.com/patrickcate/vue-uswds/issues/34)
* **UsaHero:** remove custom CSS that removes default background image ([54567a9](https://github.com/patrickcate/vue-uswds/commit/54567a96955e2696cbbab4727e11253434d9cb66))
* **UsaPagination:** use `v-show` instead of custom CSS for hiding arrows ([5f8eebd](https://github.com/patrickcate/vue-uswds/commit/5f8eebd27bbc41765741d6ae4339f828ff87c7aa))

## [0.6.0](https://github.com/patrickcate/vue-uswds/compare/v0.5.0...v0.6.0) (2022-04-17)


### Features

* **cypress:** add basic code coverage plugins ([5c4882d](https://github.com/patrickcate/vue-uswds/commit/5c4882dd6bd7c93c46faffe2b83b031e24fdee1f)), closes [#109](https://github.com/patrickcate/vue-uswds/issues/109)
* **UsaFooter:** add support for custom grid prefix for container class ([cc6171d](https://github.com/patrickcate/vue-uswds/commit/cc6171d98f25311dda398c0de9f90dca01ab0c42))
* **UsaFooterLogo:** implement `UsaFooterLogo` component ([432f880](https://github.com/patrickcate/vue-uswds/commit/432f8808cf9340cba2c6909687a40af1c519c81a)), closes [#30](https://github.com/patrickcate/vue-uswds/issues/30)
* **UsaFooterSocialLinks:** add support for custom grid prefix for grid column classes ([6848158](https://github.com/patrickcate/vue-uswds/commit/684815801aac5f113f00eab82221105c463966e9))
* **UsaFooterSocialLinks:** implement `UsaFooterSocialLinks` component ([aa68d9d](https://github.com/patrickcate/vue-uswds/commit/aa68d9de1fb696ee2767bf7cd73bac841f314e79)), closes [#31](https://github.com/patrickcate/vue-uswds/issues/31)
* **UsaGraphicList:** add support for custom grid prefix for container class ([80256e7](https://github.com/patrickcate/vue-uswds/commit/80256e7935e5bbc2858584919cd9fd84de7c0657))
* **UsaNav:** add types for wrap prop ([6f0b162](https://github.com/patrickcate/vue-uswds/commit/6f0b162b0a298a586fbfc204f35523cbb1ee88f0))
* **UsaTableHeaderCell:** implement `UsaTableHeaderCell` component ([56f1ed8](https://github.com/patrickcate/vue-uswds/commit/56f1ed803c848aa558b9175d8132cd1a350a99a1)), closes [#77](https://github.com/patrickcate/vue-uswds/issues/77)
* **UsaTable:** implement `UsaTable` component ([eeb5804](https://github.com/patrickcate/vue-uswds/commit/eeb58047d561cd75e8ba1ca546633deee9322248))
* **UsaTableSortButton:** implement `UsaTableSortButton` component ([658a33e](https://github.com/patrickcate/vue-uswds/commit/658a33ef232a4565b1d27921b12c4ccfb7e97271)), closes [#78](https://github.com/patrickcate/vue-uswds/issues/78)
* **UsaValidation:** implement `UsaValidation`, `UsaChecklist` and `UsaChecklistItem` components ([42393e5](https://github.com/patrickcate/vue-uswds/commit/42393e55d0fbed5758ef7d2a7d64a9a47d74d42d)), closes [#82](https://github.com/patrickcate/vue-uswds/issues/82)


### Bug Fixes

* **BaseLink:** render as `a` tag if to prop is used but goes to external url ([c540ca8](https://github.com/patrickcate/vue-uswds/commit/c540ca81e73c7ebc88af737d140b2486ded533be))
* **storybook:** correct missing provided function and camel case prop names in templates ([8218321](https://github.com/patrickcate/vue-uswds/commit/8218321b82b5e6882e2e517942462588ea075c82))
* **UsaCollectionItem:** fix `heading-tag` prop name in template ([b9476cd](https://github.com/patrickcate/vue-uswds/commit/b9476cdc89e99a205512aefc2c353e9f45172553))

## [0.5.0](https://github.com/patrickcate/vue-uswds/compare/v0.4.0...v0.5.0) (2022-03-14)


### Features

* **UsaHeader:** provide megamenu prop value ([6b0f103](https://github.com/patrickcate/vue-uswds/commit/6b0f1035894b33d3c88d772ecb1161cb1ae6b486))
* **UsaNavbar:** implement `UsaNavbar` component ([5e70f66](https://github.com/patrickcate/vue-uswds/commit/5e70f66f77117e7c0b897a67aac78f3803f46c00)), closes [#155](https://github.com/patrickcate/vue-uswds/issues/155)
* **UsaNavDropdownButton:** implement `UsaNavDropdownButton` component ([31acdb7](https://github.com/patrickcate/vue-uswds/commit/31acdb7762866cb4261ff89ce5455fec37268452))
* **UsaNavDropdown:** implement `UsaNavDropdown` component ([368d537](https://github.com/patrickcate/vue-uswds/commit/368d537974d7f3c7640ead937bf9b32cfb04f433)), closes [#94](https://github.com/patrickcate/vue-uswds/issues/94)
* **UsaNav:** implement `UsaNav` component ([52d72f8](https://github.com/patrickcate/vue-uswds/commit/52d72f80c74bc2f9c1073b04eabf7bbf08604588)), closes [#86](https://github.com/patrickcate/vue-uswds/issues/86)
* **UsaNavPrimary:** implement `UsaNavPrimary` component ([8d16532](https://github.com/patrickcate/vue-uswds/commit/8d16532612ff45c5934315d00cac5e34197771ba)), closes [#87](https://github.com/patrickcate/vue-uswds/issues/87)
* **UsaNavPrimaryItem:** implement `UsaNavPrimaryItem` component ([db5ca2f](https://github.com/patrickcate/vue-uswds/commit/db5ca2f823c4d59a657e993601ee9f7218a7892c)), closes [#93](https://github.com/patrickcate/vue-uswds/issues/93)
* **UsaNavSecondary:** add default slot and fix search slot visibility with extended header ([d2715b8](https://github.com/patrickcate/vue-uswds/commit/d2715b8a1183f84d0d9573cb7cdf1e076a2cd084))
* **UsaNavSubmenu:** implement `UsaNavSubmenu` component ([f8be07b](https://github.com/patrickcate/vue-uswds/commit/f8be07bf925ff4ee52bcc2e2969f3186d66e1c84)), closes [#91](https://github.com/patrickcate/vue-uswds/issues/91)
* **UsaNavSubmenuItem:** implement `UsaNavSubmenuItem` component ([a1a9665](https://github.com/patrickcate/vue-uswds/commit/a1a96650ec0b963ef92ad60585cf390990084e12)), closes [#92](https://github.com/patrickcate/vue-uswds/issues/92)

## [0.4.0](https://github.com/patrickcate/vue-uswds/compare/v0.3.0...v0.4.0) (2022-02-26)


### Features

* convert existing form components to use new `UsaFormGroup` component ([c67a371](https://github.com/patrickcate/vue-uswds/commit/c67a371a8e9e03e0a65557bb4ca282617e5645c4))
* **UsaCharacterCount:** implement `UsaCharacterCount` component ([1ab70a6](https://github.com/patrickcate/vue-uswds/commit/1ab70a69e1765172e534b22b3044fd3ae98e0d40)), closes [#16](https://github.com/patrickcate/vue-uswds/issues/16)
* **UsaDateInput:** implement `UsaDateInput` component ([11084ac](https://github.com/patrickcate/vue-uswds/commit/11084accd607667522380366a88191c6ee64ca7b)), closes [#24](https://github.com/patrickcate/vue-uswds/issues/24)
* **UsaFormGroup:** implement `UsaFormGroup` component ([197e396](https://github.com/patrickcate/vue-uswds/commit/197e39665be95042d48d76a76cbe476567d36de2)), closes [#35](https://github.com/patrickcate/vue-uswds/issues/35)
* **UsaSearch:** implement `UsaSearch` component ([9282bc0](https://github.com/patrickcate/vue-uswds/commit/9282bc03beb4b341ccd317f83296eb81025e6361)), closes [#65](https://github.com/patrickcate/vue-uswds/issues/65)
* **UsaSignUp:** implement `UsaSignUp` component ([8b45829](https://github.com/patrickcate/vue-uswds/commit/8b4582997ea90728c8a031d3083ccf2145705f41)), closes [#29](https://github.com/patrickcate/vue-uswds/issues/29)
* **UsaTextarea:** implement `UsaTextarea` component ([d279ef9](https://github.com/patrickcate/vue-uswds/commit/d279ef9efbbda61a04cf4ba641ed28e4ae50af2b)), closes [#50](https://github.com/patrickcate/vue-uswds/issues/50)
* **UsaTextInput:** add `group` prop to group input elements ([88a44b6](https://github.com/patrickcate/vue-uswds/commit/88a44b620ee82f5047fd5f672db9e22e710e20d9))
* **UsaTextInput:** clicking on prefix/suffix sets input focus ([6ebc3ec](https://github.com/patrickcate/vue-uswds/commit/6ebc3eccc9b021dd114e7b2b2302381fc37955b8))
* **UsaTextInput:** implement `UsaTextInput` component ([5c06270](https://github.com/patrickcate/vue-uswds/commit/5c06270c2abfeb4f4b48bb811c0b58b3206b2de2)), closes [#74](https://github.com/patrickcate/vue-uswds/issues/74)


### Bug Fixes

* move v-bind="$attrs" as for attribute to allow specific overrides ([eb09e4c](https://github.com/patrickcate/vue-uswds/commit/eb09e4c492347a96be8c3655a52a9d26f956ba8b))
* **UsaRange:** set correct generated id prefix name ([c36df75](https://github.com/patrickcate/vue-uswds/commit/c36df75a8fb45330bf80fbb5f205847e1b898e0b))

## [0.3.0](https://github.com/patrickcate/vue-uswds/compare/v0.2.0...v0.3.0) (2022-02-10)


### Features

* **UsaCheckbox:** implement `UsaCheckbox` component ([1ca165b](https://github.com/patrickcate/vue-uswds/commit/1ca165b977a3fda895e2468a716fc67d3e76e705)), closes [#17](https://github.com/patrickcate/vue-uswds/issues/17)
* **UsaDropdown:** implement `UsaDropdown` component ([8289723](https://github.com/patrickcate/vue-uswds/commit/8289723700defa1fa316195b619ffe8eecc10cf4)), closes [#25](https://github.com/patrickcate/vue-uswds/issues/25)
* **UsaFooter:** implement `UsaFooter` component ([a781e46](https://github.com/patrickcate/vue-uswds/commit/a781e464c24cd6f4c3fa8b64e2d5a6521dde8bfc)), closes [#27](https://github.com/patrickcate/vue-uswds/issues/27)
* **UsaHeader:** implement `UsaHeader` component ([b0f9b2c](https://github.com/patrickcate/vue-uswds/commit/b0f9b2cca9024f7fb13d0ee9325486e0d3163fad)), closes [#39](https://github.com/patrickcate/vue-uswds/issues/39)
* **UsaIdentiferMoreInfo:** implement `UsaIdentifierMoreInfo` component ([baae042](https://github.com/patrickcate/vue-uswds/commit/baae042f73083a0d4739afd2f89a1d0aa31b01e9)), closes [#45](https://github.com/patrickcate/vue-uswds/issues/45)
* **UsaIdentifier:** implement `UsaIdentifier` component ([4246671](https://github.com/patrickcate/vue-uswds/commit/42466718d219baace0d5f9584f4751c1b9b018ad)), closes [#43](https://github.com/patrickcate/vue-uswds/issues/43)
* **UsaIdentifierLogo:** implement `UsaIdentifierLogo` component ([84103dc](https://github.com/patrickcate/vue-uswds/commit/84103dc0074baa2ca155c2b5aa485f3e2144df6a))
* **UsaIdentifierMasthead:** implement `UsaIdentifierMasthead` component ([8b43e68](https://github.com/patrickcate/vue-uswds/commit/8b43e68ed9f99e6f8c8b432ad8bbdf5afcbc8a37))
* **UsaIdentifierRequiredLinks:** implement `UsaIdentifierRequiredLinks` component ([eb644ae](https://github.com/patrickcate/vue-uswds/commit/eb644ae0cb1ac3d991be18afd378400dcdcd3265)), closes [#44](https://github.com/patrickcate/vue-uswds/issues/44)
* **UsaNavSecondary:** implement `UsaNavSecondary` component ([7210f7b](https://github.com/patrickcate/vue-uswds/commit/7210f7ba772b1451bb7bccd4261aa020146c27eb)), closes [#88](https://github.com/patrickcate/vue-uswds/issues/88)
* **UsaRadio:** implement `UsaRadio` component ([911e33b](https://github.com/patrickcate/vue-uswds/commit/911e33b9e3b24803c04561aa4ee03afab25a679b)), closes [#63](https://github.com/patrickcate/vue-uswds/issues/63)
* **UsaRange:** implement `UsaRange` component ([11dc0cd](https://github.com/patrickcate/vue-uswds/commit/11dc0cd16c2e04aee0b63f950a2eb522e3cec0ac)), closes [#64](https://github.com/patrickcate/vue-uswds/issues/64)
* **UsaSkipnav:** add default slot content ([6bbc099](https://github.com/patrickcate/vue-uswds/commit/6bbc099969c286d83e84264b7d244188057ca1ed))


### Bug Fixes

* **UsaDropdown:** hint and error message can be displayed at same time ([183548e](https://github.com/patrickcate/vue-uswds/commit/183548ea11c14a64101fb2ea82ebf0afa784bbf1))

## [0.2.0](https://github.com/patrickcate/vue-uswds/compare/v0.1.0...v0.2.0) (2022-01-25)


### Features

* **UsaGraphicList:** implement `UsaGraphicList` component ([635e8cf](https://github.com/patrickcate/vue-uswds/commit/635e8cf7af18a83594fb4b7e3d3ee3f7e6210487)), closes [#37](https://github.com/patrickcate/vue-uswds/issues/37)
* **UsaGraphicListRow:** implement `UsaGraphicListRow` component ([493d4f4](https://github.com/patrickcate/vue-uswds/commit/493d4f4b1686237f113e207ee7e3dca07fb9e30f)), closes [#38](https://github.com/patrickcate/vue-uswds/issues/38)
* **UsaLogo:** implement `UsaLogo` component ([167ea3b](https://github.com/patrickcate/vue-uswds/commit/167ea3b2f4590afec8e9e72ea84114d5e48db509)), closes [#50](https://github.com/patrickcate/vue-uswds/issues/50)
* **UsaModalCloseButton:** implement `UsaModalCloseButton` component ([95ae5bb](https://github.com/patrickcate/vue-uswds/commit/95ae5bb817ad7b2c56cadc3e442d63e506b07907)), closes [#57](https://github.com/patrickcate/vue-uswds/issues/57)
* **UsaModal:** implement `UsaModal` component ([d382ff4](https://github.com/patrickcate/vue-uswds/commit/d382ff42c4996d483609f08dca6ff81f1957b305)), closes [#56](https://github.com/patrickcate/vue-uswds/issues/56)
* **UsaOverlay:** implement `UsaOverlay` component ([74989ed](https://github.com/patrickcate/vue-uswds/commit/74989ed9b602bef1f3a5016c8ce9b188a1a949d8)), closes [#58](https://github.com/patrickcate/vue-uswds/issues/58)
* **UsaSidenav:** implement `UsaSidenav` component ([5e0541b](https://github.com/patrickcate/vue-uswds/commit/5e0541b2df83a1fcee22280bec1ec738911ab95c)), closes [#66](https://github.com/patrickcate/vue-uswds/issues/66)
* **UsaSidenavItem:** implement `UsaSidenavItem` component ([804f4f4](https://github.com/patrickcate/vue-uswds/commit/804f4f4bd86e6fea681d770c5e069ea5763c4c7b)), closes [#66](https://github.com/patrickcate/vue-uswds/issues/66)
* **UsaSidenavSublist:** implement `UsaSidenavSublist` component ([a5cbfb8](https://github.com/patrickcate/vue-uswds/commit/a5cbfb87293e7c03650efe3cb7520285a11a8706)), closes [#66](https://github.com/patrickcate/vue-uswds/issues/66)


### Bug Fixes

* **UsaPagination:** update preview/next slot bound methods to new name ([8a728fe](https://github.com/patrickcate/vue-uswds/commit/8a728fe7a8ae9e8e638a54ae04a7f0a4b820ff16))
* **UsaSidenavItem:** add check that item text is set for link ([a306948](https://github.com/patrickcate/vue-uswds/commit/a30694808248ca502058f1c99dbb3e9ce938773c))

## [0.1.0](https://github.com/patrickcate/vue-uswds/compare/v0.0.0...v0.1.0) (2021-12-21)


### Features

* bind default $attrs to accordion item heading element ([1827902](https://github.com/patrickcate/vue-uswds/commit/182790230a7b3dbe6ae9f2afcab7f09f9635ce90))
* implement `UsaAccordion` and `UsaAccordionItem` components ([e00f2cb](https://github.com/patrickcate/vue-uswds/commit/e00f2cb868fb97c2556f37cb685aea1d1631a7f4)), closes [#6](https://github.com/patrickcate/vue-uswds/issues/6) [#7](https://github.com/patrickcate/vue-uswds/issues/7)
* implement `UsaBanner` and `UsaBannerContent` components ([7b396de](https://github.com/patrickcate/vue-uswds/commit/7b396dea1528f101f707365d837cbbbb1446c229)), closes [#8](https://github.com/patrickcate/vue-uswds/issues/8) [#10](https://github.com/patrickcate/vue-uswds/issues/10)
* implement `UsaButton` component ([f25ab42](https://github.com/patrickcate/vue-uswds/commit/f25ab423f1895a7606adc0385ccc953d90c21bd5)), closes [#14](https://github.com/patrickcate/vue-uswds/issues/14)
* implement `UsaCard` component ([e8faa47](https://github.com/patrickcate/vue-uswds/commit/e8faa47eb74401214ae7fced79fe5a48e8975ff8)), closes [#15](https://github.com/patrickcate/vue-uswds/issues/15)
* implement `UsaCollection` component ([9e48e2e](https://github.com/patrickcate/vue-uswds/commit/9e48e2e08e56adfdbcbbce7d78bcc0d1329cb6fc)), closes [#18](https://github.com/patrickcate/vue-uswds/issues/18)
* implement `UsaCollectionCalendar` component ([a008088](https://github.com/patrickcate/vue-uswds/commit/a008088920c680cd8a2223813f319c722506f979)), closes [#21](https://github.com/patrickcate/vue-uswds/issues/21)
* implement `UsaCollectionHeading` component ([3c9df87](https://github.com/patrickcate/vue-uswds/commit/3c9df87426cb9487c16d4f17c42ee5789dfbb854)), closes [#20](https://github.com/patrickcate/vue-uswds/issues/20)
* implement `UsaCollectionItem` component ([72adb9c](https://github.com/patrickcate/vue-uswds/commit/72adb9c18110d05ee31e525458b48d618d81ffcd)), closes [#19](https://github.com/patrickcate/vue-uswds/issues/19)
* implement `UsaCollectionMeta` component ([19a3c2a](https://github.com/patrickcate/vue-uswds/commit/19a3c2a9c03f099722de96931d8a290a83a61522)), closes [#22](https://github.com/patrickcate/vue-uswds/issues/22)
* implement `UsaCollectionMetaItem` component ([6fdab1a](https://github.com/patrickcate/vue-uswds/commit/6fdab1a655f9a606505a72dd33dbb5778ebee529)), closes [#23](https://github.com/patrickcate/vue-uswds/issues/23)
* implement pagination components ([9ccd915](https://github.com/patrickcate/vue-uswds/commit/9ccd915913760297556a19b5a5fb416134b491c7)), closes [#59](https://github.com/patrickcate/vue-uswds/issues/59) [#60](https://github.com/patrickcate/vue-uswds/issues/60)


### Bug Fixes

* fix location of `meta` slot ([aa7804a](https://github.com/patrickcate/vue-uswds/commit/aa7804aca63c1544ea2bd82681e7ce89e8deb764))

## 0.0.0 (2021-11-22)


### Features

* add 'routerComponentName' to global config ([c8db5ed](https://github.com/patrickcate/vue-uswds/commit/c8db5ed53d4a38837a3755af2ed12f3ccf0277d0))
* add custom Cypress command to access vue mounted test wrapper ([72bab88](https://github.com/patrickcate/vue-uswds/commit/72bab88ddbf1a558774c04648363920a99f1457c))
* add heading slot to `UsaSummaryBox` component ([e0f4097](https://github.com/patrickcate/vue-uswds/commit/e0f40975cd86838f49cb9b2d0c1634d56e7b55b9))
* add heading tag prop to process list that will set the default for child process list items ([c8031fb](https://github.com/patrickcate/vue-uswds/commit/c8031fbe64043d948e0b71470ab0a1c1b42ab35c)), closes [#62](https://github.com/patrickcate/vue-uswds/issues/62)
* add initial plugin functionality with USWDS setting definitions ([ffa2408](https://github.com/patrickcate/vue-uswds/commit/ffa240874c46b1b611ddf3f1924e192d320e2e73)), closes [#99](https://github.com/patrickcate/vue-uswds/issues/99)
* add utility function to check if slot has content ([556dbc6](https://github.com/patrickcate/vue-uswds/commit/556dbc6c0d609a80eda0d2ded60087b335650555))
* add utility function to generate unique ids for aria/id attributes ([e6f19a2](https://github.com/patrickcate/vue-uswds/commit/e6f19a29c15ba9ae93eb8ee2bddfdadb336b48c0)), closes [#98](https://github.com/patrickcate/vue-uswds/issues/98)
* implement `BaseHeading` component ([ee19794](https://github.com/patrickcate/vue-uswds/commit/ee19794fc3b3748abf74d561130841a8982e4c48)), closes [#83](https://github.com/patrickcate/vue-uswds/issues/83)
* implement `BaseLink` component ([365ad6b](https://github.com/patrickcate/vue-uswds/commit/365ad6bdb054fae93567e6be743a91a2d041603f)), closes [#84](https://github.com/patrickcate/vue-uswds/issues/84)
* implement `UsaAlert` component ([ef685b3](https://github.com/patrickcate/vue-uswds/commit/ef685b367503c8ef8b6d368772dcf76cdec68b7a)), closes [#2](https://github.com/patrickcate/vue-uswds/issues/2)
* implement `UsaBreadcrumb` and `UsaBreadcrumbItem` components ([b996f7b](https://github.com/patrickcate/vue-uswds/commit/b996f7b4a2cf60ef020891f185501a4373f80cc1)), closes [#11](https://github.com/patrickcate/vue-uswds/issues/11) [#12](https://github.com/patrickcate/vue-uswds/issues/12)
* implement `UsaButtonGroup` and `UsaButtonGroupItem` components ([28026e0](https://github.com/patrickcate/vue-uswds/commit/28026e05a92fd78b40687cd2861e5da147cdae94)), closes [#13](https://github.com/patrickcate/vue-uswds/issues/13)
* implement `UsaHero` component ([fcf6daf](https://github.com/patrickcate/vue-uswds/commit/fcf6dafd28883d912dacaa5a8bbfdb88db8debd8)), closes [#40](https://github.com/patrickcate/vue-uswds/issues/40)
* implement `UsaHeroCallout` component ([f9ee208](https://github.com/patrickcate/vue-uswds/commit/f9ee2085cbc17bcb6bdeedd57483d4fa497abd47)), closes [#41](https://github.com/patrickcate/vue-uswds/issues/41)
* implement `UsaLabel` component ([c05bbf2](https://github.com/patrickcate/vue-uswds/commit/c05bbf28f60f1b922c7d18b48715a526ed15d05a)), closes [#48](https://github.com/patrickcate/vue-uswds/issues/48)
* implement `UsaLink` component ([4c73a6e](https://github.com/patrickcate/vue-uswds/commit/4c73a6ee544920b11e67c7a887c2e1fcb2939e24)), closes [#49](https://github.com/patrickcate/vue-uswds/issues/49)
* implement `UsaMediaBlock` component ([40caf49](https://github.com/patrickcate/vue-uswds/commit/40caf4934145915d3a9623374b325775cc6252b8)), closes [#51](https://github.com/patrickcate/vue-uswds/issues/51)
* implement `UsaProcessList` component ([af65055](https://github.com/patrickcate/vue-uswds/commit/af65055cf744ccfa8f8deacffa156123f332333d)), closes [#61](https://github.com/patrickcate/vue-uswds/issues/61)
* implement `UsaProcessListItem` component ([301528f](https://github.com/patrickcate/vue-uswds/commit/301528f63539cbeaed9c72bdca7f7087212f71f7))
* implement `UsaSiteAlert` component ([9931fe9](https://github.com/patrickcate/vue-uswds/commit/9931fe9b5eb084f41faa3432c2392ed5ad5b19c7)), closes [#67](https://github.com/patrickcate/vue-uswds/issues/67)
* implement `UsaSkipnav` component ([bbf1bca](https://github.com/patrickcate/vue-uswds/commit/bbf1bcadf2a590c076a63d27ee654e56c14ac2b9)), closes [#68](https://github.com/patrickcate/vue-uswds/issues/68)
* implement `UsaStepIndicator` component ([7837217](https://github.com/patrickcate/vue-uswds/commit/78372173457c8726f4eaf1f068010026838e7c99)), closes [#69](https://github.com/patrickcate/vue-uswds/issues/69)
* implement `UsaStepIndicatorHeader` component ([a97ca6d](https://github.com/patrickcate/vue-uswds/commit/a97ca6d1f243bc5c899c5a2a4d150301826d4b4b)), closes [#71](https://github.com/patrickcate/vue-uswds/issues/71)
* implement `UsaStepIndicatorSegment` component ([13d914c](https://github.com/patrickcate/vue-uswds/commit/13d914c149bd3345ff40995c15b084aa9c1182d8)), closes [#70](https://github.com/patrickcate/vue-uswds/issues/70)
* implement `UsaSummaryBox` component ([83e9d6a](https://github.com/patrickcate/vue-uswds/commit/83e9d6a47932c7682c963855e063d1f9f38109c3)), closes [#72](https://github.com/patrickcate/vue-uswds/issues/72)
* implement `UsaTag` component ([77e4d53](https://github.com/patrickcate/vue-uswds/commit/77e4d534faea860228cb113f2da6788d85d77465)), closes [#1](https://github.com/patrickcate/vue-uswds/issues/1)
