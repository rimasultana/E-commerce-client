/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const SocialLogin = () => {
  const { googleLogin }: any = useContext(AuthContext);
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res: any) => {
        console.log(res);
      })
      .catch((error: any) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="divider text-sm text-purple-600">OR</div>

      <button
        onClick={handleGoogleLogin}
        className="btn w-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 flex items-center justify-center gap-2"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5"
        />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
