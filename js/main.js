var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function($){"use strict";$(window).load(function(){$('.cs-loader').fadeOut(1000);});jQuery(document).ready(function(){jQuery("#menuzord").menuzord({align:"right",indicatorFirstLevel:"<i class='fa fa-angle-down'></i>",indicatorSecondLevel:"<i class='fa fa-angle-right'></i>"});});jQuery("#xplus-menu, #xplus-menu-alt").menuzord({indicatorFirstLevel:"<i class='fa fa-angle-down'></i>",indicatorSecondLevel:"<i class='fa fa-angle-right'></i>"});var navBottom=$(".nav-bottom").offset();$(window).on('scroll',function(){var w=$(window).width();if($(".nav-bottom").length==0){if(w>768){if($(this).scrollTop()>0){$('header').addClass("sticky");}else{$('header').removeClass("sticky");}}}else{if(w>768){if($(this).scrollTop()>navBottom.top+100){$('header').addClass("sticky");}else{$('header').removeClass("sticky");}}}});$('.menuzord-menu > li > a, .scroll_down a').bind('click',function(event){var $anchor=$(this);var headerH='48';$('.header').outerHeight();$('html, body').stop().animate({scrollTop:$($anchor.attr('href')).offset().top-headerH+"px"},1200,'easeInOutExpo');event.preventDefault();});$('.veno').venobox({numeratio:true,infinigall:true,titleattr:'data-title',});$(document).ready(function(){var $container=$('.pro-all-projects').isotope({itemSelector:'.pitem',layoutMode:'fitRows',getSortData:{name:'.name',symbol:'.symbol',number:'.number parseInt',category:'[data-category]',weight:function(itemElem){var weight=$(itemElem).find('.weight').text();return parseFloat(weight.replace(/[\(\)]/g,''));}}});var initShow=6;var loadMoreItem=3;var counter=initShow;var iso=$container.data('isotope');loadMore(initShow);function loadMore(toShow){$container.find(".hidden").removeClass("hidden");var hiddenElems=iso.filteredItems.slice(toShow,iso.filteredItems.length).map(function(item){return item.element;});$(hiddenElems).addClass('hidden');$container.isotope('layout');if(hiddenElems.length==0){jQuery("#loadMore").hide();}else{jQuery("#loadMore").show();};}$("#loadMore").on('click',function(){if($('#filters').data('clicked')){counter=loadMoreItem;$('#filters').data('clicked',false);}else{counter=counter;};counter=counter+loadMoreItem;loadMore(counter);});$("#filters").on('click',function(){$(this).data('clicked',true);loadMore(loadMoreItem);});});$(".skill_countdown").counterUp({delay:10,time:700,});$('.counts').counterUp({time:1400,});jQuery(".video-autoplay-true").YouTubePopUp();jQuery(".video-autoplay-false").YouTubePopUp({autoplay:0});var _gaq=_gaq||[];_gaq.push(['_setAccount','UA-36251023-1']);_gaq.push(['_setDomainName','jqueryscript.net']);_gaq.push(['_trackPageview']);$(window).scroll(function(){if($(this).scrollTop()>500){$('.scroll_top_up').fadeIn();}else{$('.scroll_top_up').fadeOut();}});$('.scroll_top_up').fadeOut();$('.scroll_top_up').on('click',function(){$('html, body').animate({scrollTop:0},800);return false;});$('.team_icon ').on('click',function(){$(this).siblings('.member_toggle').css({'left':'0px','opacity':'1'});$(this).siblings('.team-close-icon').css({'left':'95%','opacity':'1'});});$('.team-close-icon').on('click',function(){$(this).siblings('.member_toggle').css({'left':'-100%','opacity':'0'});$(this).css({'left':'-100%','opacity':'0'});});var team_member=$('.team_carousel');team_member.owlCarousel({loop:false,margin:20,autoplay:false,dots:true,responsive:{0:{items:1,margin:20,},480:{items:1,margin:0,},501:{items:2,margin:20,},767:{items:3,margin:20},992:{items:4}}});$('.testimonial_carousel').owlCarousel({items:3,loop:true,autoplay:true,smartSpeed:1000,autoplayTimeout:4000,margin:20,responsive:{0:{items:1,},480:{items:1,},501:{items:2,},767:{items:3,},992:{items:3,},1201:{items:3,}}});new WOW().init();})(jQuery);

}
/*
     FILE ARCHIVED ON 00:20:51 Aug 25, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:23:14 Aug 24, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 243.476
  exclusion.robots: 0.821
  exclusion.robots.policy: 0.179
  RedisCDXSource: 3.398
  esindex: 0.008
  LoadShardBlock: 217.419 (3)
  PetaboxLoader3.datanode: 273.099 (5)
  CDXLines.iter: 19.454 (3)
  load_resource: 590.298 (2)
  PetaboxLoader3.resolve: 445.299 (2)
*/