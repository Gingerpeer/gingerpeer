// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { exampleRouter } from "./example";
import { authRouter } from "./auth";
import { blogRouter } from "./blog";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  blog: blogRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
