import express, { Request, Response, NextFunction } from 'express';

const PORT = 80;

const app = express();

app.get("/hello", (req: Request, res: Response, next: NextFunction) => {
  res.send("hello!")
})

app.listen(PORT, () => {
  console.log(`
    ################################################
    🛡️  Server listening on port: ${PORT} 🛡️
    ################################################
  `);
});