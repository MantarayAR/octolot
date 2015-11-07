SearchResultsComponent = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var loaded = Meteor.subscribe("items");

    return {
      isLoading: ! loaded.ready(),
      items: Items.find({
        $or: [{
          title: {
            $regex: ".*" + this.props.term + ".*",
            $options: 'i'
          }
        }, {
          description: {
            $regex: ".*" + this.props.term + ".*",
            $options: 'i'
          }
        }]
      }, {
        sort: {
          createdAt: 1
        }
      }).fetch()
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
      </div>
    );
  }
});
