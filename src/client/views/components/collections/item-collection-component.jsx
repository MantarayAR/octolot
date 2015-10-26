ItemCollectionComponent = React.createClass({
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
    return (
      <a className="collection__item" href='#!' onClick={this.handleClick}>
        {this.props.collection.title}
      </a>
    );
  }
});