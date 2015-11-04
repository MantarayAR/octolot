CheckStringIsUrlCommand = function () {
  var handle = function (url, allowEmptyString) {
    allowEmptyString = allowEmptyString || false;

    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

    if (url === '' && allowEmptyString) {
      return true;
    }

    if (!pattern.test(url)) {
      throw new Meteor.Error("not-a-valid-url", "The text you provided does not seem to be a valid URL");
    }
  }

  return {
    handle: handle
  }
}