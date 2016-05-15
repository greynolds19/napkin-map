
$('.topos').on('click', function(){
    $('.topospage').removeClass('hidden');
});
$('.x.topospage').on('click', function(){
    $('.topospage').addClass('hidden');
});

$('.houdini').on('click', function(){
    $('.houdinipage').removeClass('hidden');
});
$('.x3.houdinipage').on('click', function(){
    $('.houdinipage').addClass('hidden');
});

$('.julias').on('click', function(){
    $('.juliaspage').removeClass('hidden');
});
$('.x3.juliaspage').on('click', function(){
    $('.juliaspage').addClass('hidden');
});

$('.normas').on('click', function(){
    $('.normaspage').removeClass('hidden');
});
$('.x2.normaspage').on('click', function(){
    $('.normaspage').addClass('hidden');
});

$('.hetmans').on('click', function(){
    $('.hetmanspage').removeClass('hidden');
});
$('.x3.hetmanspage').on('click', function(){
    $('.hetmanspage').addClass('hidden');
});

$('.nowadays').on('click', function(){
    $('.nowadayspage').removeClass('hidden');
});
$('.x2.nowadayspage').on('click', function(){
    $('.nowadayspage').addClass('hidden');
});

$('.gottscheer').on('click', function(){
    $('.gottscheerpage').removeClass('hidden');
});
$('.x.gottscheerpage').on('click', function(){
    $('.gottscheerpage').addClass('hidden');
});

$('.catania').on('click', function(){
    $('.cataniapage').removeClass('hidden');
});
$('.x2.cataniapage').on('click', function(){
    $('.cataniapage').addClass('hidden');
});

$('.theSpot').on('click', function(){
    $('.thespotpage').removeClass('hidden');
});
$('.x.thespotpage').on('click', function(){
    $('.thespotpage').addClass('hidden');
});

$('.ama').on('click', function(){
    $('.amapage').removeClass('hidden');
});
$('.x3.amapage').on('click', function(){
    $('.amapage').addClass('hidden');
});

$('.littleEgypt').on('click', function(){
    $('.littleegyptpage').removeClass('hidden');
});
$('.x2.littleegyptpage').on('click', function(){
    $('.littleegyptpage').addClass('hidden');
});

$('.grimaldis').on('click', function(){
    $('.grimaldispage').removeClass('hidden');
});
$('.x3.grimaldispage').on('click', function(){
    $('.grimaldispage').addClass('hidden');
});

$('.morschers').on('click', function(){
    $('.morscherspage').removeClass('hidden');
});
$('.x3.morscherspage').on('click', function(){
    $('.morscherspage').addClass('hidden');
});

// $('.topos').on('click', function(){
//     $('.topospage').removeClass('hidden');
// });

// $('.topospage').on('click', function(){
//     $('.topospage').addClass('hidden');

// });


//"smart box" technology (patent pending)
  ///actual size of napkin: w=3437 h=3505
$(function(){
    $(window).on('resize', res);
   res();
});

function res() {
        $('.basemap').css('width',($('.basemap').outerHeight()*0.98059914408)+'px');//napkin image not quite a perfect square
        var windowwidth = $(window).outerWidth() ;
        var basemapwidth = $('.basemap').outerWidth()  ;
        $('.benchleft').css('width',(windowwidth-basemapwidth)*.5+10+'px');
        $('.benchright').css('width',(windowwidth-basemapwidth)*.5+5+'px');
        // console.log("just with basemap is     "+($('.basemap').outerWidth()*.25));
        // console.log("just with the window is"+($(window).outerWidth()*.25))
}

  

//position X, website and address within popups based on size of screen (and shape of popup)
$(function(){
  $(window).on('resize', insidePop);
  insidePop();
});

function insidePop(){
  var windowWidth = $(window).outerWidth();
  var windowHeight = $(window).outerHeight();
  var popupWidth = 700;
  var popupHeight = 850;
  
  $('.x').css('right',(windowWidth-popupWidth)*.5+75+'px');
  $('.x2').css('right',(windowWidth-popupWidth)*.5+95+'px');
  $('.x3').css('right',(windowWidth-popupWidth)*.5+102+'px');

  $('.address').css('left',(windowWidth-popupWidth)*.5+145+'px');

  $('.web').css('left',(windowWidth-popupWidth)*.5+395+'px');
  $('.weblong').css('left',(windowWidth-popupWidth)*.5+348+'px');

  //height
  $('.address, .web, .weblong').css('bottom',(windowHeight-popupHeight)*.5+110+'px');
  $('.x, .x2, .x3').css('top',(windowHeight-popupHeight)*.5+110+'px');


  console.log("window height is "+windowHeight);
  console.log('popup height is '+popupHeight);
  console.log('window width is '+windowWidth);
  console.log('popup width is '+popupWidth);
}

