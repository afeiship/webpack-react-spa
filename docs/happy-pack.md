# happy pack


~~~
Time: 1040ms
Time: 5631ms
✨  Done in 11.35s.
~~~


## use happy pack
~~~
✨  Done in 9.04s.
~~~

```js
// use happ pack
loaders.happyPack({
  include: [
    resolve(__dirname, '../src'),
    resolve(__dirname, '../node_modules/mixin-decorator'),
    resolve(__dirname, '../node_modules/service-decorator')
  ]
}),

// add happy pack plugin
plugins.happyPack();
```
