import axios from "axios"
export const callSpark = async (projectId, prompt) => {
    const payload = {
        projectId,
        prompt
    };

    try {
        const response = await axios.post('/api/callSpark', payload);

        console.log(response.data)

        return response.data;
    } catch (error) {
        console.error('Error calling Spark API:', error.message);
        throw error;
    }
};