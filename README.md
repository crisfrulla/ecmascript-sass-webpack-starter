# es-sass-webpack-starter

[![npm](https://img.shields.io/npm/l/es-sass-webpack-starter.svg?maxAge=2592000?style=flat-square)](https://github.com/chrisalexander55/es-sass-webpack-starter/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/es-sass-webpack-starter.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/es-sass-webpack-starter)
[![David](https://img.shields.io/david/chrisalexander55/es-sass-webpack-starter.svg?maxAge=2592000?style=flat-square)]()
[![David](https://img.shields.io/david/dev/chrisalexander55/es-sass-webpack-starter.svg?maxAge=2592000?style=flat-square)]()
[![GitHub commits](https://img.shields.io/github/commits-since/chrisalexander55/es-sass-webpack-starter/1.0.0.svg?maxAge=2592000)](https://github.com/chrisalexander55/es-sass-webpack-starter)

## Overview

This is a starter/boilerplate project for web applications requiring ECMAScript (latest), webpack (latest), sass and postcss - all managed in a lightly configured Docker container. This project is particularly helpful for technical craftsmen/craftswomen demanding more control of their frontend tech stack and tired of the growing complexity found in today's Franken-frameworks.

> This repository is inspired and evolved from [micooz/es6-webpack2-starter](https://github.com/micooz/es6-webpack2-starter).

## Features

This project supports the following features:

* Docker Container
* ES with Babel support
* ES linter: ESLint
* Webpack 3 (with dev-server)
* Webpack Loaders: sass-loader, css-loader
* Webpack Plugins: sylelint-scss

## Installation

Windows platform users should install [GitBash](https://git-scm.com/downloads) before continuing.

### Docker

If you haven't already done so, install [Docker](https://www.docker.com/) on you host OS. Windows <=7 users need to install [Docker Toolbox](https://www.docker.com/products/docker-toolbox). If you have any issues, hit-up the Docker forums or SO.

```bash
# hydrate and start container
$ . ./run.sh

# this will dump you on the commandline inside the container; all remaining CLI tasks happen here...
```

### Hydration

```bash
$ git clone []
$ cd []
$ npm i
```

## Configuration

```bash
# run just to ensure env.js was created (it may silently fail)
$ npm run postinstall

# edit env.js per your environment needs

# 1. development
# - edit src/proxy/config.js to hit resources you need 
# - starts up the webpack-dev-server
$ npm start

# 2. production
# outputs into dist directory
$ npm run build
```