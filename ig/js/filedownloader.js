//made by kaiyo hugo © 2020 
var download = function(l, m, n) {
  var _m = m || 'GET';
  var _n = n || l;
  $.ajax({
    url: l,
    method: _m,
    xhrFields: {
      responseType: 'blob'
    },
    success: function(data) {
      var u = window.URL.createObjectURL(data);
      $("body").append(`<a href="${u}" download="${_n}" class="dld"></a>`);
      $("a.dld:first")[0].click();
      $("a.dld:first").remove();
      window.URL.revokeObjectURL(u);
    },
    fail: function() {
      return false;
    }
  });
}
