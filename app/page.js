"use client"
import { useState } from 'react';
import DefineProblem from '@/components/DefineProblem';
import QuantumCircuitDesign from '@/components/QuantumCircuitDesign';
import { IconBrandDiscord, IconBrandGithub, IconDownload } from '@tabler/icons-react';

const QuantumAppPage = () => {
  const [circuitDesign, setCircuitDesign] = useState(null);
  const [generating, setGenerating] = useState(false);

  const handleSubmission = (designData) => {
    console.log('Received circuit design:', designData);
    setGenerating(true);

    setCircuitDesign(designData);
    setGenerating(false);
  };

  const downloadDesignAsJSON = () => {
    const fileName = 'quantum-application.json';
    const json = JSON.stringify(circuitDesign, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const href = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = href;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
    <header className="w-full flex items-center justify-between p-4 bg-white shadow-md mb-8">
        <div className="flex items-center">
            <a href="https://sparkengine.ai"><img src="/logo.png" w="100%" h="50px" alt="Logo" className="h-12 mr-2" /></a>
        </div>
        <div className="flex space-x-4">
            <a href="https://discord.gg/VAQA5c32jM" target="_blank" rel="noopener noreferrer">
                <IconBrandDiscord size={24} />
            </a>
            <a href="https://github.com/spark-engine-opensource-projects" target="_blank" rel="noopener noreferrer">
                <IconBrandGithub size={24} />
            </a>
        </div>
    </header>
    <h1 className="text-sm font-medium text-gray-500">Quantum Computing Application Generator</h1>
    <main className="flex-grow flex items-center justify-center w-full mb-12">
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
          <>
            <DefineProblem onsubmit={handleSubmission} />
          </>
        ) : (
          <>
           <div className="flex flex-col">
           <div className="mt-8">
            <QuantumCircuitDesign designData={circuitDesign} />
            </div>
            <div className="flex space-x-2 mt-4">
          <button
            className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800"
            onClick={() => setCircuitDesign(null)}
          >
            Redefine Problem
          </button>
          <button
            onClick={downloadDesignAsJSON}
            className="bg-gray-700 text-white py-2 px-4 rounded-lg flex items-center hover:bg-gray-800"
          >
            <IconDownload size={16} className="mr-2" />
            Download
          </button>
        </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default QuantumAppPage;