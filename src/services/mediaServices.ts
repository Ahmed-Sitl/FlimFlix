// returns api endpoint for fetching trending media based on the type = {today or this_week}
export function getTrendingEndpoint(category: string) {
  switch (category) {
    case "Today":
      return `/trending/movie/day`;
    case "This week":
      return `/trending/movie/week`;
    case "Streaming":
      return "/movie/popular?with_watch_monetization_types=flatrate";
    case "On Tv":
      return "/tv/popular";
    case "For Rent":
      return "/movie/popular?with_watch_monetization_types=rental";
    case "In Theaters":
      return "/movie/now_playing";
    case "Movies":
      return `/discover/movie?with_watch_monetization_types=free`;
    case "TV":
      return `/discover/tv?with_watch_monetization_types=free`;
    default:
      return "/movie/popular";
  }
}
