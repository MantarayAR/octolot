UpdateCollectionCommand = function() {
  var handle = function(collectionId, newTitle, userId) {
    var collection = Collections.findOne({
      _id: collectionId,
      userId: userId
    });

    if (collection) {
      Collections.update({
        _id: collectionId
      }, {
        $set: {
          title: newTitle
        }
      });
    } else {
      throw new Meteor.Error("collection-not-found", "You don't seem to have access to that collection");
    }
  }

  return {
    handle: handle
  }
}