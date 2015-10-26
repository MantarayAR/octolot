AddCollectionCommand = function () {
  var handle = function(title, userId) {

    return Collections.insert({
      title: title,
      userId: userId
    });
  }

  return {
    handle: handle
  }
}