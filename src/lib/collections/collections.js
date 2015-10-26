Collections = new Mongo.Collection("collections");

/*
 |---------------------------------------------------------
 | Schema
 |---------------------------------------------------------
 |
 | Set the allowable schema for Collections
 | 
 */
CollectionsSchema = new SimpleSchema({
  title: {
    type: String,
    label: "The name of your collection"
  },
  publicKey: {
    type: String,
    label: "The publick key for your collection",
    optional: true
  },
  userId: {
    type: String,
    label: "The id of the owner of the collection"
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  }
});

Collections.attachSchema(CollectionsSchema);

/*
 |---------------------------------------------------------
 | Allowable Actions
 |---------------------------------------------------------
 |
 | Only allow updates through Meteor Methods.
 |
 */
Collections.allow({
  insert: function() {
    return false;
  },
  update: function() {
    return false;
  }
});

/*
 |---------------------------------------------------------
 | Publish Properties
 |---------------------------------------------------------
 |
 | Provide a way for users to access repos with a generated
 | public address.
 |
 | Allow users to access their own collections
 | 
 */
if ( Meteor.isServer ) {
  Meteor.publish('publicCollection', function(publicKey) {
    check(publicKey, String);

    return Collections.find({
      publicKey: publicKey
    });
  });

  Meteor.publish('collections', function() {
    if (! this.userId) {
      return;
    }

    return Collections.find({
      userId: this.userId
    });
  });
}