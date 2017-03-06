var React = require ('react');
var MovieList = require('./MovieList.jsx');

var sampleData = [
  {id:1, movie: "Kong: Skull Island", href: "http://www.imdb.com/title/tt3731562/?ref_=inth_ov_tt", showtimes: "Showtimes", showtimeshref: "http://www.imdb.com/showtimes/title/tt3731562/?ref_=shlc_li_i"},
  {id:2, movie: "John Wick: Chapter 2", href: "http://www.imdb.com/title/tt4425200/?ref_=inth_ov_tt", showtimes: "Showtimes", showtimeshref: "http://www.imdb.com/showtimes/title/tt4425200/?ref_=shlc_li_i"},
  {id:3, movie: "Logan", href: "http://www.imdb.com/title/tt3315342/?ref_=inth_ov_tt", showtimes: "Showtimes", showtimeshref: "http://www.imdb.com/showtimes/title/tt3315342/?ref_=shlc_li_i"},
  {id:4, movie: "Lego Batman Movie", href: "http://www.imdb.com/title/tt4116284/?ref_=inth_ov_tt", showtimes: "Showtimes", showtimeshref: "http://www.imdb.com/showtimes/title/tt4116284/?ref_=shlc_li_i"},
  {id:5, movie: "Moonlight", href: "http://www.imdb.com/title/tt4975722/?ref_=inth_ov_tt", showtimes: "Showtimes", showtimeshref: "http://www.imdb.com/showtimes/title/tt4975722/?ref_=shlc_li_i"},
  {id:6, movie: "La La Land", href: "http://www.imdb.com/title/tt3783958/?ref_=inth_ov_tt", showtimes: "Showtimes", showtimeshref: "http://www.imdb.com/showtimes/title/tt3783958/?ref_=shlc_li_i"},
  {id:7, movie: "The Great Wall", href: "http://www.imdb.com/title/tt2034800/?ref_=inth_ov_tt", showtimes: "Showtimes", showtimeshref: "http://www.imdb.com/showtimes/title/tt2034800/?ref_=shlc_li_i"}
];

var MovieContainer = React.createClass({
  getInitialState: function() {
    return { data: sampleData }
  },

  render: function() {
    return(
      <div className="movie-container">
      <h3> UK Opening This Week</h3>
        <MovieList data={this.state.data} />

        <a className="extra" href="http://www.imdb.com/movies-in-theaters/">See more opening this week</a>
        <br></br>
        <form action = "http://www.imdb.com/showtimes/?ref_=nv_mv_sh_2">
          <input type="submit" value ="Showtimes"/>
        </form>
      </div>
    );
  }

})

module.exports = MovieContainer;