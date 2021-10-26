export function openMenuBar() {
  var x = document.getElementById("navbar");
  var hamberger = document.getElementById("menuClick");

  const viewPortElement = document.getElementById("viewport");

  if (x.className === "topnav") {
    x.className += " responsive";
    document.body.style.overflow = "hidden";

    if (viewPortElement) {
      viewPortElement.style.overflow = "hidden";
    }

    hamberger.className += " open";
  } else {
    x.className = "topnav";
    hamberger.className = "navBarToggle";
    document.body.style.overflow = null;

    if (viewPortElement) {
      viewPortElement.style.overflow = null;
    }
  }
}

export const scrollToTop = () => {
  if (typeof window !== undefined) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};
