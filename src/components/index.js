/* ===services start=== */
export const $api = require('services/api').default;
export const $config = require('services/config').default;
export const $http = require('services/http').default;
export const $route = require('services/route').default;
export const $loadable = require('services/loadable').default;
export const $store = require('next-store');

/* ===services end=== */

/* ===components start=== */
export const TestComp = require('views/test-comp').default;
export const Loading = require('views/loading').default;
/* ===components end=== */
