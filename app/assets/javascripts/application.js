var main = function() {
    
    $(function() {
    $('.banner').unslider();
});

$('.nav li').click(function() {
    var category = $(this).attr('class');

    $('.nav li').removeClass('active');
    $(this).addClass('active');

    if(category === 'angular') {
    $('.thumbnail').removeClass('selected');
    $('.angular').addClass('selected');
    } else if(category === 'rails') {
        $('.thumbnail').removeClass('selected');
        $('.rails').addClass('selected'); 
        } else if(category ==='jquery') {
            $('.thumbnail').removeClass('selected');
            $('.jquery').addClass('selected');
}                

  $(document).ready(main);


// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
