import PropTypes from "prop-types";

// строчка для линтера
import Component from "../components/component/component";

Component.propTypes = {
  // shape или exact?
  // как хранить файлы валидации вне?
  films: PropTypes.arrayOf(
      PropTypes.shape(
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
      ).isRequired
  ).isRequired,
};
