GenerateUUIDCommand = function() {
  var _s4 = function() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  var handle = function() {
    return _s4() + _s4() + '-' + _s4() + '-' + _s4() + '-' +
      _s4() + '-' + _s4() + _s4() + _s4();
  }

  return {
    handle: handle
  }
}
