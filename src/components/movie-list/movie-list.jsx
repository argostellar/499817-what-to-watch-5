import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import SmallMovieCard from "../small-movie-card/small-movie-card";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentCard: 0,
      isHovered: false,
      hoveredCardKey: null,
    };

    this.films = props.films;
    this.smallCards = [];
  }

  clickHandler(evt) {
    evt.preventDefault();
  }

  // setCurrentCard() {
  //   // меняет текущий стейт на противоположный
  //   // выходит, что для карточек нужен стейт (прокидывать через колбэк)
  //   // или нет.
  //   // можно ли прокидывать состояние из дочерних в родительские?
  //   // или это не нужно делать?
  //   this.setState(updater, callback)
  //   this.state.isHovered = !this.state.isHovered;
  // };

  _onMouseEnterHandler() {
    this.setState(() => ({
      hoveredCardKey: this.key,
    }));
  }

  someFunc(index) {
    let key = `KN-${index}`;
    this.smallCards[index] = key;
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {this.films.map((item, index) => (
          <SmallMovieCard
            film={this.films[index]}
            onClick={() => {}}
            onMouseEnter={() => {
              this.setState((state) => {
                return {hoveredCardKey: `KN-${index}`,
                  isHovered: !state.isHovered};
              });
            }}
            onMouseLeave={() => {
              this.setState((state) => {
                return {hoveredCardKey: null,
                  isHovered: !state.isHovered};
              });
            }}
            key={`KN-${index}`} />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MovieList;
