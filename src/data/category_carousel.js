// category_carousel.js
import { carouselNew } from "./carousels/new_carousel.js";
import { carouselPopular } from "./carousels/popular_carousel.js";
import { carouselBuyBonus } from "../data/carousels/buy_bonus_carousel.js";
import { carouselFrutisGames } from "../data/carousels/frutis_carousel.js";
import { carouselRetro } from "../data/carousels/retro_carousel.js";
import { carouselEgyptGames } from "../data/carousels/egypt_carousel.js";
import { carouselAsianGames } from "../data/carousels/asian_carousel.js";
import { carouselDrumGamesFirst } from "../data/carousels/drum_carousel-1.js";
import { carouselDrumGamesSecond } from "../data/carousels/drum_carousel-2.js";
import { carouselOceanGames } from "../data/carousels/ocean_carousel.js";
import { carouselAlienGames } from "../data/carousels/alien_carousel.js";
import { carouselMedievalGames } from "../data/carousels/medieval_carousel.js";
import { carouselDiamondGames } from "../data/carousels/diamond_carousel.js";

// import { carouselLive } from "../data/carousels/live_carousel.js";
// import { carouselOctober } from "../data/carousels/october_carousel.js";
// import { carouselRolt } from "../data/carousels/rolt_carousel.js";
// import { carouselWealth } from "../data/carousels/wealth_carousel.js";
// import { carouselBlackJack } from "../data/carousels/black_jack_carousel";
// import { carouselVideoGames } from "../data/carousels/video_pocker_carousel.js";
// import { carouselBingo } from "../data/carousels/bingo_carousel.js";
// import { carouselFoodGames } from "../data/carousels/foods_carousel.js";
// import { carouselArcadaGames } from "../data/carousels/arcada_carousel.js";
// import { carouselLovesGames } from "../data/carousels/loves_carousel.js";
// import { carouselAztecGames } from "../data/carousels/aztec_carousel.js";
// import { carouselTechGames } from "../data/carousels/tech_carousel.js";

export const carouselCategoryData = {
  items: [
    {
      count: carouselNew.items.length,
      name: carouselNew.title.textShort,
      game: carouselNew.items,
      image: carouselNew.title.image,
    },
    {
      count: carouselPopular.items.length,
      name: carouselPopular.title.textShort,
      game: carouselPopular.items,
      image: carouselPopular.title.image,
    },
    {
      count: carouselBuyBonus.items.length,
      name: carouselBuyBonus.title.textShort,
      game: carouselBuyBonus.items,
      image: carouselBuyBonus.title.image,
    },
    {
      count: carouselFrutisGames.items.length,
      name: carouselFrutisGames.title.textShort,
      game: carouselFrutisGames.items,
      image: carouselFrutisGames.title.image,
    },
    {
      count: carouselRetro.items.length,
      name: carouselRetro.title.textShort,
      game: carouselRetro.items,
      image: carouselRetro.title.image,
    },
    {
      count: carouselDrumGamesFirst.items.length,
      name: carouselDrumGamesFirst.title.textShort,
      game: carouselDrumGamesFirst.items,
      image: carouselDrumGamesFirst.title.image,
    },
    {
      count: carouselDrumGamesSecond.items.length,
      name: carouselDrumGamesSecond.title.textShort,
      game: carouselDrumGamesSecond.items,
      image: carouselDrumGamesSecond.title.image,
    },
    {
      count: carouselEgyptGames.items.length,
      name: carouselEgyptGames.title.textShort,
      game: carouselEgyptGames.items,
      image: carouselEgyptGames.title.image,
    },
    {
      count: carouselOceanGames.items.length,
      name: carouselOceanGames.title.textShort,
      game: carouselOceanGames.items,
      image: carouselOceanGames.title.image,
    },
    {
      count: carouselAlienGames.items.length,
      name: carouselAlienGames.title.textShort,
      game: carouselAlienGames.items,
      image: carouselAlienGames.title.image,
    },
    {
      count: carouselMedievalGames.items.length,
      name: carouselMedievalGames.title.textShort,
      game: carouselMedievalGames.items,
      image: carouselMedievalGames.title.image,
    },
    {
      count: carouselAsianGames.items.length,
      name: carouselAsianGames.title.textShort,
      game: carouselAsianGames.items,
      image: carouselAsianGames.title.image,
    },
    {
      count: carouselDiamondGames.items.length,
      name: carouselDiamondGames.title.textShort,
      game: carouselDiamondGames.items,
      image: carouselDiamondGames.title.image,
    },

    // {
    //   count: carouselLive.items.length,
    //   name: carouselLive.title.textShort,
    //   game: carouselLive.items,
    //   image: carouselLive.title.image,
    // },
    // {
    //   count: carouselOctober.items.length,
    //   name: carouselOctober.title.textShort,
    //   game: carouselOctober.items,
    //   image: carouselOctober.title.image,
    // },
    // {
    //   count: carouselRolt.items.length,
    //   name: carouselRolt.title.textShort,
    //   game: carouselRolt.items,
    //   image: carouselRolt.title.image,
    // },
    // {
    //   count: carouselWealth.items.length,
    //   name: carouselWealth.title.textShort,
    //   game: carouselWealth.items,
    //   image: carouselWealth.title.image,
    // },
    // {
    //   count: carouselBlackJack.items.length,
    //   name: carouselBlackJack.title.textShort,
    //   game: carouselBlackJack.items,
    //   image: carouselBlackJack.title.image,
    // },
    // {
    //   count: carouselVideoGames.items.length,
    //   name: carouselVideoGames.title.textShort,
    //   game: carouselVideoGames.items,
    //   image: carouselVideoGames.title.image,
    // },
    // {
    //   count: carouselBingo.items.length,
    //   name: carouselBingo.title.textShort,
    //   game: carouselBingo.items,
    //   image: carouselBingo.title.image,
    // },
    // {
    //   count: carouselFoodGames.items.length,
    //   name: carouselFoodGames.title.textShort,
    //   game: carouselFoodGames.items,
    //   image: carouselFoodGames.title.image,
    // },

    // {
    //   count: carouselArcadaGames.items.length,
    //   name: carouselArcadaGames.title.textShort,
    //   game: carouselArcadaGames.items,
    //   image: carouselArcadaGames.title.image,
    // },
    // {
    //   count: carouselArcadaGames.items.length,
    //   name: carouselArcadaGames.title.textShort,
    //   game: carouselArcadaGames.items,
    //   image: carouselArcadaGames.title.image,
    // },
    // {
    //   count: carouselLovesGames.items.length,
    //   name: carouselLovesGames.title.textShort,
    //   game: carouselLovesGames.items,
    //   image: carouselLovesGames.title.image,
    // },
    // {
    //   count: carouselAztecGames.items.length,
    //   name: carouselAztecGames.title.textShort,
    //   game: carouselAztecGames.items,
    //   image: carouselAztecGames.title.image,
    // },
    // {
    //   count: carouselTechGames.items.length,
    //   name: carouselTechGames.title.textShort,
    //   game: carouselTechGames.items,
    //   image: carouselTechGames.title.image,
    // },
  ],
};
