EditItemComponent = React.createClass({
  handleClick(e) {
    e.preventDefault();
    var itemId             = this.props.item._id;
    var currentTitle       = this.props.item.title;
    var currentDescription = this.props.item.description || '';
    var currentCount       = this.props.item.count;

    var modal = [
      '<div id="item_edit_modal" class="modal modal-fixed-footer">',
      '  <div class="modal-content row">',
      '    <h4>Edit Collection Name</h4>',
      '    <div class="input-field col s12">',
      '      <input id="title-item" type="text" name="item-name" value="' + currentTitle + '">',
      '      <label for="title-item">Title</label>',
      '    </div>',
      '    <div class="input-field col s12">',
      '      <textarea id="description-item" name="item-description" class="materialize-textarea">' + currentDescription + '</textarea>',
      '      <label for="description-item">Description</label>',
      '    </div>',
      '    <div class="input-field col s12">',
      '      <input id="count-item" name="item-count" type="number" value="' + currentCount + '" min="1">',
      '      <label for="count-item">Count</label>',
      '    </div>',
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
    $modal.find('input[name=item-name]').focus();

    $modal.find('[data-for=save]').click(function(e) {
      var newTitle       = $modal.find('input[name=item-name]').val();
      var newDescription = $modal.find('textarea[name=item-description]').val();
      var newCount       = $modal.find('input[name=item-count]').val();

      Meteor.call("editItem", itemId, newTitle, newDescription, newCount, function (error, response) {
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