export const formatTime = (timestamp: number) => {
  return new Date(timestamp * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatWeatherTime = (
  timestamp: number
) => {
  return new Date(
    timestamp * 1000
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};