export default class extends React.Component {
  render() {
    const {params} = this.props.match;
    return (
      <div>
        <h2>About</h2>
        <p>About page content.</p>
        <pre className="mt10">
          <code>
            {JSON.stringify(params, null, 4)}
          </code>
        </pre>
      </div>
    )
  }
}
