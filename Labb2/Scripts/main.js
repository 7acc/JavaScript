/**
 * Created by 7acc on 2016-12-28.
 */









var användare = [];
$(document).ready(function() {
    populate();

   $("#Knappen").click(function(e){

       e.preventDefault();
       DoStuff();

   });
   $("#Hitta").click(function(e){
    FindUser();
});

});
function DoStuff() {

    var formen    = $("#formen");
    var errorDiv  = $("#errorDiv");
    var TextField = $("#hiddenText");
    var ageField  = document.getElementsByName("Age")[0];
    var text      = "";


    alert(ageField.value);
    if(ValidateAge(ageField.value)){

        formen.find("input[type!='submit']").each(function(i, field) {

            if(field.value != "") {
                text += field.value + "\n";
            }
        });
        text += GetCalculatedAge(10,ageField.value);

        TextField.css("background-color", "#BEF2A4");
        TextField.val(text);
        TextField.show();
        errorDiv.html("");
        formen.hide()
    }
    else{

        errorDiv.html(ageField.value + "är inte en giltlig ålder hörredu!!!")
        errorDiv.css('background-color', "#FFA5A5");
    }
}

function GetCalculatedAge(yearsBack, age){

    var newAge = age - yearsBack;
    return "För " + yearsBack + "år sedan var du " + newAge + " år gammal."

}
function ValidateAge(age){

    if(age > 1 && age < 120)
    {

        return true;
    }
    else
    {
        return false;
    }

}

function FindUser() {

    var UserNameFormInput = document.getElementsByName("uname")[0];

    $.each(användare, function (key, user) {

        if(user.UserName == UserNameFormInput){
            alert("user Found");
        }
        else{
         alert("No user");
        }
    });
};


function user(firstName, lastName, userName) {
    this.UserName = userName;
    this.FirstName = firstName;
    this.LastName = lastName;
}

function populate(){
    användare.push(new user("Jacc", "Liden brouneus", "7acc"));
    användare.push(new user("Sture","Thuren", "Shtore"));
    användare.push(new user("Jesus","Kristus", "TheOne"));
}