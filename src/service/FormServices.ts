import { type FormSchema } from "~/types/FormTypes.js";
import { env } from "../env.js";

export const FormServices = {
  getAvgBurnoutScore: async (): Promise<string> => {
    try {
      const res = await fetch(
        `${env.NEXT_PUBLIC_BACKEND_URL}/api/v1/form/burnout`,
      );
      const data = await res.json();
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
