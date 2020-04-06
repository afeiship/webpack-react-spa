import Loadable from 'react-loadable';
import Loading from '@/components/shared/loading';

export default class {
  static load(inCallback) {
    return Loadable({
      loader: inCallback,
      loading: Loading
    });
  }
}
