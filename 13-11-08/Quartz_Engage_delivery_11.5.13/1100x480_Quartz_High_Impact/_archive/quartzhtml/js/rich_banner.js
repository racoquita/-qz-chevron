function mm$(t){var e=null,i="mm_div_"+t;return window[i]!==void 0?e=window[i]:(e=document.getElementById(t),window[i]=e),e}function getCurrentStyle(t,e){var i=null;return i=window.getComputedStyle!==void 0?parseInt(window.getComputedStyle(t).getPropertyValue(e),10):parseInt(t.currentStyle[e],10)}function getEquivalentDeviceInputFromTouch(t){if(!window.Modernizr.touch){var e=window.navigator.msPointerEnabled===!0?!0:!1;"touchstart"===t?t=e?"MSPointerDown":"mousedown":"touchmove"===t?t=e?"MSPointerMove":"mousemove":"touchend"===t&&(t=e?"MSPointerUp":"mouseup")}return t}function convertPointerEventToTouch(t){return t=t.toLowerCase(),t.indexOf("touch")>=0?t:t.indexOf("down")>=0?"touchstart":t.indexOf("move")>=0?"touchmove":t.indexOf("up")>=0?"touchend":t}function addTouchListener(t,e,i,s){s||(s=!1),e=getEquivalentDeviceInputFromTouch(e),t.addEventListener!==void 0?t.addEventListener(e,i,s):t.attachEvent!==void 0&&(t===window&&(t=document.body),t.attachEvent("on"+e,i))}function removeTouchListener(t,e,i){e=getEquivalentDeviceInputFromTouch(e),t.removeEventListener!==void 0&&t.removeEventListener(e,i)}function getPointerPosition(t){var e={x:0,y:0};return window.Modernizr.touch&&t.targetTouches&&t.targetTouches.length>0?(e.x=t.targetTouches[0].clientX,e.y=t.targetTouches[0].clientY):(e.x=t.clientX,e.y=t.clientY),e}function setClass(t,e){var i=null;t.className===void 0?(i=t.getAttribute("class"),0>i.indexOf(e)&&(e.length>0&&(e=i+" "+e),t.setAttribute("class",e))):(i=t.className,0>i.indexOf(e)&&(e.length>0&&(e=i+" "+e),t.className=e))}function removeClass(t,e){var i=null,s=RegExp("(\\s|^)+"+e.replace("-","\\-")+"(\\s|$)+");t.className===void 0?(i=t.getAttribute("class").replace(s," "),t.setAttribute("class",i)):t.className=t.className.replace(s," ")}function sortObjectsInArrayByProperty(t,e){for(var i=[],s=t.length,o=0;s>o;o++){for(var l=null,h=0;t.length>h;h++)t[h][e]!==void 0&&(null===l||parseFloat(t[h][e])<parseFloat(t[l][e]))&&(l=h);i.push(t.splice(l,1)[0])}return t.length>0&&i.concat(i,t),i}function getComponent(t,e,i){return t>i?t:i>e?e:i}function getCSSBrowserPrefix(){if(null!==_mmCSSBrowserPrefix)return _mmCSSBrowserPrefix;var t,e=document.createElement("div"),i={WC:"",O:"o",MS:"ms",Moz:"Moz",Webkit:"webkit"};for(t in i)if(void 0!==e.style[i[t]+"Transition"])return _mmCSSBrowserPrefix=i[t]}function scaleDownToSize(t,e,i){var s=1,o=1;"video: "+t.videoWidth+"x"+t.videoHeight+"\nnatural: "+t.naturalWidth+"x"+t.naturalHeight+"\ndefault: "+t.width+"x"+t.height;var l=t.videoWidth?t.videoWidth:t.naturalWidth?t.naturalWidth:t.width,h=t.videoHeight?t.videoHeight:t.naturalHeight?t.naturalHeight:t.height;(0===l||0===h)&&(l=t.offsetWidth,h=t.offsetHeight);var n=l,r=h;t.style.position="absolute",l>e&&(s=e/l),h>i&&(o=i/h),0===l||0===h||s===o&&1!==s?(t.style.width=e+"px",t.style.height=i+"px",t.style.left="0px",t.style.top="0px"):o>=s&&1!==s?(t.style.height="auto",t.style.width=e+"px",t.style.top=i/2-r*s/2+"px",t.style.left="0px"):s>o&&1!==o?(t.style.height=i+"px",t.style.width="auto",t.style.left=e/2-n*o/2+"px",t.style.top="0px"):(t.style.width=l+"px",t.style.height=h+"px",t.style.left=e/2-n*o/2+"px",t.style.top=i/2-r*s/2+"px")}function MMTouchClick(t,e,i,s){this.isAndroid3=null!==navigator.userAgent.match(/android 3/i),this.scope=s!==void 0?s:window,this.params=i!==void 0?i:[],this.params.unshift(""),this.target=t,this.callback=e,this.touchData={startTime:null,startPos:{x:0,y:0},endPos:{x:0,y:0},threshold:3,timeout:300},this.handleEvent=function(t){if(t.currentTarget===this.target){var i=convertPointerEventToTouch(t.type);switch(i){case"click":t.touchClick=this,this.params[0]=t,this.touchData.startPos.x=this.touchData.endPos.x=getPointerPosition(t).x,this.touchData.startPos.y=this.touchData.endPos.y=getPointerPosition(t).y,this.scope[e].apply(this.scope,this.params);break;case"touchstart":this.touchData.startPos.x=this.touchData.endPos.x=getPointerPosition(t).x,this.touchData.startPos.y=this.touchData.endPos.y=getPointerPosition(t).y,this.touchData.startTime=new Date;break;case"touchmove":this.touchData.endPos.x=getPointerPosition(t).x,this.touchData.endPos.y=getPointerPosition(t).y;break;case"touchend":var s=new Date,o=parseInt(this.touchData.startTime.getTime(),10)-parseInt(s.getTime(),10),l=Math.abs(this.touchData.startPos.x-this.touchData.endPos.x),h=Math.abs(this.touchData.startPos.y-this.touchData.endPos.y);Math.max(l,h)<=this.touchData.threshold&&this.touchData.timeout>o&&(t.touchClick=this,this.params[0]=t,this.scope[e].apply(this.scope,this.params))}}},this.addListeners=function(){var t=this;this.isAndroid3&&addTouchListener(t.target,"click",t,!1),addTouchListener(t.target,"touchstart",t,!1),addTouchListener(t.target,"touchmove",t,!1),addTouchListener(t.target,"touchend",t,!1)},this.removeListeners=function(){var t=this;this.isAndroid3&&removeTouchListener(t.target,"click",t,!1),removeTouchListener(t.target,"touchstart",t,!1),removeTouchListener(t.target,"touchmove",t,!1),removeTouchListener(t.target,"touchend",t,!1)},this.addListeners()}function trace(t){window.console!==void 0&&mm_traceEnabled&&window.console.log(t)}function addClickThroughDispatcher(){EB._clickthroughBase===void 0&&(EB._clickthroughBase=EB.clickthrough,EBG.EventName.CLICK_THROUGH="clickthrough",EB.clickthrough=function(t,e){this._dispatchEvent(EBG.EventName.CLICK_THROUGH,null),EB._clickthroughBase(t,e)})}var _mmCSSBrowserPrefix=null,mm_traceEnabled=!0,MMVideoPlayer=function(t,e,i,s,o,l,h){if(t&&e){var n=this;if(this.id=t,this.width=i?i:100,this.height=s?s:100,this.waitToLoad=h===void 0?!1:!0,this.trackingEnabled=o===void 0?!0:o===!1?!1:!0,this.cssClass=l?l:"video-player-default",this.pointerThreshold=5,this.poster="undefined",this.pointerStart={x:0,y:0},this.pointerCurrent={x:0,y:0},this.isPointerActive=!1,this.uA=navigator.userAgent,this.isIos=null!==this.uA.match(/ipad/i)||null!==this.uA.match(/iphone/i)||null!==this.uA.match(/ipod/i),this.isAndroid=null!==this.uA.match(/android/i),this.isAndroid2=null!==this.uA.match(/android 2/i),this.isAndroid3=null!==this.uA.match(/android 3/i),this.isChrome=null!==this.uA.match(/chrome/i),this.isSilk=null!==this.uA.match(/silk/i),this.pauseTimeout=null,this.formats={mp4:"undefined",webm:"undefined"},this.html={video:null,pausePlayOverlay:null,pausePlayOverlayIcon:null,poster:null,controls:{playPause:null,mute:null,fullScreen:null,time:null,progressContainer:{progressFiller:null}}},this.syncPlayPauseControl=function(){this.html.video.paused?(removeClass(this.html.controls.playPause,"pause-icon"),setClass(this.html.controls.playPause,"play-icon")):(removeClass(this.html.controls.playPause,"play-icon"),setClass(this.html.controls.playPause,"pause-icon"))},this.syncMuteControl=function(){0===this.html.video.volume?(removeClass(this.html.controls.mute,"unmute-icon"),setClass(this.html.controls.mute,"mute-icon")):(removeClass(this.html.controls.mute,"mute-icon"),setClass(this.html.controls.mute,"unmute-icon"))},this.togglePoster=function(t){this.html.poster.style.display=t?"block":"none"},this.togglePlayPauseOverlay=function(t){this.html.playPauseOverlay.style.display=t?"block":"none"},this.syncSeekControl=function(){var t=this.html.video.currentTime/this.html.video.duration;getCurrentStyle(this.html.controls.progressContainer,"width"),this.html.controls.progressContainer.progressFiller.style.width=100*t+"%"},this.enterfullScreen=function(){this.html.video.webkitDisplayingFullscreen&&this.html.video.webkitExitFullscreen(),this.html.video.requestFullscreen?this.html.video.requestFullscreen():this.html.video.mozRequestFullScreen?this.html.video.mozRequestFullScreen():this.html.video.webkitRequestFullscreen?this.html.video.webkitRequestFullscreen():this.html.video.webkitSupportsFullscreen&&this.html.video.webkitEnterFullscreen()},this.updateTime=function(){try{this.html.video.currentTime&&this.html.video.duration&&this.html.video.currentTime>this.html.video.duration&&(this.html.video.currentTime=this.html.video.duration);var t=this.formatTime(this.html.video.currentTime);"0-1:NaN"!=t&&(this.html.controls.time.innerHTML=t)}catch(e){}},this.play=function(){this.html.video.webkitDisplayingFullscreen&&this.html.video.webkitExitFullscreen(),this.html.video.focus(),this.html.video.blur(),this.html.video.play()},this.pause=function(){this.html.video.pause()},EB.addEventListener(EBG.EventName.CLICK_THROUGH,function(){n.html.video.paused||n.pause()}),this.toggleMute=function(){this.html.video.volume=this.html.video.volume>0?0:1},this.seek=function(t){t>=0&&this.html.video.duration>=t&&(this.html.video.currentTime=t)},this.formatTime=function(t){var e=10>Math.floor(t/60)?"0"+Math.floor(t/60):Math.floor(t/60),i=10>Math.floor(t-60*e)?"0"+Math.floor(t-60*e):Math.floor(t-60*e);return e+":"+i},this.forcePause=function(){this.pause(),this.togglePoster(!0)},this.useNativeControls=function(){this.html.video.setAttribute("controls","true"),this.html.controls.style.display="none"},this.controller={CONTROLS:{SEEK:function(t){var e=function(t){var e=0;if(t.offsetParent){do e+=t.offsetLeft;while(t=t.offsetParent);return e}},i=t.touchClick.touchData.endPos.x,s=i-e(t.target),o=s/parseInt(t.currentTarget.clientWidth,10);n.seek(n.html.video.duration*o)},FULLSCREEN:function(){n.isAndroid2?n.play():n.enterfullScreen()},MUTE:function(){n.toggleMute()},PLAY_PAUSE:function(){n.html.video.paused?n.play():n.pause()}},VIDEO:{PLAY:function(){n.syncPlayPauseControl(),n.togglePlayPauseOverlay(!1),n.togglePoster(!1)},PAUSE:function(){n.syncPlayPauseControl(),n.isAndroid3||n.togglePlayPauseOverlay(!0)},DURATION_CHANGE:function(){n.updateTime(),n.syncSeekControl(),n.isAndroid2&&n.html.video.currentTime>0&&(clearTimeout(n.pauseTimeout),n.pauseTimeout=setTimeout(function(){n.forcePause()},500))},VOLUME_CHANGE:function(){n.syncMuteControl()},ENDED:function(){n.html.video.paused||n.pause(),n.togglePoster(!0),n.syncPlayPauseControl(),n.togglePlayPauseOverlay(!0)}}},"string"==typeof e){var r=e.split("/"),a=r[r.length-1],u=e.slice(0,-1*a.length),c=a.split("."),d=c[c.length-1],m=a.slice(0,-1*(d.length+1));this.poster=u+m+".jpg",this.formats.mp4=u+m+".mp4",this.formats.webm=u+m+".webm"}else this.poster=e.poster?e.poster:"undefined",this.formats.mp4=e.mp4?e.mp4:"undefined",this.formats.webm=e.webm?e.webm:"undefined";this.html=document.createElement("div"),this.html.setAttribute("id",this.id+"-wrapper"),this.html.setAttribute("style","height:"+this.height+"px"+";width:"+this.width+"px;"),this.html.setAttribute("class",this.cssClass),this.html.poster=document.createElement("img"),this.html.poster.setAttribute("id",this.id+"-poster"),this.html.poster.setAttribute("class","poster"),this.waitToLoad||this.html.poster.setAttribute("src",this.poster),this.html.appendChild(this.html.poster),this.html.playPauseOverlay=document.createElement("div"),this.html.playPauseOverlay.setAttribute("id",this.id+"-play-pause-overlay"),this.html.playPauseOverlay.setAttribute("class","play-pause-overlay"),this.html.playPauseOverlayIcon=document.createElement("div"),this.html.playPauseOverlayIcon.setAttribute("id",this.id+"-play-pause-overlay-icon"),this.html.playPauseOverlayIcon.setAttribute("class","play-pause-overlay-icon"),this.html.playPauseOverlay.appendChild(this.html.playPauseOverlayIcon),new MMTouchClick(this.html.playPauseOverlay,"PLAY_PAUSE",[],this.controller.CONTROLS),this.html.appendChild(this.html.playPauseOverlay),this.html.video=document.createElement("video"),this.html.video.setAttribute("id",this.id+"-video"),this.html.video.setAttribute("style","width:"+this.width+"px; height:"+this.height+"px; position:relative;top:0px;z-index:0;"),this.html.video.addEventListener("play",this.controller.VIDEO.PLAY),this.html.video.addEventListener("pause",this.controller.VIDEO.PAUSE),this.html.video.addEventListener("volumechange",this.controller.VIDEO.VOLUME_CHANGE),this.html.video.addEventListener("timeupdate",this.controller.VIDEO.DURATION_CHANGE),this.html.video.addEventListener("ended",this.controller.VIDEO.ENDED),this.html.video.setAttribute("src",""===this.html.video.canPlayType("video/mp4")?this.formats.webm:this.formats.mp4);for(var p in this.formats){_t=this.formats[p].match(/\.([0-9a-z]+)(?:[\?#]|$)/i),_type="ogv"==_t[1]?"video/ogg":"video/"+_t[1];var v=document.createElement("source");v.setAttribute("style","display:none"),v.setAttribute("type",_type),v.setAttribute("src",this.formats[p]),this.html.video.appendChild(v)}this.html.appendChild(this.html.video),this.html.controls=document.createElement("div"),this.html.controls.setAttribute("id",this.id+"-video-controls"),this.html.controls.setAttribute("class","controls"),this.html.controls.setAttribute("style","z-index:2;"),this.html.controls.playPause=document.createElement("div"),this.html.controls.playPause.setAttribute("id",this.id+"-play-pause"),this.html.controls.playPause.setAttribute("title","Play/Pause"),this.html.controls.playPause.setAttribute("class","play-pause play-icon"),new MMTouchClick(this.html.controls.playPause,"PLAY_PAUSE",[],this.controller.CONTROLS),this.html.controls.progressContainer=document.createElement("div"),this.html.controls.progressContainer.setAttribute("id",this.id+"-progress-container"),new MMTouchClick(this.html.controls.progressContainer,"SEEK",[],this.controller.CONTROLS),this.html.controls.progressContainer.setAttribute("class","progress-container"),this.html.controls.progressContainer.progressFiller=document.createElement("div"),this.html.controls.progressContainer.progressFiller.setAttribute("id",this.id+"-progres-filler"),this.html.controls.progressContainer.progressFiller.setAttribute("class","progress-filler"),this.html.controls.progressContainer.appendChild(this.html.controls.progressContainer.progressFiller),this.html.controls.fullScreen=document.createElement("div"),this.html.controls.fullScreen.setAttribute("id",this.id+"-full-screen"),this.html.controls.fullScreen.setAttribute("class","full-screen"),new MMTouchClick(this.html.controls.fullScreen,"FULLSCREEN",[],this.controller.CONTROLS),this.html.controls.mute=document.createElement("div"),this.html.controls.mute.setAttribute("id",this.id+"-mute"),this.html.controls.mute.setAttribute("class","mute unmute-icon"),new MMTouchClick(this.html.controls.mute,"MUTE",[],this.controller.CONTROLS),this.html.controls.mute.setAttribute("title","Mute/Unmute"),this.html.controls.time=document.createElement("div"),this.html.controls.time.setAttribute("id",this.id+"-time"),this.html.controls.time.setAttribute("class","time"),this.html.controls.time.innerHTML="00:00",this.html.controls.appendChild(this.html.controls.playPause),this.isIos||this.isAndroid?this.isChrome||this.isAndroid2||this.isSilk||this.html.controls.appendChild(this.html.controls.fullScreen):this.isSilk||this.html.controls.appendChild(this.html.controls.mute),this.html.controls.appendChild(this.html.controls.time),this.html.controls.appendChild(this.html.controls.progressContainer),this.trackingEnabled&&"undefined"!=typeof EBG&&(this.VideoTracking=new EBG.VideoModule(this.html.video)),this.html.appendChild(this.html.controls)}};EB.isInitialized()?addClickThroughDispatcher():EB.addEventListener(EBG.EventName.EB_INITIALIZED,addClickThroughDispatcher);