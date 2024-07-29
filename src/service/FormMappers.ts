import { type FormSchema } from "~/types/FormTypes.js";

export const FormMappers = {
  mapForm: async (): Promise<FormSchema> => {
    const form: FormSchema = {
      isMedStudent: localStorage.getItem("isMedStudent") === "medStudent",
      burnoutScore: localStorage.getItem("burnoutScore")
        ? Number(localStorage.getItem("burnoutScore"))
        : undefined,
      age: localStorage.getItem("age")
        ? Number(localStorage.getItem("age"))
        : undefined,
      sex: localStorage.getItem("sex")
        ? Number(localStorage.getItem("sex"))
        : undefined,
      mentalDisorder: localStorage.getItem("mentalDisorder")
        ? Number(localStorage.getItem("mentalDisorder"))
        : undefined,
      gpax: localStorage.getItem("gpax")
        ? Number(localStorage.getItem("gpax"))
        : undefined,
      gpaxSatisfaction: localStorage.getItem("gpaxSatisfaction")
        ? Number(localStorage.getItem("gpaxSatisfaction"))
        : undefined,
      university: localStorage.getItem("university")
        ? Number(localStorage.getItem("university"))
        : undefined,
      year: localStorage.getItem("year")
        ? Number(localStorage.getItem("year"))
        : undefined,
      occupation: localStorage.getItem("occupation") ?? undefined,
      cbissQ1: localStorage.getItem("cbissQ1")
        ? Number(localStorage.getItem("cbissQ1"))
        : undefined,
      cbissQ2: localStorage.getItem("cbissQ2")
        ? Number(localStorage.getItem("cbissQ2"))
        : undefined,
      cbissQ3: localStorage.getItem("cbissQ3")
        ? Number(localStorage.getItem("cbissQ3"))
        : undefined,
      cbissQ4: localStorage.getItem("cbissQ4")
        ? Number(localStorage.getItem("cbissQ4"))
        : undefined,
      cbissQ5: localStorage.getItem("cbissQ5")
        ? Number(localStorage.getItem("cbissQ5"))
        : undefined,
      cbissQ6: localStorage.getItem("cbissQ6")
        ? Number(localStorage.getItem("cbissQ6"))
        : undefined,
      cbissQ7: localStorage.getItem("cbissQ7")
        ? Number(localStorage.getItem("cbissQ7"))
        : undefined,
      cbissQ8: localStorage.getItem("cbissQ8")
        ? Number(localStorage.getItem("cbissQ8"))
        : undefined,
      cbissQ9: localStorage.getItem("cbissQ9")
        ? Number(localStorage.getItem("cbissQ9"))
        : undefined,
      cbissQ10: localStorage.getItem("cbissQ10")
        ? Number(localStorage.getItem("cbissQ10"))
        : undefined,
      cbissQ11: localStorage.getItem("cbissQ11")
        ? Number(localStorage.getItem("cbissQ11"))
        : undefined,
      cbissQ12: localStorage.getItem("cbissQ12")
        ? Number(localStorage.getItem("cbissQ12"))
        : undefined,
      cbissQ13: localStorage.getItem("cbissQ13")
        ? Number(localStorage.getItem("cbissQ13"))
        : undefined,
      cbissQ14: localStorage.getItem("cbissQ14")
        ? Number(localStorage.getItem("cbissQ14"))
        : undefined,
      cbissQ15: localStorage.getItem("cbissQ15")
        ? Number(localStorage.getItem("cbissQ15"))
        : undefined,
      cbissQ16: localStorage.getItem("cbissQ16")
        ? Number(localStorage.getItem("cbissQ16"))
        : undefined,
      cbissQ17: localStorage.getItem("cbissQ17")
        ? Number(localStorage.getItem("cbissQ17"))
        : undefined,
      cbissQ18: localStorage.getItem("cbissQ18")
        ? Number(localStorage.getItem("cbissQ18"))
        : undefined,
      cbissQ19: localStorage.getItem("cbissQ19")
        ? Number(localStorage.getItem("cbissQ19"))
        : undefined,
      cbissQ20: localStorage.getItem("cbissQ20")
        ? Number(localStorage.getItem("cbissQ20"))
        : undefined,
      cbissQ21: localStorage.getItem("cbissQ21")
        ? Number(localStorage.getItem("cbissQ21"))
        : undefined,
      cbissQ22: localStorage.getItem("cbissQ22")
        ? Number(localStorage.getItem("cbissQ22"))
        : undefined,
      cbissQ23: localStorage.getItem("cbissQ23")
        ? Number(localStorage.getItem("cbissQ23"))
        : undefined,
      cbissQ24: localStorage.getItem("cbissQ24")
        ? Number(localStorage.getItem("cbissQ24"))
        : undefined,
      cbissQ25: localStorage.getItem("cbissQ25")
        ? Number(localStorage.getItem("cbissQ25"))
        : undefined,

      ri9Q1: localStorage.getItem("ri9Q1")
        ? Number(localStorage.getItem("ri9Q1"))
        : undefined,
      ri9Q2: localStorage.getItem("ri9Q2")
        ? Number(localStorage.getItem("ri9Q2"))
        : undefined,
      ri9Q3: localStorage.getItem("ri9Q3")
        ? Number(localStorage.getItem("ri9Q3"))
        : undefined,
      ri9Q4: localStorage.getItem("ri9Q4")
        ? Number(localStorage.getItem("ri9Q4"))
        : undefined,
      ri9Q5: localStorage.getItem("ri9Q5")
        ? Number(localStorage.getItem("ri9Q5"))
        : undefined,
      ri9Q6: localStorage.getItem("ri9Q6")
        ? Number(localStorage.getItem("ri9Q6"))
        : undefined,
      ri9Q7: localStorage.getItem("ri9Q7")
        ? Number(localStorage.getItem("ri9Q7"))
        : undefined,
      ri9Q8: localStorage.getItem("ri9Q8")
        ? Number(localStorage.getItem("ri9Q8"))
        : undefined,
      ri9Q9: localStorage.getItem("ri9Q9")
        ? Number(localStorage.getItem("ri9Q9"))
        : undefined,
      dass21Q1: localStorage.getItem("dass21Q1")
        ? Number(localStorage.getItem("dass21Q1"))
        : undefined,
      dass21Q2: localStorage.getItem("dass21Q2")
        ? Number(localStorage.getItem("dass21Q2"))
        : undefined,
      dass21Q3: localStorage.getItem("dass21Q3")
        ? Number(localStorage.getItem("dass21Q3"))
        : undefined,
      dass21Q4: localStorage.getItem("dass21Q4")
        ? Number(localStorage.getItem("dass21Q4"))
        : undefined,
      dass21Q5: localStorage.getItem("dass21Q5")
        ? Number(localStorage.getItem("dass21Q5"))
        : undefined,
      dass21Q6: localStorage.getItem("dass21Q6")
        ? Number(localStorage.getItem("dass21Q6"))
        : undefined,
      dass21Q7: localStorage.getItem("dass21Q7")
        ? Number(localStorage.getItem("dass21Q7"))
        : undefined,
      dass21Q8: localStorage.getItem("dass21Q8")
        ? Number(localStorage.getItem("dass21Q8"))
        : undefined,
      dass21Q9: localStorage.getItem("dass21Q9")
        ? Number(localStorage.getItem("dass21Q9"))
        : undefined,
      dass21Q10: localStorage.getItem("dass21Q10")
        ? Number(localStorage.getItem("dass21Q10"))
        : undefined,
      dass21Q11: localStorage.getItem("dass21Q11")
        ? Number(localStorage.getItem("dass21Q11"))
        : undefined,
      dass21Q12: localStorage.getItem("dass21Q12")
        ? Number(localStorage.getItem("dass21Q12"))
        : undefined,
      dass21Q13: localStorage.getItem("dass21Q13")
        ? Number(localStorage.getItem("dass21Q13"))
        : undefined,
      dass21Q14: localStorage.getItem("dass21Q14")
        ? Number(localStorage.getItem("dass21Q14"))
        : undefined,
      dass21Q15: localStorage.getItem("dass21Q15")
        ? Number(localStorage.getItem("dass21Q15"))
        : undefined,
      dass21Q16: localStorage.getItem("dass21Q16")
        ? Number(localStorage.getItem("dass21Q16"))
        : undefined,
      dass21Q17: localStorage.getItem("dass21Q17")
        ? Number(localStorage.getItem("dass21Q17"))
        : undefined,
      dass21Q18: localStorage.getItem("dass21Q18")
        ? Number(localStorage.getItem("dass21Q18"))
        : undefined,
      dass21Q19: localStorage.getItem("dass21Q19")
        ? Number(localStorage.getItem("dass21Q19"))
        : undefined,
      dass21Q20: localStorage.getItem("dass21Q20")
        ? Number(localStorage.getItem("dass21Q20"))
        : undefined,
      dass21Q21: localStorage.getItem("dass21Q21")
        ? Number(localStorage.getItem("dass21Q21"))
        : undefined,
      dreem12Q1: localStorage.getItem("dreem12Q1")
        ? Number(localStorage.getItem("dreem12Q1"))
        : undefined,
      dreem12Q2: localStorage.getItem("dreem12Q2")
        ? Number(localStorage.getItem("dreem12Q2"))
        : undefined,
      dreem12Q3: localStorage.getItem("dreem12Q3")
        ? Number(localStorage.getItem("dreem12Q3"))
        : undefined,
      dreem12Q4: localStorage.getItem("dreem12Q4")
        ? Number(localStorage.getItem("dreem12Q4"))
        : undefined,
      dreem12Q5: localStorage.getItem("dreem12Q5")
        ? Number(localStorage.getItem("dreem12Q5"))
        : undefined,
      dreem12Q6: localStorage.getItem("dreem12Q6")
        ? Number(localStorage.getItem("dreem12Q6"))
        : undefined,
      dreem12Q7: localStorage.getItem("dreem12Q7")
        ? Number(localStorage.getItem("dreem12Q7"))
        : undefined,
      dreem12Q8: localStorage.getItem("dreem12Q8")
        ? Number(localStorage.getItem("dreem12Q8"))
        : undefined,
      dreem12Q9: localStorage.getItem("dreem12Q9")
        ? Number(localStorage.getItem("dreem12Q9"))
        : undefined,
      dreem12Q10: localStorage.getItem("dreem12Q10")
        ? Number(localStorage.getItem("dreem12Q10"))
        : undefined,
      dreem12Q11: localStorage.getItem("dreem12Q11")
        ? Number(localStorage.getItem("dreem12Q11"))
        : undefined,
      dreem12Q12: localStorage.getItem("dreem12Q12")
        ? Number(localStorage.getItem("dreem12Q12"))
        : undefined,
    };
    return form;
  },
};