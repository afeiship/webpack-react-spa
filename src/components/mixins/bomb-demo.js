export default class {
  @bomb
  'say,walk,jump,fly'(inName) {
    return () => {
      console.log('name:', inName);
    };
  }
}
