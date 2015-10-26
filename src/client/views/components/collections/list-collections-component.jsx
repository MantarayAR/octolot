ListCollectionsComponent = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var loaded = Meteor.subscribe("collections");

    return {
      isLoading: ! loaded.ready(),
      collections: Collections.find({}, { sort: { createdAt: 1 }}).fetch()
    };
  },
  render() {
    if (this.data.isLoading) {
      return <AppLoadingComponent noText={true} />
    }

    return (
      <div className="collection__list">
        {this.data.collections.map(function(collection, i){
          return <ItemCollectionComponent collection={collection} key={i} />;
        })}
        <AddCollectionComponent />
      </div>
    );
  }
});
