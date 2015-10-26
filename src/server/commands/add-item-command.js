AddItemCommand = function() {
  var handle = function (title, collectionId) {
    return Items.insert({
      title: title,
      collectionId: collectionId
    });
  };

  return {
    handle: handle
  };
}