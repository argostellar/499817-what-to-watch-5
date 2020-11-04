import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
    };

    this.onClick = props.onClick;

    this.film = props.film;

    // нужен ли стейт?
  }

  render() {
    // деструктуризовать переменные из данных фильма
    const {src, name} = this.film;

    return (
    // куда-то прописать обработчики наведения
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image" onClick={this.onClick}>
          <img src={src} alt={name} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title" onClick={this.onClick}>
          <Link to={`/films/:id`} className="small-movie-card__link">{name}</Link>
        </h3>
      </article>
    );
  }
}

// прописать валидацию данных
// если использовать "внешнюю" валидацию, можно ли использовать
// только часть файла валидации?

SmallMovieCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  film: PropTypes.shape(
      {
        name: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        releaseDate: PropTypes.number.isRequired,
        director: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        actors: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ).isRequired,
        duration: PropTypes.shape({
          hours: PropTypes.number.isRequired,
          minutes: PropTypes.number.isRequired,
        }).isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.shape({
          value: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          count: PropTypes.number.isRequired,
        }).isRequired,
      }
  ).isRequired,
};


export default SmallMovieCard;
