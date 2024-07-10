export const backgroundMapConfig = {
  "0": {
    image: "/img/scene1_sky.webp",
    imagePreload: ["/img/scene1_sky.webp"],
  },
  "0-1" : {
    image: "/img/scene1_sky.webp",
    imagePreload: [],

  },
  "1-8" : {
    image: "/img/scene1_sky.webp",
    imagePreload: [],
  },
  "1-9" : {
    image: "/img/scene1_sky.webp",
    imagePreload: ["/img/1-10-1.webp","/img/1-10-2.webp","/img/1-10-3.webp"
                  ,"/img/1-10-4.webp", "/img/1-10-5.webp","/img/1-10-6.webp","/img/1-10-7.webp"],
  },
  "1-10" : {
    image: ["/img/1-10-1.webp","/img/1-10-2.webp","/img/1-10-3.webp"
    ,"/img/1-10-4.webp", "/img/1-10-5.webp","/img/1-10-6.webp","/img/1-10-7.webp"],
    stopMotionDuration: 800,
    imagePreload: ["/img/scene1_sky.webp"],
  },
  "1-11" : {
    image: "/img/scene1_sky.webp",
    imagePreload: ["/img/1-12.webp"],
  },
  "1-12" : {
    image: "/img/1-12.webp",
    imagePreload: ["/img/1-13.webp"],
  },
  "1-13" : {
    image: "/img/1-13.webp",
    imagePreload: [],
  },
  
  
} as const;
