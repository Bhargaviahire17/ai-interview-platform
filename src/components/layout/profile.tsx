"use client";

export default function Profile() {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-8 rounded-full bg-primary text-white flex items-center justify-center">
          B
        </div>
      </label>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40"
      >
        <li><a>Profile</a></li>
        <li><a className="text-error">Logout</a></li>
      </ul>
    </div>
  );
}
