// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { exampleRouter } from "./example";
import { authRouter } from "./auth";
import { blogRouter } from "./blog";
import { commentRouter } from "./comment";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  blog: blogRouter,
  comment: commentRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
