import { type AvgBurnoutScoreTypes } from "~/types/FormTypes.js";
import { env } from "../env.js";

export const FormServices = {
  getAvgBurnoutScore: async (): Promise<string> => {
    const res = await fetch(
      `${env.NEXT_PUBLIC_BACKEND_URL}/api/v1/form/burnout`,
    );
    const data = await res.json();
    return data.data;
  },
};
