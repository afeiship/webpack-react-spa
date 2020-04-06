export default class {
  static push(inUrl, inData) {
    const { history } = nx.$memory;
    history &&
      history.push({
        pathname: inUrl,
        state: inData
      });
  }

  static replace(inUrl, inData) {
    const { history } = nx.$memory;
    history &&
      history.replace({
        pathname: inUrl,
        state: inData
      });
  }

  static to(inKey, inData) {
    this.push(`/modules/${inKey}`, inData);
  }

  static back() {
    const { history } = nx.$memory;
    history && history.goBack();
  }
}
