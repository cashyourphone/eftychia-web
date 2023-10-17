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

(function($){$.fn.YouTubePopUp=function(options){var YouTubePopUpOptions=$.extend({autoplay:1},options);$(this).on('click',function(e){var youtubeLink=$(this).attr("href");if(youtubeLink.match(/(youtube.com)/)){var split_c="v=";var split_n=1;}if(youtubeLink.match(/(youtu.be)/)||youtubeLink.match(/(vimeo.com\/)+[0-9]/)){var split_c="/";var split_n=3;}if(youtubeLink.match(/(vimeo.com\/)+[a-zA-Z]/)){var split_c="/";var split_n=5;}var getYouTubeVideoID=youtubeLink.split(split_c)[split_n];var cleanVideoID=getYouTubeVideoID.replace(/(&)+(.*)/,"");if(youtubeLink.match(/(youtu.be)/)||youtubeLink.match(/(youtube.com)/)){var videoEmbedLink="https://web.archive.org/web/20180825020206/https://www.youtube.com/embed/"+cleanVideoID+"?autoplay="+YouTubePopUpOptions.autoplay+"";}if(youtubeLink.match(/(vimeo.com\/)+[0-9]/)||youtubeLink.match(/(vimeo.com\/)+[a-zA-Z]/)){var videoEmbedLink="https://web.archive.org/web/20180825020206/https://player.vimeo.com/video/"+cleanVideoID+"?autoplay="+YouTubePopUpOptions.autoplay+"";}$("body").append('<div class="YouTubePopUp-Wrap"><div class="YouTubePopUp-Content"><span class="YouTubePopUp-Close"></span><iframe src="'+videoEmbedLink+'" allowfullscreen></iframe></div></div>');$(".YouTubePopUp-Wrap, .YouTubePopUp-Close").click(function(){$(".YouTubePopUp-Wrap").addClass("YouTubePopUp-Hide").delay(515).queue(function(){$(this).remove();});});e.preventDefault();});$(document).keyup(function(e){if(e.keyCode==27){$('.YouTubePopUp-Wrap, .YouTubePopUp-Close').click();}});};}(jQuery));

}
/*
     FILE ARCHIVED ON 02:02:06 Aug 25, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:22:37 Aug 24, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 74.461
  exclusion.robots: 0.158
  exclusion.robots.policy: 0.15
  RedisCDXSource: 1.836
  esindex: 0.007
  LoadShardBlock: 54.522 (3)
  PetaboxLoader3.datanode: 79.524 (5)
  CDXLines.iter: 16.064 (3)
  load_resource: 192.212 (2)
  PetaboxLoader3.resolve: 107.536 (2)
*/