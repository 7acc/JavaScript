var App = angular.module('Converter', []);
App.controller('ConverterController', function ($scope) {
    $scope.ConvertSwe = function () {
        var Crowns = $scope.SweInput;
        var result = ConvertCrownsToEuros(Crowns);
        $scope.Result = Crowns + " Swedish Crowns = " + result + " Euros";
    };
    $scope.ConvertEu = function () {
        var Euros = $scope.EuInput;
        var result = ConvertEurosToCrowns(Euros);
        $scope.Result = Euros + " Euros = " + result + " Swedish Cowns";
    };
});
function ConvertCrownsToEuros(Crowns) {
    return Crowns * 9.23;
}
;
function ConvertEurosToCrowns(Euros) {
    return Euros * 0.11;
}
;
