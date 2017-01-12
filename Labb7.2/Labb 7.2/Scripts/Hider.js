/// <reference path="typings/jquery/jquery.d.ts" />
$(document).ready(function() {


    HideMedia();

    $("#viewProducts").on('click', function () {
        HideMedia();
        $("#ProductDiv").show();

    });
    $("#viewBooks").on('click', function() {
        HideMedia();
        $("#BookDiv").show();

    });
    $("#viewAddBook").on('click', function() {
        HideMedia();
      
        $("#AddDiv").show();

    });

});


function HideMedia() {
    $("#ProductDiv").hide();
    $("#BookDiv").hide();
    $("#AddDiv").hide();
}