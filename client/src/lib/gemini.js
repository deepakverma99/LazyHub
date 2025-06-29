import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function generateCaption(videoTitle, description) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Generate an engaging social media caption for a video titled "${videoTitle}". ${description ? `The video is about: ${description}` : ''} Make it catchy and social media friendly, include some emojis.`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating caption:', error);
    throw error;
  }
}