"use client";

import { useState } from "react";
type Question = {
  id: number;
  text: string;
  timeLimit: number;
};

type QuestionSet = {
  id: number;
  name: string;
  questions: Question[];
};

const initialSets: QuestionSet[] = [
  {
    id: 1,
    name: "Frontend Interview",
    questions: [
      { id: 1, text: "Explain React hooks", timeLimit: 60 },
      { id: 2, text: "What is virtual DOM?", timeLimit: 45 },
    ],
  },
  {
    id: 2,
    name: "Backend Interview",
    questions: [
      { id: 3, text: "Explain REST APIs", timeLimit: 60 },
    ],
  },
];

export default function QuestionsPage() {
  const [sets, setSets] = useState<QuestionSet[]>(initialSets);
  const [openSet, setOpenSet] = useState(false);
  const [expandedSet, setExpandedSet] = useState<number | null>(null);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Questions
        </h1>
        <button
          className="btn btn-primary"
          onClick={() => setOpenSet(true)}
        >
          Create Question Set
        </button>
        
      </div>
      <div className="space-y-4">
        {sets.map((set) => (
          <div
            key={set.id}
            className="bg-base-100 rounded shadow"
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() =>
                setExpandedSet(
                  expandedSet === set.id ? null : set.id
                )
              }
            >
              <h2 className="font-semibold">
                {set.name}
              </h2>
              <span className="text-sm text-gray-500">
                {set.questions.length} questions
              </span>
            </div>

            {expandedSet === set.id && (
              <div className="p-4 border-t space-y-3">
                {set.questions.map((q) => (
                  <div
                    key={q.id}
                    className="flex justify-between items-center bg-base-200 p-3 rounded"
                  >
                    <div>
                      <p>{q.text}</p>
                      <p className="text-sm text-gray-500">
                        Time: {q.timeLimit}s
                      </p>
                    </div>
                    <button className="btn btn-xs btn-ghost">
                      Edit
                    </button>
                  </div>
                ))}

                <button className="btn btn-sm btn-outline mt-2">
                  Add Question
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {openSet && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">
              Create Question Set
            </h3>

            <input
              className="input input-bordered w-full"
              placeholder="Question Set Name"
            />

            <div className="modal-action">
              <button
                className="btn"
                onClick={() => setOpenSet(false)}
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
