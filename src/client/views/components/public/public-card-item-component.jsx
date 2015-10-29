PublicCardItemComponent = React.createClass({
  render() {
    return (
      <div className="item__card">
        <h2>{this.props.item.title} <span className="badge">{this.props.item.count}</span></h2>
      </div>
    );
  }
});