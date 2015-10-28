CardItemComponent = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var loaded = Meteor.subscribe("items");
    var itemId = this.props.itemId;

    return {
      isLoading: ! loaded.ready(),
      item: Items.findOne({
        _id: itemId
      })
    };
  },
  render() {
    if (this.data.isLoading) {
      return <AppLoadingComponent noText={true} />
    }

    return (
      <div className="item__card">
        <h2>{this.data.item.title} <span className="badge">{this.data.item.count}</span></h2>
      </div>
    );
  }
});