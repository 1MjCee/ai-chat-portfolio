import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req) {
  const { messages } = await req.json();

  const systemPrompt = `
    You are an AI assistant for Julius Charles's portfolio website. Details:
    - Projects:
      - Project A: A React-based e-commerce platform with Stripe integration.
      - Project B: A Python-based data visualization dashboard using Dash.
    - Skills: JavaScript, React, Node.js, Python.
    - Contact: Suggest emailing cjmatheka@gmail.com for inquiries.
    Respond in a friendly, professional tone.
  `;

  const result = await streamText({
    model: openai("gpt-3.5-turbo"), // Use 'gpt-4' if available
    system: systemPrompt,
    messages,
  });

  return result.toDataStreamResponse();
}
