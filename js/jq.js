$(document).ready(function() {
    $('.twoBox .col-1-3').height($('.twoBox .col-2-3').height())

    
    $('.aButton').click(function(){
        $("div").show("slow");
        console.log("click!");
    });
    
    $('.bButton').click(function(){
        $("div.contactBox").hide(600);
        console.log("clickAgain!");
    });
    
})


/* Have a div that hides and shows the div */

/* Wrap each in a pair and set the height of the 

smaller one to the height of the larger 

wraper div each fun 
this.find(col-1-3) or something like that.

*/