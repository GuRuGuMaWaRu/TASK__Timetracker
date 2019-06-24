export const isDesktop = () => {
  return window.innerHeight > 900 ? true : false;
};

export const maxTasksPerPage = () => {
  // 1. Find if our screen is small or large (different layout for each)
  const desktop = isDesktop();
  console.log("isDesktop: ", desktop);
  console.log("window.innerHeight: ", window.innerHeight);

  // 2. Set different Task List height depending on layout
  const listHeight = desktop
    ? window.innerHeight - 136
    : window.innerHeight - 212;

  console.log("listHeight: ", listHeight);
  console.log("mobile minus height:", 20 + 58 + 66 + 48 + 20);

  return desktop ? Math.floor(listHeight / 100) : Math.floor(listHeight / 60);
};
