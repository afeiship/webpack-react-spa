import Config from './config';
import Http from './http';
import httpRestConfig from 'http-rest-config';

export default nx.declare({
  statics: {
    init() {
      httpRestConfig(this, Http, Config.APIS);
    }
  }
});
