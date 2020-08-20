$(function() {
  if (location.search) {
    $.get(location.search.replace("?", ""), function(e) {
      var e = e.replace(/\/static\//g, "https://www.instagram.com/static/");
      var e = e.replace(/\/data\//g, "https://www.instagram.com/data/");
      var e = e.replace(/async/g, "");
      $("body").html(e);
      parent.d();
    }).fail(function() {
      parent.f();
    })
  }

})
