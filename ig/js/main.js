$(function() {
  location.hash = "top";
  $("#load").on('click', function() {
    location.hash = "";
    $("#r").html("");
    gt();

  });

});

/*
$("#get").on('click', function() {
  $("#get").hide('fast', function() {
    g();
  });
});
*/

/*
var $e = $("#i").contents();
var load_r = function(l) {
  try {
    var link = new URL(l);
  } catch (e) {
    f();
    return false;
  }
  link.search = "";
  link.pathname = link.pathname + "embed/";
  $("#i").show('fast', function() {
    $("#i").attr('src', "ig.html?" + link.href);
  });
}

var g = function() {
  var $e = $("#i").contents();
  if ($e.find('.EmbedSidecar li').length) {
    $e.find('.EmbedSidecar li').each(function(index, el) {
      setTimeout(function() {
        if ($(el).find('img').length) {
          add($(el).find('img').attr('src'));
        } else {
          add($(el).find('video').attr('src'));
        }
        $e.find('.coreSpriteRightChevron').trigger('click');
      }, index * 50);
    });
    console.log("imgm");
  } else if ($e.find('.EmbeddedMedia img').length) {
    add($e.find('.EmbeddedMedia img').attr('src'));
    console.log("img1");
    if ($e.find('video').length) {
      add($e.find('video').attr('src'));
      console.log("v");
    }
  } else {
    f();
  }

}
*/
var gt = function() {
  iggeter({
    "link": $("#iglk").val()
  }, function(r) {
    if (r) {
      if (r.multi.length) {
        $.each(r.multi, function(index, el) {
          add(el[0], el[1]);
        });
        dl();
      } else if (r.display.length) {
        $.each(r.display, function(index, el) {
          add(el[0], el[1]);
        });
        dl();
      } else {
        console.log("1");
        f();
      }
    } else {
      console.log("2");
      f();
    }
  }, f);
}


var dl = function() {
  location.hash = "r";
  $(".dl").on('click', function(event) {
    event.preventDefault();
    var f = $(this).attr('src');
    download(f, "GET", "IGGETER-" + f.replace(/\?.*/g, ""));
  });
}

var f = function() {
  $("#form").addClass(["border-danger", "animate__shakeX"]);
  setTimeout(function() {
    $("#form").removeClass(["animate__shakeX"]);
  }, 500)
  setTimeout(function() {
    $("#form").removeClass(["border-danger"]);
  }, 1000)
}

var d = function() {
  $(".card-columns").html("");
  $("#get").show('fast');
}

var add = function(a, v) {
  if (v) {
    $("#r").append(`<div class="card p-2"><video src=${a} class="card-img-top dl" alt="IG"></video><div class="card-body"><h5 class="card-title">點擊 <strong>影片</strong> 來下載</h5></div>`);
  } else {
    $("#r").append(`<div class="card p-2"><img class="card-img-top dl" src=${a} alt="IG"><div class="card-body"><h5 class="card-title">點擊 <strong>圖片</strong> 來下載</h5></div>`);
  }
}
