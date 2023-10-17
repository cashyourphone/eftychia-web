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

$("#contactForm").validator().on("submit",function(event){if(event.isDefaultPrevented()){formError();submitMSG(false,"Error! Please fill the Form again!");}else{event.preventDefault();submitForm();}});function submitForm(){var name=$("#name").val();var email=$("#email").val();var msg_subject=$("#msg_subject").val();var option=$("#option").val();var message=$("#message").val();$.ajax({type:"POST",url:"assets/php/form-process.php",data:"name="+name+"&option="+option+"&email="+email+"&msg_subject="+msg_subject+"&message="+message,success:function(text){if(text=="success"){formSuccess();}else{formError();submitMSG(false,text);}}});}function formSuccess(){$("#contactForm")[0].reset();submitMSG(true,"Thank you for your message, We'll get back to you in 24 hours!")}function formError(){$("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){$(this).removeClass();});}function submitMSG(valid,msg){if(valid){var msgClasses="h3 text-center tada animated text-success";}else{var msgClasses="h3 text-center text-danger";}$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);}

}
/*
     FILE ARCHIVED ON 01:56:48 Aug 25, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:22:21 Aug 24, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.datanode: 136.568 (5)
  LoadShardBlock: 105.539 (3)
  exclusion.robots.policy: 0.336
  CDXLines.iter: 34.233 (3)
  exclusion.robots: 0.349
  captures_list: 146.201
  load_resource: 132.462 (2)
  PetaboxLoader3.resolve: 64.906 (2)
  esindex: 0.013
  RedisCDXSource: 1.85
*/