Meteor.methods({
  addItem: function(itemTitle, collectionId) {
    check(itemTitle, String);
    check(collectionId, String);

    dispatch(new CheckPlayerIsLoggedInCommand());

    dispatch(new AddItemCommand(), itemTitle, collectionId);
  }
})