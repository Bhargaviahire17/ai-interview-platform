"use client";

import { useState, useEffect } from "react";

const questions = [
  {
    id: 1,
    text: "Introduce yourself and your experience.",
    readTime: 5,
    answerTime: 30,
  },
  {
    id: 2,
    text: "Explain a challenging project you worked on.",
    readTime: 5,
    answerTime: 30,
  },
];


export default function CandidateInterviewPage() {
  const [step, setStep] = useState<
    "instructions" | "read" | "answer" | "complete"
  >("instructions");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(0);

  const currentQuestion = questions[currentIndex];


  useEffect(() => {
    if (step === "read" || step === "answer") {
      const interval = setInterval(() => {
        setTimer((t) => t - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [step]);

  useEffect(() => {
    if (timer === 0) {
      if (step === "read") {
        setStep("answer");
        setTimer(currentQuestion.answerTime);
      } else if (step === "answer") {
        if (currentIndex + 1 < questions.length) {
          setCurrentIndex((i) => i + 1);
          setStep("read");
          setTimer(questions[currentIndex + 1].readTime);
        } else {
          setStep("complete");
        }
      }
    }
  }, [timer]);


  if (step === "instructions") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
        <div className="card max-w-lg bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Interview Instructions</h2>
            <ul className="list-disc ml-5 text-sm space-y-1">
              <li>You will see each question first.</li>
              <li>You will have time to read, then answer.</li>
              <li>Your audio will be recorded.</li>
              <li>Please ensure your microphone works.</li>
            </ul>

            <button
              className="btn btn-primary mt-4"
              onClick={() => {
                setStep("read");
                setTimer(currentQuestion.readTime);
              }}
            >
              Start Interview
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === "read") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
        <div className="card max-w-xl bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <p className="text-sm text-gray-500">
              Question {currentIndex + 1} of {questions.length}
            </p>

            <h2 className="text-lg font-semibold mt-2">
              {currentQuestion.text}
            </h2>

            <div className="mt-4">
              <span className="badge badge-info">
                Read Time: {timer}s
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === "answer") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
        <div className="card max-w-xl bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <h2 className="text-lg font-semibold">
              {currentQuestion.text}
            </h2>

            <div className="mt-3">
              <span className="badge badge-warning">
                Answer Time: {timer}s
              </span>
            </div>

            <div className="mt-6">
              <button className="btn btn-error btn-circle mb-2">
                ●
              </button>
              <p className="text-sm text-gray-500">
                Recording in progress...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === "complete") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
        <div className="card max-w-lg bg-base-100 shadow-xl text-center">
          <div className="card-body">
            <h2 className="card-title justify-center">
              Interview Completed 🎉
            </h2>
            <p className="text-sm text-gray-600">
              Thank you for completing the interview.
            </p>
            <p className="text-sm text-gray-500">
              You may now close this page.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
