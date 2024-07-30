import { env } from "../env.js";

export const BankAccountServices = {
  createBankAccount: async (accountNo: string, bank: string) => {
    try {
      await fetch(`${env.NEXT_PUBLIC_BACKEND_URL}/api/v1/bankaccount`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accountNo,
          bank,
        }),
      });
    } catch (error) {}
  },
};
