CreatePublicLinkCommand = function() {
  var handle = function(publicKey) {
    return Meteor.settings.public.site_url + '/public/' + publicKey;
  }

  return {
    handle: handle
  }
}