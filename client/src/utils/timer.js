export const showTime = time => {
  const h = Math.floor(time / 3600);
  const m = Math.floor((time % 3600) / 60);
  const s = Math.floor((time % 3600) % 60);
  const hours = h > 0 ? `${h > 9 ? h : `0${h}`}:` : "00:";
  const minutes = (m < 10 ? "0" : "") + m + ":";
  const seconds = (s < 10 ? "0" : "") + s;

  return hours + minutes + seconds;
};

export const timeFromString = time => {
  const timeToArr = time.split(":").map(parseFloat);
  const timeInSeconds = timeToArr[0] * 3600 + timeToArr[1] * 60;

  return showTime(timeInSeconds);
};

export const roundUpSeconds = time => {
  const seconds = parseInt(time.slice(6), 10);
  let minutes = parseInt(time.slice(3, 5), 10);
  const hours = parseInt(time.slice(0, 2), 10);
  let updatedTime = "";

  if (seconds > 0) {
    minutes = minutes + 1;

    if (minutes > 59) {
      updatedTime += hours + 1 > 9 ? `${hours}:` : `0${hours}:`;
      updatedTime += "00";
    }

    updatedTime += hours > 9 ? `${hours}:` : `0${hours}:`;
    updatedTime += minutes > 9 ? `${minutes}:` : `0${minutes}`;
  }

  return updatedTime;
};
