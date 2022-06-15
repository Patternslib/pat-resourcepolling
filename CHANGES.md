# Changelog



## [3.0.0-alpha.0](https://github.com/patternslib/pat-resourcepolling/compare/2.0.0...3.0.0-alpha.0) (2022-06-15)


### Features


* **Build:** Build module federation enabled bundles. ([090ec07](https://github.com/patternslib/pat-resourcepolling/commit/090ec070b2386d2e7e911b974cb16e83a11c9f2c))


### Breaking Changes


* Depend on @patternslib/dev and extend config from there. ([c0dad9c](https://github.com/patternslib/pat-resourcepolling/commit/c0dad9cc1ebb5b1346aa925012f65a30acb85027))

* Extend babel config from @patternslib/dev. ([0b5d098](https://github.com/patternslib/pat-resourcepolling/commit/0b5d098f4f0fd49d4e25189da446dbe09c5efbec))

* Extend commitlint config from @patternslib/dev. ([10d8af5](https://github.com/patternslib/pat-resourcepolling/commit/10d8af5dcc72c2e98fbba2cd6b9558b82eb40d34))

* Extend eslint config from @patternslib/dev. ([b17567c](https://github.com/patternslib/pat-resourcepolling/commit/b17567c66c96fa348353e6e234e3928659e2bdcd))

* Extend jest config from @patternslib/dev. ([23bd694](https://github.com/patternslib/pat-resourcepolling/commit/23bd694082c788c7fabfe1c0919fcbc137789e58))

* Extend Makefile from @patternslib/dev. ([27a358d](https://github.com/patternslib/pat-resourcepolling/commit/27a358db3a096e8b13871443087e5923d3356f65))

* Extend prettier config from @patternslib/dev. ([8e76ec0](https://github.com/patternslib/pat-resourcepolling/commit/8e76ec02b89c5a8e334723389a24b7b4055f269a))

* Extend release-it config from @patternslib/dev. ([d99c991](https://github.com/patternslib/pat-resourcepolling/commit/d99c9910dc2d46fc06292159802f6d65270f6f96))

* Extend webpack config from @patternslib/dev. ([34121ec](https://github.com/patternslib/pat-resourcepolling/commit/34121ec729d7c51a1ad0f4cae05a0b2ab0bbacc7))


### Maintenance


* **build:** Add build:dev script to package.json to create a unminified development build. ([6e95770](https://github.com/patternslib/pat-resourcepolling/commit/6e957702ca42c67bad497f84c906dfa501a779d6))

* **Build:** @patternslib/patternslib as peerDependency. ([05b714d](https://github.com/patternslib/pat-resourcepolling/commit/05b714db584b41d0c1291e960297f2624d75edc8))Move @patternslib/patternslib dependency to peerDependencies and set to any version to avoid version conflicts when this package is a dependency of another Patternslib based package.

* **Build:** Add @patternslib/patternslib also to devDependencies so that we get it installed. ([a19f88c](https://github.com/patternslib/pat-resourcepolling/commit/a19f88c6a70331e5eb08ae2497943079367d1458))

* **Build:** Add keyword "patternslib" to package.json. ([96e08a4](https://github.com/patternslib/pat-resourcepolling/commit/96e08a46b0cb2036dc751d5a760c9ec32cd3c36d))

* **Build:** Explicitly add jquery as a dependency. ([3d97858](https://github.com/patternslib/pat-resourcepolling/commit/3d97858c1f866e4aa25e0b2b3d2ccb61ac2f2fed))

* **Build:** Extend jest.config.js from Patternslib and reuse their setupTests file too. ([245ca7e](https://github.com/patternslib/pat-resourcepolling/commit/245ca7eee41a7128a83a0c7ecac7afe1a5c081a9))

* **Build:** Keep yarn.lock in repository. ([c982f08](https://github.com/patternslib/pat-resourcepolling/commit/c982f08f995559db87f92b704a05f01c3e795642))

* **Build:** Makefile - Allow OTP when publishing to npm, build bundles and publish them on GitHub, add pre-release targets. ([c08e981](https://github.com/patternslib/pat-resourcepolling/commit/c08e981c7ac2281d96b0b5125fe6efd4c7821192))

* **Build:** Remove dependency regenerator-runtime except from test setup. The async/await runtime handling is already built-in in current Babel. ([9812e18](https://github.com/patternslib/pat-resourcepolling/commit/9812e1802a176e95e32d4cc2a4713b2b7a73e16b))

* **Build:** Update GitHub actions setup. ([86ce0f3](https://github.com/patternslib/pat-resourcepolling/commit/86ce0f3a63325db793b48582c289f28453f984e1))

* **Build:** Upgrade and cleanup dependencies. ([28bcba2](https://github.com/patternslib/pat-resourcepolling/commit/28bcba2b1b182dfe84692213e140ec7e1be701e7))

* **webpack:** Configure devServer static directory. ([6053047](https://github.com/patternslib/pat-resourcepolling/commit/605304704fedcba5f64f9bad33f9b397bb893d8f))

## [2.0.0](https://github.com/patternslib/pat-resourcepolling/compare/1.1.0...2.0.0) (2021-11-18)


### Breaking Changes

* Upgrade to Webpack 5. ([b6ca354](https://github.com/patternslib/pat-resourcepolling/commit/b6ca3541cab10bb1f17395f2f8740fa635ed4ae6))



### Maintenance

* **build:** Extend Patternslib release-it config file. ([9e98a4e](https://github.com/patternslib/pat-resourcepolling/commit/9e98a4edffda31badc3e82316b6a20c9b73d6fd1))

* **build:** Release on GitHub releases. ([d8d0e79](https://github.com/patternslib/pat-resourcepolling/commit/d8d0e79ca492e4ba288894d4aec0552c160148e3))

* Upgrade up to minor versions. ([7233fd9](https://github.com/patternslib/pat-resourcepolling/commit/7233fd94a3c3500f50a845fbba01792c113b9a2b))

## [1.1.0](https://github.com/patternslib/pat-resourcepolling/compare/1.0.1...1.1.0) (2021-06-15)


### Maintenance

* Test updates after jest upgrade. ([ca56a5d](https://github.com/patternslib/pat-resourcepolling/commit/ca56a5d6808a6a48e06d80dadcf8ef3b51f83751))
* **dependencies:** Depend on Patternslib v4.4.0. ([e301acf](https://github.com/patternslib/pat-resourcepolling/commit/e301acfab11a7d10fa506637d258090aff013897))
* **dependencies:** Upgrade dependencies on minor+patch level. ([deeb70e](https://github.com/patternslib/pat-resourcepolling/commit/deeb70e97a1f9ba4df08931fcbd5ab272aecff6a))
* **make release-patch:** Add missing patch for patch level releases. ([a09a404](https://github.com/patternslib/pat-resourcepolling/commit/a09a40459fdc2d9e579a056a440d8df972168bbb))
* **Release:** Remove the release-web target. Only Patternslib releases are pushed to Patterns-releases on Github. ([5e22a84](https://github.com/patternslib/pat-resourcepolling/commit/5e22a84bdf8f655d2d67a6fdbe1a088c1943f675))
* **Release process:** Do not include the release commit in the changelog. ([4a75772](https://github.com/patternslib/pat-resourcepolling/commit/4a75772a513fb98048c3d825ff06de48e4d659a1))
* **webpack:** Adapt start script to recent dependency changes. ([444efe4](https://github.com/patternslib/pat-resourcepolling/commit/444efe47dbe0040b3b6107b20ffd9b7dbe348324))
* **webpack:** Simplify webpack. ([78c8ca6](https://github.com/patternslib/pat-resourcepolling/commit/78c8ca650298fc5f7c1281ad3825c4c78a5c8858))

### [1.0.1](https://github.com/patternslib/pat-resourcepolling/compare/1.0.0...1.0.1) (2021-04-20)


### Bug Fixes

* Fix bindung of this. ([13a4bfa](https://github.com/patternslib/pat-resourcepolling/commit/13a4bfa3616d2a85e2b82dbf206984036f23bde2))


### Maintenance

* Add demo page. ([3912e68](https://github.com/patternslib/pat-resourcepolling/commit/3912e685fee7694ac5c9a10dda501e90a68c9612))
* Add missing bundle config. ([5c82f84](https://github.com/patternslib/pat-resourcepolling/commit/5c82f8421b9ba69b9312ff40b0fee9c99da94608))

## 1.0.0 (2021-04-20)


### Maintenance

* Add basic (dummy) test. ([e21394f](https://github.com/patternslib/pat-resourcepolling/commit/e21394f50bfde6ef238c17d3b8684af1f4cbbbd5))
* Prepare release, move repo to github/patternslib ([56c08ac](https://github.com/patternslib/pat-resourcepolling/commit/56c08ac31e7833ccba530e40e2f18aecb89730ae))
* Upgrade to Patternslib v4 final - resourcepolling customizations. ([739153f](https://github.com/patternslib/pat-resourcepolling/commit/739153f788c87113d16afda03c2cb13b2d11c755))
* Upgrade to Patternslib v4 final. ([7e28c83](https://github.com/patternslib/pat-resourcepolling/commit/7e28c8377ac269bec1eebf01c6270e150de45d2d))