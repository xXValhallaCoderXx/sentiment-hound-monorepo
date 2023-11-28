import { withAuth } from "next-auth/middleware";

// i used advanced middleware configuration
export default withAuth(
  function middleware(req) {
    // some actions here
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        console.log("TOKEN: ", token);
        if (token) {
          return true;
        }
        return false;
        // verify token and return a boolean
      },
    },
  }
);

export const config = { matcher: ["/dashboard/:path*"] };
