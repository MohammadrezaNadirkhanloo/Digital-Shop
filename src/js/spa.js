import router from "./router.js";

document.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.className.includes("link-spa")) {
    return false;
  }

  urlRouter(e);
});

function urlRouter(event) {
  window.history.pushState({}, "", event.target.href);
  location();
}

async function location() {
  const loc = window.location.pathname;
  const route = router[loc] || router[404];
  let html = await fetch(route.template).then((res) => res.text());
  const idRemove = "theme-rep";
  html = html.replace(idRemove, "hidden");
  document.querySelector("#content").innerHTML = html;
}

window.onpopstate = location;
