"use client";

export default function LoginPage() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-center justify-center">
          Login
        </h2>

        <div className="space-y-3">
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
            Login
          </button>

          <p className="text-sm text-center mt-2">
            Don't have an account?
            <a
              href="/auth/signup"
              className="link link-primary"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
