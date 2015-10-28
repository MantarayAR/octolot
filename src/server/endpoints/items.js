Meteor.methods({
  addItem: function(itemTitle, collectionId) {
    check(itemTitle, String);
    check(collectionId, String);

    dispatch(new CheckPlayerIsLoggedInCommand());

    dispatch(new CheckIfItemExistsCommand(), itemTitle, collectionId);

    dispatch(new AddItemCommand(), itemTitle, collectionId);
  },
  /**
   * Called if addItem fails because there is a duplicate item, but
   * the user decides to add it anyway
   */
  newItem: function(itemTitle, collectionId) {
    check(itemTitle, String);
    check(collectionId, String);

    dispatch(new CheckPlayerIsLoggedInCommand());

    dispatch(new AddItemCommand(), itemTitle, collectionId);
  },
  /**
   * Called if addItem fails because there is a duplicate item, and
   * the user wants to merge the items
   */
  mergeItem: function(itemTitle, collectionId) {
    check(itemTitle, String);
    check(collectionId, String);

    dispatch(new CheckPlayerIsLoggedInCommand());

    dispatch(new IncreaseCountOfItemCommand(), itemTitle, collectionId);
  }
});