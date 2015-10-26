ThreePaneComponent = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var showPaneTwo   = false;
    var showPaneThree = false;
    var _collectionId = this.props.collectionId;

    if (_collectionId) {
      showPaneTwo = true;
    }

    return {
      showPaneTwo: showPaneTwo,
      showPaneThree: showPaneThree,
    };
  },
  render() {
    var paneTwoContent      = "";
    var paneTwoInnerClasses = "panes__pane-two__inner";

    if (this.data.showPaneTwo) {
      paneTwoInnerClasses += " show";
    }

    if (this.props.collectionId) {
      paneTwoContent = (
        <CardCollectionComponent collectionId={this.props.collectionId} />
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
          Three
        </div>
      </div>
    );
  }
});