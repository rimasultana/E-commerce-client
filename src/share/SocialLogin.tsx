/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleLogin }: any = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res: any) => {
        if (res?.user) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Google Login Successful!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/");
      })
      .catch((error: any) => {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Login Failed!",
          text: error.message,
          showConfirmButton: false,
          timer: 2000,
        });
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
