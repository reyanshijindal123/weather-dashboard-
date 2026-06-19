export function getFavorite() {
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
    getFavorite();

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
    getFavorite().filter(
      (item: string) =>
        item !== city
    );

  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );
}