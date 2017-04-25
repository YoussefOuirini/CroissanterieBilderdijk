$(document).ready(function(){
	$('.someprice').on('keyup', function(){
		var price = +$(this).data('price');
		var quantity = +$(this).find('.quantity').val();
		$(this).find("span").text("Total price: €" + price * quantity);
	});
	
});

function hey(){
	var price = +$('#bla').closest('.someprice').data('price');
	var quantity = +$('#bla').val();
	$('#bla').children("span").text("boooya");
}