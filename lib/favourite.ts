export function getFavorites() {
  if (typeof window === "undefined") {
    return [];
  }

  const favorites =
    localStorage.getItem("favorites");

  return favorites
    ? JSON.parse(favorites)
    : [];
}

export function saveFavorite(
  city: string
) {
  const favorites =
    getFavorites();

  if (!favorites.includes(city)) {
    favorites.push(city);

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }
}

export function removeFavorite(
  city: string
) {
  const favorites =
    getFavorites().filter(
      (item: string) =>
        item !== city
    );

  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );
}