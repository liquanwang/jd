window.onload = function () {
    searchColor();
    timeBack(3600);
    wheelBanner();
}
//头部搜索样式
function searchColor() {
    var jd_wheel = document.querySelector('.jd_wheel');
    var wheelHeight = jd_wheel.offsetHeight;
    //console.log(wheelHeight);
    window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop;
        //console.log(scrollTop);
        var jd_search = document.querySelector('.jd_search');
        var opacity = 0;
        if (scrollTop < wheelHeight) {
            opacity = scrollTop / wheelHeight;
            //console.log(opacity);
            jd_search.style.backgroundColor = " rgba(233,35,34," + opacity + ")";
        }
    }
}
// 倒计时
function timeBack(backTime) {
    var pro_tip_style = document.querySelector('.pro_tip_style');
    //console.log(pro_tip_style);
    var span = pro_tip_style.querySelectorAll('span');
    //console.log(span);
    // 设置倒计时 时间 秒单位
    //var backTime = 1115;
    var timeId = setInterval(function () {
        backTime--;
        if (backTime == 0) {
            clearInterval(timeId);
            return;
        }
        // 转化为时分秒
        var hour = Math.floor(backTime / 3600);
        var minute = Math.floor(backTime % 3600 / 60);
        var second = Math.floor(backTime % 60);
        //console.log(hour+' '+minute+' '+second);
        span[0].innerHTML = Math.floor(hour / 10);
        span[1].innerHTML = Math.floor(hour % 10);
        span[3].innerHTML = Math.floor(minute / 10);
        span[4].innerHTML = Math.floor(minute % 10);
        span[6].innerHTML = Math.floor(second / 10);
        span[7].innerHTML = Math.floor(second % 10);
    }, 1000);

}
//轮播图
function wheelBanner() {
    var jd_wheel = document.querySelector('.jd_wheel');
    var jd_banner = document.querySelector('.jd_banner');
    var firstLi = jd_banner.querySelector('li:first-of-type');
    var lastLi = jd_banner.querySelector('li:last-of-type');
    // 把第一张图克隆岛最后一张后面
    jd_banner.appendChild(firstLi.cloneNode(true));
    // 把最后一张图克隆到第一张前面
    jd_banner.insertBefore(lastLi.cloneNode(true), jd_banner.firstChild);
    // 设置样式
    var list = jd_banner.querySelectorAll('li');
    var count = list.length;
    var wheelWidth = jd_wheel.offsetWidth;
    jd_banner.style.width = count * wheelWidth + "px";

    //设置每个li 的宽度
    for (var i = 0; i < list.length; i++) {
        list[i].style.width = wheelWidth + 'px';
    }
    // li 的初始索引值为1
    var index = 1;
    jd_banner.style.left = -wheelWidth + 'px';
    //console.log(wheelWidth);
    // 屏幕大小改变时候重新计算偏移
    window.onresize = function () {
        wheelWidth = jd_wheel.offsetWidth;
        jd_banner.style.width = count * wheelWidth + "px";
        //设置每个li 的宽度
        for (var i = 0; i < list.length; i++) {
            list[i].style.width = wheelWidth + 'px';
        }
        jd_banner.style.left = -index * wheelWidth + 'px';
    }
    var timeId = setInterval(function () {
        index++;
        jd_banner.style.left = (-index * wheelWidth) + 'px';
        jd_banner.style.transition = 'left 1s';
        //console.log(index);
        setTimeout(function () {
            if (index == count - 1) {
                index = 1;
                jd_banner.style.transition = 'nome';
                jd_banner.style.left = (-index * wheelWidth) + 'px'
            }
        }, 1000);
    }, 2000);
    // 手指滑动轮播
    var startX,moveX, phaseX;
    jd_banner.addEventListener('touchstart', function (e) {
        clearInterval(timeId);
        startX = e.targetTouches[0].clientX;
        //startY = e.targetTouches[0].clientY;
        //console.log(startX);
    });
    jd_banner.addEventListener('touchmove',function(e) {
        moveX = e.targetTouches[0].clientX;
        //moveY = e.targetTouches[0].clientY;
        phaseX = moveX - startX;
        jd_banner.style.transition = 'nome';
       jd_banner.style.left = (-index*wheelWidth + phaseX) +'px';
    });
    //jd_banner.addEventListener('touchend',function(e) {
    //    timeId();
    //});
}