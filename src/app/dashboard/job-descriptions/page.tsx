"use client";

import { useState } from "react";

type JobDescription = {
  id: number;
  title: string;
  role: string;
  location: string;
  experience: string;
};

const initialJDs: JobDescription[] = [
  {
    id: 1,
    title: "Frontend Developer",
    role: "React Developer",
    location: "Pune",
    experience: "2-4 Years",
  },
  {
    id: 2,
    title: "Backend Developer",
    role: "Node.js Developer",
    location: "Remote",
    experience: "3-5 Years",
  },
];

export default function JobDescriptionsPage() {
  const [jds, setJds] = useState<JobDescription[]>(initialJDs);
  const [open, setOpen] = useState(false);

  return (
    <div>
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Job Descriptions
        </h1>
        <button
          className="btn btn-primary"
          onClick={() => setOpen(true)}
        >
          Create JD
        </button>
      </div>

      <div className="overflow-x-auto bg-base-100 rounded-lg shadow">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Role</th>
              <th>Location</th>
              <th>Experience</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jds.map((jd) => (
              <tr key={jd.id}>
                <td>{jd.title}</td>
                <td>{jd.role}</td>
                <td>{jd.location}</td>
                <td>{jd.experience}</td>
                <td>
                  <button className="btn btn-sm btn-ghost">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      {open && (
        <div className="modal modal-open">
          <div className="modal-box max-w-2xl">
            <h3 className="font-bold text-lg mb-4">
              Create Job Description
            </h3>

            <div className="space-y-3">
              <input
                className="input input-bordered w-full"
                placeholder="Job Title"
              />
              <input
                className="input input-bordered w-full"
                placeholder="Role"
              />
              <input
                className="input input-bordered w-full"
                placeholder="Location"
              />
              <input
                className="input input-bordered w-full"
                placeholder="Experience (e.g. 2-4 Years)"
              />

              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Job Responsibilities"
                rows={3}
              />

              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Requirements"
                rows={3}
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
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
