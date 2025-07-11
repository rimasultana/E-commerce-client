import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-200 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-purple-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <button className="btn bg-purple-600 text-white hover:bg-purple-700">
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
