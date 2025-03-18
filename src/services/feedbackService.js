import axios from "axios";

export async function sendFeedbackEmail(email) {
  const code = Math.floor(10000 + Math.random() * 90000).toString();
  try {
    const response = await axios.post(
      "http://localhost:3123/api/feedback",
      { email, code },
      { headers: { "Content-Type": "application/json" } },
    );
    return { data: response.data, code };
  } catch (error) {
    throw error;
  }
}