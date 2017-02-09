/**
 * Created by Administrator on 2017/1/3.
 */

document.writeln("<style>");
document.writeln(".fixed_bottom {background-color: #a6202e;position: fixed; bottom: 0;left: 0;width: 100%;z-index: 999999;}");
document.writeln(".fixed_bottom .container {position: relative;}");
document.writeln(".fixed_bottom ul {    margin-left: 50px;}");
document.writeln(".fixed_bottom ul li {    display: block;    padding-left: 50px;    float:left;    color: #fff;    padding-top: 18px;    padding-bottom: 17px;    margin-right:60px;}");
document.writeln(".fixed_bottom ul li:nth-child(1) {    background: url(images/tel-2.png)no-repeat center left;}");
document.writeln(".fixed_bottom ul li:nth-child(2) {    background: url(images/qq-2.png)no-repeat center left;}");
document.writeln(".fixed_bottom ul li:nth-child(3) {    background: url(images/form.png)no-repeat center left;}");
document.writeln(".fixed_bottom ul li:nth-child(4) {    background: url(images/position2.png) no-repeat center left;}");

document.writeln(".back_to_top {    position: absolute;    right: 75px;    bottom: 16px;}");
document.writeln(".back_to_top:before,.back_to_top:after {    content: '';    position:absolute;    top: 0;    border: 5px solid;    border-top-width: 10px;    order-bottom-width: 8px;}");
document.writeln(".back_to_top:before {    left: -10px;    border-color: transparent #a6202e#a6202e transparent;}");
document.writeln(".back_to_top:after {    right: -10px;    border-color: transparent transparent #a6202e #a6202e;}");
document.writeln(".back_to_top a {    padding: 31px 23px 25px 26px;    background-color:#fd7249;    color: #fff;    font-size: 13px;    position: relative;}");
document.writeln(".back_to_top a:before,.back_to_top a:after {    content: '';    position:absolute;}");
document.writeln(".back_to_top a:before {    border-style: solid;    border-width: 12px 13px;    border-color: transparent transparent #fff transparent;    top: 0;    left:50%;   margin-left: -12px;}");
document.writeln(".back_to_top a:after {    border-style: solid;    border-width: 13px 50.5px;    border-color: transparent transparent #a6202e transparent;    left: 50%;   margin-left: -50.5px;    bottom: 0;}");
document.writeln(".close_bottom {    display: none;}");
document.writeln(".close_bottom a {    display: inline;    color: #fff;    position:absolute;    right: 0;    top: 0;    font-size: 20px;}");
document.writeln("</style>");

document.writeln("<div class=\"fixed_bottom\" id=\"bb\">");
document.writeln("    <div class=\"container\">");
document.writeln("    <ul class=\"clearfix\">");
document.writeln("    <li>");
document.writeln("    <a href=\"#\">");
document.writeln("    <span>咨询热线</span><br>");
document.writeln("    <span>025-52407966</span>");
document.writeln("    </a>");
document.writeln("    </li>");
document.writeln("    <li>");
document.writeln("    <a href=\"#\">");
document.writeln("    <span>QQ咨询</span><br>");
document.writeln("    <span>151110708</span>");
document.writeln("    </a>");
document.writeln("    </li>");
document.writeln("    <li>");
document.writeln("    <a href=\"#\">");
document.writeln("    <span>网络预约</span><br>");
document.writeln("    <span>方便快捷省心省力</span>");
document.writeln("    </a>");
document.writeln("    </li>");
document.writeln("    <li>");
document.writeln("    <a href=\"#\">");
document.writeln("    <span>来院路线</span><br>");
document.writeln("    <span>交通便捷免费停车</span>");
document.writeln("    </a>");
document.writeln("    </li>");
document.writeln("    </ul>");
document.writeln("    <div class=\"back_to_top\">");
document.writeln("    <a href=\"#\">返回顶部</a>");
document.writeln("    </div>");
document.writeln("    <div class=\"close_bottom\">");
document.writeln("    <a href=\"javascript:;\">x</a>");
document.writeln("    </div>");
document.writeln("    </div>");
document.writeln("    </div>");


$(function () {
    $("#bb").mouseenter(function () {
        $(".close_bottom").css({"display": "block"});
    }).mouseleave(function () {
        $(".close_bottom").css({"display": "none"});
    });
    $(".back_to_top > a").on("click", function () {
        $(window).scrollTop(0);
    });
    $(".close_bottom").on("click",function(){
      $(".fixed_bottom").css({"display":"none"});
    })
})
