// 1. 创建一个变量存放索引，表示当前显示的是哪个位置上显示项
var index = 0;
// 2. 找到右侧按钮注册点击事件
$('.arrow-right').click(function(){
	// 2.1 索引+1 
	index++;
	// 2.2 索引限制
	if (index > $('.slider li').length-1) {
		index = 0;
	}
	console.log(index);
	// 2.3 通过索引找到下一张显示（fadeIn）,其他兄弟要隐藏（fadeOut）
	$('.slider li').eq(index)
	.fadeIn(600)
	.siblings()
	.fadeOut(600);

	// 2.4 对应的小点点要切换样式
	$('.control a').eq(index)
	.addClass('active')
	.siblings()
	.removeClass('active');
});

// 3. 找到左侧按钮注册点击事件
$('.arrow-left').click(function(){
	// 3.1 index-1
	index--;
	// 3.2 限制索引（小于0变为7）
	if (index < 0) {
		index = $('.slider li').length-1;
	}
	// 3.3 通过索引找到下一张显示（fadeIn）,其他兄弟要隐藏（fadeOut）
	$('.slider li').eq(index)
	.fadeIn(600)
	.siblings()
	.fadeOut(600);
	// 3.4 对应的小点点要切换样式
	$('.control a').eq(index)
	.addClass('active')
	.siblings()
	.removeClass('active');
});


// 4. 自动轮播
var num; // 定时器的标识
function autoPlay() {
	 num = setInterval(function(){
		$('.arrow-right').click();
	},3000);
}
autoPlay();  // 启动自动轮播

// 5. 鼠标移入到轮播区的时候，停止自动轮播
$('.slider').mouseover(function(){
	clearInterval(num);
});

// 6. 鼠标移出轮播区的时候，开启自动轮播
$('.slider').mouseout(function(){
  autoPlay();
});
