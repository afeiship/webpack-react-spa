# webpack-react-spa
> Webpack for spa project.

## get-started:
```bash
git clone https://github.com/afeiship/webpack-react-spa.git
npm install
npm run dev
```

## simple interface:
- nx.\$app
- nx.\$memory
- nx.\$local
- nx.\$session

## deploy:
```bash
## start
cd webpack-react-spa
git pull
./deploy/production/start.sh

## check status:
docker ps

## kill
docker kill a359c42986c6
```

## feature:
- [x] spa
- [x] react 16+
- [x] webpack 4.x
- [x] next-redux-base
- [x] image compress
- [x] fonts/images to folder
- [x] react-router v4
- [x] HtmlWebpack -> webpack favico.ico
- [x] ant-design optmize
- [x] react hmr
- [x] add `serviceworker` for app cache
- [x] use eslint + prettier
- [x] use router config
- [x] add dynamic import + react-imported-component
