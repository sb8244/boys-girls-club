APP.controller("NewStoryController", function($scope, $state, $stateParams, $templateCache, UserStories, Restangular) {
  $scope.title = "Share Your Story";
  $scope.previewSrc = null;
  $scope.valid = false;

  var templateName = "questions/" + $stateParams.type + ".html";
  $scope.story = {
    role: $stateParams.type,
    content: $templateCache.get(templateName)
  };

  $scope.ethnicities = [
    "American Indian or Alaska Native",
    "Asian",
    "Black or African American",
    "Hispanic or Latino",
    "Native Hawaiian or Other Pacific Islander",
    "White"
  ];

  $scope.genders = [
    "Female",
    "Male"
  ];

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

  $scope.$watch('story', function(story) {
    console.log(UserStories.isValid(story));
  });

  $scope.options = {
    height: 300,
    toolbar: [
      ['style', ['bold', 'italic', 'clear']]
    ]
  };

  var imageOverride = false;
  var hasImage = false;

  $scope.submit = function(story) {
    var formData  = getFileFormData();
    _(story).each(function(v, k) {
      formData.append(k, v);
    });

    // Try to prevent image-less stories, but users may opt to not give images
    if (!hasImage) {
      if(!imageOverride) {
        imageOverride = true;
        return new PNotify({
          title: "Are You Sure?",
          text: "This story has no image. Submit again to continue."
        });
      }
    }

    UserStories.add(formData).then(function(story) {
      $state.go("stories.user", {id: story.id});
    });
  };

  function getFileFormData() {
    var file = $("#file_upload").parent().find(":file")[0].files[0];
    var formData = new FormData();
    hasImage = false;
    if (file) {
      hasImage = true;
      formData.append("image", file);
    }
    return formData;
  }
});

