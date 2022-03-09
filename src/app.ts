import express, { Request, Response, NextFunction } from 'express';

const PORT = 80;

async function startServer() {
  const app = express();

  /**
   * A little hack here
   * Import/Export can only be used in 'top-level code'
   * Well, at least in node 10 without babel and at the time of writing
   * So we are using good old require.
   **/
  // await require('./loaders').default({ expressApp: app });

  app.listen(PORT, () => {
    // 추후 logger로 변경 예정
    console.log(`
      ################################################
      🛡️  Server listening on port: ${PORT} 🛡️
      ################################################
    `);
  }).on('error', err => {
    console.error(err);
    process.exit(1);
  });

}

startServer();