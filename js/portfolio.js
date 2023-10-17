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

var $portfolio;var $masonry_block;var $portfolio_selectors;var $portfolio_selectors_li;$(document).ready(function(){if(Modernizr.touch){$(".close-overlay").removeClass("hidden");$(".porfilio-item").click(function(e){if(!$(this).hasClass("hover")){$(this).addClass("hover");}});$(".close-overlay").click(function(e){e.preventDefault();e.stopPropagation();if($(this).closest(".porfilio-item").hasClass("hover")){$(this).closest(".porfilio-item").removeClass("hover");}});}else{$(".porfilio-item").mouseenter(function(){$(this).addClass("hover");}).mouseleave(function(){$(this).removeClass("hover");});}$portfolio=$('.masonry-items');$portfolio_selectors=$('.portfolio-filter > li > a');$portfolio_selectors_li=$('.portfolio-filter li');hashfilter="*";if(location.hash!=""){var temphashfilter="."+location.hash.substr(1);if(temphashfilter==".*"){temphashfilter="*";}}$portfolio.imagesLoaded(function(){$portfolio.isotope({filter:hashfilter,itemSelector:'li',layoutMode:'masonry'});});$masonry_block=$('.masonry-block-items');$masonry_block.imagesLoaded(function(){$masonry_block.isotope({itemSelector:'li',layoutMode:'masonry'});});$portfolio_selectors.on('click',function(){$portfolio_selectors.parent().removeClass('active');$(this).parent().addClass('active');var selector=$(this).attr('data-filter');$portfolio.isotope({filter:selector});if(selector.substr(1)!=""&&selector.substr(1)!="#"){location.hash=selector.substr(1);}else{location.hash="*";}return false;});$blog=$('.blog-masonry');$blog.imagesLoaded(function(){$blog.isotope({itemSelector:'.blog-listing',layoutMode:'masonry'});});$(window).resize(function(){setTimeout(function(){$portfolio.isotope('layout');$blog.isotope('layout');$masonry_block.isotope('layout');},500);});});

}
/*
     FILE ARCHIVED ON 01:39:05 Aug 25, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:23:10 Aug 24, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  esindex: 0.015
  LoadShardBlock: 71.143 (3)
  captures_list: 105.584
  CDXLines.iter: 23.779 (3)
  PetaboxLoader3.datanode: 138.304 (5)
  PetaboxLoader3.resolve: 86.609 (2)
  RedisCDXSource: 5.924
  exclusion.robots: 1.057
  load_resource: 240.701 (2)
  exclusion.robots.policy: 1.036
*/