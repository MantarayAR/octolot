DeleteItemCommand = function() {
  var handle = function(itemId, userId) {
    var item = Items.findOne({
      _id: itemId
    });

    if (item) {
      var collectionId = item.collectionId;

      var collection = Collections.findOne({
        _id: collectionId,
        userId: userId
      });

      if (collection) {
        Items.remove({
          _id: itemId
        });
      } else {
        throw new Meteor.Error("item-not-found", "Looks like you do not have access to that item");  
      }
    } else {
      throw new Meteor.Error("item-not-found", "Looks like you do not have access to that item");
    }

    
  }

  return {
    handle: handle
  }
}