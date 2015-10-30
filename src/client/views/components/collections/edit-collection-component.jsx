EditCollectionComponent = React.createClass({
  handleClick(e) {
    e.preventDefault();
    var collectionId = this.props.collection._id;
    var currentTitle = this.props.collection.title;

    var modal = [
      '<div id="collection_edit_modal" class="modal modal-fixed-footer">',
      '  <div class="modal-content">',
      '    <h4>Edit Collection Name</h4>',
      '    <p>',
      '      <input type="text" name="collection-name" value="' + currentTitle + '">',
      '    </p>',
      '  </div>',
      '  <div class="modal-footer">',
      '    <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Close</a>',
      '    <a data-for="save" href="#!" class="waves-effect waves-teal btn teal lighten-2">Save</a>',
      '  </div>',
      '</div>'
    ].join('');

    var $modal = $(modal);

    $('body').append($modal);
    $modal.openModal();
    $modal.find('input[name=collection-name]').focus();

    $modal.find('[data-for=save]').click(function(e) {
      var newTitle = $modal.find('input[name=collection-name]').val();
      Meteor.call("editCollection", collectionId, newTitle, function (error, response) {
        if ( error ) {
          // TODO handle error
        } else {
          $modal.closeModal();
        }
      });
    });
  },
  render() {
    return (
      <a className="waves-effect waves-light btn" onClick={this.handleClick}><i className="material-icons left">edit</i> Edit</a>
    );
  }
});