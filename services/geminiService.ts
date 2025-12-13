import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;

const getClient = (): GoogleGenAI => {
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const initializeChat = async (): Promise<void> => {
    const ai = getClient();
    // Using gemini-2.5-flash for speed and efficiency in a support context
    chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: `You are "ZabahBot", a friendly and professional billing support assistant for ZabahSoft. 
            Your goal is to assist clients with payment issues. 
            Common issues include: Expired credit cards, Bank declines (Do Not Honor), Insufficient funds, and mismatched billing addresses.
            
            Guidelines:
            1. Be empathetic and professional. Payment issues are stressful.
            2. If a user mentions a specific error code (e.g., "2005"), explain it simply.
            3. Guide them to update payment methods or contact their bank if needed.
            4. Keep responses concise (under 3 sentences unless detailed explanation is requested).
            5. Do NOT ask for real credit card numbers or passwords.
            
            ZabahSoft Contact Info:
            - Email: info@zabahsoft.com
            - WhatsApp: 0792929814
            - Address 1: Dawoodzai Business Center B-021, Kabul, AFG
            - Address 2: Naser Safi Medical Center 401, Baharestan, Karte Parwan, Kabul, AFG
            `,
            temperature: 0.7,
        }
    });
};

export const sendMessageToGemini = async (message: string): Promise<AsyncIterable<string>> => {
    if (!chatSession) {
        await initializeChat();
    }

    if (!chatSession) {
        throw new Error("Failed to initialize chat session");
    }

    try {
        const result = await chatSession.sendMessageStream({ message });
        
        // Generator to yield chunks of text
        async function* streamGenerator() {
            for await (const chunk of result) {
                const c = chunk as GenerateContentResponse;
                if (c.text) {
                    yield c.text;
                }
            }
        }
        return streamGenerator();

    } catch (error) {
        console.error("Gemini API Error:", error);
        throw error;
    }
};