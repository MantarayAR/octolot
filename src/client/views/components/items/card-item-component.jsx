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

    var image = '';

    if (this.data.item.imageUrl && this.data.item.imageUrl !== '') {
      image = "<img src='" + this.data.item.imageUrl + "' />";
    }

    return (
      <div className="item__card">
        <h2>{this.data.item.title} <span className="badge">{this.data.item.count}</span></h2>
        <EditItemComponent item={this.data.item} />
        &nbsp;
        <DeleteItemComponent itemId={this.data.item._id} />

        <div className="item__card-image" dangerouslySetInnerHTML={{__html: image}}></div>

        <p>
          {this.data.item.description}
        </p>
      </div>
    );
  }
});