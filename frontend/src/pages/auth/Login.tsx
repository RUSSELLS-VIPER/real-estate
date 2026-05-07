import { NavLink } from "react-router-dom";
import bgimage from "../../assets/images/login_Signup/login-bg.png";
import logo from "../../assets/images/login_Signup/logo.png";
import googleicon from "../../assets/images/login_Signup/google-icon.png";
import fbicon from "../../assets/images/login_Signup/fb-icon.png";
import { useForm } from "react-hook-form";
import type { Loginformvalue } from "../../type/interface/auth.interface";
import { loginSchema } from "../../services/validation/login.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import DynamicInput from "../../components/DynamicInput";
import { logininputfield } from "../../services/json/login.input";
import { useAppDispatch, useAppSeletor } from "../../services/helper/reduxstore";
import { clearAuthState, login } from "../../store/slices/auth.slice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error } = useAppSeletor((state) => state.auth);
  const {
      handleSubmit,
      register,
      reset,
      formState: { errors },
    } = useForm<Loginformvalue>({
      resolver: yupResolver(loginSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    });

    useEffect(() => {
      dispatch(clearAuthState());
    }, [dispatch]);
  
    const onSubmit = async (data: Loginformvalue) => {
      try {
        await dispatch(login(data)).unwrap();
        reset();
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };
  return (
    <div>
      <div className="bg-white">
        <div className="flex w-full min-h-screen">
          <div
            className="hidden lg:flex lg:fixed lg:left-0 lg:top-0 lg:w-1/2 lg:h-screen relative bg-cover bg-center"
            style={{ backgroundImage: `url(${bgimage})` }}
          >
            <div className="relative z-10 w-full flex flex-col justify-between p-12 lg:p-16 h-full">
              <div className="flex justify-start mt-4">
                <div className="text-center flex flex-col items-center gap-3">
                  <NavLink to="/" className="w-[74px] h-[92px]">
                    <img src={logo} alt="logo" loading="lazy" />
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
                  <NavLink to="/" className="w-[74px] h-[92px]">
                    <img src={logo} alt="logo" loading="lazy" />
                  </NavLink>
                </div>
              </div>

              <h1 className="text-3xl sm:text-[2.5rem] leading-tight font-bold text-gray-900 mb-3">
                Welcome Back to Infinity Horizon!
              </h1>
              <p className="text-gray-500 text-sm mb-10">
                Sign in your account to continue your journey.
              </p>
              {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                {logininputfield?.map((input) => (
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

                <div className="flex items-center justify-between mb-8 mt-4">
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-[#111827] focus:ring-[#111827] cursor-pointer"
                    />
                    <span className="ml-2 text-sm text-gray-500 group-hover:text-gray-800 transition-colors">
                      Remember me
                    </span>
                  </label>
                  <NavLink
                    to="/forgot"
                    className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    Forgot Password?
                  </NavLink>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#111827] text-white rounded-md py-3.5 text-base font-medium transition-all duration-300 hover:bg-[#FCA311] hover:shadow-md active:scale-[0.98] cursor-pointer outline-none mb-8"
                >{loading ? "Logging in..." : "Login"}</button>
              </form>

              <div className="flex items-center mb-8">
                <div className="flex-1 h-px bg-gray-100"></div>
                <span className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Instant Sign Up
                </span>
                <div className="flex-1 h-px bg-gray-100"></div>
              </div>

              {/* <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <button
                  type="button"
                  className="flex-1 flex items-center justify-center gap-3 py-3 border border-gray-200 bg-white rounded-md transition-all duration-300 hover:border-[#FCA311] hover:bg-gray-50 hover:shadow-sm active:scale-[0.98]"
                >
                  <img
                    src={googleicon}
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
                  className="flex-1 flex items-center justify-center gap-3 py-3 border border-gray-200 bg-white rounded-md transition-all duration-300 hover:border-[#FCA311] hover:bg-gray-50 hover:shadow-sm active:scale-[0.98]"
                >
                  <img
                    src={fbicon}
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
                  Don't have an account?
                  <NavLink
                    to="/signup/user"
                    className="text-[#4A90E2] hover:text-blue-700 font-medium transition-colors"
                  >
                    Register
                  </NavLink>
                </p>
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

export default Login;
