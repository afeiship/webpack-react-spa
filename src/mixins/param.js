export default class {
  get params() {
    const { history } = nx.$memory;
    return nx.get(history, 'location.state');
  }
}
