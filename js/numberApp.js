$(document).ready(function(){
    
/*--- Append a button at the end of the guess --*/

    var newButton = function (){    
        var li = $('<li>', {class:"item", html:""});
        var btn = $("<button>", {class:"btn", html:"Enter a new number"});
        li.append(btn);
        $(".resetButton").append(li);
        $('input').off();
    }


	/*--- Get user input ---*/

	$('input').keypress(function (event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
    		if(keycode == '13'){
        		var userNumber = $(this).val();

                /*--- Check to see if it's a number and if so, use the numbersAPI---*/

        		if(jQuery.isNumeric(userNumber)) {
        			$.get('http://numbersapi.com/' + userNumber + '/trivia?notfound=floor&fragment', function(data) {
    					$( "p" ).text(data);   
                        newButton();
                });	
        		
                /*--- Alert if it's not a number ---*/    

                } else {
        			alert("That's not a number!");
                    newButton();
                
        		}

	  		return false;
    	}
  	});

    /*--- reset button ---*/

    $('.resetButton').on('click', 'button', function() {
        console.log("reset the value");
        $('input').val("");
        $(this).parent().remove();
        $("p").text("");
    })
});