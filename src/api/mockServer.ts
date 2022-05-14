import { createServer } from "miragejs";

function makeServer(env: string | undefined) {
  if (env === "production") {
    return null;
  }
  const server = createServer({});
  server.get("/api/account", () => {
    return {
      data: {
        user: {
          id: 50000000,
          email: "skdh188@naver.com",
          nickname: "IRONMAN",
          ageRange: 0,
          gender: 0,
          profileImageUrl: null,
        },
      },
    };
  });
  return server;
}

export default makeServer;
