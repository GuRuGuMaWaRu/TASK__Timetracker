export const isDesktop = () => {
  return window.innerHeight > 900 ? true : false;
};

export const maxTasksPerPage = () => {
  // 1. Find if our screen is small or large (different layout for each)
  const desktop = isDesktop();

  // 2. Set different Task List height depending on layout
  const listHeight = desktop
    ? window.innerHeight - 136
    : window.innerHeight - 212;

  return desktop ? Math.floor(listHeight / 100) : Math.floor(listHeight / 60);
};
