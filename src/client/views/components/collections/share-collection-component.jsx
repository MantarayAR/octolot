ShareCollectionComponent = React.createClass({
  handleClick(e) {
    e.preventDefault();
    var collectionId = this.props.collectionId;

    // send request to server
    Meteor.call("shareCollection", collectionId, function (error, response) {

      if (error) {
        // TODO handle error
      } else {
        var modal = [
          '<div id="item_add_modal" class="modal">',
          '  <div class="modal-content">',
          '    <h4>Share Link</h4>',
          '    <p>',
          '      <input type="text" value="' + response + '">',
          '    </p>',
          '  </div>',
          '  <div class="modal-footer">',
          '    <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>',
          '  </div>',
          '</div>'
        ].join('');

        var $modal = $(modal);

        $('body').append($modal);
        $modal.openModal();
      }
    });
  },
  render() {
    return (
      <a className="waves-effect waves-light btn" onClick={this.handleClick}>Share</a>
    );
  }
});