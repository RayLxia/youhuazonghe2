/**
 * Created by Administrator on 2017/1/4.
 */
$(function () {
    $(".nav_left ul li a").on("click",function () {
        $(this).addClass("current").parent().siblings().children("a").removeClass("current");
    })
})
