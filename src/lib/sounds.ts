export const scenePageMap = {
  "1": "/sound/nostalgicMusic.mp3",
  "2": "/sound/nostalgicMusic.mp3",
  "3": "/sound/beautifulInstrumental.mp3",
  "4": "/sound/beautifulInstrumental.mp3",
} as const;

export const soundPageMap: Record<
  string,
  {
    soundEffect?: {
      sound: string;
      loop?: boolean;
      volume?: number;
    };
    backgroundVolume?: number;
  }
> = {
  
};
