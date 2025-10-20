import { Anta, Tomorrow, Rubik, Outfit } from "next/font/google";

export const RubikFont = Rubik({
  subsets: ["latin"],
});
export const AntaFont = Anta({
  subsets: ["latin"],
  weight: ["400"],
});
export const OutfitFont = Outfit({ subsets: ["latin"] });
export const TomorrowFont = Tomorrow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
