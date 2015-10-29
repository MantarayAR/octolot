PublicComponent = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState: function() {
    return {
      itemKey: null
    }
  },
  getMeteorData() {
    var _collectionKey = this.props.collectionKey;
    var _itemKey       = this.state.itemKey;

    var loaded         = Meteor.subscribe("publicCollection", _collectionKey);
    var itemsLoaded    = Meteor.subscribe("publicItems", _collectionKey);

    var showPaneTwo    = false;
    var collection     = null;
    var items          = null;
    var item           = null;

    collection = Collections.findOne({
      publicKey: _collectionKey
    });

    if (collection) {
      items = Items.find({
        collectionId: collection._id
      }).fetch()
    }

    if (_itemKey) {
      showPaneTwo = true;
      item = Items.findOne({
        _id: _itemKey
      })
    }

    return {
      showPaneTwo: showPaneTwo,
      isLoading: ! loaded.ready() || ! itemsLoaded.ready(),
      collection: collection,
      items: items,
      item: item
    };
  },
  goToItem(e, that) {
    var itemKey = that.props.item._id;

    this.setState({
      itemKey: itemKey
    });
  },
  render() {
    if (this.data.isLoading) {
      return <AppLoadingComponent noText={true} />
    }

    var paneTwoContent        = "";
    var paneTwoInnerClasses   = "panes__pane-two__inner";

    if (this.data.showPaneTwo) {
      paneTwoInnerClasses += " show";
    }

    if (this.data.item) {
      paneTwoContent = (
        <PublicCardItemComponent item={this.data.item} />
      );
    }

    return (
      <div className="panes">
        <div className="panes__pane-one m6">
          <div className="panes__pane-one__inner">
            <PublicCardCollectionComponent collection={this.data.collection} items={this.data.items} goToItem={this.goToItem} />
          </div>
        </div>
        <div className="panes__pane-two m6">
          <div id="item_card_container" className={paneTwoInnerClasses}>
            {paneTwoContent}
          </div>
        </div>
      </div>
    );
  }
});