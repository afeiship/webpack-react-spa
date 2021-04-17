import '@jswork/next';
import '@jswork/next-axios';
import '@jswork/next-global';
import '@jswork/next-offline-sw';
import '@jswork/next-react-redux';
import '@jswork/next-store';
import '@jswork/next-values';
import '@jswork/next-sets';

// layout
import layout from '@jswork/react-layout-trbla';
import ife from '@jswork/react-if-else';
import rcm from '@jswork/react-condition-manager';
import rsm from '@jswork/react-status-manager';

// service
import $api from '@/services/api';
import $http from '@/services/http';
import $loadable from '@/services/loadable';

// inject - layout|service
nx.$rc = { layout, ife, rcm, rsm };
nx.sets(nx, { $api, $http, $loadable });
