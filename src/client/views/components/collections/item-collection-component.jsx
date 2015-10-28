ItemCollectionComponent = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var collectionId = this.props.collection._id;
    var loaded = Meteor.subscribe("items");

    return {
      isLoading: ! loaded.ready(),
      itemsCount: Items.find({ collectionId: collectionId }).fetch().length
    };
  },
  handleClick(e) {
    e.preventDefault();

    var collectionId = this.props.collection._id;

    $('#collection_card_container').removeClass('show');

    setTimeout(function() {
      FlowRouter.go('/collection/' + collectionId);

      setTimeout(function() {
        $('#collection_card_container').addClass('show');
      }, 200);
    }, 200);
  },
  render() {
    var badge = '';

    if (this.data.itemsCount) {
      if (this.data.itemsCount > 0 ) {
        badge = <span className="badge">{this.data.itemsCount}</span>;
      }
    }

    return (
      <a className="collection__item" href='#!' onClick={this.handleClick}>
        {this.props.collection.title}
        {badge}
      </a>
    );
  }
});