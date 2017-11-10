import AppBase from 'components/scripts/index';

export default class {

  static push(inUrl, inOptions) {
    const {history} = AppBase.$.memory;
    history && history.push(
      nx.mix({
        pathname: inUrl
      }, inOptions)
    );
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
