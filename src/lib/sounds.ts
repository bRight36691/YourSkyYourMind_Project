export const scenePageMap = {
  "1": "/sound/sunsetCalm.mp3",
  "2": "/sound/sunsetCalm.mp3",
  "3": "/sound/sadNostalgic.mp3",
  "4": "/sound/sadNostalgic.mp3",
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
