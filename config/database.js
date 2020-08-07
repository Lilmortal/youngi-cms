module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: "${process.env.DATABASE_HOST}",
        port: "${process.env.DATABASE_PORT}",
        username: "${process.env.DATABASE_USERNAME}",
        password: "${process.env.DATABASE_PASSWORD}",
        database: "${process.env.DATABASE_NAME}",
        schema: "public",
      },
      options: {
        debug: true,
      },
    },
  },
});
