import '@jswork/next';
import '@jswork/next-axios';
import '@jswork/next-global';
import '@jswork/next-offline-sw';
import '@jswork/next-react-redux';
import '@jswork/next-store';
import '@jswork/next-values';

import ReactLayoutTrbla from '@jswork/react-layout-trbla';
import ReactIfElse from '@jswork/react-if-else';
import RCM from '@jswork/react-condition-manager';
import RSM from '@jswork/react-status-manager';
import $api from '@/services/api';

nx.$api = $api;
nx.$rc = {
  layout: ReactLayoutTrbla,
  ife: ReactIfElse,
  rcm: RCM,
  rsm: RSM,
};
