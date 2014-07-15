var fizz = prompt("Please enter your Fizz number");

while(isNaN(fizz) == true ||  fizz<=0 || fizz%1 !==0) { 
	fizz = prompt('Please type in a positive whole number');
}			
		
var buzz = prompt("Please enter your Buzz number");
	 		
while(isNaN(buzz) == true ||  buzz<=0 || buzz%1 !==0) {
 buzz = prompt('Please type in a positive whole number');
}			

var count =function (number){
	/* Creates Count and determines what is devisable and will determine the Fizz Buzzes */
	
	for (i=1; i<=number; i++) {
			if (i%fizz===0 && i%buzz===0) {
				$('.count').append('Fizzbuzz' + '<br>');
			}
			else if (i%fizz===0) {
				$('.count').append('Fizz' + '<br>');
			}
			else if (i%buzz===0) {
				$('.count').append('Buzz' + '<br>');
			}
			else {
				$('.count').append(i + '<br>');
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







