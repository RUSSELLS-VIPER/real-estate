import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center mt-20">
      <h2 className="text-3xl font-bold text-red-500">Page Not Found</h2>

      <Link
        to="/"
        className="bg-blue-500 text-white px-4 py-2 rounded inline-block mt-4"
      >
        Back Home
      </Link>
    </div>
  );
};

export default NotFound;