
/// <reference path="../angularjs/angular.d.ts" />
/// <reference path="../angularjs/angular-resource.d.ts" />
/// <reference path="library.ts" />

alert("running");
var app = angular.module("MediaApp", []);


app.controller("MediaController", function ($scope) {

    //let MediaElements: NodeListOf<Element> = document.getElementsByClassName("repeater"), element;  
    let Library = new Data.MediaLibrary();


    
    $scope.ListProducts = function () {
        alert("klick");
    };       $scope.Products = GetProductArray();


    $scope.ListBooks = function () {
        alert("klick");
        $scope.Books = Library.BookArray;
    };

    $scope.AddBook = function () {
        AddNewBook();

    }

    function GetProductArray(): Data.Product[] {    

        let ProductArray: Data.Product[] = [];

        ProductArray = ProductArray.concat(Library.BookArray);
        ProductArray = ProductArray.concat(Library.DVDArray);
        ProductArray = ProductArray.concat(Library.GameArray);
        
        return ProductArray;
     
    }   
     
    function AddNewBook() {
      alert("new");

        var title = $scope.BookTitle;
        var author = $scope.BookAuthor;
        var name = $scope.BookTitle;
        var category = $scope.BookCategory;
        var price = $scope.BookPrice;
        var artNR = $scope.BookArtNR;
       

        Library.AddBook(new Data.Book(title, author, name, category, price, artNR));
     
    }
});



