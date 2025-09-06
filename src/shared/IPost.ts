import { Prisma } from "@prisma/client"

export const authorSelect = Prisma.validator<Prisma.UserDefaultArgs>()({
  select: { id: true, name: true, username: true, avatar: true },
})

export type IAtor = Prisma.UserGetPayload<typeof authorSelect>

export const postInCommentSelect = Prisma.validator<Prisma.PostDefaultArgs>()({
  select: {
    id: true,
    slug: true,
    title: true,
  },
})

export const commentSelect = Prisma.validator<Prisma.ComentarioDefaultArgs>()({
  select: {
    id: true,
    texto: true,
    createdAt: true,
    updatedAt: true,
    parentId: true,
    author: authorSelect,
    post: postInCommentSelect,
  },
})

export type IComentario = Prisma.ComentarioGetPayload<typeof commentSelect>

export const postSelect = Prisma.validator<Prisma.PostDefaultArgs>()({
  select: {
    id: true,
    cover: true,
    title: true,
    body: true,
    slug: true,
    createdAt: true,
    updatedAt: true,
    likes: true,
    author: authorSelect,
    comentarios: {
      where: { parentId: null },
      orderBy: { createdAt: "desc" },
      select: commentSelect.select,
    },
  },
})

export type IPost = Prisma.PostGetPayload<typeof postSelect>

// export type ISODateString = string

// type IAtor = {
//     id: number;
//     name: string;
//     username: string;
//     avatar: string;
// }

// export type IPost = {
//     id: number
//     cover: string,
//     title: string,
//     body: string
//     slug: string
//     createdAt: Date
//     updatedAt: Date
//     author: IAtor
//     likes: number
//     comentarios?: IComentario[]
// }

// export type IComentario = {
//   id: number
//   texto: string
//   createdAt: ISODateString
//   updatedAt: ISODateString
//   author: IAtor
//   replies: IComentario[]
//   parentId?: number | null
// }