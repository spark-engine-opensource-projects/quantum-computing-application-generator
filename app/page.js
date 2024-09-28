"use client"
import { useState } from 'react';
import DefineProblem from '@/components/DefineProblem';
import QuantumCircuitDesign from '@/components/QuantumCircuitDesign';

const QuantumAppPage = () => {
  const [circuitDesign, setCircuitDesign] = useState(null);
  const [generating, setGenerating] = useState(false); // New state for generating

  const handleSubmission = (designData) => {
    console.log('Received circuit design:', designData);
    setGenerating(true); // Set generating to true

    // Simulate a 5-second delay before displaying the design
    setCircuitDesign(designData);
    setGenerating(false); // Set generating back to false
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        {generating ? (
          // Loading state
          <div className="flex flex-col items-center justify-center">
            <svg
              className="animate-spin h-12 w-12 text-blue-500 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              {/* ... SVG path for the spinner */}
            </svg>
            <p className="text-lg text-gray-700">Generating circuit design...</p>
          </div>
        ) : !circuitDesign ? (
          // Initial state (before submission)
          <>
            <h1 className="text-3xl font-bold mb-6">Define Your Quantum Problem</h1>
            <p className="mb-8 text-gray-700">
              {/* ... */}
            </p>
            <DefineProblem onsubmit={handleSubmission} />
          </>
        ) : (
          // Circuit design display state
          <>
            <h1 className="text-3xl font-bold mb-6">Your Quantum Circuit Design</h1>
            <p className="mb-8 text-gray-700">
              {/* ... */}
            </p>
            <QuantumCircuitDesign designData={circuitDesign} />
            <div className="mt-8">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={() => setCircuitDesign(null)}
              >
                Redefine Problem
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuantumAppPage;