var React = require("react");

var Movie = React.createClass({

  propTypes: {
    movie: React.PropTypes.string.isRequired,
    showtimes: React.PropTypes.string
  },

  render: function(){
    return (
      <div classname="movie">
        {this.props.children}
      </div>
    );
  }
});

module.exports = Movie;