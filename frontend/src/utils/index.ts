export const bodyScrollDisable = () => {
  const body = document.querySelector("body");
  if (body) {
    body.style.position = "static";
    body.style.width = "100%";
  }
};

export const bodyScrollEnable = () => {
  const body = document.querySelector("body");
  if (body) {
    document.body.style.position = "static";
  }
};
