DeleteItemComponent = React.createClass({
  handleClick(e) {
    e.preventDefault();
    var itemId = this.props.itemId;

    var modal = [
      '<div id="item_delete_modal" class="modal">',
      '  <div class="modal-content">',
      '    <h4>Delete Item?</h4>',
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
      Meteor.call("deleteItem", itemId, function (error, response) {
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