// Starter data
const movies = [
  { title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { title: "Frozen", genre: "Animation", rating: 7.5 },
  { title: "The Godfather", genre: "Crime", rating: 9.2 },
  { title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// Start coding here...
//Recommendation function with default minRating = 8
const recommend = ({ rating }, minRating = 8) => rating >= minRating;

//Filter movies with rating ≥ 8
const recommendedMovies = movies.filter(movie => recommend(movie));

//Format titles "
const formattedList = recommendedMovies.map(
  ({ title, genre, rating }) => `${title} (${genre}) - ${rating} ⭐`
);

// Display on the page
document.getElementById("movie-list").innerHTML = formattedList.join("<br>");
