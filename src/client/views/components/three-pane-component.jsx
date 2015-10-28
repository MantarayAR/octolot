ThreePaneComponent = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var showPaneTwo   = false;
    var showPaneThree = false;
    var _collectionId = this.props.collectionId;
    var _itemId       = this.props.itemId;

    if (_collectionId) {
      showPaneTwo = true;
    }

    if (_itemId) {
      showPaneThree = true;
    }

    return {
      showPaneTwo: showPaneTwo,
      showPaneThree: showPaneThree,
    };
  },
  handleAddClick(e) {
    e.preventDefault();

    $('#collection-name').focus();
  },
  render() {
    var paneTwoContent        = "";
    var paneTwoInnerClasses   = "panes__pane-two__inner";
    var paneThreeContent      = "";
    var paneThreeInnerClasses = "panes__pane-three__inner";

    if (this.data.showPaneTwo) {
      paneTwoInnerClasses += " show";
    }

    if (this.data.showPaneThree) {
      paneThreeInnerClasses += " show";
    }

    if (this.props.collectionId) {
      paneTwoContent = (
        <CardCollectionComponent collectionId={this.props.collectionId} />
      );
    }

    if (this.props.itemId) {
      paneThreeContent = (
        <CardItemComponent itemId={this.props.itemId} />
      );
    }

    return (
      <div className="panes">
        <div className="panes__pane-one">
          <div className="panes__pane-one__inner">
            <h2>Collections</h2>
            <ListCollectionsComponent />
          </div>
        </div>
        <div className="panes__pane-two">
          <div id="collection_card_container" className={paneTwoInnerClasses}>
            {paneTwoContent}
          </div>
        </div>
        <div className="panes__pane-three">
          <div id="item_card_container" className={paneThreeInnerClasses}>
            {paneThreeContent}
          </div>
        </div>
      </div>
    );
  }
});