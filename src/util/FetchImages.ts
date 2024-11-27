const url = "https://image.tmdb.org/t/p/w500";

export const fetchImage = (path: string) => {
  return `${url}${path}`;
};
