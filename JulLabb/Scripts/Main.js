





var App = angular.module("JulLabb", []);
var Movies = [];
var Users = [];


App.factory('MovieFactory',function () {


    App.PopulateMovies();
    var factory = {};

    factory.GetMovies = function(){
        return Movies;
    };

    return factory;
});
// the "$q" is http://stackoverflow.com/a/22379786
App.factory('LoginFactory', function ($q) {


   App.PopulateUsers();
   var factory = {};

    factory.Login = function (userNameFromInput, password) {

            var promise = $q.defer();
            var MatchingUser = {};
            var found = false;

           angular.forEach(Users, function (User,key) {

               if (User.Name == userNameFromInput && User.Pass == password){
                   MatchingUser = User;
                   found = true;
               }
           });

           if(found)
           {
            promise.resolve(MatchingUser);
           }
           else
           {
            promise.reject("Username and/or Password is incorrect, pls try again"); //FailMsg
           }

           return promise.promise;
    };

    factory.GetStoredUser = function () {

            var promise = $q.defer();
            var storedUser = localStorage.storedUser;

            if (storedUser !== null)
            { alert("storeduser");
               promise.resolve(JSON.parse(storedUser));
            }
            else
            {
                promise.reject();
            }
            return promise.promise;
    };

    return factory;
});


var controllers = {};

controllers.MovieController = function($scope,$window, MovieFactory){

    $scope.Movies = MovieFactory.GetMovies();
};
controllers.LogInController = function ($scope,$window, LoginFactory) {

  $scope.LogIn = function () {

      var userNameFromInput = $scope.userNameInput;
      var passfromInput = $scope.PassWordInput;

    LoginFactory.Login(userNameFromInput, passfromInput).then(

        //*OnSuccses (promise.resolve)
        function (MatchingUser) {
            sessionStorage.User = MatchingUser.Name;
            alert(sessionStorage.User);
            if($scope.loginRemember)
            {
                alert("remember");
                localStorage.storedUser = JSON.stringify(MatchingUser);
            }
            else
            {
                localStorage.removeItem("storedUser");
            }

            window.location.href = "index.html";
        },
        //OnFail (promise.reject)
        function (FailMsg) {
            $scope.LoginFail = FailMsg;
        }
    )};

    $scope.LoggedIn = function(){

        if(sessionStorage["User"]){
            alert("sessionuser");
            $scope.LoggedInUser = "Logged in As: " + sessionStorage.User;
        }
        else{
            alert("!sessionuser");
            window.location.href = "Login.html";
        }
    };
    $scope.GetStoredUser = function () {
        LoginFactory.GetStoredUser().then(
            function (storedUser) {
                $scope.userNameInput = storedUser.Name;
                $scope.PassWordInput = storedUser.Pass;
                $scope.loginRemember = true;
            },
            function () {
                alert("!notStored")
            }
        )
    };
};

App.controller(controllers);
App.PopulateMovies =  function(){

    alert("addmovies");
  Movies.push({Title: "Mannen som klev upp för en kulle och kom ner från ett berg", Year: "1992"});
  Movies.push({Name:"" , Year:"" });
  Movies.push({Name:"" , Year:"" });
  Movies.push({Name:"" , Year:"" });
  Movies.push({Name:"" , Year:"" });
  Movies.push({Name:"" , Year:"" });
  Movies.push({Name:"" , Year:"" });
  Movies.push({Name:"" , Year:"" });
  Movies.push({Name:"" , Year:"" });
  Movies.push({Name:"" , Year:"" });


};
App.PopulateUsers = function () {

    Users.push({Name: "Jacc", Pass: "lösen"});
    Users.push({Name: "Sture", Pass: "lösen"});
    Users.push({Name: "", Pass: ""});
    Users.push({Name: "", Pass: ""});
    Users.push({Name: "", Pass: ""});
    alert("added movies");
};




