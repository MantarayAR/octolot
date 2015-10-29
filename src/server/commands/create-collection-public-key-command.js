CreateCollectionPublicKeyCommand = function() {
  var handle = function(collectionId, userId) {
    var collection = Collections.findOne({
      _id: collectionId,
      userId: userId
    });

    if (collection) {
      var publicKey = collection.publicKey;

      if (publicKey == null) {
        publicKey = dispatch(new GenerateUUIDCommand());

        Collections.update({
          _id: collectionId
        }, {
          $set: {
            publicKey: publicKey
          }
        });  
      }

      return publicKey;
    } else {
      throw new Meteor.Error("collection-not-found", "You don't seem to have access to that collection");
    }
  };

  return {
    handle: handle
  }
};
