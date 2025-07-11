import { Link } from "react-router";
import SocialLogin from "../share/SocialLogin";

const Login = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex items-center justify-center px-4">
        <div className="card w-full max-w-md bg-white shadow-xl rounded-2xl">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-center text-purple-700">
              Welcome Back
            </h2>
            <p className="text-center text-gray-500 mb-6">
              Please login to your account
            </p>

            <form className="space-y-4">
              <div>
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm checkbox-purple-500"
                  />
                  <span className="label-text">Remember me</span>
                </label>
                <a href="#" className="text-purple-600 hover:underline">
                  Forgot password?
                </a>
              </div>

              <button className="btn w-full bg-purple-600 text-white hover:bg-purple-700">
                Login
              </button>
              <SocialLogin />

              <p className="text-center text-sm text-gray-600 mt-4">
                Don’t have an account?
                <Link
                  to={"/register"}
                  className="text-purple-600 hover:underline ml-1"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
