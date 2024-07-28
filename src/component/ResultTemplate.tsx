import Image from "next/image";
import { IgLogo } from "~/component/IgLogo";

export const ResultTemplate = () => {
  return (
    <>
      <div className="flex h-[180px] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#76C6FF] via-[#DEEFFF] to-white pt-4">
        <Image
          src="/img/ysym_logo.webp"
          alt="YourSkyYourMind logo"
          width={3000}
          height={2000}
          className="z-20 h-auto w-1/2"
        />
      </div>
      <div className="fixed bottom-4 right-2 z-20 flex items-center justify-between gap-1">
        <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-[linear-gradient(45deg,#FAAD4F_0%,#DD2A7B_35%,#9537B0_62%,#515BD4_100%)]">
          <IgLogo />
        </div>
        <div className="text-left text-[10px] leading-[12px]">
          <p>@Yourskyyourmind</p>
          <p>#Yourskyyourmind</p>
        </div>
      </div>
    </>
  );
};
