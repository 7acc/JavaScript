var Data;
(function (Data) {
    var MediaLibrary = (function () {
        function MediaLibrary() {
            this.BookArray = [];
            this.DVDArray = [];
            this.GameArray = [];
            this.AddBook(new Data.Book("Book1", "författare1", "book1", "fantasy", 10, 1234567));
            this.AddBook(new Data.Book("Book2", "författare2", "book2", "fantasy", 10, 1234568));
            this.AddBook(new Data.Book("Book3", "författare3", "book3", "fantasy", 10, 1234569));
            this.AddBook(new Data.Book("Book4", "författare4", "book4", "fantasy", 10, 1234560));
            this.AddDVD(new Data.DVD("DVD1", "director1", "DVD1", "sci-fi", 43, 123));
            this.AddDVD(new Data.DVD("DVD2", "director2", "DVD2", "sci-fi", 43, 124));
            this.AddDVD(new Data.DVD("DVD3", "director3", "DVD3", "sci-fi", 43, 125));
            this.AddDVD(new Data.DVD("DVD4", "director4", "DVD4", "sci-fi", 43, 126));
            this.AddGame(new Data.Game("Game1", "FPS", "dev1", "game1", "shooter", 100, 987));
            this.AddGame(new Data.Game("Game2", "FPS", "dev2", "game2", "shooter", 100, 986));
            this.AddGame(new Data.Game("Game3", "FPS", "dev3", "game3", "shooter", 100, 985));
            this.AddGame(new Data.Game("Game4", "FPS", "dev4", "game4", "shooter", 100, 984));
        }
        ;
        MediaLibrary.prototype.AddBook = function (newBook) {
            this.BookArray.push(newBook);
        };
        MediaLibrary.prototype.AddDVD = function (newDVD) {
            this.DVDArray.push(newDVD);
        };
        MediaLibrary.prototype.AddGame = function (newGame) {
            this.GameArray.push(newGame);
        };
        return MediaLibrary;
    }());
    Data.MediaLibrary = MediaLibrary;
})(Data || (Data = {}));
