// Generated by CoffeeScript 1.6.3
(function() {
  var autoplay, close_popup, current_scene, delayed_goto_next, enter_frame_handler, floors, goto_next, goto_prev, iframes_loaded, init, is_autoplay, is_first_frame, is_next_play, move_scroll_to_position, old_date, open_popup, points, set_floor_height, start, timeStamp, wait_while_all_loaded;

  floors = {
    'floor9': null,
    'floor8': null,
    'floor7': null,
    'floor6': null,
    'floor5': null,
    'floor4': null,
    'floor3': null
  };

  points = {
    'floor9': [0],
    'floor8': [500, 430, 150, 150],
    'floor7': [0, 0, 0, 0],
    'floor6': [0, 0, 0, 0, 0],
    'floor5': [0, 0, 0],
    'floor4': [0, 0, 0, 0],
    'floor3': [770, 530, 530, 245, 77],
    'floor2': [0, 0, 0, 0, 0],
    'floor1': [200, 200, 200, 200, 200, 200, 200, 200, 0, 0],
    'floor0': [0]
  };

  is_autoplay = false;

  $('.floor9 iframe')[0].contentWindow.init9 = function(sym) {
    floors.floor9 = sym;
    return wait_while_all_loaded(floors.floor9);
  };

  $('.floor8 iframe')[0].contentWindow.init8 = function(sym) {
    floors.floor8 = sym;
    return wait_while_all_loaded(floors.floor8);
  };

  $('.floor7 iframe')[0].contentWindow.init7 = function(sym) {
    floors.floor7 = sym;
    return wait_while_all_loaded(floors.floor7);
  };

  $('.floor6 iframe')[0].contentWindow.init6 = function(sym) {
    floors.floor6 = sym;
    return wait_while_all_loaded(floors.floor6);
  };

  $('.floor5 iframe')[0].contentWindow.init5 = function(sym) {
    floors.floor5 = sym;
    return wait_while_all_loaded(floors.floor5);
  };

  $('.floor4 iframe')[0].contentWindow.init4 = function(sym) {
    floors.floor4 = sym;
    return wait_while_all_loaded(floors.floor4);
  };

  $('.floor3 iframe')[0].contentWindow.init3 = function(sym) {
    floors.floor3 = sym;
    return wait_while_all_loaded(floors.floor3);
  };

  $('.floor2 iframe')[0].contentWindow.init2 = function(sym) {
    floors.floor2 = sym;
    return wait_while_all_loaded(floors.floor2);
  };

  $('.floor1 iframe')[0].contentWindow.init1 = function(sym) {
    floors.floor1 = sym;
    console.log('fl1 loaded');
    return wait_while_all_loaded(floors.floor1);
  };

  $('.floor1 iframe')[0].contentWindow.scroll_down = function() {
    var el, gap;
    el = $('.floor1');
    gap = -(el.position().top + el.height()) + $(window).height() + 0;
    $('.content').stop();
    return $('.content').animate({
      marginTop: gap
    });
  };

  $('.floor1 iframe')[0].contentWindow.scroll_up = function() {
    var el, gap;
    el = $('.floor1');
    gap = -(el.position().top + el.height()) + $(window).height() + 200;
    $('.content').stop();
    return $('.content').animate({
      marginTop: gap
    });
  };

  $('.floor0 iframe')[0].contentWindow.init0 = function(sym) {
    floors.floor0 = sym;
    console.log('fl0 loaded');
    return wait_while_all_loaded(floors.floor0);
  };

  iframes_loaded = 0;

  wait_while_all_loaded = function(sym) {
    sym.stop();
    iframes_loaded++;
    if (iframes_loaded === 10) {
      return init();
    }
  };

  timeStamp = new Date().getTime();

  is_next_play = false;

  start = {
    x: 0,
    y: 0
  };

  init = function() {
    var touchMove, touchStart, wheel_event_handler;
    $('.preloader').css('display', 'none');
    enter_frame_handler();
    $('body').on('keydown', function(e) {
      if (e.keyCode === 40) {
        goto_next();
      }
      if (e.keyCode === 38) {
        return goto_prev();
      }
    });
    set_floor_height();
    console.log('init8');
    // touchStart = function(e) {
    //   console.log('touch start');
    //   is_autoplay = false;
    //   start.x = e.originalEvent.touches[0].pageX;
    //   return start.y = e.originalEvent.touches[0].pageY;
    // };
    // touchMove = function(e) {
    //   var offset;
    //   console.log('touch move');
    //   offset = {};
    //   offset.x = start.x - e.originalEvent.touches[0].pageX;
    //   offset.y = start.y - e.originalEvent.touches[0].pageY;
    //   if (offset.y > 0) {
    //     return goto_next();
    //   } else {
    //     return goto_prev();
    //   }
    // };
    // $('iframe').contents().on("touchstart", touchStart);
    // $('iframe').contents().on("touchmove", touchMove);
    // $(window).on("touchstart", touchStart);
    // $(window).on("touchmove", touchMove);
    // wheel_event_handler = function(e) {
    //   var timeNow, wheel;
    //   is_autoplay = false;
    //   wheel = e.originalEvent.wheelDelta;
    //   if (wheel === void 0) {
    //     return;
    //   }
    //   if (Math.abs(wheel) < 100) {
    //     return;
    //   }
    //   console.log(wheel);
    //   timeNow = new Date().getTime();
    //   if (timeNow - timeStamp < 100) {
    //     timeStamp = timeNow;
    //     if (is_next_play && wheel > 0) {
    //       goto_prev();
    //       is_next_play = false;
    //     }
    //     if (!is_next_play && wheel < 0) {
    //       goto_next();
    //       is_next_play = true;
    //     }
    //     return;
    //   } else {
    //     timeStamp = timeNow;
    //     if (wheel < 0) {
    //       goto_next();
    //       is_next_play = true;
    //     }
    //     if (wheel > 0) {
    //       goto_prev();
    //       is_next_play = false;
    //     }
    //   }
    //   return e.preventDefault();
    // };
    $('iframe').contents().on('DOMMouseScroll mousewheel wheel', wheel_event_handler);
    return $(window).on('DOMMouseScroll mousewheel wheel', wheel_event_handler);
  };

  $(window).on('resize', set_floor_height);

  set_floor_height = function() {
    var div_height, floor, _results;
    _results = [];
    for (floor in points) {
      div_height = $(window).height() + points[floor][0] + 30;
      $('.' + floor).height(div_height);
      _results.push($('.' + floor + ' iframe').height(div_height));
    }
    return _results;
  };

  old_date = new Date();

  delayed_goto_next = function() {
    var current_date;
    current_date = new Date();
    if (current_date - old_date > 100) {
      goto_next();
      console.log('next');
    }
    return old_date = new Date();
  };

  enter_frame_handler = function() {
    var el, gap, is_first_frame, _current_label, _label_name, _labels, _position, _stage, _sym;
    _position = 0;
    _sym = floors['floor' + current_scene];
    _stage = _sym.getComposition().getStage();
    _labels = _stage.timelines['Default Timeline'].labels;
    if (_stage) {
      _position = _stage.getPosition();
    }
    _current_label = false;
    for (_label_name in _labels) {
      if (_labels[_label_name] === _position) {
        _current_label = _label_name;
      }
    }
    if (_current_label) {
      el = $('.floor' + current_scene);
      gap = (el.offset().top + el.height()) - $(document).scrollTop() - $(window).height();
      if (is_autoplay) {
        setTimeout(delayed_goto_next, 1000);
      }
    }
    if (_current_label === 'end') {
      console.log('end ' + current_scene);
    }
    if (_current_label === 'end' && !is_first_frame) {
      current_scene--;
      console.log('scene go ' + current_scene);
      _sym = floors['floor' + current_scene];
      _sym.play('start');
      move_scroll_to_position(0);
    }
    if (_current_label === 'start' && !is_first_frame) {
      current_scene++;
      open_popup();
      _sym = floors['floor' + current_scene];
      _sym.stop('end');
      _sym.playReverse();
      move_scroll_to_position(points['floor' + current_scene].length - 1);
    }
    if (_current_label === 'start' && is_first_frame) {
      is_first_frame = false;
    }
    if (_current_label === 'end' && is_first_frame) {
      is_first_frame = false;
    }
    return requestAnimationFrame(enter_frame_handler);
  };

  is_first_frame = false;

  goto_next = function() {
    var next_num, _label_name, _labels, _next_label, _position, _prev_position, _stage, _sym;
    console.log('play next');
    floors['floor' + current_scene].play();
    _sym = floors['floor' + current_scene];
    _stage = _sym.getComposition().getStage();
    _labels = _stage.timelines['Default Timeline'].labels;
    _position = 0;
    if (_stage) {
      _position = _stage.getPosition();
    }
    _prev_position = 0;
    _next_label = 'part0';
    for (_label_name in _labels) {
      if (_position >= _prev_position && _position < _labels[_label_name]) {
        _next_label = _label_name;
      }
      _prev_position = _labels[_label_name];
    }
    next_num = parseInt(_next_label.replace('part', ''));
    if (!isNaN(next_num)) {
      return move_scroll_to_position(next_num);
    }
  };

  goto_prev = function() {
    var next_num, _label_name, _labels, _next_label, _position, _prev_position, _stage, _sym;
    console.log('play prev');
    floors['floor' + current_scene].playReverse();
    _sym = floors['floor' + current_scene];
    _stage = _sym.getComposition().getStage();
    _labels = _stage.timelines['Default Timeline'].labels;
    _position = 0;
    if (_stage) {
      _position = _stage.getPosition();
    }
    _prev_position = 0;
    _next_label = 'start';
    for (_label_name in _labels) {
      if (_position <= _prev_position && _position > _labels[_label_name]) {
        _next_label = _label_name;
      }
      _prev_position = _position;
    }
    next_num = parseInt(_next_label.replace('part', ''));
    if (!isNaN(next_num)) {
      return move_scroll_to_position(next_num);
    }
  };

  move_scroll_to_position = function(_position) {
    var el, gap, position_pix;
    console.log('current_scene ' + current_scene);
    if (_position !== 0) {
      close_popup();
    } else {
      open_popup();
    }
    position_pix = points['floor' + current_scene][_position];
    el = $('.floor' + current_scene);
    gap = -(el.position().top + el.height()) + $(window).height() + position_pix;
    $('.content').stop();
    return $('.content').animate({
      marginTop: gap
    });
  };

  current_scene = 9;

  open_popup = function() {
    $('.read_btn').hide();
    $('.close_btn').show();
    return $('.popup').each(function() {
      var cont, el;
      el = $(this);
      cont = el.find('.popup_content');
      cont.css('height', 'auto');
      cont.css('padding-bottom', '20px');
      el.find('h1').css('padding-bottom', 20);
      return el.css('bottom', parseInt(el.attr('bottom')) + 'px');
    });
  };

  close_popup = function() {
    $('.read_btn').show();
    $('.close_btn').hide();
    return $('.popup').each(function() {
      var cont, el;
      el = $(this);
      cont = el.find('.popup_content');
      if (!el.attr('content-height')) {
        el.attr('content-height', cont.height());
        el.attr('bottom', el.css('bottom').replace('px', ''));
      }
      cont.css('height', 0);
      cont.css('padding-bottom', '0px');
      el.find('h1').css('padding-bottom', 20);
      return el.css('bottom', parseInt(el.attr('bottom')) + parseInt(el.attr('content-height')) + 'px');
    });
  };

  $('.read_btn').on('click', function() {
    return open_popup();
  });

  $('.close_btn').on('click', function() {
    return close_popup();
  });

  close_popup();

  autoplay = function() {
    console.log(is_autoplay);
    if (is_autoplay) {
      return goto_next();
    }
  };

  $('.floor9 iframe')[0].contentWindow.start_autoplay = function() {
    is_autoplay = true;
    return autoplay();
  };

}).call(this);

/*
//@ sourceMappingURL=script.map
*/