// when screen is too small at refresh:
if (($(window).width() < 750) || ($(window).height() < 700)){
  // alert('This site is designed for desktop screens only. Come back and check out Ridgewood with a larger screen!');
  $('.tooSmall').removeClass('hidden');
  $('#mask').removeClass('hidden');
}


// when screen is re-sized too small
$(window).resize(function() {
  if (($(window).width() < 750) || ($(window).height() < 700)){
    $('.tooSmall').removeClass('hidden');
    $('#mask').removeClass('hidden');
   }
  else {
  $('.tooSmall').addClass('hidden');
  $('#mask').addClass('hidden');
}
});




//combine click and hover
// $('.icon.beer').click(function() {
//     $(this).unbind('mouseout');  
// }).mouseover(function() {
//     $('.beer').attr('src', function(index, attr) {
//     return attr.replace('BLACK', 'RED');
// }).mouseout(function() {
//     $('.beer').attr('src', function(index, attr) {
//     return attr.replace('RED', 'BLACK');
// });

// $('.icon.food').click(function() {
//     $('#.beer').bind('mouseout', function() {
//      $('.beer').attr('src', function(index, attr) {
//      return attr.replace('RED', 'BLACK');   
//     });
//     $(this).parent().hide();
// });





//BEER: roll over icon and highlight relevant places
//from: http://stackoverflow.com/questions/5086208/jquery-replace-src-attribute-substring
$('.icon.beer').hover(function() {
  $('.beer').attr('src', function(index, attr) {
    return attr.replace('BLACK', 'RED');
  })
}, function() {
  $('.beer').attr('src', function(index, attr) {
    return attr.replace('RED', 'BLACK');
});
});

// //BEER: roll over place and highlight relevant icons
$('.place.beer').hover(function() {
  $('.icon.beer').attr('src', 'https://github.com/greynolds19/napkin-map/raw/master/img/BEER RED.png');
}, function() {
  $('.icon.beer').attr('src', 'https://github.com/greynolds19/napkin-map/raw/master/img/BEER BLACK.png');
});



 




//FOOD: roll over icon and highlight relevant places
$('.icon.food').hover(function() {
  $('.food').attr('src', function(index, attr) {
    return attr.replace('BLACK', 'RED');
  })
}, function() {
  $('.food').attr('src', function(index, attr) {
    return attr.replace('RED', 'BLACK');
});
});
//FOOD: roll over place and highlight relevant icons
$('.place.food').hover(function() {
  $('.icon.food').attr('src', 'https://github.com/greynolds19/napkin-map/raw/master/img/FOOD RED.png');
}, function() {
  $('.icon.food').attr('src', 'https://github.com/greynolds19/napkin-map/raw/master/img/FOOD.png');
});

//COFFEE: roll over icon and highlight relevant places
$('.icon.coffee').hover(function() {
  $('.coffee').attr('src', function(index, attr) {
    return attr.replace('BLACK', 'RED');
  })
}, function() {
  $('.coffee').attr('src', function(index, attr) {
    return attr.replace('RED', 'BLACK');
});
});
//COFFEE: roll over place and highlight relevant icons
$('.place.coffee').hover(function() {
  $('.icon.coffee').attr('src', 'https://github.com/greynolds19/napkin-map/raw/master/img/COFFEE RED.png');
}, function() {
  $('.icon.coffee').attr('src', 'https://github.com/greynolds19/napkin-map/raw/master/img/COFFEE.png');
});

//BOOK: roll over icon and highlight relevant places
$('.icon.book').hover(function() {
  $('.book').attr('src', function(index, attr) {
    return attr.replace('BLACK', 'RED');
  })
}, function() {
  $('.book').attr('src', function(index, attr) {
    return attr.replace('RED', 'BLACK');
});
});
//BOOK: roll over place and highlight relevant icons
$('.place.book').hover(function() {
  $('.icon.book').attr('src', 'https://github.com/greynolds19/napkin-map/raw/master/img/BOOKS RED.png');
}, function() {
  $('.icon.book').attr('src', 'https://github.com/greynolds19/napkin-map/raw/master/img/BOOKS.png');
});

//BUTCHER: roll over icon and highlight relevant places
$('.icon.butcher').hover(function() {
  $('.butcher').attr('src', function(index, attr) {
    return attr.replace('BLACK', 'RED');
  })
}, function() {
  $('.butcher').attr('src', function(index, attr) {
    return attr.replace('RED', 'BLACK');
});
});
//BUTCHER: roll over place and highlight relevant icons
$('.place.butcher').hover(function() {
  $('.icon.butcher').attr('src', 'https://github.com/greynolds19/napkin-map/raw/master/img/BUTCHER RED.png');
}, function() {
  $('.icon.butcher').attr('src', 'https://github.com/greynolds19/napkin-map/raw/master/img/BUTCHER.png');
});





























