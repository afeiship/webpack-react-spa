import AppBase from 'components/scripts/index';

export default class {

  onChangeToMemory(inField, inEvent) {
    AppBase.$.memory = {
      [inField]: inEvent.target.value
    };
  }

  onChangeToState(inField, inEvent) {
    this.setState({
      [inField]: inEvent.target.value
    });
  }

  onChangeToLocal(inField, inEvent) {
    AppBase.$.local = {
      [inField]: inEvent.target.value
    };
  }

  onChangeToSession(inField, inEvent) {
    AppBase.$.local = {
      [inField]: inEvent.target.value
    };
  }

}
