Meteor.methods({
  'addCollection': function (collectionTitle) {
    check(collectionTitle, String);

    dispatch(new CheckPlayerIsLoggedInCommand());

    dispatch(new AddCollectionCommand(), collectionTitle, Meteor.userId());
  },
  'shareCollection': function(collectionId) {
    check(collectionId, String);

    dispatch(new CheckPlayerIsLoggedInCommand());

    var publicKey = dispatch(new CreateCollectionPublicKeyCommand(), collectionId, Meteor.userId());
    var link      = dispatch(new CreatePublicLinkCommand(), publicKey);

    return link;
  }
});