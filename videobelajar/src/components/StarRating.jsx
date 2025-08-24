import { Star } from "lucide-react";
import PropTypes from "prop-types";

export default function StarRating({ rating, reviews }) {
  const totalStars = 5;

  return (
    <div className="flex items-center gap-1 text-sm mt-1">
      {[...Array(totalStars)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < Math.round(rating)
              ? "text-yellow-500 fill-yellow-500"
              : "text-gray-300"
          }`}
        />
      ))}
      <span className="text-gray-600 ml-1 text-xs">({reviews})</span>
    </div>
  );
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
};
