import { useState } from 'react';

const QuantumCircuitDesign = ({ designData }) => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-8">Quantum Circuit Design</h1>

      {/* Algorithm and Qubits */}
      <div className="mb-6">
        <h2
          onClick={() => toggleSection('algorithm')}
          className="text-xl font-semibold cursor-pointer bg-blue-500 text-white p-3 rounded-lg"
        >
          Algorithm and Qubits {expandedSections['algorithm'] ? '▼' : '►'}
        </h2>
        {expandedSections['algorithm'] && (
          <div className="mt-3 p-4 bg-white rounded-lg shadow-md">
            <p><strong>Algorithm:</strong> {designData.algorithm}</p>
            <p><strong>Number of Qubits:</strong> {designData.qubits}</p>
          </div>
        )}
      </div>

      {/* Initial States */}
      {designData.initial_states && (
        <div className="mb-6">
          <h2
            onClick={() => toggleSection('initialStates')}
            className="text-xl font-semibold cursor-pointer bg-blue-500 text-white p-3 rounded-lg"
          >
            Initial States {expandedSections['initialStates'] ? '▼' : '►'}
          </h2>
          {expandedSections['initialStates'] && (
            <div className="mt-3 p-4 bg-white rounded-lg shadow-md">
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="text-left py-2">Qubit</th>
                    <th className="text-left py-2">Initial State</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(designData.initial_states).map(([qubit, state]) => (
                    <tr key={qubit}>
                      <td className="py-2">{qubit}</td>
                      <td className="py-2">{state}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Gates */}
      {designData.gates && (
        <div className="mb-6">
          <h2
            onClick={() => toggleSection('gates')}
            className="text-xl font-semibold cursor-pointer bg-blue-500 text-white p-3 rounded-lg"
          >
            Quantum Gates {expandedSections['gates'] ? '▼' : '►'}
          </h2>
          {expandedSections['gates'] && (
            <div className="mt-3 p-4 bg-white rounded-lg shadow-md">
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="text-left py-2">Gate</th>
                    <th className="text-left py-2">Target</th>
                    <th className="text-left py-2">Control (if applicable)</th>
                    <th className="text-left py-2">Parameters</th>
                  </tr>
                </thead>
                <tbody>
                  {designData.gates.map((gate, index) => (
                    <tr key={index}>
                      <td className="py-2">{gate.gate}</td>
                      <td className="py-2">
                        {Array.isArray(gate.targets) ? gate.targets.join(', ') : gate.target || '-'}
                      </td>
                      <td className="py-2">{gate.control ? gate.control : '-'}</td>
                      <td className="py-2">
                        {gate.parameters
                          ? Object.entries(gate.parameters).map(([param, value]) => `${param}: ${value}`).join(', ')
                          : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Multi-Qubit Operations */}
      {designData.multi_qubit_operations && designData.multi_qubit_operations.length > 0 && (
        <div className="mb-6">
          <h2
            onClick={() => toggleSection('multiQubitOperations')}
            className="text-xl font-semibold cursor-pointer bg-blue-500 text-white p-3 rounded-lg"
          >
            Multi-Qubit Operations {expandedSections['multiQubitOperations'] ? '▼' : '►'}
          </h2>
          {expandedSections['multiQubitOperations'] && (
            <div className="mt-3 p-4 bg-white rounded-lg shadow-md">
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="text-left py-2">Operation</th>
                    <th className="text-left py-2">Targets</th>
                  </tr>
                </thead>
                <tbody>
                  {designData.multi_qubit_operations.map((operation, index) => (
                    <tr key={index}>
                      <td className="py-2">{operation.operation}</td>
                      <td className="py-2">{Array.isArray(operation.targets) ? operation.targets.join(', ') : '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Conditioned Gates */}
      {designData.conditioned_gates && designData.conditioned_gates.length > 0 && (
        <div className="mb-6">
          <h2
            onClick={() => toggleSection('conditionedGates')}
            className="text-xl font-semibold cursor-pointer bg-blue-500 text-white p-3 rounded-lg"
          >
            Conditioned Gates {expandedSections['conditionedGates'] ? '▼' : '►'}
          </h2>
          {expandedSections['conditionedGates'] && (
            <div className="mt-3 p-4 bg-white rounded-lg shadow-md">
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="text-left py-2">Gate</th>
                    <th className="text-left py-2">Target</th>
                    <th className="text-left py-2">Condition</th>
                  </tr>
                </thead>
                <tbody>
                  {designData.conditioned_gates.map((gate, index) => (
                    <tr key={index}>
                      <td className="py-2">{gate.gate}</td>
                      <td className="py-2">{gate.target || '-'}</td>
                      <td className="py-2">
                        If <strong>{gate.condition?.measurement}</strong> equals <strong>{gate.condition?.equals}</strong>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Optimization Suggestions */}
      {designData.optimization_suggestions && (
        <div className="mb-6">
          <h2
            onClick={() => toggleSection('optimizationSuggestions')}
            className="text-xl font-semibold cursor-pointer bg-blue-500 text-white p-3 rounded-lg"
          >
            Optimization Suggestions {expandedSections['optimizationSuggestions'] ? '▼' : '►'}
          </h2>
          {expandedSections['optimizationSuggestions'] && (
            <div className="mt-3 p-4 bg-white rounded-lg shadow-md">
              <p><strong>Performance:</strong> {designData.optimization_suggestions.performance}</p>
              <p><strong>Suggested Transpiler Settings:</strong></p>
              <ul className="list-disc ml-5">
                {Object.entries(designData.optimization_suggestions.suggested_transpiler_settings || {}).map(
                  ([setting, value]) => (
                    <li key={setting}>
                      <strong>{setting.replace('_', ' ')}:</strong> {value.toString()}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuantumCircuitDesign;
