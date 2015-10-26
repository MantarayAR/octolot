Meteor.methods({
  'addCollection': function (collectionTitle) {
    check(collectionTitle, String);

    dispatch(new CheckPlayerIsLoggedInCommand());

    dispatch(new AddCollectionCommand(), collectionTitle, Meteor.userId());
  }
});