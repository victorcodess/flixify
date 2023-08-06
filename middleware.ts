export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/", "/movies", "/tv-series", "/bookmark"],
};
