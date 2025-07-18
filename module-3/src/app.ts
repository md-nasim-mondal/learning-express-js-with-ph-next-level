import express, {
  type Application,
  type NextFunction,
  type Request,
  type Response,
} from "express";
import { todosRouter } from "./app/todos/todos.routes";
const app: Application = express();

app.use(express.json());

const userRouter = express.Router();

app.use("/todos", todosRouter);
app.use("/users", userRouter);

app.get(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    console.log({ req, res });
    res.send("I am custom middleware");
    next();
  },
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log({ req, res });
      res.send("Welcome to Todos App");
    } catch (error) {
      // console.log("error", error);
      // res.status(500).json({ message: "something went wrong!!", error });
      next(error);
    }
  }
);

app.get("/error", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send("Welcome to Todos App");
  } catch (error) {
    next(error);
  }
});

app.use((req: Request, res: Response) => {
  res.status(400).json({ message: "Route Not Found!!" });
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    console.log("error", error);
    res
      .status(400)
      .json({
        message: "something went wrong!! from global error handler",
        error,
      });
  }
});

export default app;

/**
 * Basic File structure
 *  server fille - server handling like - starting, closing error handling of server, only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works.
 */
