import { type FormSchema } from "~/types/FormTypes.js";
import { env } from "../env.js";

interface BurnoutScoreResponse {
  data: string; // Adjust the type based on actual API response
}

export const FormServices = {
  getAvgBurnoutScore: async (): Promise<string> => {
    try {
      const res = await fetch(
        `${env.NEXT_PUBLIC_BACKEND_URL}/api/v1/form/burnout`,
      );
      const data:BurnoutScoreResponse = await res.json();
      return data.data;
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
