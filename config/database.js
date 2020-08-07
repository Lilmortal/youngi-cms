module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: "${process.env.DATABASE_HOST}",
        port: "${process.env.DATABASE_PORT}" || 5432,
        username: "${process.env.DATABASE_USERNAME}",
        password: "${process.env.DATABASE_PASSWORD}",
        database: "${process.env.DATABASE_NAME}",
        ssl: { rejectUnauthorized: false },
      },
      options: {
        debug: true,
      },
    },
  },
});
