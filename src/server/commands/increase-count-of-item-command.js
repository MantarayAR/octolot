IncreaseCountOfItemCommand = function() {
  var handle = function (title, collectionId) {
    return Items.update({
      title: title,
      collectionId: collectionId
    }, {
      $inc : {
        count: 1
      }
    });
  };

  return {
    handle: handle
  };
}