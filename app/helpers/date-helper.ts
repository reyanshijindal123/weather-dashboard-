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

export const formatVisibility = (
  visibility: number
) => {
  return `${visibility.toFixed(1)} km`;
};

export const formatForecastDate = (
  timestamp: number
) => {
  return new Date(
    timestamp * 1000
  ).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    weekday: "long",
  });
};