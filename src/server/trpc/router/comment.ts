import { router, publicProcedure, protectedProcedure } from '../trpc'
import { z } from "zod";


export const commentRouter = router({
  getAll: publicProcedure
  .query(async({ ctx })=>{
    try {
      return await ctx.prisma.comment.findMany({
        select: {
          name: true,
          message: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } catch (error) {
      console.log('Error', error)
    }
  }),
  postMessage: protectedProcedure
  .input(
    z.object({
    name: z.string(),
    message: z.string(),
  }),
  )
  .mutation(async ({ ctx, input }) => {
    try {
      await ctx.prisma.comment.create({
        data: {
          name: input.name,
          message: input.message,
        },
      });
    } catch (error){
      console.log(error)
    }
  }),
})
  