import logo from "../../assets/images/login_Signup/logo.png";
import bgimg from "../../assets/images/login_Signup/signup-forgot-bg.png";
import { NavLink } from "react-router-dom";
import google from "../../assets/images/login_Signup/google-icon.png";
import facebook from "../../assets/images/login_Signup/fb-icon.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../../services/validation/signup.validation";
import DynamicInput from "../../components/DynamicInput";
import { signupinputfield } from "../../services/json/signup.input";
import type { signupformvalue } from "../../type/interface/auth.interface";
import { clearAuthState, signUp } from "../../store/slices/auth.slice";
import { useAppDispatch, useAppSeletor } from "../../services/helper/reduxstore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Signup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { loading, error } = useAppSeletor((state) => state.auth);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const roleFromPath =
    location.pathname === "/signup/agent"
      ? "agent"
      : location.pathname === "/signup/super-admin"
      ? "admin"
      : "user";
  const roleLabel =
    roleFromPath === "agent" ? "Agent" : roleFromPath === "admin" ? "Super Admin" : "User";
  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm<signupformvalue>({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      role: roleFromPath,
    },
  });

  useEffect(() => {
    dispatch(clearAuthState());
  }, [dispatch]);

  useEffect(() => {
    setValue("role", roleFromPath);
  }, [roleFromPath, setValue]);

  const onSubmit = async (data: signupformvalue) => {
    try {
      const response = await dispatch(signUp({ ...data, role: roleFromPath })).unwrap();
      setSuccessMessage(response?.message ?? "Signup successful. Please verify your email.");
      reset();
      setTimeout(() => navigate(`/verify-email?email=${encodeURIComponent(data.email)}`), 1000);
    } catch (_error) {
      setSuccessMessage(null);
    }
  };
  return (
    <div>
      <div className="bg-white">
        <div className="flex w-full min-h-screen">
          <div
            className="hidden lg:flex lg:fixed lg:left-0 lg:top-0 lg:w-1/2 lg:h-screen relative bg-cover bg-center"
            style={{ backgroundImage: ` url(${bgimg})` }}
          >
            <div className="relative z-10 w-full flex flex-col justify-between p-12 lg:p-16 h-full">
              <div className="flex justify-start mt-4">
                <div className="text-center flex flex-col items-center gap-3">
                  <NavLink to="/">
                    <img
                      src={logo}
                      alt="logo"
                      className="w-[74px] h-[92px]"
                      loading="lazy"
                    />
                  </NavLink>
                </div>
              </div>

              <div className="text-white max-w-md mb-8">
                <h2 className="text-4xl font-bold mb-4">
                  Find your sweet home
                </h2>
                <p className="text-gray-200 text-sm leading-relaxed font-medium">
                  Schedule visits in just a few clicks and discover a curated
                  collection of premium estates.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:ml-[50%] flex flex-col min-h-screen">
            <div className="flex-1 flex flex-col justify-center py-12 px-6 sm:px-12 md:px-16 w-full max-w-xl mx-auto">
              <div className="flex lg:hidden justify-center mb-10">
                <div className="text-center flex flex-col items-center gap-2">
                  <NavLink to="/">
                    <img
                      src={logo}
                      alt="logo"
                      className="w-[74px] h-[92px]"
                      loading="lazy"
                    />
                  </NavLink>
                </div>
              </div>

              <h1 className="text-3xl sm:text-[2.5rem] leading-tight font-bold text-gray-900 mb-3">
                Create a new {roleLabel} account
              </h1>
              <p className="text-gray-500 text-sm mb-10">
                Sign up to get started with your curated collection.
              </p>
              {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
              {successMessage && <p className="mb-4 text-sm text-green-600">{successMessage}</p>}

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                {signupinputfield?.map((input) => (
                  <DynamicInput
                  key={input.name}
                    label={input.label}
                    name={input.name}
                    register={register}
                    required={input.required}
                    type={input.type}
                    placeholder={input.placeholder}
                    errors={errors}
                  />
                ))}
               
                <div className="flex items-center mb-8 mt-6">
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-[#111827] focus:ring-[#111827] cursor-pointer"
                    />
                    <span className="ml-3 text-sm text-gray-500 group-hover:text-gray-800 transition-colors">
                      I agree to the
                      <span className="font-bold text-gray-700">
                        Terms and Conditions
                      </span>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#111827] text-white rounded-md py-3.5 text-base font-medium transition-all duration-300 hover:bg-[#FCA311] hover:shadow-md active:scale-[0.98] cursor-pointer mb-8"
                >{loading ? "Submitting..." : "Submit"}</button>
              </form>

              <div className="flex items-center mb-8">
                <div className="flex-1 h-px bg-gray-100"></div>
                <span className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Instant Sign Up
                </span>

                <div className="flex-1 h-px bg-gray-100"></div>
              </div>

              {/* <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  type="button"
                  className="flex-1 flex items-center justify-center gap-3 py-3 border border-gray-100 bg-white rounded-md transition-all duration-300 hover:border-[#FCA311] hover:bg-gray-50 hover:shadow-sm active:scale-[0.98]"
                >
                  <img
                    src={google}
                    alt="google-icon"
                    className="h-[21px] w-[21px]"
                    loading="lazy"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    Google
                  </span>
                </button>
                <button
                  type="button"
                  className="flex-1 flex items-center justify-center gap-3 py-3 border border-gray-100 bg-white rounded-md transition-all duration-300 hover:border-[#FCA311] hover:bg-gray-50 hover:shadow-sm active:scale-[0.98]"
                >
                  <img
                    src={facebook}
                    alt="fb-icon"
                    className="h-[18px] w-[18px]"
                    loading="lazy"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    Facebook
                  </span>
                </button>
              </div> */}

              <div className="text-center mt-2">
                <p className="text-sm text-gray-600">
                  Already have an account?
                  <NavLink
                    to="/login"
                    className="text-[#4A90E2] hover:text-blue-700 font-medium transition-colors"
                  >
                    Login
                  </NavLink>
                </p>
                {/* <p className="text-xs text-gray-500 mt-2">
                  Signup as
                  <NavLink to="/signup/user" className="text-[#4A90E2] ml-1">User</NavLink> |
                  <NavLink to="/signup/agent" className="text-[#4A90E2] ml-1">Agent</NavLink> |
                  <NavLink to="/signup/super-admin" className="text-[#4A90E2] ml-1">Super Admin</NavLink>
                </p> */}
              </div>
            </div>

            <div className="w-full mt-auto flex flex-col sm:flex-row justify-between items-center px-6 sm:px-12 md:px-16 py-8 bg-white text-[9px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-widest gap-4 sm:gap-0">
              <div className="flex gap-6">
                <a href="#" className="hover:text-gray-700 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-gray-700 transition-colors">
                  Terms
                </a>
              </div>
              <div>
                © 2026
                <NavLink
                  to="/"
                  className="hover:text-gray-700 transition-colors"
                >
                  Infinity Horizon
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
