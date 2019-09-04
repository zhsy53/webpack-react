# basic

```sh
mkdir webpack-react && cd $_
yarn init -y

yarn add -D \
webpack webpack-cli \
eslint \
eslint-plugin-html \
prettier \
eslint-plugin-prettier eslint-config-prettier \
babel-loader @babel/core @babel/preset-env \
babel-eslint \
husky \
lint-staged \
```

# plugin

```sh
yarn add -D \
clean-webpack-plugin \
html-webpack-plugin \
webpack-dev-server \
webpack-merge \
```

# ref

1. [yarn 参考](https://yarnpkg.com/lang/zh-hans/docs/cli/)

2. lint-staged

[ref](https://medium.com/dwarves-foundation/automatically-lint-prettify-your-javascript-project-using-husky-lint-staged-cae8e685bb06)

```json
"scripts": {
  "precommit": "lint-staged"
},
"lint-staged": {
  "src/**/*": [
    "eslint --fix --ext .js",
    "prettier --write",
    "git add"
  ]
},

```

> 在进行 git commit 的时候回触发到 git hook 进而执行 precommit，而 precommit 脚本引用了 lint-staged 配置表明只对 git add 到 stage 区的文件进行扫描，具体 lint-staged 做了三件事情：1. 执行 eslint --fix 操作，进行扫描，若发现工具可修复的问题进行 fix；2. 执行 prettier 脚本，这是对代码进行格式化的，在下面具体来说；3. 上述两项任务完成后对代码重新 add。
> Lint-staged 保证只对当前 add 到 git stage 区的文件进行扫描操作，这样做的原因在于，如果对全工程的文件进行扫描的话，并且之前的前端工程并未注重代码规则的检测的话，很大可能性会出现成百上千的 error，基本上心里是崩溃的。因此，只对当前 add 的文件进行检测，达到及时止损的目的，历史代码可以切到新的分支进行修复后再进行合并。

# TODO: npm install stylelint-config-standard stylelint-config-prettier --save-dev
