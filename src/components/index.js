/*===default start===*/
export default require('views/app-base').default;
/*===default start===*/


/*===mixins start===*/
export const OnChangeMixin = require('mixins/on-change').default;
/*===mixins end===*/


/*===services start===*/
export const $api = require('services/api').default;
export const $config = require('services/config').default;
export const $app = require('services/app').default;
export const $http = require('services/http').default;
export const $route = require('services/route').default;
export const $store = require('next-store');
export const $date = require('next-date');

/*===services end===*/


/*===components start===*/
export const TestComp = require('views/test-comp').default;
/*===components end===*/

