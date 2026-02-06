"use client";
import { useState } from "react";

const candidates = [
  {
    id: 1,
    name: "Amit Sharma",
    email: "amit@gmail.com",
    role: "Frontend Developer",
    status: "Shortlisted",
    score: 82,
  },
  {
    id: 2,
    name: "Neha Verma",
    email: "neha@gmail.com",
    role: "Backend Developer",
    status: "Applied",
    score: 68,
  },
  {
    id: 3,
    name: "Rohit Patil",
    email: "rohit@gmail.com",
    role: "UI Intern",
    status: "Rejected",
    score: 40,
  },
];

export default function CandidatesPage() {
  const [open, setOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<any>(null);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Candidates</h1>
        <button
            className="btn btn-primary"
            onClick={() => setOpen(true)}
        >
            Upload Resume
        </button>
      </div>

      <div className="overflow-x-auto bg-base-100 rounded-lg shadow">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Score</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((c) => (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.role}</td>
                <td>
                  <span
                    className={`badge ${
                      c.status === "Shortlisted"
                        ? "badge-success"
                        : c.status === "Rejected"
                        ? "badge-error"
                        : "badge-warning"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>
                <td>{c.score}</td>
                <td>
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-sm">
                      ⋮
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
                    >
                      <li>
                        <a onClick={() => setSelectedCandidate(c)}>
                          View
                        </a>
                      </li>
                      <li><a>Generate Interview</a></li>
                      <li><a className="text-error">Delete</a></li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {open && (
  <div className="modal modal-open">
    <div className="modal-box">
      <h3 className="font-bold text-lg mb-4">
        Upload Resume
      </h3>

      <div className="space-y-3">
        <input
          type="text"
          placeholder="Candidate Name"
          className="input input-bordered w-full"
        />
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Role"
          className="input input-bordered w-full"
        />

        <select
          className="select select-bordered w-full"
          defaultValue=""
        >
         <option value="" disabled>Experience Level</option>
         <option value="fresher">Fresher</option>
         <option value="1-3">1-3 Years</option>
         <option value="3-5">3-5 Years</option>
         <option value="5+">5+ Years</option>
        </select>


        <select
          className="select select-bordered w-full"
          defaultValue=""
        >
         <option value="" disabled>Job Description</option>
         <option value="frontend">Frontend Developer</option>
         <option value="backend">Backend Developer</option>
         <option value="ui">UI Intern</option>
        </select>

        <input
          type="file"
          className="file-input file-input-bordered w-full"
        />
      </div>

      <div className="modal-action">
        <button
          className="btn"
          onClick={() => setOpen(false)}
        >
          Cancel
        </button>
        <button className="btn btn-primary">
          Upload
        </button>
      </div>
    </div>
  </div>
)}

{selectedCandidate && (
  <div className="modal modal-open">
    <div className="modal-box max-w-3xl">
      <h3 className="font-bold text-xl mb-4">
        Candidate Details
      </h3>

      <div className="mb-4">
        <p className="font-semibold">{selectedCandidate.name}</p>
        <p className="text-sm text-gray-500">{selectedCandidate.email}</p>
        <p className="text-sm">{selectedCandidate.role}</p>
      </div>

      <div className="mb-4 flex items-center gap-2">
        <span className="badge badge-info">
          Score: {selectedCandidate.score}
        </span>
        <span className="badge badge-success">
          Recommended
        </span>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Skills</h4>
        <div className="flex gap-2 flex-wrap">
          {["React", "JavaScript", "CSS", "Git"].map((skill) => (
            <span key={skill} className="badge badge-outline">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold mb-2">Work Experience</h4>
        <div className="card bg-base-200 p-3">
          <p className="font-medium">Frontend Developer</p>
          <p className="text-sm text-gray-500">
            ABC Tech • 2022 - 2024
          </p>
          <p className="text-sm">
            Worked on React dashboards and UI components.
          </p>
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Projects</h4>
        <div className="card bg-base-200 p-3">
          <p className="font-medium">ATS Dashboard</p>
          <p className="text-sm">
            Built candidate management system using React.
          </p>
        </div>
      </div>

      <div className="modal-action">
        <button
          className="btn"
          onClick={() => setSelectedCandidate(null)}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
</div>
  );
}
