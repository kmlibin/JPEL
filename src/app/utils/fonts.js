import { Dosis, Bree_Serif, Patua_One } from "next/font/google";

export const textFont = Dosis({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dosis",
  weight: "400"
});

export const bree_serif_init = Bree_Serif({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-bree",
    weight: "400"
  });

 export const titleFont = Patua_One({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-patua",
    weight: "400"
  });


// export const dosis = dosis_init.className;
// export const bree = bree_serif_init.className;
// export const patua = patua_one_init.className;