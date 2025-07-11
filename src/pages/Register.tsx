/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router";
import SocialLogin from "../share/SocialLogin";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser }: any = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    createUser(data.email, data.password)
      .then((res: any) => {
        if (res?.user) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Registration Successful!",
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
          title: "Registration Failed!",
          text: error.message,
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex items-center justify-center px-4">
        <div className="card w-full max-w-md bg-white shadow-xl rounded-2xl">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-center text-purple-700">
              Create Account
            </h2>
            <p className="text-center text-gray-500 mb-6">
              Please fill in the details to register
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="label">
                  <span className="label-text font-medium">Full Name</span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  {...register("email")}
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
                  {...register("password")}
                  type="password"
                  placeholder="Create a password"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    Upload Profile Photo
                  </span>
                </label>
                <input
                  {...register("img")}
                  type="file"
                  className="file-input file-input-bordered w-full"
                  accept="image/*"
                />
              </div>

              <button className="btn w-full bg-purple-600 text-white hover:bg-purple-700">
                Register
              </button>
              <SocialLogin />
              <p className="text-center text-sm text-gray-600 mt-4">
                Already have an account?
                <Link
                  to={"/login"}
                  className="text-purple-600 hover:underline ml-1"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
