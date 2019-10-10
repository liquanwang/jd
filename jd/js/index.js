window.onload = function () {
 searchColor();
 timeBack(3600);

}
//头部搜索样式
function searchColor() {
    var jd_wheel = document.querySelector('.jd_wheel');
    var wheelHeight = jd_wheel.offsetHeight;
    window.onscroll = function() {
        var scrollTop = document.documentElement.scrollTop;
        var jd_search = document.querySelector('.jd_search');
        var opacity = 0;
        if (scrollTop < wheelHeight) {
            opacity = scrollTop/wheelHeight;
            jd_search.style.backgroundColor = " rgba(233,35,34,"+opacity+")";
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
    var timeId = setInterval(function() {
        backTime--;
        if(backTime ==0) {
            clearInterval(timeId);
            return;
        }
        // 转化为时分秒
        var hour = Math.floor(backTime/3600);
        var minute = Math.floor(backTime%3600/60);
        var second = Math.floor(backTime%60);
        //console.log(hour+' '+minute+' '+second);
        span[0].innerHTML = Math.floor(hour/10);
        span[1].innerHTML = Math.floor(hour%10);
        span[3].innerHTML = Math.floor(minute/10);
        span[4].innerHTML = Math.floor(minute%10);
        span[6].innerHTML = Math.floor(second/10);
        span[7].innerHTML = Math.floor(second%10);
    },1000);

}