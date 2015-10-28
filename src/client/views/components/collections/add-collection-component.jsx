AddCollectionComponent = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    var collectionNode = React.findDOMNode(this.refs.collection_name);
    var collectionName = collectionNode.value.trim();

    if (!collectionName) {
      return;
    }

    // Disable the input until we get a response from the server
    collectionNode.disabled = "disabled";

    // send request to server
    Meteor.call("addCollection", collectionName, function (error, response) {
      collectionNode.disabled = false;

      if (error) {
        // TODO handle error
        console.log(error);


        return error.message;
      } else {
        collectionNode.value = '';
        collectionNode.focus();
        return true;
      }
    });
  },
  render() {
    return (
      <div className="collection__add">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="input-field col s12">
              <input id="collection-name" type="text" ref="collection_name" className="validate"/>
              <label htmlFor="collection-name">New Collection</label>
            </div>
          </form>
        </div>
      </div>
    );
  }
});