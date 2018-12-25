import Loadable from 'react-loadable';
import { Loading } from '#';

export default class {
  static load(inCallback) {
    return Loadable({
      loader: inCallback,
      loading: Loading,
      timeout: 30 * 1000
    });
  }
}
