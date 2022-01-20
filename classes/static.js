class Music {
  constructor(music_genre, release_year) {
    this.genre = music_genre;
    this.year = release_year;
  }
  static announcement(message) {
    return `All of the ${message.genre} records will be released in ${message.year}`;
  }
}

message = new Music("jazz", 2023);
const announcement_message = Music.announcement(message);
console.log(announcement_message);

//* "All of the jazz records will be released in 2023"

// -----------------------------------------------

//? The static keyword defines static methods for classes.
//? Static methods are called directly on the class (Car from the example above) - without creating an instance/object (mycar) of the class.
