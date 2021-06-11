import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId:
        "1028384161214-s9dndgfdm2lvu0talvg4684us69fm813.apps.googleusercontent.com",
      clientSecret: process.env.GOOGLE_SECRET,
      //   authorizationUrl:
      //     "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.MONGODB_CONNECT,
});
