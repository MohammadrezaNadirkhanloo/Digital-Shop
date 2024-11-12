const titr = "Digishop"

const router = {
  "/Digital-Shop/public/index.html": {
    template: "./index.html",
    title: `${titr}`,
  },
  "/Digital-Shop/public/mobile": {
    template: "./index.html",
    title: `${titr} | mobile`,
  },
  "/Digital-Shop/public/home": {
    template: "./index.html",
    title: `${titr} | home`,
  },
  "/Digital-Shop/public/group": {
    template: "./grouping.html",
    title: `${titr} | group`,
  },
  "/Digital-Shop/public/watch": {
    template: "./watch.html",
    title: `${titr} | watch`,
  },
  "/Digital-Shop/public/laptop": {
    template: "./laptop.html",
    title: `${titr} | laptop`,
  },
  "/Digital-Shop/public/sabad": {
    template: "./sabad.html",
    title: `${titr} | sabad`,
  },
  "/Digital-Shop/public/aboutProduct": {
    template: "./aboutProduct.html",
    title: `${titr} | about`,
  },
  404: {
    template: "./404.html",
    title: `${titr} | 404`,
  },
};

export default router;
