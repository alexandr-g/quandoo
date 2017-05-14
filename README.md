## Overview
This is a candidate task for Quandoo.

It is a simple React app including:
1. Search with autocomplete for pre-defined GitHub users
2. After typing or selecting GitHub user search request will be sent to GitHub API to fetch user info
3. Results page displays user info (such as name, login, location, bio)
4. Unit tests with Jest including snapshot tests
5. Webpack, ESlint, Babel config from scratch
6. Yarn to lock the dependencies

**Home**
<img width="1273" alt="screenshot 2017-05-01 14 43 20" src="https://cloud.githubusercontent.com/assets/9251327/25579941/a672860e-2e7c-11e7-8f41-49e7961ecb2c.png">
**Autocomplete**
<img width="1274" alt="screenshot 2017-05-01 14 45 35" src="https://cloud.githubusercontent.com/assets/9251327/25579971/f6a19dae-2e7c-11e7-956f-7f7fea745b7f.png">
**Results**
<img width="1274" alt="screenshot 2017-05-01 14 47 38" src="https://cloud.githubusercontent.com/assets/9251327/25580006/4469bfd0-2e7d-11e7-9cd0-c78df3cdd7bc.png">

## Usage

**To run the project locally clone the repo:**
```bash
$ git clone https://github.com/alexandr-g/quandoo.git
```

**Install project dependencies:**
```bash
$ yarn
```
or

```bash
$ npm i
```

**Build a valid js bundle:**
```bash
$ npm run build
```

**To start the project in development mode:**
```bash
$ npm run dev
```

Open `http://localhost:8080` in your browser that will serve webpack output with running app

#### Testing

Run the tests using Jest including snapshot tests:

```bash
$ npm t
```

#### Linting

Run the linter by executing:

```bash
$ npm run lint
```

## Project Structure
    ├── __tests__                       - Jest unit tests
    ├── src                             - All the source code
    │   ├── components                  - React UI components
    │   ├── utils                       - API helpers
    │   └── index.js                    - JS entry point
    ├── .babelrc                        - Babel config to transpile ES6
    ├── .eslintrc.json                  - ESLint config
    ├── .gitignore                      - Ignore files for source control (node_modules, test coverage)
    ├── index.html                      - HTML file where React app lives
    ├── package.json                    - List of dependencies, npm scripts, author etc.
    ├── README.md                       - Project Overview and instruction how to run, test, lint
    ├── webpack.config.js               - Webpack build steps/config
    ├── yarn.lock                       - Locked project dependencies
