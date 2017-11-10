import react from 'koa-react-view';
import path, { dirname } from 'path';
import koa from 'koa';
import register from 'babel-register';
import staticCache from 'koa-static-cache';
import routers from './router/app';

const app = koa();

const viewpath = path.join(__dirname, '../views');
const assetspath = path.join(__dirname, '../assets');

react(app, { views: path });

register({
  presets: ['es2015', 'react'],
  extensions: ['.jsx'],
});

app.use(staticCache(assetspath));

app.use((ctx, next) => {
  ctx.body = this.render('home', {
    title: 'Hello'
  })
})

app.listen(10008);
