AddItemComponent = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
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
        // TODO handle error

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