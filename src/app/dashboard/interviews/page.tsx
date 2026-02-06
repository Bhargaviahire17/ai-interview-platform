"use client";
import { useState } from "react";

type InterviewQuestion = {
  q: string;
  transcript: string;
};

type Interview = {
  id: number;
  candidate: string;
  role: string;
  status: "Completed" | "Pending";
  score: number | null;
  recommendation: string | null;
  questions: InterviewQuestion[];
};

const interviews: Interview[] = [
  {
    id: 1,
    candidate: "Amit Sharma",
    role: "Frontend Developer",
    status: "Completed",
    score: 78,
    recommendation: "Strong Hire",
    questions: [
      {
        q: "Explain React hooks",
        transcript:
          "React hooks allow functional components to manage state and lifecycle features.",
      },
      {
        q: "What is useEffect?",
        transcript:
          "useEffect is used to handle side effects like API calls and subscriptions.",
      },
    ],
  },
  {
    id: 2,
    candidate: "Neha Verma",
    role: "Backend Developer",
    status: "Pending",
    score: null,
    recommendation: null,
    questions: [],
  },
];

export default function InterviewsPage() {
  const [selectedInterview, setSelectedInterview] =
    useState<Interview | null>(null);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Interviews</h1>
      <div className="overflow-x-auto bg-base-100 rounded-lg shadow">
        <table className="table">
          <thead>
            <tr>
              <th>Candidate</th>
              <th>Role</th>
              <th>Status</th>
              <th>Score</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {interviews.map((interview) => (
              <tr key={interview.id}>
                <td>{interview.candidate}</td>
                <td>{interview.role}</td>
                <td>
                  <span
                    className={`badge ${
                      interview.status === "Completed"
                        ? "badge-success"
                        : "badge-warning"
                    }`}
                  >
                    {interview.status}
                  </span>
                </td>
                <td>{interview.score ?? "-"}</td>
                <td>
                  <button
                    className="btn btn-sm btn-outline"
                    disabled={interview.status !== "Completed"}
                    onClick={() => setSelectedInterview(interview)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedInterview && (
        <div className="modal modal-open">
          <div className="modal-box max-w-4xl">
            <h3 className="font-bold text-xl mb-2">
              Interview Details
            </h3>

           
            <div className="mb-4">
              <p className="font-semibold">
                {selectedInterview.candidate}
              </p>
              <p className="text-sm text-gray-500">
                {selectedInterview.role}
              </p>
            </div>

          
            <div className="mb-4 flex gap-2">
              <span className="badge badge-info">
                Score: {selectedInterview.score}
              </span>
              {selectedInterview.recommendation && (
                <span className="badge badge-success">
                  {selectedInterview.recommendation}
                </span>
              )}
            </div>

           
            <div className="space-y-4">
              {selectedInterview.questions.map(
                (q: InterviewQuestion, idx: number) => (
                  <div
                    key={idx}
                    className="p-4 bg-base-200 rounded"
                  >
                    <p className="font-semibold mb-1">
                      Q{idx + 1}: {q.q}
                    </p>
                    <p className="text-sm mb-2">
                      {q.transcript}
                    </p>

                    <audio controls className="w-full">
                      <source src="null" />
                    </audio>
                  </div>
                )
              )}

              {selectedInterview.questions.length === 0 && (
                <p className="text-sm text-gray-500">
                  Interview not completed yet.
                </p>
              )}
            </div>

          
            <div className="modal-action">
              <button
                className="btn"
                onClick={() => setSelectedInterview(null)}
              >
                Close
              </button>
              <button className="btn btn-outline">
                Reprocess Interview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
