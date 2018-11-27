//Mark todos as done
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//Delete todos when x is clicked
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//Listen for enter being pressed to add todo to list
$("input").keypress(function(event) { 
    if(event.which === 13){
        var todoText=$(this).val();
        $("ul").append("<li><span><i class='fa fa-trash-o'></i></span> " + todoText + "</li>");
        $(this).val("");
    }
});

$("#expand").on("click", function () {
    $("input").slideToggle();
});