import AppBase from 'components';

export default class {
  _onChangeToLocal(inField, inEvent) {
    AppBase.$.local = {
      [inField]: inEvent.target.value
    };
  }

  _onChangeToMemory(inField, inEvent) {
    AppBase.$.memory = nx.mix(AppBase.$.memory, {
      [inField]: inEvent.target.value
    });
  }

  _onChangeToState(inField,inEvent){
    this.setState({
      [inField]: inEvent.target.value
    });
  }
}
