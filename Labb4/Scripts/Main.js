

/* konstuktor metoder */
Person = function (name, canHasCar) {

    this.name = name;
    this.CanHasCar = canHasCar;

};
Car = function (name) {
    this.name = name;

};


/* NameSpace och dess metoder */
var NameSpace =  {};

NameSpace.Populate = function () {

    NameSpace.EmpArray.push(new Person("Jacc",  true));
    NameSpace.EmpArray.push(new Person("Sture", true));
    NameSpace.EmpArray.push(new Person("Jesus", false));

    NameSpace.CarArray.push(new Car("Fiat-01"));
    NameSpace.CarArray.push(new Car("BMW-07"));
    NameSpace.CarArray.push(new Car("KIA-15"));

};
NameSpace.PrintArray = function (Array){
    var Text = "";
    for (var i = 0; i < Array.length; i++) {
        Text += Array[i].name + "</br>"
    }
    NameSpace.TextOutput.html(Text);

};
NameSpace.PrintEmpsThatCanHasCar = function (){

    var promise = $.Deferred();
    var empFound = false;

    /*Vet inte vad "key" är , men det funkar inte utan den:P*/
    $.each(NameSpace.EmpArray, function (key, emp) {

        if(emp.CanHasCar){

            NameSpace.TextOutput.append('<p>' +emp.name+'</p>');
            empFound = true;
        }
    });

    if(empFound){

        promise.resolve();
    }
    else{

        promise.reject();
    }

    return promise.promise();
};


/* När sidan laddats */
$(document).ready(function () {

    NameSpace.Error      = $("#ErrorDiv");
    NameSpace.TextOutput = $("#TextOutput");
    NameSpace.CarArray   = [];
    NameSpace.EmpArray   = [];

    NameSpace.Populate();
    
    /*Promise function*/
    $("#CanHasEmps-Btn").click(function () {

        NameSpace.Error.html("");
        NameSpace.TextOutput.html("");

        NameSpace.PrintEmpsThatCanHasCar().then(
            /*OnSuccses*/function () {},
            /*OnFail*/function () {
                NameSpace.Error.html("Inga anställda med tillgång till bil hittades;")
            }

        ).always(function () { /*.always, körs alltid*/
            NameSpace.TextOutput.append("DONE SEARCHING!");
        });
    });
    /*On Click Metoder*/
    $("#Emp-Btn").click(function () {

        NameSpace.TextOutput.html("");
        NameSpace.PrintArray(NameSpace.EmpArray);
    });
    $("#Cars-Btn").click(function () {

        NameSpace.TextOutput.html("");
        NameSpace.PrintArray(NameSpace.CarArray);
    });


});









