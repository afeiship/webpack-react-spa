import AppBase from 'components';

export default class {

  static push(inUrl, inData) {
    const {history} = AppBase.$.memory;
    history && history.push({
      pathname: inUrl,
      state: inData
    });
  }

  static replace(inUrl, inData) {
    const {history} = AppBase.$.memory;
    history && history.replace({
      pathname: inUrl,
      state: inData
    });
  }

  static back() {
    const {history} = AppBase.$.memory;
    history && history.goBack();
  }

}
