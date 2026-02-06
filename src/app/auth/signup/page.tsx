"use client";

export default function SignupPage() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-center justify-center">
          Create Account
        </h2>

        <div className="space-y-3">
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full"
          />

          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />
        </div>

        <div className="card-actions flex-col mt-4">
          <button className="btn btn-primary w-full">
            Sign Up
          </button>

          <p className="text-sm text-center mt-2">
            Already have an account?
            <a
              href="/auth/login"
              className="link link-primary"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
