AddItemComponent = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    var modal        = React.findDOMNode(this.refs.item_add_modal);
    var itemNode     = React.findDOMNode(this.refs.item_name);
    var itemName     = itemNode.value.trim();
    var collectionId = this.props.collectionId;

    if (!itemName) {
      return;
    }

    // Disable the input until we get a response from the server
    itemNode.disabled = "disabled";

    // send request to server
    Meteor.call("addItem", itemName, collectionId, function (error, response) {
      itemNode.disabled = false;

      if (error) {
        if (error.error === "item-already-exists") {
          var modal = [
            '<div id="item_add_modal" class="modal">',
            '  <div class="modal-content">',
            '    <h4>Duplicate Item?</h4>',
            '    <p>',
            '      You already have an item with that name in your collection. Do you want to make a new',
            '      item, merge the items, or cancel?',
            '    </p>',
            '  </div>',
            '  <div class="modal-footer">',
            '    <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>',
            '    <a data-for="merge" href="#!" class="waves-effect waves-blue btn blue lighten-2">Merge</a>',
            '    <a data-for="new" href="#!" class="waves-effect waves-teal btn teal lighten-2">New Item</a>',
            '  </div>',
            '</div>'
          ].join('');

          var $modal = $(modal);

          $('body').append($modal);
          $modal.openModal();

          $modal.find('[data-for=merge]').click(function(e) {
            Meteor.call("mergeItem", itemName, collectionId, function(error, response) {
              if ( error ) {
                // TODO handle error
              } else {
                $modal.closeModal();
                itemNode.value = '';
                itemNode.focus();
              }
            });
          });
          $modal.find('[data-for=new]').click(function(e) {
            Meteor.call("newItem", itemName, collectionId, function(error, response) {
              if ( error ) {
                // TODO handle error
              } else {
                $modal.closeModal();
                itemNode.value = '';
                itemNode.focus();
              }
            });
          });
        }

        return error.message;
      } else {
        itemNode.value = '';
        itemNode.focus();
        return true;
      }
    });
  },
  render() {
    return (
      <div className="item__add">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="input-field col s12">
              <input id="item-name" type="text" ref="item_name" className="validate"/>
              <label htmlFor="item-name">New Item</label>
            </div>
          </form>
        </div>
      </div>
    );
  }
});