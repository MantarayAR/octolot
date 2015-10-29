DeleteCollectionCommand = function() {
  var handle = function(collectionId, userId) {
    Collections.remove({
      _id: collectionId,
      userId: userId
    });

    // TODO remove items as well
  }

  return {
    handle: handle
  }
}