import Config from './config';
import Http from './http';
import httpRestConfig from '@feizheng/http-rest-config';

export default nx.declare({
  statics: {
    init() {
      httpRestConfig(this, Http, Config.APIS);
    },
  },
});
