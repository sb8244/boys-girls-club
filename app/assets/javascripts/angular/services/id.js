APP.service('ID', function($cookieStore) {
  var guid = (function() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return function() {
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    };
  })();

  return function() {
    if (!$cookieStore.get('id')) {
      $cookieStore.put('id', guid());
    }

    return $cookieStore.get('id');
  };
});
