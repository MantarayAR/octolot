ListItemsComponent = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var collectionId = this.props.collectionId;
    var loaded = Meteor.subscribe("items", collectionId);

    return {
      isLoading: ! loaded.ready(),
      items: Items.find({}, { sort: { createdAt: 1 }}).fetch()
    };
  },
  render() {
    if (this.data.isLoading) {
      return <AppLoadingComponent noText={true} />
    }

    return (
      <div className="item__list">
        {this.data.items.map(function(item, i){
          return <ItemItemComponent item={item} key={i} />;
        })}
        <AddItemComponent collectionId={this.props.collectionId} />
      </div>
    );
  }
});
