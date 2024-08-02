import { type FormSchema } from "~/types/FormTypes.js";
import { env } from "../env.js";

interface BurnoutScoreResponse {
  data: string; // Adjust the type based on actual API response
}

const isBurnoutScoreResponse = (response: any): response is BurnoutScoreResponse => {
  return response && typeof response.data === 'string';
};


export const FormServices = {
  getAvgBurnoutScore: async (): Promise<string> => {
    try {
      const res = await fetch(
        `${env.NEXT_PUBLIC_BACKEND_URL}/api/v1/form/burnout`,
      );
      const data = await res.json();

      // Validate and ensure data conforms to the expected type
      if (isBurnoutScoreResponse(data)) {
        return data.data;
      } else {
        console.error('Unexpected response format', data);
        return "";
      }
    } catch (error) {
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
    } catch (error) {}
  },
};
