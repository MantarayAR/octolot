CardCollectionComponent = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var loaded = Meteor.subscribe("collections");
    var collectionId = this.props.collectionId;

    return {
      isLoading: ! loaded.ready(),
      collection: Collections.findOne({
        _id: collectionId
      }, {
        sort: { createdAt: 1 }
      })
    };
  },
  render() {
    if (this.data.isLoading) {
      return <AppLoadingComponent noText={true} />
    }

    return (
      <div className="collection__card">
        <h2>{this.data.collection.title}</h2>

        <ListItemsComponent collectionId={this.props.collectionId} />
      </div>
    );
  }
});