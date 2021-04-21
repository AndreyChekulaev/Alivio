$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header_menu').toggleClass('active')
		$('body').toggleClass('lock');
	})
})
$(document).ready(function(){
	var h2_jq = $('h2');
	console.log(h2_jq);
});