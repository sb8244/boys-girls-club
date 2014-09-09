APP.controller("NewStoryController", function($scope, $state, $stateParams, $templateCache, UserStories, Restangular) {
  $scope.title = "Share Your Story";
  $scope.previewSrc = null;

  var templateName = "questions/" + $stateParams.type + ".html";
  $scope.story = { role: $stateParams.type, content: $templateCache.get(templateName) };

  // Take in a file input and set the base64 image preview
  $scope.previewImage = function(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $scope.$apply(function() { // outside of digest loop now
          // Angular doesn't respect background-image data64 in ng-style for some reason, so we
          // have to bind an actual style object to be applied
          $scope.previewSrc = { 'background-image': 'url(' + e.target.result + ')' };
        });
      };
      reader.readAsDataURL(input.files[0]);
    }
  };

  $scope.options = {
    height: 300,
    toolbar: [
      ['style', ['bold', 'italic', 'clear']]
    ]
  };

  $scope.submit = function(story) {
    var formData  = getFileFormData();
    _(story).each(function(v, k) {
      formData.append(k, v);
    });
    UserStories.add(formData).then(function(story) {
      console.log("navigate", story.id);
      $state.go("stories.user", {id: story.id});
    });
  };

  function getFileFormData() {
    var file = $("#file_upload").parent().find(":file")[0].files[0];
    var formData = new FormData();
    formData.append("image", file);
    return formData;
  }
});

