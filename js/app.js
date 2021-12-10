function myFunction(x) {
    x.classList.toggle("change");
}

//=================================================================//

$("#div-contato").on("mouseover", function(e) {
    $("#div-contato").css("border", "4px solid #29b7dd");
    $("#div-contato").css("transition", "all .5s");
    $("#div-contato").css("border-radius", "8px");
    $("#p-span-icone").css("color", "#29b7dd");
    $("#p-span-icone").css("border-color", "#6362e7");
});

$("#div-contato").on("mouseleave", function(e) {
    $("#div-contato").css("border", "8px solid transparent");
    $("#p-span-icone").css("color", "#999999");
    $("#p-span-icone").css("border-color", "#999999")
});

//=================================================================//

$("#s-div-contato").on("mouseover", function(e) {
    $("#s-div-contato").css("border", "4px solid #29b7dd");
    $("#s-div-contato").css("transition", "all .5s");
    $("#s-div-contato").css("border-radius", "8px");
    $("#s-span-icone").css("color", "#29b7dd");
    $("#s-span-icone").css("border-color", "#6362e7");
});

$("#s-div-contato").on("mouseleave", function(e) {
    $("#s-div-contato").css("border", "8px solid transparent");
    $("#s-span-icone").css("color", "#999999");
    $("#s-span-icone").css("border-color", "#999999")
});

//=================================================================//

$("#t-div-contato").on("mouseover", function(e) {
    $("#t-div-contato").css("border", "4px solid #29b7dd");
    $("#t-div-contato").css("transition", "all .5s");
    $("#t-div-contato").css("border-radius", "8px");
    $("#t-span-icone").css("color", "#29b7dd");
    $("#t-span-icone").css("border-color", "#6362e7");
});

$("#t-div-contato").on("mouseleave", function(e) {
    $("#t-div-contato").css("border", "8px solid transparent");
    $("#t-span-icone").css("color", "#999999");
    $("#t-span-icone").css("border-color", "#999999")
});

//=================================================================//