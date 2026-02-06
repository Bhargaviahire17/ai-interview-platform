"use client";

import { useState } from "react";

type Workspace = {
  id: number;
  name: string;
  description: string;
};

const initialWorkspaces: Workspace[] = [
  {
    id: 1,
    name: "Frontend Hiring",
    description: "React & UI developer interviews",
  },
  {
    id: 2,
    name: "Backend Hiring",
    description: "Node.js & API developer interviews",
  },
];

export default function DashboardPage() {
  const [workspaces, setWorkspaces] =
    useState<Workspace[]>(initialWorkspaces);
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Workspaces</h1>
        <button
          className="btn btn-primary"
          onClick={() => setOpen(true)}
        >
          Create Workspace
        </button>
      </div>

      {workspaces.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {workspaces.map((ws) => (
            <div
              key={ws.id}
              className="card bg-base-100 shadow"
            >
              <div className="card-body">
                <h2 className="card-title">{ws.name}</h2>
                <p className="text-sm text-gray-500">
                  {ws.description}
                </p>

                <div className="card-actions justify-end mt-4">
                  <a
                    href="/dashboard/candidates"
                    className="btn btn-sm btn-outline"
                  >
                    Open
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
       
        <div className="flex flex-col items-center justify-center py-20 bg-base-100 rounded shadow">
          <p className="text-lg font-medium mb-2">
            No workspaces found
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Create a workspace to start hiring.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => setOpen(true)}
          >
            Create Workspace
          </button>
        </div>
      )}
   
      {open && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">
              Create Workspace
            </h3>

            <input
              className="input input-bordered w-full mb-3"
              placeholder="Workspace Name"
            />

            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Description"
              rows={4}
            />

            <div className="modal-action">
              <button
                className="btn"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <button className="btn btn-primary">
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

