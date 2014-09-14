APP.directive("infinite", function() {
  return {
    scope: {
      callback: '&infiniteCallback'
    },
    link: function(scope, el, attrs) {
      var raw = el.get()[0];

      el.bind('scroll', function() {
        // We need to scroll when we are scrolled up to a certain point
        var scrollWhen = (raw.scrollHeight - raw.offsetHeight) * .75;

        if (el.scrollTop() >= scrollWhen) {
          scope.$apply(scope.callback);
        }
      });
    }
  };
});
