import PropTypes from "prop-types";
import StarRating from "./StarRating";

export default function CourseCard({
  image,
  title,
  description,
  teacher,
  teacherAvatar,
  role,
  rating,
  reviews,
  price,
}) {
  return (
    <div className="flex flex-col gap-4 bg-white shadow-md rounded-lg !p-5 hover:shadow-lg transition">
      <div className="flex md:flex-col gap-4 overflow-hidden ">
        <img
          src={image}
          alt={title}
          className="w-20.5 h-20.5 md:w-full md:h-40 object-cover rounded-lg"
        />

        <div className=" flex flex-col gap-4 p-4">
          <h3 className="text-base font-semibold mb-1">{title}</h3>

          <p className="hidden md:flex text-sm font-medium text-gray-500 line-clamp-2">
            {description}
          </p>

          <div className="flex items-center  gap-2 mt-3">
            <img
              src={teacherAvatar}
              alt={teacher}
              className="w-10 h-10 rounded-lg"
            />
            <div className="flex flex-col gap-1">
              <p className="text-sm text-[var(--text-dark)] font-semibold ">
                {teacher}
              </p>
              <p className="text-sm text-[var(--text-disable)]">
                {role}
                <span className="font-semibold text-[var(--text-dark-secondary)]">
                  Gojek
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <StarRating rating={rating} reviews={reviews} />

        <p className="text-2xl font-bold  text-green-600">Rp {price}</p>
      </div>
    </div>
  );
}

CourseCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  teacher: PropTypes.string.isRequired,
  teacherAvatar: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
