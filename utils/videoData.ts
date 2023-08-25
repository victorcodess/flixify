interface Thumbnail {
  small: string;
  medium?: string;
  large: string;
}

export interface videoProps {
  title: string;
  thumbnail: {
    trending?: Thumbnail;
    regular: Thumbnail & { medium?: string }; // merging Thumbnail interface with an optional 'medium' property
  };
  video: string;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
  onClick?: () => void;
}

export const videoData = [
  {
    title: "Beyond Earth",
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/beyond-earth/trending/small.jpg",
        large: "./assets/thumbnails/beyond-earth/trending/large.jpg",
      },
      regular: {
        small: "./assets/thumbnails/beyond-earth/regular/small.jpg",
        medium: "./assets/thumbnails/beyond-earth/regular/medium.jpg",
        large: "./assets/thumbnails/beyond-earth/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692996834/beyond_earth_zpiihw.mp4",
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "Bottom Gear",
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/bottom-gear/trending/small.jpg",
        large: "./assets/thumbnails/bottom-gear/trending/large.jpg",
      },
      regular: {
        small: "./assets/thumbnails/bottom-gear/regular/small.jpg",
        medium: "./assets/thumbnails/bottom-gear/regular/medium.jpg",
        large: "./assets/thumbnails/bottom-gear/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692997058/bottom_gear_smkife.mp4",
    year: 2021,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "Undiscovered Cities",
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/undiscovered-cities/trending/small.jpg",
        large: "./assets/thumbnails/undiscovered-cities/trending/large.jpg",
      },
      regular: {
        small: "./assets/thumbnails/undiscovered-cities/regular/small.jpg",
        medium: "./assets/thumbnails/undiscovered-cities/regular/medium.jpg",
        large: "./assets/thumbnails/undiscovered-cities/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692996817/undiscovered_cities_gnxryx.mp4",
    year: 2019,
    category: "TV Series",
    rating: "E",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "1998",
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/1998/trending/small.jpg",
        large: "./assets/thumbnails/1998/trending/large.jpg",
      },
      regular: {
        small: "./assets/thumbnails/1998/regular/small.jpg",
        medium: "./assets/thumbnails/1998/regular/medium.jpg",
        large: "./assets/thumbnails/1998/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692996669/1998_wt3pls.mp4",
    year: 2021,
    category: "Movie",
    rating: "18+",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "Dark Side of the Moon",
    thumbnail: {
      trending: {
        small: "./assets/thumbnails/dark-side-of-the-moon/trending/small.jpg",
        large: "./assets/thumbnails/dark-side-of-the-moon/trending/large.jpg",
      },
      regular: {
        small: "./assets/thumbnails/dark-side-of-the-moon/regular/small.jpg",
        medium: "./assets/thumbnails/dark-side-of-the-moon/regular/medium.jpg",
        large: "./assets/thumbnails/dark-side-of-the-moon/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692996660/dark_side_of_the_moon_tmudvh.mp4",
    year: 2018,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "The Great Lands",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/the-great-lands/regular/small.jpg",
        medium: "./assets/thumbnails/the-great-lands/regular/medium.jpg",
        large: "./assets/thumbnails/the-great-lands/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692996795/the_great_lands_hfretd.mp4",
    year: 2019,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "The Diary",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/the-diary/regular/small.jpg",
        medium: "./assets/thumbnails/the-diary/regular/medium.jpg",
        large: "./assets/thumbnails/the-diary/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692996781/the_diary_r00rvj.mp4",
    year: 2019,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Earth’s Untouched",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/earths-untouched/regular/small.jpg",
        medium: "./assets/thumbnails/earths-untouched/regular/medium.jpg",
        large: "./assets/thumbnails/earths-untouched/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692996712/earth_s_untouched_bztxjb.mp4",
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "No Land Beyond",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/no-land-beyond/regular/small.jpg",
        medium: "./assets/thumbnails/no-land-beyond/regular/medium.jpg",
        large: "./assets/thumbnails/no-land-beyond/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692996750/no_land_beyond_lxcsnq.mp4",
    year: 2019,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "During the Hunt",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/during-the-hunt/regular/small.jpg",
        medium: "./assets/thumbnails/during-the-hunt/regular/medium.jpg",
        large: "./assets/thumbnails/during-the-hunt/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692996725/during_the_hunt_t6ujo6.mp4",
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Autosport the Series",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/autosport-the-series/regular/small.jpg",
        medium: "./assets/thumbnails/autosport-the-series/regular/medium.jpg",
        large: "./assets/thumbnails/autosport-the-series/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692996621/autosport_the_series_yxg8pv.mp4",
    year: 2016,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Same Answer II",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/same-answer-2/regular/small.jpg",
        medium: "./assets/thumbnails/same-answer-2/regular/medium.jpg",
        large: "./assets/thumbnails/same-answer-2/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692996934/same_answer_ujf4l3.mp4",
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Below Echo",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/below-echo/regular/small.jpg",
        medium: "./assets/thumbnails/below-echo/regular/medium.jpg",
        large: "./assets/thumbnails/below-echo/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692996655/below_echo_plbaib.mp4",
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "The Rockies",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/the-rockies/regular/small.jpg",
        medium: "./assets/thumbnails/the-rockies/regular/medium.jpg",
        large: "./assets/thumbnails/the-rockies/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692996815/the_rockies_k2xssp.mp4",
    year: 2015,
    category: "TV Series",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Relentless",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/relentless/regular/small.jpg",
        medium: "./assets/thumbnails/relentless/regular/medium.jpg",
        large: "./assets/thumbnails/relentless/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692996759/relentless_wzqers.mp4",
    year: 2017,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Community of Ours",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/community-of-ours/regular/small.jpg",
        medium: "./assets/thumbnails/community-of-ours/regular/medium.jpg",
        large: "./assets/thumbnails/community-of-ours/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692996671/community_of_ours_lw4sy5.mp4",
    year: 2018,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Van Life",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/van-life/regular/small.jpg",
        medium: "./assets/thumbnails/van-life/regular/medium.jpg",
        large: "./assets/thumbnails/van-life/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692996818/van_life_gdd0ds.mp4",
    year: 2015,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "The Heiress",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/the-heiress/regular/small.jpg",
        medium: "./assets/thumbnails/the-heiress/regular/medium.jpg",
        large: "./assets/thumbnails/the-heiress/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692996900/the_heiress_wypki4.mp4",
    year: 2021,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Off the Track",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/off-the-track/regular/small.jpg",
        medium: "./assets/thumbnails/off-the-track/regular/medium.jpg",
        large: "./assets/thumbnails/off-the-track/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692996736/off_the_track_hbphzo.mp4",
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Whispering Hill",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/whispering-hill/regular/small.jpg",
        medium: "./assets/thumbnails/whispering-hill/regular/medium.jpg",
        large: "./assets/thumbnails/whispering-hill/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692910556/samples/elephants.mp4",
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "112",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/112/regular/small.jpg",
        medium: "./assets/thumbnails/112/regular/medium.jpg",
        large: "./assets/thumbnails/112/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692996628/112_q1ofsv.mp4",
    year: 2013,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Lone Heart",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/lone-heart/regular/small.jpg",
        medium: "./assets/thumbnails/lone-heart/regular/medium.jpg",
        large: "./assets/thumbnails/lone-heart/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692997058/lone_heart_hywt3k.mp4",
    year: 2017,
    category: "Movie",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Production Line",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/production-line/regular/small.jpg",
        medium: "./assets/thumbnails/production-line/regular/medium.jpg",
        large: "./assets/thumbnails/production-line/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692996746/production_line_u659yb.mp4",
    year: 2018,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Dogs",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/dogs/regular/small.jpg",
        medium: "./assets/thumbnails/dogs/regular/medium.jpg",
        large: "./assets/thumbnails/dogs/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692996707/dogs_bbvxmw.mp4",
    year: 2016,
    category: "TV Series",
    rating: "E",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Asia in 24 Days",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/asia-in-24-days/regular/small.jpg",
        medium: "./assets/thumbnails/asia-in-24-days/regular/medium.jpg",
        large: "./assets/thumbnails/asia-in-24-days/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692997063/asia_in_24_days_2_qzjkkf.mp4",
    year: 2020,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "The Tasty Tour",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/the-tasty-tour/regular/small.jpg",
        medium: "./assets/thumbnails/the-tasty-tour/regular/medium.jpg",
        large: "./assets/thumbnails/the-tasty-tour/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692996963/the_tasty_tour_pk9mu4.mp4",
    year: 2016,
    category: "TV Series",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Darker",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/darker/regular/small.jpg",
        medium: "./assets/thumbnails/darker/regular/medium.jpg",
        large: "./assets/thumbnails/darker/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692996968/darker_bjjjs6.mp4",
    year: 2017,
    category: "Movie",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Unresolved Cases",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/unresolved-cases/regular/small.jpg",
        medium: "./assets/thumbnails/unresolved-cases/regular/medium.jpg",
        large: "./assets/thumbnails/unresolved-cases/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692997186/unresolved_cases_galr7g.mp4",
    year: 2018,
    category: "TV Series",
    rating: "18+",
    isBookmarked: false,
    isTrending: false,
  },
  {
    title: "Mission: Saturn",
    thumbnail: {
      regular: {
        small: "./assets/thumbnails/mission-saturn/regular/small.jpg",
        medium: "./assets/thumbnails/mission-saturn/regular/medium.jpg",
        large: "./assets/thumbnails/mission-saturn/regular/large.jpg",
      },
    },
    video:
      "https://res.cloudinary.com/dge8nwzaw/video/upload/v1692996899/mission_saturn_b2thym.mp4",
    year: 2017,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: false,
  },
];
