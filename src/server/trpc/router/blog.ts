import { router, publicProcedure, protectedProcedure } from '../trpc'
import { z } from "zod"


export const blogRouter = router({
  getAll: publicProcedure
    .query(async({ ctx }) =>{
      try {
        return await ctx.prisma.blog.findMany({
          select: {
            id: true,
            author: true,
            title: true,
            body: true,
            date: true
          },
          orderBy: {
            date: "desc",
          }
        })
      } catch (error) {
        console.log('Error', error)
      }
    }),
    postMessage: protectedProcedure
      .input(
        z.object({
          author: z.string(),
          title: z.string(),
          body: z.string(),
        }),
      )
      .mutation(async ({ ctx, input }) => {
        try {
          await ctx.prisma.blog.create({
            data: {
              author: input.author,
              title: input.title,
              body: input.body,
            }
          })
        } catch (error) {
          console.log(error)
        }
      })
})