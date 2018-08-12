(function($){
  //此时一定要写函数表达式，而不是申明函数
  $.wheel = function(o){
    var defaults = {
      controlleft : '.arrow-left' ,
      controlright : '.arrow-right',
      changeImg : '.slider li',
      changeDot : '.control a',
      changeDotClass : 'active',
      buttonEvent : 'click',
      dotEvent: 'click',
      leaveEvent : 'mouseout',
      enterEvent : 'mouseover',
      indictionDom : '.slider',
    }
    for(var key in o){
      defaults[key] = o[key];
    }
    //1.点击右侧的按钮实现轮播的功能
    var index = 0;
    $(defaults.controlright).on(defaults.buttonEvent,function(){
      index++;
      if(index > $(defaults.changeImg).length - 1){
        index = 0;
      }
      $(defaults.changeImg).eq(index).fadeIn().siblings().fadeOut();
      $(defaults.changeDot).eq(index).addClass(defaults.changeDotClass).siblings().removeClass(defaults.changeDotClass);
    })
    //2.点击左侧的按钮
    $(defaults.controlleft).on(defaults.buttonEvent,function(){
      index--;
      if(index < 0){
        index = $(defaults.changeImg).length - 1;
      }
      $(defaults.changeImg).eq(index).fadeIn().siblings().fadeOut();
      $(defaults.changeDot).eq(index).addClass(defaults.changeDotClass).siblings().removeClass(defaults.changeDotClass);
    })
    //3.自动轮播
    var num;
    function autoplay(){
      num = setInterval(function(){
       $(defaults.controlright).trigger(defaults.buttonEvent);
      },1000)
    }
    autoplay();
    //4.点击小点
    $(defaults.changeDot).on(defaults.dotEvent,function(){
      var temp = $(this).index();
      $(this).addClass(defaults.changeDotClass).siblings().removeClass(defaults.changeDotClass);
      $(defaults.changeImg).eq(temp).fadeIn().siblings().fadeOut();
      index = temp;
    })
    // 5. 鼠标移入到轮播区的时候，停止自动轮播
    $(defaults.indictionDom).on(defaults.enterEvent,function(){
      clearInterval(num);
    });

    // 6. 鼠标移出轮播区的时候，开启自动轮播
    $(defaults.indictionDom).on(defaults.leaveEvent,function(){
      autoplay();
    });
  }
})(window.jQuery)