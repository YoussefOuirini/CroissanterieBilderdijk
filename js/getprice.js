$(document).ready(function(){
	$('.someprice').on('keyup', '.quantity', function(){
		
		var price = +$(this).closest('.someprice').data('price');
		var quantity = +$(this).val();
		$('.total').text(price*quantity);
	})
})

	