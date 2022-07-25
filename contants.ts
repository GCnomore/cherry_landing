interface SiteMap {
  title: string;
  url: string;
  logo: string;
}

export const SITE_LIST: { [key: string]: SiteMap } = {
  // ray_ban: {
  //   title: "Ray Ban",
  //   url: "https://www.ray-ban.com/",
  //   logo: "/site_logos/ray_ban_logo.svg",
  // },
  puma: {
    title: "Puma",
    url: "https://us.puma.com/",
    logo: "/site_logos/puma_logo.png",
  },
  new_balance: {
    title: "New Balance",
    url: "https://www.newbalance.com/",
    logo: "/site_logos/new_balance_logo.png",
  },
  express: {
    title: "Express",
    url: "https://www.express.com/ ",
    logo: "/site_logos/express_logo.png",
  },
};
