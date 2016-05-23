var maxHeight = 0;

$('.module').each(function() {
    maxHeight = Math.max(maxHeight, $(this).height());
});
$('.col col-2-3, .module, .col col-1-3, .module').css({height:maxHeight + 'px'});