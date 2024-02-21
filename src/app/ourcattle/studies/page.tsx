import { Metadata } from "next";
export const metadata: Metadata = {
    title: "JPEL Farms | Studies",
    description:
      "Discover JPEL Farms, a family-run farm in Colorado, offering naturally organic and uniquely flavorful Highland Beef. Learn about our commitment to local and sustainable farming practices.",
    openGraph: {
      type: "website",
      url: "https://...",
      title: "JPEL Farms | About Us",
      description: "enter description here",
      siteName: "JPEL Farms",
      images: [{ url: "/images/backfill.png", width: 500, height: 500 }],
    },
    robots: {
      index: true,
      follow: true,
      noarchive: true,
      nosnippet: true,
      noimageindex: true,
      nocache: true,
    },
    referrer: "origin-when-cross-origin",
    authors: {
      name: "Libin Web Development",
      url: "https://kelli-portfolio.netlify.app",
    },
    keywords:
      "JPEL Farms, Colorado Beef, Organic Beef, Grassfed, USDA Certified, Local Beef, Highland Cattle, Grass-fed beef, Local Beef, Family Farm, Front Range Beef, Colorado Springs",
  };

export default function StudiesPage() {
    return <div>Studies Page</div>
}



//quality of the meat is better
//charles bruce
//https://static1.squarespace.com/static/5ece4d07d31f1b069688b063/t/5f25b023d9bc7b2a92b3abff/1596305448377/Beef-Study-Charles-Bruce.pdf

//quality of the meat is better. tenderness higher
//Byron Wiegand,
//https://highlandcattleusa.org/content/EXECUTIVESUMMARY.pdf

//McCance and Widdowson, Ministry of Agriculture Fisheries and Food
//quality of meat is better, lower cholesterol, higher protein, lower fat
//https://highlandcattleusa.org/viewarticle.aspx?aname=glasgowbeefstudy#gsc.tab=0


//grazing animals in family farms, small farmers,  one of the best ways to captre and store carbon.  
//national beef association
//https://static1.squarespace.com/static/5ece4d07d31f1b069688b063/t/5f25b18cdf814e31ef5cb8ef/1596305805111/Note-Cattle-Carbon.pdf

//positively impact the plant diversity and the ecosystem
//https://www.sciencedirect.com/science/article/pii/S0167880919302014
// Pauler, C. M., Isselstein, J., Braunbeck, T., & Schneider, M. K. (2019). Influence of Highland and production-oriented cattle breeds on pasture vegetation: A pairwise assessment across broad environmental gradients. Agriculture, Ecosystems & Environment, 284, 106585.