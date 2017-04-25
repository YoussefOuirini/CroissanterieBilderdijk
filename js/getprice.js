$(document).ready(function(){
	$('.someprice').on('keyup', function(){
		var price = +$(this).data('price');
		var quantity = +$(this).find('.quantity').val();
		$(this).find("span").text("Total price: €" + price * quantity);
	});
	
});


