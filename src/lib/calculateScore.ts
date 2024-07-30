export function calculate(choice: string) {
  if (choice === "ไม่เคย") return "0";
  else if (choice === "นาน ๆ ครั้ง") return "25";
  else if (choice === "บางครั้ง") return "50";
  else if (choice === "บ่อยครั้ง") return "75";
  else if (choice === "เสมอ") return "100";
  else {
    return "";
  }
}
