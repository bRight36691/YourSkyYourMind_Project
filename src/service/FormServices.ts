import { type FormSchema } from "~/types/FormTypes.js";
import { env } from "../env.js";

interface BurnoutScoreResponse {
  data: string; // Adjust the type based on actual API response
}

// Type guard to validate the response
const isBurnoutScoreResponse = (response: unknown): response is BurnoutScoreResponse => {
  return (
    typeof response === 'object' &&
    response !== null &&
    'data' in response &&
    typeof (response as BurnoutScoreResponse).data === 'string'
  );
};

export const FormServices = {
  getAvgBurnoutScore: async (): Promise<string> => {
    try {
      const res = await fetch(`${env.NEXT_PUBLIC_BACKEND_URL}/api/v1/form/burnout`);
      const data: unknown = await res.json();

      // Validate and ensure data conforms to the expected type
      if (isBurnoutScoreResponse(data)) {
        return data.data;
      } else {
        console.error('Unexpected response format', data);
        return "";
      }
    } catch (error) {
      console.error('Error fetching burnout score', error);
      return "";
    }
  },

  createForm: async (form: FormSchema) => {
    try {
      await fetch(`${env.NEXT_PUBLIC_BACKEND_URL}/api/v1/form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
    } catch (error) {
      console.error('Error creating form', error);
    }
  },
};
