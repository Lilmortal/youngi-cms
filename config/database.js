module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST"),
        port: env.int("DATABASE_PORT"),
        username: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
        database: env("DATABASE_NAME"),
        ssl: { rejectUnauthorized: false },
      },
      options: {
        debug: true,
      },
    },
  },
});
