var React = require('react');
var Movie = require('./Movie');

var MovieList = React.createClass({

  render: function(){

    var movieNodes = this.props.data.map(function(movie){
      return (

        <Movie movie = {movie.movie} key={movie.id} showtimes = {movie.showtimes}>

        <a href={movie.href}>{movie.movie}</a> 

        ------<a className = "showtimes" href = {movie.showtimeshref}>{movie.showtimes}</a> 

        </Movie>
      );
    });

    return (
      <div className="movie-list">
        {movieNodes}
      </div>        
    )
  }
})

module.exports = MovieList;