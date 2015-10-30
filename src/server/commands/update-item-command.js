UpdateItemCommand = function() {
  var handle = function(id, title, description, count) {
    var item = Items.findOne({
      _id: id
    });

    if (item) {
      Items.update({
        _id: id
      }, {
        $set: {
          title: title,
          description: description,
          count: count
        }
      })
    } else {
      throw new Meteor.Error("item-not-found", "It looks like you don't have access to that item.");
    }
  }

  return {
    handle: handle
  }
}