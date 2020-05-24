# help

## installation
```shell
git clone git@github.com:afeiship/webpack-react-spa.git
npm install
npm run dev
```

## dictionary
- bin: 基本命令
- build: 前端构建脚本
- deploy: doker/k8s  -- ignore
- dist: 最终生成的文件
- docs: 项目中的一些文档
- node_modules: node 的包
- public: 
  - index.ejs(index.html)
  - #root/#app(mountId)
- webpack.config.babel(基于webpack构建)
- src
  - assets: 静态资源
  - components: 前端组件
  - environments
  - mixins: 可用可不用
  - servies(utility)
    - httpRestConfig(this, Http, Config.APIS);
    - apiConfiger(context, HttpProiver, HttpConfigMap)
  - modules
    - mod1
    - mod2

## api
- axios < NxAxios < Http < API;
  - http.get(xxx,data,options);
- @serive(['api'])(class)
  - Object.assign(this, api)

## shared state
```js
// nx.$memory --- >Memory
// nx.$local --- localStorage
// nx.$session --- sessionStorage;

nx.$memory = {
  'home.xx.yyy': res
}

// const { profie } = nx.$memory;
const yyy = nx.get(nx.$memory, 'home.xx.yyy');
```

## umi3(umi2.x)
- typescript
- antd
- es6
- react(16.3/16.3+)
- redux
  - actions
  - reducers
  - dispa
- redux-saga
  - efffets
  - reduxers
  - xx
  - xx
  - xx
- dva
  - redux + redux-saga + x.xxx +xxxx
  - curd/....
- Mock
  - ngroxxx
  - mockjs
- webpack
- .....
- ...

