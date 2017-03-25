$(function() {	  
  $(".actions a").click(function(e) {
    e.stopPropagation();
  });
  
   $("a.dialog-action").click(function() {
      $(".dialog-overlay").hide();
  });
  
  $("button.invite-action").click(function(e) {    	
      $(".dialog-overlay").show();
  });

  $(".actions>ul>li:first-child>a").click(function(e) {
    e.stopPropagation();
    var $this = $(this);
    $this.toggleClass('pinned');
    var pin = $this.parents('.actions');    
     $('.pinned-msg',$(pin)).toggle();
  });

  $(".content-wrapper").click(function() {
    var $ele = $(this);
    $ele.hide();
    $ele.prev().show();
  });

  $(".sidebar a").click(function() {
    var className = $(this).attr('class') || 'other';
    $(".menu-wrapper").attr('class', 'menu-wrapper ' + className);
  });

  $(".mail-wrapper>.mail-top").click(function() {
    var $ele = $(this).parent();
    $ele.next().show();
    //$ele.append("<h1>New message</h1>");
    $ele.hide();
    
  });

  $(".menu-toggle-icon input").click(function() {
    $(".menu-wrapper nav").toggleClass("active");
  });

  $('.menu-toggle-icon>input[type=checkbox]').change(function() {
    $(".sidebar").toggleClass("hide").toggleClass("show");
  });

  $('.chk-pin input[type=checkbox]').change(function() {
    if ($(this).is(":checked")) {
      $(".logo").text("Pinned");
    } else {
      $(".logo").text("Inbox");
    }
  });

  $(".link-image").click(function() {
    $(".dropdown").toggle();
  });

  $(".arrow").click(function() {
    $(".collapse", $(this).parents('.msg-recipients')).toggle();
  });

  $(".close").click(function() {
    $(this).parent().toggle();
  }); 

  $(".floating-btn button:not(.invite-action)").click(function() {
    var $parent = $("#msg-box");
    var $clone = $(".template>.cell").clone(true, true);
    var $items = $("#msg-box .cell");
    var index = $items.length + 1;

    if (index === 1) {
      $clone = $clone.css({
        "padding-left": "480px"
      });
    }
    $clone.find('.wrap').css({
      "z-index": index
    });
    $parent.prepend($clone);
  });

  $("#msg-box").on("click", ".close", function(e) {
    e.stopPropagation();
    $(this).parents(".cell").remove();
  });

  $("#msg-box").on("click", ".minimize", function(e) {
    e.stopPropagation();
    var $ele = $(this);
    if ($ele.hasClass('minimized')) {
      $ele.removeClass('minimized');
      $ele.parents(".msg-title-bar").siblings().css({
        "display": "block"
      });
      $ele.parents(".msg-compose").css({
        height: '500px',
        width: '480px'
      });
      $ele.parents(".cell").css({
        width: '480px'
      });
    } else {
      $ele.addClass('minimized');
      $ele.parents(".msg-title-bar").siblings().css({
        "display": "none"
      });
      $ele.parents(".msg-compose").css({
        height: '40px',
        width: '240px'
      });
      $ele.parents(".cell").css({
        width: '240px'
      });
    }
  });

  // $(".search-box input[type='text']").click(function() {
  //   $(".wrapper").hide(50);
  //   $(".menu-wrapper").addClass("search");
  //   $(".search-result").removeClass("search-hide");
  //   $(".logo").text("Back");
  //   $(".sidebar").addClass("hide");
  // });

  $(".back, .logo").on("click", toggleFunc);

  $('#msg-box').on("click", '.msg-title-bar', updateZIndex);

  function toggleFunc() {
    $(".menu-wrapper").removeClass("search");
    $(".search-result").addClass("search-hide");
    $(".search-box input[type='text']").val('');
    $(".wrapper").show();

    if ($(".chk-pin input[type='checkbox']").is(":checked")) {
      $(".logo").text("Pinned");
    } else {
      $(".logo").text("Inbox");
    }
  }

  
  function updateZIndex() {
    var highestIndex = 0;
    var items = $(".msg-wrapper .cell");
    var child = $(this).parents('.cell');
    var index = $(".cell").index(child);

    if (items.length < 1) return;

    items.each(function() {
      var currentIndex = parseInt($(this).find('.wrap').css("zIndex"), 10);
      if (currentIndex > highestIndex) {
        highestIndex = currentIndex;
      }
    });

    changeIndex(items, index, highestIndex);

  }

  function changeIndex(items, fromIndex, highestIndex) {
    for (var i = fromIndex; i >= 0; i--, highestIndex--) {
      var current = $(items[i]).find('.wrap');
      current.css('zIndex', highestIndex);
    }

    for (var i = fromIndex + 1; i < items.length; i++, highestIndex--) {
      var current = $(items[i]).find('.wrap');
      current.css('zIndex', highestIndex);
    }
  }
  
  
  $(".send-btn-stop").click(function(e){
        var rippler = $(this);

        if(rippler.find(".ink").length == 0) {
            rippler.append("<span class='ink'></span>");
        }

        var ink = rippler.find(".ink");

        ink.removeClass("animate");

        if(!ink.height() && !ink.width())
        {
            var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
            ink.css({height: d, width: d});
        }

        var x = e.pageX - rippler.offset().left - ink.width()/2;
        var y = e.pageY - rippler.offset().top - ink.height()/2;

        ink.css({
          top: y+'px',
          left:x+'px'
        }).addClass("animate");
    });

});