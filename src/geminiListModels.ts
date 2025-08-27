/**
 * Helper to list available Gemini models for the current API key.
 * Run this file in your dev environment (node src/geminiListModels.ts) to see available models.
 */

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

export async function fetchGeminiResponse(prompt: string): Promise<string> {
  if (!apiKey) {
    return "Gemini API key is missing. Please set VITE_GEMINI_API_KEY in your environment.";
  }
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey,
        },
        body: JSON.stringify({
          prompt,
        }),
      }
    );
    const data = await response.json();
    return data?.candidates?.[0]?.content || "No response from Gemini.";
  } catch (error) {
    return "Error connecting to Gemini API.";
  }
}

async function listGeminiModels() {
  if (!apiKey) {
    console.error("Gemini API key is missing. Please set VITE_GEMINI_API_KEY in your environment.");
    return;
  }
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "x-goog-api-key": apiKey,
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    console.log("Available Gemini Models:", data.models || data);
  } catch (e) {
    console.error("Error fetching Gemini models:", e);
  }
}

listGeminiModels();
