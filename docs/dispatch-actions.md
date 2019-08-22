# dispatch-actions

## arch
~~~
<!-- Expect -->
['click@mixin:testClick', { name: 'fei' }]
['click@service:testClick', { name: 'fei' }]
['click@self:testClick', { name: 'fei' }]
['mouseenter@service:testClick', { name: 'fei' }]


<!-- MayBe -->
['mouseenter@testClick', { name: 'fei' }]
['mouseenter$testClick', { name: 'fei' }]
~~~
