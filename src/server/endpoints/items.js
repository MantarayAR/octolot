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
  },
  editItem: function(itemId, itemTitle, itemDescription, itemCount, itemImageUrl) {
    itemCount = parseInt(itemCount, 10);

    check(itemId, String);
    check(itemTitle, String);
    check(itemDescription, String);
    check(itemCount, Number);
    check(itemImageUrl, String);

    dispatch(new CheckPlayerIsLoggedInCommand());
    dispatch(new CheckStringIsUrlCommand(), itemImageUrl, true /* allowEmptyString */);

    dispatch(new UpdateItemCommand(), itemId, itemTitle, itemDescription, itemCount, itemImageUrl);
  },
  'deleteItem': function(itemId) {
    check(itemId, String);

    dispatch(new CheckPlayerIsLoggedInCommand());

    dispatch(new DeleteItemCommand(), itemId, Meteor.userId());
  }
});