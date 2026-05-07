import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSeletor } from "../../services/helper/reduxstore";
import { clearAuthState, verifyEmail } from "../../store/slices/auth.slice";

type VerifyEmailForm = {
  email: string;
  otp: string;
};

const VerifyEmail = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { loading, error, message } = useAppSeletor((state) => state.auth);
  const emailFromQuery = searchParams.get("email") ?? "";

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<VerifyEmailForm>({
    defaultValues: {
      email: emailFromQuery,
      otp: "",
    },
  });

  useEffect(() => {
    dispatch(clearAuthState());
    if (emailFromQuery) {
      setValue("email", emailFromQuery);
    }
  }, [dispatch, emailFromQuery, setValue]);

  const onSubmit = async (data: VerifyEmailForm) => {
    try {
      await dispatch(verifyEmail(data)).unwrap();
      setTimeout(() => navigate("/login"), 1200);
    } catch {
      // handled by redux error state
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Verify Email</h1>
        <p className="text-sm text-gray-600 mb-6">Enter your email and OTP sent by backend.</p>

        {error && <p className="mb-3 text-sm text-red-600">{error}</p>}
        {message && <p className="mb-3 text-sm text-green-600">{message}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">OTP</label>
            <input
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
              {...register("otp", { required: "OTP is required" })}
              type="text"
              placeholder="Enter OTP"
            />
            {errors.otp && <p className="mt-1 text-xs text-red-600">{errors.otp.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#111827] text-white rounded-md py-2.5 font-medium"
          >
            {loading ? "Verifying..." : "Verify Email"}
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4">
          Already verified?{" "}
          <NavLink to="/login" className="text-blue-600">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;
