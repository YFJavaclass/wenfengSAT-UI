/*
 *  Document   : base_pages_coming_soon.js
 *  Author     : pixelcave
 */var BasePagesComingSoon=function(){var t=function(){jQuery(".js-countdown").countdown((new Date).getFullYear()+2+"/01/15",function(t){jQuery(this).html(t.strftime('<div class="row items-push text-center"><div class="col-xs-3"><div class="font-s36 font-w700 text-white">%-D</div><div class="font-s12 font-w700 text-white-op">DAYS</div></div><div class="col-xs-3"><div class="font-s36 font-w700 text-white">%H</div><div class="font-s12 font-w700 text-white-op">HOURS</div></div><div class="col-xs-3"><div class="font-s36 font-w700 text-white">%M</div><div class="font-s12 font-w700 text-white-op">MINUTES</div></div><div class="col-xs-3"><div class="font-s36 font-w700 text-white">%S</div><div class="font-s12 font-w700 text-white-op">SECONDS</div></div></div>'))})};return{init:function(){t()}}}();jQuery(function(){BasePagesComingSoon.init()});