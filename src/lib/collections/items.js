Items = new Mongo.Collection("items");

/*
 |---------------------------------------------------------
 | Schema
 |---------------------------------------------------------
 |
 | Set the allowable schema for Items
 | 
 */
ItemsSchema = new SimpleSchema({
  title: {
    type: String,
    label: "The name of your item"
  },
  description: {
    type: String,
    label: "Short blurb about the item",
    autoValue: function() {
      if (this.isSet) {
        return this.value;
      } else {
        return '';
      }
    }
  },
  collectionId: {
    type: String,
    label: "The id of the collection that owns the item"
  },
  count: {
    type: Number,
    label: "The number of this item the user owns",
    autoValue: function() {
      if (this.isSet) {
        return this.value;
      } else {
        return 1;
      }
    }
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

Items.attachSchema(ItemsSchema);

/*
 |---------------------------------------------------------
 | Allowable Actions
 |---------------------------------------------------------
 |
 | Only allow updates through Meteor Methods.
 |
 */
Items.allow({
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
 |
 | 
 */
if ( Meteor.isServer ) {
  Meteor.publish('publicItems', function(publicKey) {
    check(publicKey, String);

    var collection = Collections.findOne({
      publicKey: publicKey
    });

    return Items.find({
      collectionId: collection._id
    });
  });

  Meteor.publish('collectionItems', function(collectionId) {
    if (! collectionId) {
      return;
    }

    // TODO Gaurentee that only the owning user can see it

    return Items.find({
      collectionId: collectionId
    });
  });

  Meteor.publish('items', function() {
    var collectionIds = Collections.find({}).fetch().map(function(a) {
      return a._id;
    });

    return Items.find({
      collectionId : {
        $in: collectionIds
      }
    });
  });
}
