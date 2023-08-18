import { ISentimentType, IPlatform } from "../types";

export const SENTIMENT_COLOR_MAP: ISentimentType = {
  positive: "green",
  negative: "red",
  neutral: "gray",
};

export const PLATFORM_ICON_IMAGE: IPlatform = {
  twitter: "https://img.icons8.com/color/48/000000/twitter.png",
  facebook: "https://img.icons8.com/color/48/000000/facebook-new.png",
  instagram: "https://img.icons8.com/color/48/000000/instagram-new.png",
  youtube: "https://img.icons8.com/color/48/000000/youtube-play.png",
};


export const PLATFORM_OPTIONS = [
  { value: "youtube", label: "Youtube" },
  { value: "twitter", label: "Twitter" },
];

export const SENTIMENT_OPTIONS = [
  { value: "positive", label: "Positive" },
  { value: "negative", label: "Negative" },
  { value: "neutral", label: "Neutral" },
];