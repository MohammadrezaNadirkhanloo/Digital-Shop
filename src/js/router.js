const titr = "Digishop"

const router = {
  "/public/index.html": {
    template: "./index.html",
    title: `${titr}`,
  },
  "/public/mobile": {
    template: "./index.html",
    title: `${titr} | mobile`,
  },
  "/public/watch": {
    template: "./watch.html",
    title: `${titr} | watch`,
  },
  "/public/laptop": {
    template: "./laptop.html",
    title: `${titr} | laptop`,
  },
  "/public/sabad": {
    template: "./sabad.html",
    title: `${titr} | sabad`,
  },
  404: {
    template: "./404.html",
    title: `${titr} | 404`,
  },
};

export default router;
