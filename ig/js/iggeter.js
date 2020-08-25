//made by kaiyo hugo © 2020
var iggeter = function(e, c,ec) {
  try {
    var _e = e;
    if ($()) {
      if (_e.link) {
        var _s;
        try {
          var link = new URL(_e.link);
        } catch (e) {
          return false;
        }
        link.search = "?__a=1";
        $.getJSON(link.href, function(json) {
          _s = json;
          a = {};
          a.display = [];
          a.multi = [];
          a.display.push([_s.graphql.shortcode_media.display_url, false]);
          if (_s.graphql.shortcode_media.is_video) {
            a.display.push([_s.graphql.shortcode_media.video_url, true]);
          }

          try {
            $.each(_s.graphql.shortcode_media.edge_sidecar_to_children.edges, function(index, el) {
              a.multi.push([el.node.display_url, false]);
              if (el.node.is_video) {
                a.multi.push([el.node.video_url, true]);
              }
            }).promise().done(function() {
              c(a);
              return a;
            });
          } catch (e) {
            c(a);
            return a;
          }
        }).fail(function() {
          ec();
          return false;
        });
      } else {
        ec();
        return false;
      }
    } else {
      ec();
      return false;
    }
  } catch (e) {
    ec();
    return false;
  }

}
