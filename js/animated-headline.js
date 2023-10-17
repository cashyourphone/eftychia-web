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

jQuery(document).ready(function($){var animationDelay=2500,barAnimationDelay=3800,barWaiting=barAnimationDelay-3000,lettersDelay=50,typeLettersDelay=150,selectionDuration=500,typeAnimationDelay=selectionDuration+800,revealDuration=600,revealAnimationDelay=1500;initHeadline();function initHeadline(){singleLetters($('.cd-headline.letters').find('b'));animateHeadline($('.cd-headline'));}function singleLetters($words){$words.each(function(){var word=$(this),letters=word.text().split(''),selected=word.hasClass('is-visible');for(i in letters){if(word.parents('.rotate-2').length>0)letters[i]='<em>'+letters[i]+'</em>';letters[i]=(selected)?'<i class="in">'+letters[i]+'</i>':'<i>'+letters[i]+'</i>';}var newLetters=letters.join('');word.html(newLetters).css('opacity',1);});}function animateHeadline($headlines){var duration=animationDelay;$headlines.each(function(){var headline=$(this);if(headline.hasClass('loading-bar')){duration=barAnimationDelay;setTimeout(function(){headline.find('.cd-words-wrapper').addClass('is-loading')},barWaiting);}else if(headline.hasClass('clip')){var spanWrapper=headline.find('.cd-words-wrapper'),newWidth=spanWrapper.width()+10
spanWrapper.css('width',newWidth);}else if(!headline.hasClass('type')){var words=headline.find('.cd-words-wrapper b'),width=0;words.each(function(){var wordWidth=$(this).width();if(wordWidth>width)width=wordWidth;});headline.find('.cd-words-wrapper').css('width',width);};setTimeout(function(){hideWord(headline.find('.is-visible').eq(0))},duration);});}function hideWord($word){var nextWord=takeNext($word);if($word.parents('.cd-headline').hasClass('type')){var parentSpan=$word.parent('.cd-words-wrapper');parentSpan.addClass('selected').removeClass('waiting');setTimeout(function(){parentSpan.removeClass('selected');$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');},selectionDuration);setTimeout(function(){showWord(nextWord,typeLettersDelay)},typeAnimationDelay);}else if($word.parents('.cd-headline').hasClass('letters')){var bool=($word.children('i').length>=nextWord.children('i').length)?true:false;hideLetter($word.find('i').eq(0),$word,bool,lettersDelay);showLetter(nextWord.find('i').eq(0),nextWord,bool,lettersDelay);}else if($word.parents('.cd-headline').hasClass('clip')){$word.parents('.cd-words-wrapper').animate({width:'2px'},revealDuration,function(){switchWord($word,nextWord);showWord(nextWord);});}else if($word.parents('.cd-headline').hasClass('loading-bar')){$word.parents('.cd-words-wrapper').removeClass('is-loading');switchWord($word,nextWord);setTimeout(function(){hideWord(nextWord)},barAnimationDelay);setTimeout(function(){$word.parents('.cd-words-wrapper').addClass('is-loading')},barWaiting);}else{switchWord($word,nextWord);setTimeout(function(){hideWord(nextWord)},animationDelay);}}function showWord($word,$duration){if($word.parents('.cd-headline').hasClass('type')){showLetter($word.find('i').eq(0),$word,false,$duration);$word.addClass('is-visible').removeClass('is-hidden');}else if($word.parents('.cd-headline').hasClass('clip')){$word.parents('.cd-words-wrapper').animate({'width':$word.width()+10},revealDuration,function(){setTimeout(function(){hideWord($word)},revealAnimationDelay);});}}function hideLetter($letter,$word,$bool,$duration){$letter.removeClass('in').addClass('out');if(!$letter.is(':last-child')){setTimeout(function(){hideLetter($letter.next(),$word,$bool,$duration);},$duration);}else if($bool){setTimeout(function(){hideWord(takeNext($word))},animationDelay);}if($letter.is(':last-child')&&$('html').hasClass('no-csstransitions')){var nextWord=takeNext($word);switchWord($word,nextWord);}}function showLetter($letter,$word,$bool,$duration){$letter.addClass('in').removeClass('out');if(!$letter.is(':last-child')){setTimeout(function(){showLetter($letter.next(),$word,$bool,$duration);},$duration);}else{if($word.parents('.cd-headline').hasClass('type')){setTimeout(function(){$word.parents('.cd-words-wrapper').addClass('waiting');},200);}if(!$bool){setTimeout(function(){hideWord($word)},animationDelay)}}}function takeNext($word){return(!$word.is(':last-child'))?$word.next():$word.parent().children().eq(0);}function takePrev($word){return(!$word.is(':first-child'))?$word.prev():$word.parent().children().last();}function switchWord($oldWord,$newWord){$oldWord.removeClass('is-visible').addClass('is-hidden');$newWord.removeClass('is-hidden').addClass('is-visible');}});

}
/*
     FILE ARCHIVED ON 01:02:41 Aug 25, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:22:53 Aug 24, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 84.105
  exclusion.robots: 0.305
  exclusion.robots.policy: 0.291
  RedisCDXSource: 1.897
  esindex: 0.013
  LoadShardBlock: 56.584 (3)
  PetaboxLoader3.datanode: 377.663 (5)
  CDXLines.iter: 22.095 (3)
  load_resource: 543.447 (2)
  PetaboxLoader3.resolve: 209.665 (2)
*/