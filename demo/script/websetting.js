//圖片輪播
loadjs(['css/flexslider.css','script/lib/jquery.flexslider.js'], function() {
  $(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"});
  });
});

//頂端浮動選單
$(function(){$(window).load(function(){$(window).bind("scroll resize",function(){var o=$(this),t=o.scrollTop();800>t&&$("#top-bar").stop().animate({top:"-65px"}),t>800&&$("#top-bar").stop().animate({top:"0px"})}).scroll()})});

//圖片延遲載入
loadjs('https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js', function() {
    const observer = lozad();
    observer.observe();
});

//wow載入動畫
loadjs('script/lib/wow.min.js', function() {
  new WOW().init();
});

// 另開視窗
function externalLinks() { 
 if (!document.getElementsByTagName) return; 
 var anchors = document.getElementsByTagName("a"); 
 for (var i=0; i<anchors.length; i++) { 
   var anchor = anchors[i]; 
   if (anchor.getAttribute("href") && 
       anchor.getAttribute("rel") == "external") 
     anchor.target = "_blank"; 
 } 
} 
window.onload = externalLinks;