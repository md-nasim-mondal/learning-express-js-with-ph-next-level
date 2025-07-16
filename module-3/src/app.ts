import express, {
  type Application,
  type Request,
  type Response,
} from "express";
const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  console.log({ req, res });
  res.send("Hello World!!");
});

app.get("/todos", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/todos/create-todo", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;

/**
 * Basic File structure
 *  server fille - server handling like - starting, closing error handling of server, only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works.
 */
