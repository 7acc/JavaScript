



$(document).ready(function() {

    $("#Knappen").on('click', function (e) {

        e.preventDefault();
        DoStuff();

    });

});
function DoStuff() {

    var text = "";

    $("#formen").find("input[type!='submit']").each(function(i, field) {

        text += field.value + "\n";

    });
    $("#hiddenText").val(text);
    $("#hiddenText").show();
    $("#formen").hide();

};
