$(document).ready(function(){
    
/*--- Append a button at the end of the guess --*/

    var newButton = function (){    
        var li = $('<li>', {class:"item", html:""});
        var btn = $("<button>", {class:"resetButton", html:"Enter a new number"});
        li.append(btn);
        $(".resetButton").append(li);
        $('input').off();
        $('input').prop( "disabled", true );
        $('button.submitButton').prop( "disabled", true );
    }

	/*--- Get user input ---*/

	$('form').submit(function (event){
        event.preventDefault();
		var numberGuess = $('input[name="userNumber"]').val();
    		if(numberGuess > 999 && numberGuess < 9999){
                console.log(numberGuess);
                /*--- Check to see if it's a number and if so, use the numbersAPI---*/
        		if(jQuery.isNumeric(numberGuess)) {
        			$.get('http://numbersapi.com/' + numberGuess + '/trivia?notfound=floor&fragment', function(data) {
    					$( "h4" ).text(data); 
                        newButton();
                });	
                /*--- Alert if it's not a number ---*/    
                } else {
        			alert("That's not a number!");
        		}
            return false;
    	} else {
            alert("Pick a four digit number!");
        }  
    });

    /*--- reset button ---*/

    $('.resetButton').on('click', 'button', function() {
        console.log("reset the value");
        $('input').val("");
        $(this).parent().remove();
        $("h4").text("");
        $('input').prop( "disabled", false );
        $('button.submitButton').prop( "disabled", false );
    })
});