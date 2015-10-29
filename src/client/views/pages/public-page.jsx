PublicPage = React.createClass({
  render() {
    return (
      <div>
        <PublicComponent collectionKey={this.props.collectionKey} />
      </div>
    );
  }
});