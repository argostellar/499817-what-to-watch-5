import PropTypes from "prop-types";

// строчка для линтера
import Component from "../components/component/component";

Component.propTypes = {
  reviews: PropTypes.array.shape(
      {
        userName: PropTypes.string.isRequired,
        userRating: PropTypes.string.isRequired,
        reviewText: PropTypes.string.isRequired,
        date: PropTypes.shape(
            {
              day: PropTypes.number.isRequired,
              month: PropTypes.string.isRequired,
              year: PropTypes.number.isRequired,
            }).isRequired,
      }
  )
};
