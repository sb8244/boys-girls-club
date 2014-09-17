APP.service('ClubEnrichment', function($sce) {
  var overrides = {
    "11808": {
      twitter: "https://twitter.com/AWorleyBrown",
      facebook: "https://www.facebook.com/bgcma",
      youtube: "http://www.youtube.com/user/boysandgirlsclubsatl",
      url: "http://www.bgcma.org/club/aworley",
      hours: $sce.trustAsHtml("<p><b>Early School Release:</b><br/>" +
      "12:00 pm - 6:00 pm<br/>" +
       "<b>Program Activities:</b><br/>" +
      "2:00 pm - 8:00 pm<br/>" +
      "<b>Holiday/Summer Hours:</b><br/>" +
      "7:30 am - 6:00 pm</p>")
    },
    "11806": {
      facebook: "https://www.facebook.com/bgcma",
      youtube: "http://www.youtube.com/user/boysandgirlsclubsatl",
      url: "http://www.bgcma.org/club/warren"
    },
    "11799": {
      facebook: "https://www.facebook.com/bgcma",
      youtube: "http://www.youtube.com/user/boysandgirlsclubsatl",
      url: "http://www.bgcma.org/club/carver"
    },
    "11800": {
      facebook: "https://www.facebook.com/bgcma",
      youtube: "http://www.youtube.com/user/boysandgirlsclubsatl",
      url: "http://www.bgcma.org/club/lawrenceville"
    },
    "26242": {
      facebook: "https://www.facebook.com/bgcwga",
      youtube: "http://www.youtube.com/channel/UCsZg6Zrn1Mm2i6FsxohwBrQ",
      url: "http://www.bngcwga.org"
    }
  };
  return function(clubs) {
    var map = _.map(clubs, function(club) {
      if (overrides[club.global_id]) {
        club = _.assign(club, overrides[club.global_id]);
      }
      return club;
    });
    console.log(map);
    return map;
  };
});
