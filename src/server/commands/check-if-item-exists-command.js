CheckIfItemExistsCommand = function() {
  var handle = function(itemTitle, collectionId) {
    var item = Items.findOne({
      title: itemTitle,
      collectionId: collectionId
    });


    if (item) {
      // TODO NOT WORKING
      throw new Meteor.Error("item-already-exists", "\"" + itemTitle + "\" already exists in that collection!");
    }
  };

  return {
    handle: handle
  };
};