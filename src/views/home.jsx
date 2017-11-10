export default class extends React.Component {
  render() {
    const { title } = this.props
    return (
      <div>
        <h2>{title}</h2>
        <p>Home page content.</p>
      </div>
    )
  }
}
