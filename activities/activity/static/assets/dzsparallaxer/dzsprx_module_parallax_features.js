"use strict";function is_touch_device(){return!!("ontouchstart"in window)}function is_ie(){var e=window.navigator.userAgent,i=e.indexOf("MSIE ");if(i>0)return parseInt(e.substring(i+5,e.indexOf(".",i)),10);var n=e.indexOf("Trident/");if(n>0){var t=e.indexOf("rv:");return parseInt(e.substring(t+3,e.indexOf(".",t)),10)}var s=e.indexOf("Edge/");return s>0?parseInt(e.substring(s+5,e.indexOf(".",s)),10):!1}function is_ie11(){return!window.ActiveXObject&&"ActiveXObject"in window}function version_ie(){return parseFloat(navigator.appVersion.split("MSIE")[1])}window.dzsprx_module_features_ids||(window.dzsprx_module_features_ids=[]),function($){$.fn.dzsprx_features=function(o){var defaults={settings_mode:"scroll",init_functional_delay:"0",init_functional_remove_delay_on_scroll:"off",js_breakout:"off",settings_makeFunctional:!1};if("undefined"==typeof o&&"undefined"!=typeof $(this).attr("data-options")&&""!=$(this).attr("data-options")){var aux=$(this).attr("data-options");aux="var aux_opts = "+aux,eval(aux),o=aux_opts}o=$.extend(defaults,o),Math.easeIn=function(e,i,n,t){return-n*(e/=t)*(e-2)+i},Math.easeOutQuad=function(e,i,n,t){return e/=t,-n*e*(e-2)+i},Math.easeInOutSine=function(e,i,n,t){return-n/2*(Math.cos(Math.PI*e/t)-1)+i},this.each(function(){function e(){if(1==o.settings_makeFunctional){var e=!1,n=document.URL,t=n.indexOf("://")+3,s=n.indexOf("/",t),a=n.substring(t,s);if(a.indexOf("l")>-1&&a.indexOf("c")>-1&&a.indexOf("o")>-1&&a.indexOf("l")>-1&&a.indexOf("a")>-1&&a.indexOf("h")>-1&&(e=!0),a.indexOf("d")>-1&&a.indexOf("i")>-1&&a.indexOf("g")>-1&&a.indexOf("d")>-1&&a.indexOf("z")>-1&&a.indexOf("s")>-1&&(e=!0),a.indexOf("o")>-1&&a.indexOf("z")>-1&&a.indexOf("e")>-1&&a.indexOf("h")>-1&&a.indexOf("t")>-1&&(e=!0),a.indexOf("e")>-1&&a.indexOf("v")>-1&&a.indexOf("n")>-1&&a.indexOf("a")>-1&&a.indexOf("t")>-1&&(e=!0),0==e)return}console.info("init() , wha",d),i()}function i(){if(!g){if(g=!0,console.log("init_start()"),is_ie11()&&d.addClass("is-ie-11"),f=d.find(".dzsprx-features-container .dzs-colcontainer").eq(0),0==d.children(".descs-con").length&&f.append('<div class="dzs-col-6 feat-imgs-con"></div>'),0==d.children(".feat-imgs-con").length&&f.append('<div class="dzs-col-6 descs-con"></div></div>'),a=d.find(".descs-con").eq(0),c=d.find(".feat-imgs-con").eq(0),console.info(d.children(".feat-img")),d.children(".feat-img").each(function(){var e=$(this);console.info(e),c.append(e)}),d.children(".desc-block").each(function(){var e=$(this);a.append(e)}),q=a.children(".desc-block"),y=c.children(".feat-img"),I=q.length,0==d.children(".responsive-con").length){d.append('<div class="responsive-con"></div>'),r=d.children(".responsive-con").eq(0);var e="";e='<div class="advancedscroller-con">',e+='<div id="as2" class="advancedscroller skin-agata-inset " style="width:100%; height: 200px;" data-options=\'{ settings_mode: "onlyoneitem" ,settings_swipe: "on" ,settings_swipeOnDesktopsToo: "off" ,settings_slideshow: "on" ,settings_slideshowTime: "300" ,settings_autoHeight:"on" ,settings_transition:"fade" ,settings_secondCon: "#as2-secondcon" }\'>',e+='<div class="preloader-semicircles"></div> <ul class="items">',y.each(function(){var i=$(this);e+='<li class="item-tobe needs-loading"> <div class="imagediv" style="background-image: url('+i.attr("src")+');"></div></li>'}),e+="</ul>",e+="</div>",e+="</div>",e+='<div id="as2-secondcon" class="dzsas-second-con"> <div class="dzsas-second-con--clip">',q.each(function(){var i=$(this);e+='<div class="item">'+i.html()+"</div>"}),e+="</div> </div>",r.append(e),window.dzsas_init&&window.dzsas_init(r.find(".advancedscroller"),{init_each:!0})}$(window).bind("resize",t),t(),z&&(w=!0,setTimeout(function(){w=!1},z)),d.get(0).api_set_update_func=function(e){b=e},d.get(0).api_handle_scroll=s,d.get(0).api_destroy=n,"scroll"==o.settings_mode&&($(window).unbind("scroll",s),$(window).bind("scroll",s),s(),setTimeout(s,1e3))}}function n(){b=null,m=!0}function t(){if(h=$(window).height(),u=$(window).width(),"on"==o.js_breakout&&(d.css("width",u+"px"),d.css("margin-left","0"),d.offset().left>0&&d.css("margin-left","-"+d.offset().left+"px")),l=d.width(),g!==!1){600>l?d.addClass("responsive-mode"):d.removeClass("responsive-mode");var e=0;q.each(function(){var i=$(this),n=h/2-i.outerHeight()/2;i.css({"padding-top":n+"px"}),q.index(i)==I-1&&i.css({"padding-bottom":n+"px"}),k[e]=i.offset().top-parseInt(i.css("padding-top"),10),e++})}}function s(e,i){p=$(window).scrollTop(),v=p-d.offset().top;var n=v;if(0>n&&(n=0),_=!0,console.info(d.width(),u),d.width()!=u&&(_=!1),y.css({width:"",right:"",left:""}),d.removeClass("feat-img-is-fixed"),p>d.offset().top?(x=!0,p+h>d.offset().top+d.outerHeight()&&(x=!1)):x=!1,0==d.hasClass("feat-img-is-fixed")){var t=0;y.each(function(){var e=$(this);C[t]=e.width(),t++})}console.log(C),x?d.addClass("feat-img-is-fixed"):d.removeClass("feat-img-is-fixed");var s=0,o=0;q.each(function(){var e=$(this),i=parseInt(e.css("padding-top"),10);0==q.index(e),e.offset().top+i-p<100?e.css({opacity:(e.offset().top+i-p)/100}):e.offset().top+i-p>h-100?e.css({opacity:(h-(e.offset().top+i-p+e.height()/2))/100}):e.css({opacity:1}),p>k[o]+100&&(s=o);var t=h/2-y.eq(o).height()/2,a=n+(h/2-y.eq(o).height()/2);a>d.outerHeight()-h/2-y.eq(o).height()/2&&(a=d.outerHeight()-h/2-y.eq(o).height()/2),0==x?(0==_&&y.eq(o).css({width:"",right:"",left:""}),y.eq(o).css({top:a+"px"})):(0==_&&(y.eq(o).css({width:C[o]+15,right:"50%",left:"auto"}),t=h/2-y.eq(o).height()/2),y.eq(o).css({top:t+"px"})),o++}),y.removeClass("feat-img--active"),y.eq(s).addClass("feat-img--active")}var d=$(this),a=null,c=null,r=null,f=null,l=0,u=0,h=0,p=0,v=0,g=!1,x=!1,_=!1,w=!1,m=!1,O=0,z=0,b=null,q=[],y=[],k=[],C=[],I=0;O=Number(o.init_delay),z=Number(o.init_functional_delay),O?setTimeout(e,O):e()})},window.dzsprx_features_init=function(i,n){if("undefined"!=typeof n&&"undefined"!=typeof n.init_each&&1==n.init_each){var t=0;for(e in n)t++;1==t&&(n=void 0),$(i).each(function(){var e=$(this);e.dzsprx_features(n)})}else $(i).dzsprx_features(n)}}(jQuery),window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),jQuery(document).ready(function(e){dzsprx_features_init(".dzsparallaxer-features.auto-init",{init_each:!0})});
