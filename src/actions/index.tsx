'use server'

import { IComentario, IPost } from "@/shared/IPost";
import db from "../../prisma/db";
import { revalidatePath } from "next/cache";

export async function curtirOPost(post: IPost) {

    await db.post.update({
        where: {
            id: post.id
        },
        data: {
            likes: {
                increment: 1
            }
        }
    })

    revalidatePath('/')
    revalidatePath(`/${post.slug}`)
}

export async function publicarComentario(post: IPost, formData: FormData) {
    const autor = await db.user.findFirst({
        where: {
            username: "Caio_Costa09"
        },
        select: { id: true }

    })

    const texto = (formData.get('texto') ?? '').toString().trim()


    if (!autor) throw new Error("Autor não encontrado")
    await db.comentario.create({
        data: {
            texto,
            author: { connect: { id: autor.id } },
            post: { connect: { id: post.id } },
        },
    });

    revalidatePath('/')
    revalidatePath(`/${post.slug}`)
}

export async function responderComentario(comentarioPai: IComentario, formData: FormData) {
    const autor = await db.user.findFirst({
        where: {
            username: "Caio_Costa09"
        },
        select: { id: true }

    })

    const post = await db.post.findFirst({
        where: {
            id: comentarioPai.post.id
        }
    })

    const texto = (formData.get('texto') ?? '').toString().trim()
    console.log("texto digitado " + texto)

    if (!autor) throw new Error("Autor não encontrado")
    if (!post) throw new Error("Post não encontrado")

    const rootId = comentarioPai.parentId ?? comentarioPai.id

    await db.comentario.create({
        data: {
            texto,
            author: { connect: { id: autor.id } },
            post: { connect: { id: post.id } },
            parent: { connect: {id: rootId}}
        },
    });

    revalidatePath(`/${post.slug}`)
}