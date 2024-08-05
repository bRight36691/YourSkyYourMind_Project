import { IgLogo } from "~/component/IgLogo";

export const ResultIGTemplate = () => {
  return (
    <a
      className="fixed bottom-4 right-2 z-20 flex items-center justify-between gap-1"
      href="https://www.instagram.com/yourskyyourmind_th"
    >
      <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-[linear-gradient(45deg,#FAAD4F_0%,#DD2A7B_35%,#9537B0_62%,#515BD4_100%)]">
        <IgLogo />
      </div>
      <div className="text-left text-[10px] leading-[12px]">
        <p>@yourskyyourmind_th</p>
        <p>#Yourskyyourmind</p>
      </div>
    </a>
  );
};
