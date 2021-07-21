$(function () {
    $(".sidebar-link").click(function () {
     $(".sidebar-link").removeClass("is-active");
     $(this).addClass("is-active");
    });
   });
   
   $(window)
    .resize(function () {
     if ($(window).width() > 1090) {
      $(".sidebar").removeClass("collapse");
     } else {
      $(".sidebar").addClass("collapse");
     }
    })
    .resize();
   
   const allVideos = document.querySelectorAll(".video");
   
   allVideos.forEach((v) => {
    v.addEventListener("mouseover", () => {
     const video = v.querySelector("video");
     video.play();
    });
    v.addEventListener("mouseleave", () => {
     const video = v.querySelector("video");
     video.pause();
    });
   });
   
   $(function () {
    $(".logo, .logo-expand, .discover").on("click", function (e) {
     $(".main-container").removeClass("show");
     $(".main-container").scrollTop(0);
    });
    $(".trending, .video").on("click", function (e) {
     $(".main-container").addClass("show");
     $(".main-container").scrollTop(0);
     $(".sidebar-link").removeClass("is-active");
     $(".trending").addClass("is-active");
    });
   
    $(".video").click(function () {
     var source = $(this).find("source").attr("src");
     var title = $(this).find(".video-name").text();
     var person = $(this).find(".video-by").text();
     var img = $(this).find(".author-img").attr("src");
     $(".video-stream video").stop();
     $(".video-stream source").attr("src", source);
     $(".video-stream video").load();
     $(".video-p-title").text(title);
     $(".video-p-name").text(person);
     $(".video-detail .author-img").attr("src", img);
    });
   });
   // play on load for gallery view
setTimeout(transition, 1000);

$('.js-trigger-transition').on('click', function(e) {
  e.preventDefault();
  transition();
});

function transition() {
  var tl = new TimelineMax();
  
  tl.to(CSSRulePlugin.getRule('body:before'), 0.2, {cssRule: {top: '50%' }, ease: Power2.easeOut}, 'close')
  .to(CSSRulePlugin.getRule('body:after'), 0.2, {cssRule: {bottom: '50%' }, ease: Power2.easeOut}, 'close')
  .to($('.loader'), 0.2, {opacity: 1})
  .to(CSSRulePlugin.getRule('body:before'), 0.2, {cssRule: {top: '0%' }, ease: Power2.easeOut}, '+=1.5', 'open')
  .to(CSSRulePlugin.getRule('body:after'), 0.2, {cssRule: {bottom: '0%' }, ease: Power2.easeOut}, '-=0.2', 'open')
  .to($('.loader'), 0.2, {opacity: 0}, '-=0.2');
}