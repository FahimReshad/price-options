import propTypes from "prop-types";
import { FaCircleCheck } from "react-icons/fa6";
const Features = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center gap-4 h-full">
        <FaCircleCheck className="text-green-500 text-lg" />
        {feature}
      </p>
    </div>
  );
};

Features.propTypes = {
  feature: propTypes.string,
};

export default Features;
