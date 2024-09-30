import React from 'react';

const QuantumCircuitDesign = ({ designData }) => {
  return (
    <div className="w-full max-w-7xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Quantum Circuit Design</h1>

      {/* Algorithm and Qubits */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Algorithm and Qubits</h2>
        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <p className="text-lg mb-2"><strong>Algorithm:</strong> {designData.algorithm}</p>
          <p className="text-lg"><strong>Number of Qubits:</strong> {designData.qubits}</p>
        </div>
      </div>

      {/* Initial States */}
      {designData.initial_states && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Initial States</h2>
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <table className="table-auto w-full text-left border-collapse">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="py-3 px-4 border-b border-gray-200">Qubit</th>
                  <th className="py-3 px-4 border-b border-gray-200">Initial State</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {Object.entries(designData.initial_states).map(([qubit, state]) => (
                  <tr key={qubit} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-200">{qubit}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{state}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Gates */}
      {designData.gates && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Quantum Gates</h2>
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <table className="table-auto w-full text-left border-collapse">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="py-3 px-4 border-b border-gray-200">Gate</th>
                  <th className="py-3 px-4 border-b border-gray-200">Target</th>
                  <th className="py-3 px-4 border-b border-gray-200">Control</th>
                  <th className="py-3 px-4 border-b border-gray-200">Parameters</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {designData.gates.map((gate, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-200">{gate.gate}</td>
                    <td className="py-3 px-4 border-b border-gray-200">
                      {Array.isArray(gate.targets) ? gate.targets.join(', ') : gate.target || '-'}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200">{gate.control ? gate.control : '-'}</td>
                    <td className="py-3 px-4 border-b border-gray-200">
                      {gate.parameters
                        ? Object.entries(gate.parameters).map(([param, value]) => `${param}: ${value}`).join(', ')
                        : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Multi-Qubit Operations */}
      {designData.multi_qubit_operations && designData.multi_qubit_operations.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Multi-Qubit Operations</h2>
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <table className="table-auto w-full text-left border-collapse">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="py-3 px-4 border-b border-gray-200">Operation</th>
                  <th className="py-3 px-4 border-b border-gray-200">Targets</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {designData.multi_qubit_operations.map((operation, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-200">{operation.operation}</td>
                    <td className="py-3 px-4 border-b border-gray-200">
                      {Array.isArray(operation.targets) ? operation.targets.join(', ') : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Conditioned Gates */}
      {designData.conditioned_gates && designData.conditioned_gates.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Conditioned Gates</h2>
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <table className="table-auto w-full text-left border-collapse">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="py-3 px-4 border-b border-gray-200">Gate</th>
                  <th className="py-3 px-4 border-b border-gray-200">Target</th>
                  <th className="py-3 px-4 border-b border-gray-200">Condition</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {designData.conditioned_gates.map((gate, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-200">{gate.gate}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{gate.target || '-'}</td>
                    <td className="py-3 px-4 border-b border-gray-200">
                      If <strong>{gate.condition?.measurement}</strong> equals <strong>{gate.condition?.equals}</strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Optimization Suggestions */}
      {designData.optimization_suggestions && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Optimization Suggestions</h2>
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <p className="text-lg"><strong>Performance:</strong> {designData.optimization_suggestions.performance}</p>
            <p className="text-lg mt-4"><strong>Suggested Transpiler Settings:</strong></p>
            <ul className="list-disc ml-6 text-gray-700">
              {Object.entries(designData.optimization_suggestions.suggested_transpiler_settings || {}).map(
                ([setting, value]) => (
                  <li key={setting} className="my-2">
                    <strong>{setting.replace('_', ' ')}:</strong> {value.toString()}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuantumCircuitDesign;
