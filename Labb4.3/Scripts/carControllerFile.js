
var minApp = angular.module("minApp", []);

minApp.factory("carFactory", function(){
    var Cars = [
        {Brand: 'BMW',   Model: 'M1-2012'},
        {Brand: 'Volvo', Model: 'v70-2000'},
        {Brand: 'Fiat',  Model: 'Whatever-1990'},
        {Brand: 'Scoda', Model: 'Octavia-2001'},
        {Brand: 'DJAAG', Model: 'f-type 1992'},
        {Brand: 'KIA',   Model: 'EEHM-2004'},
        {Brand: 'Ford',  Model: 'GT-1975'}];

    var factory = {};

    factory.getCars = function () {
        alert("hej");
        return Cars;
    };
    factory.AddCar = function (car) {
        Cars.push(car);
    };
});


var controllers = {};
controllers.carController = function ($scope, carFactory) {
    alert("hej");
    $scope.cars = carFactory.getCars();

};
minApp.controller(controllers);
