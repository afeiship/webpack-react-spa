import Config from './config';
import Http from './http';
import httpCurdConfig from 'http-rest-config';

export default nx.declare({
  statics: {
    init() {
      httpCurdConfig(this, Http, Config.APIS);
    }
  }
});
