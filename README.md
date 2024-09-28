# Quantum Problem Solver with Circuit Design

This project is a **Quantum Problem Solver** built with **Next.js**. It allows users to define a quantum computing problem, specify objectives, and automatically generate a quantum circuit design using the Spark API.

## Features

- **Define Quantum Problems**: Users can select from various problem types (e.g., Optimization, Cryptography, Quantum Simulation) and subtypes, set objectives, and describe their application.
- **Quantum Circuit Generation**: Once the problem is defined, the app generates a quantum circuit design using the **Spark API** and displays it in a structured format.
- **Dynamic UI**: The app features a dynamic user interface that updates based on the user's input, with loading states and collapsible sections for circuit details.

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **Next.js** (v12 or higher)
- An API key from [SparkEngine.ai](https://sparkengine.ai) to interact with the Spark API.
- **Vercel account** for deploying the app (required for the serverless API function).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/quantum-problem-solver.git
   cd quantum-problem-solver
    ```

2. Install dependencies
    ```bash
    npm install 
    ```

### Deploying to Vercel
Since the project relies on a serverless function to interact with the Spark API, deployment to Vercel is required for the app to work in production.

1. Push your repository to a GitHub, GitLab, or Bitbucket repository.
2. Sign up for a Vercel account if you don't already have one.
3. Connect your Vercel account to your GitHub repository and select your project.
4. Add your **Spark API key** in Vercel's dashboard as an environment variable:
    ```bash
     SPARK_API_KEY=your-spark-api-key
    ```
5. Deploy the project by selecting the repository and following Vercel's instructions.

Once deployed, the serverless API routes will work as expected, and your application will be live.

### Project Structure

- `components/DefineProblem.js`: This component contains the form to define a quantum problem, including selecting problem types, subtypes, and objectives.
- `components/QuantumCircuitDesign.js`: This component displays the quantum circuit design returned from the Spark API.
- `pages/index.js`: The main page of the app that orchestrates the problem definition and circuit design components.
- `utils/spark.js`: Contains the utility function `callSpark` that makes the API call to SparkEngine.
- `pages/api/callSpark.js`: A Next.js API route that handles server-side calls to SparkEngine's API.

### API Usage

The app makes use of the **Spark API** to generate quantum circuit designs. The API call is made using `callSpark` in the `utils/spark.js` file. The `callSpark` function sends the user-defined problem data to the Spark API and processes the response.

### Customization

To modify the problem types, objectives, or other details in the form, you can update the data in `DefineProblem.js`. Additional subcategories or objectives can be added under the respective problem types.

### Error Handling

The app includes basic error handling to catch issues with the API calls. If the Spark API fails after three retries, an error message is displayed to the user.

### TODOs

- Improve error handling and retry logic.
- Implement more advanced loading animations.
- Extend the app with additional quantum problem types and circuit optimization features.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Next.js](https://nextjs.org/) for the frontend framework.
- [SparkEngine.ai](https://sparkengine.ai) for their quantum circuit generation API.
