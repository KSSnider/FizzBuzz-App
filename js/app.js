

var count =function (number){
	/* Creates Count and determines what is devisable and will determine the Fizz Buzzes */
	for (i=1; i<=number; i++) {
			if (i%3===0 && i%5===0) {
				$('.count').append('<p>' + 'Fizzbuzz' + '</p>');
			}
			else if (i%3===0) {
				$('.count').append('<p>' + 'Fizz' + '</p>');
			}
			else if (i%5===0) {
				$('.count').append('<p>' + 'Buzz' + '</p>');
			}
			else {
				$('.count').append('<p>' + i + '</p>');
			}
		}
	};
/*Allows users to input their number in the textbow */
$('document').ready(function() {
	$('.add-number').keydown(function(event){
		var number = +$('.add-number').val();
		 if (event.keyCode === 13) {
		 	if (isNaN(number) ||  number<=0 || number%1 !==0) {
		 		alert('Please type in a positive whole number');
		 	}
		 	else {
		 		$('.count').show();
		 		$('.count').contents().remove();
		 		count(number);
		 	}
		 }
	});
});

/*Clears all items on list*/
$(document).on("click", ".reset", function(){
    $('.count').empty();
    submissions = 0;
    $('.add-number').val("");
});





























