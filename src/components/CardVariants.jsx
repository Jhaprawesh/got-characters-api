import { useNavigate } from "react-router-dom";

export default function CardVariants({
  id,
  family,
  imageUrl,
  firstName,
  title,
}) {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(`character/${id}`);
  };

  const familyStyle = (family) => {
    switch (family) {
      case "Stark":
        return "bg-blue-100 border-blue-500";
      case "Lannister":
        return "bg-red-100 border-red-500";
      case "House Targaryen":
        return "bg-gray-100 border-gray-500"; // Updated class string
      case "Baratheon":
        return "bg-yellow-100 border-yellow-500";
      default:
        return "bg-white border-gray-300";
    }
  };

  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg my-auto relative ${familyStyle(
        family
      )}`}
    >
      <img
        className="w-full h-128 object-cover"
        src={imageUrl}
        alt={firstName}
      />
      <span className="bg-green-100 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300 absolute top-0 left-0">
        {family}
      </span>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{firstName}</div>
        <p className="text-gray-700 text-base">{title}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
          onClick={handleLearnMore}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
