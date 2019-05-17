# The official Chain React App for #ChainReact2019

- React Native app utilizing [Ignite CLI](https://github.com/infinitered/ignite) and the [Ignite Bowser](https://github.com/infinitered/ignite-bowser) boilerplate

## :arrow_up: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Run the setup script: `./bin/setup`

## :arrow_forward: How to Run App

1.  cd to the repo
2.  Run Build for either OS

- for iOS
  - run `react-native run-ios`
- for Android
  - run `react-native run-android`

## :no_entry_sign: TSLint Compliant

This project adheres to TSLint and Prettier. We suggest you enable linting to keep your project compliant during development. You can lint the project by running `yarn lint`.

**To Lint on Commit**

This is implemented using [husky](https://github.com/typicode/husky). There is no additional setup needed.

**Bypass Lint**

If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command.

**Understanding Linting Errors**

The linting rules are from tslint-config-prettier. [Regular TS errors can be found with descriptions here](https://palantir.github.io/tslint/rules/).
