"use client";

import { Volume2, VolumeX } from "lucide-react";
import { usePathname } from "next/navigation";
import { useSoundStore } from "~/store/sound";

const SoundToggle = () => {
  const { toggle, isPlaying } = useSoundStore();
  const path = usePathname();
  const page = path.split("/")[1]!;
    return (
      <button
        onClick={toggle}
        className="text-white h-auto w-auto rounded-[8px] p-2 hover:bg-black/20"
      >
        {isPlaying ? (
          <Volume2 className="h-5 w-5" />
        ) : (
          <VolumeX className="h-5 w-5" />
        )}
      </button>
    );
};

export default SoundToggle;