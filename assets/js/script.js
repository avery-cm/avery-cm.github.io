$(document).ready(function(){

$( ".cross" ).hide();
$( ".mobilemenu" ).hide();
$( ".hamburger" ).click(function() {
$( ".mobilemenu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".mobilemenu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});




}