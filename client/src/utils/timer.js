export const showTime = time => {
  const h = Math.floor(time / 3600),
    m = Math.floor((time % 3600) / 60),
    s = Math.floor((time % 3600) % 60),
    hours = h > 0 ? h + ":" : "00:",
    minutes = (m < 10 ? "0" : "") + m + ":",
    seconds = (s < 10 ? "0" : "") + s;

  return hours + minutes + seconds;
};

export const timeFromString = time => {
  const timeToArr = time.split(":").map(parseFloat);
  const timeInSeconds = timeToArr[0] * 3600 + timeToArr[1] * 60;

  return showTime(timeInSeconds);
};
