import { useState } from 'react';
import { callSpark } from '@/utils/spark';
import { projectIDs } from "@/spark.config.json";
import dummyData from "@/AI-Example-Response-1.json"

const DefineProblem = ({ onsubmit }) => {
    const [problemType, setProblemType] = useState('');
    const [problemSubtype, setProblemSubtype] = useState(null);
    const [objective, setObjective] = useState('');
    const [accuracyVsSpeed, setAccuracyVsSpeed] = useState(50);
    const [applicationDescription, setApplicationDescription] = useState(''); // New state for description
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const objectiveOptions = {
        Optimization: [
            'Minimize cost or energy',
            'Maximize profit or efficiency',
            'Find the optimal resource allocation',
            'Optimize a complex system or process',
            'Improve supply chain logistics',
            'Optimize portfolio management',
        ],
        Cryptography: [
            'Encrypt sensitive data',
            'Develop new encryption algorithms',
            'Break existing encryption algorithms (for research purposes)',
            'Secure communication channels',
            'Enhance data privacy and security',
        ],
        'Quantum Simulation': [
            'Simulate molecular and chemical properties',
            'Study material properties and behavior',
            'Explore quantum systems and phenomena',
            'Design new materials with desired properties',
            'Understand complex physical processes',
        ],
        'Machine Learning': [
            'Classify data using quantum algorithms',
            'Cluster data into meaningful groups',
            'Train and optimize quantum neural networks',
            'Develop quantum algorithms for anomaly detection',
            'Enhance pattern recognition and prediction',
        ],
        'Hybrid Classical-Quantum': [
            'Leverage both classical and quantum computing for complex problems',
            'Optimize hybrid algorithms for specific tasks',
            'Explore the synergy between classical and quantum computing',
            'Develop new approaches to problem-solving',
        ],
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setErrorMessage('');

        const userAnswers = {
            problemType,
            ...(problemSubtype && { problemSubtype }),
            objective,
            accuracyVsSpeed,
            applicationDescription, // Include the description in the payload
        };

        console.log('User selections:', userAnswers);

        let response;
        let retryCount = 0;
        const maxRetries = 3;

        while (retryCount < maxRetries) {
          try {
            response = await callSpark(projectIDs.step1, JSON.stringify(userAnswers));
            onsubmit(JSON.parse(response[0].output));
            break;
          } catch (error) {
            retryCount++;
            console.error(`callSpark failed (attempt <span class="math-inline">\{retryCount\}/</span>{maxRetries}):`, error);

            if (retryCount === maxRetries) {
              setErrorMessage('Failed to generate design. Please try again later.');
            } else {
              console.log('Retrying callSpark...');
              // You could introduce a delay here before retrying, e.g., using setTimeout
              // await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
            }
          }
        }
        // onsubmit(dummyData)
        setLoading(false);
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Define Your Quantum Problem</h1>

            {errorMessage && (
                <div className="bg-red-100 text-red-800 p-3 rounded-lg mb-4">
                    {errorMessage}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                {/* Question 1 - Enhanced with subcategories for all types */}
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">What type of problem are you trying to solve?</h3>
                    <div className="space-y-2">
                        {/* Optimization Subcategories */}
                        <details>
                            <summary>
                                <label className="block">
                                    <input
                                        type="radio"
                                        name="problemType"
                                        value="Optimization"
                                        checked={problemType === 'Optimization'}
                                        onChange={(e) => setProblemType(e.target.value)}
                                        className="mr-2"
                                    />
                                    Optimization
                                </label>
                            </summary>
                            <div className="ml-4 mt-2 space-y-1">
                                {['Combinatorial Optimization', 'Continuous Optimization', 'Logistics & Scheduling'].map((subtype) => (
                                    <label key={subtype} className="block">
                                        <input
                                            type="radio"
                                            name="problemSubtype"
                                            value={subtype}
                                            checked={problemSubtype === subtype}
                                            onChange={(e) => setProblemSubtype(e.target.value)}
                                            className="mr-2"
                                        />
                                        {subtype}
                                    </label>
                                ))}
                            </div>
                        </details>

                        {/* Cryptography Subcategories */}
                        <details>
                            <summary>
                                <label className="block">
                                    <input
                                        type="radio"
                                        name="problemType"
                                        value="Cryptography"
                                        checked={problemType === 'Cryptography'}
                                        onChange={(e) => setProblemType(e.target.value)}
                                        className="mr-2"
                                    />
                                    Cryptography
                                </label>
                            </summary>
                            <div className="ml-4 mt-2 space-y-1">
                                {['Symmetric Key Cryptography', 'Public Key Cryptography', 'Post-Quantum Cryptography', 'Key Distribution'].map((subtype) => (
                                    <label key={subtype} className="block">
                                        <input
                                            type="radio"
                                            name="problemSubtype"
                                            value={subtype}
                                            checked={problemSubtype === subtype}
                                            onChange={(e) => setProblemSubtype(e.target.value)}
                                            className="mr-2"
                                        />
                                        {subtype}
                                    </label>
                                ))}
                            </div>
                        </details>

                        {/* Quantum Simulation Subcategories */}
                        <details>
                            <summary>
                                <label className="block">
                                    <input
                                        type="radio"
                                        name="problemType"
                                        value="Quantum Simulation"
                                        checked={problemType === 'Quantum Simulation'}
                                        onChange={(e) => setProblemType(e.target.value)}
                                        className="mr-2"
                                    />
                                    Quantum Simulation
                                </label>
                            </summary>
                            <div className="ml-4 mt-2 space-y-1">
                                {['Quantum Chemistry', 'Condensed Matter Physics', 'High Energy Physics', 'Quantum Materials'].map((subtype) => (
                                    <label key={subtype} className="block">
                                        <input
                                            type="radio"
                                            name="problemSubtype"
                                            value={subtype}
                                            checked={problemSubtype === subtype}
                                            onChange={(e) => setProblemSubtype(e.target.value)}
                                            className="mr-2"
                                        />
                                        {subtype}
                                    </label>
                                ))}
                            </div>
                        </details>

                        {/* Machine Learning Subcategories */}
                        <details>
                            <summary>
                                <label className="block">
                                    <input
                                        type="radio"
                                        name="problemType"
                                        value="Machine Learning"
                                        checked={problemType === 'Machine Learning'}
                                        onChange={(e) => setProblemType(e.target.value)}
                                        className="mr-2"
                                    />
                                    Machine Learning
                                </label>
                            </summary>
                            <div className="ml-4 mt-2 space-y-1">
                                {['Quantum Classification', 'Quantum Clustering', 'Quantum Neural Networks', 'Quantum Anomaly Detection'].map((subtype) => (
                                    <label key={subtype} className="block">
                                        <input
                                            type="radio"
                                            name="problemSubtype"
                                            value={subtype}
                                            checked={problemSubtype === subtype}
                                            onChange={(e) => setProblemSubtype(e.target.value)}
                                            className="mr-2"
                                        />
                                        {subtype}
                                    </label>
                                ))}
                            </div>
                        </details>

                        {/* Hybrid Classical-Quantum */}
                        <label className="block">
                            <input
                                type="radio"
                                name="problemType"
                                value="Hybrid Classical-Quantum"
                                checked={problemType === 'Hybrid Classical-Quantum'}
                                onChange={(e) => {
                                    setProblemType(e.target.value);
                                    setProblemSubtype(null);
                                }}
                                className="mr-2"
                            />
                            Hybrid Classical-Quantum
                        </label>
                    </div>
                </div>

                {/* Question 2 - Conditionally rendered options */}
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">What is your objective with this problem?</h3>
                    <div className="space-y-2">
                        {objectiveOptions[problemType]?.map((objectiveOption) => (
                            <label key={objectiveOption} className="block">
                                <input
                                    type="radio"
                                    name="objective"
                                    value={objectiveOption}
                                    checked={objective === objectiveOption}
                                    onChange={(e) => setObjective(e.target.value)}
                                    className="mr-2"
                                />
                                {objectiveOption}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Question 3 - Enhanced with a slider and explanation */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">How important is accuracy versus speed for you?</h3>
                    <p className="text-sm text-gray-600 mb-2">
                        In quantum computing, there's often a trade-off between accuracy and speed. Please indicate your preference.
                    </p>
                    <div className="flex items-center">
                        <span className="mr-2">Accuracy</span>
                        <input
                            type="range"
                            name="accuracyVsSpeed"
                            min="0"
                            max="100"
                            value={accuracyVsSpeed}
                            onChange={(e) => setAccuracyVsSpeed(e.target.value)}
                            className="w-full"
                        />
                        <span className="ml-2">Speed</span>
                    </div>
                </div>

                {/* New: Application Description */}
                <div className="mb-4">
                    <label htmlFor="applicationDescription" className="block text-lg font-semibold mb-2">
                        Describe your application in your own words:
                    </label>
                    <textarea
                        id="applicationDescription"
                        value={applicationDescription}
                        onChange={(e) => setApplicationDescription(e.target.value)}
                        className="w-full border rounded-lg py-2 px-3"
                        rows="4"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:opacity-50"
                    disabled={loading || !problemType || !objective || !accuracyVsSpeed}
                >
                    {loading ? 'Generating...' : 'Submit'}
                </button>
            </form>

            {/* Loading Indicator */}
            {loading && (
                <div className="mt-4">
                    <div className="flex justify-center">
                        <svg
                            className="animate-spin h-5 w-5 text-blue-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                            ></path>
                        </svg>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DefineProblem;