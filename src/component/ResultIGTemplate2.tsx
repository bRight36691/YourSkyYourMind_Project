import { BigIgLogo } from "~/component/BigIgLogo";

export const ResultIGTemplate2 = () => {
  return (
    <a
      className="top-20 z-20 flex flex-col items-center justify-between gap-2"
      href="https://www.instagram.com/yourskyyourmind"
    >
      <div className="relative flex h-[65px] w-[65px] items-center justify-center rounded-full bg-[linear-gradient(45deg,#FAAD4F_0%,#DD2A7B_35%,#9537B0_62%,#515BD4_100%)]">
        <BigIgLogo />
      </div>
      <div className="text-center text-[10px] leading-[12px]">
        <p>@yourskyyourmind</p>
        <p>#Yourskyyourmind</p>
      </div>
    </a>
  );
};
