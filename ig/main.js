$(function() {
  $("#load").on('click', function() {
    $("#get").hide('fast', function() {
      load_r($("#iglk").val());
    });

  });
  $("#get").on('click', function() {
    $("#get").hide('fast', function() {
      g();
    });
  });
});

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
        add($(el).find('img').attr('src'));
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

var add = function(a) {
  var p=new RegExp(".mp4");
  console.log(a);
  if (p.test(a)) {
    $("#r").append(`<div class="card p-2"><video src=${a} class="card-img-top" alt="IG" controls></video><div class="card-body"><h5 class="card-title">點擊圖片下載</h5></div>`);
  } else {
    $("#r").append(`<div class="card p-2"><img class="card-img-top" src=${a} alt="IG"><div class="card-body"><h5 class="card-title">點擊圖片下載</h5></div>`);
  }
}
