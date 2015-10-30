DeleteCollectionComponent = React.createClass({
  handleClick(e) {
    e.preventDefault();
    var collectionId = this.props.collectionId;

    var modal = [
      '<div id="collection_delete_modal" class="modal modal-fixed-footer">',
      '  <div class="modal-content">',
      '    <h4>Delete Collection?</h4>',
      '  </div>',
      '  <div class="modal-footer">',
      '    <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>',
      '    <a data-for="delete" href="#!" class="waves-effect waves-red btn red lighten-2 black-text">Delete</a>',
      '  </div>',
      '</div>'
    ].join('');

    var $modal = $(modal);

    $('body').append($modal);
    $modal.openModal();

    $modal.find('[data-for=delete]').click(function(e) {
      Meteor.call("deleteCollection", collectionId, function (error, response) {
        if ( error ) {
          // TODO handle error
        } else {
          $modal.closeModal();
          FlowRouter.go('/');
        }
      });
    });
  },
  render() {
    return (
      <a className="waves-effect waves-light btn-flat white-text" onClick={this.handleClick}><i className="material-icons left">delete</i> Delete</a>
    );
  }
});