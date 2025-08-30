import CardPost from "@/componentes/CardPost";
import logger from "@/logger";
import db from "../../../../prisma/db";
import { IPost } from "@/shared/IPost";
import { notFound } from "next/navigation";

type PagePostProps = {
    params: { slug: string }
}

async function coletarUmPost(slug: string): Promise<IPost | null> {
    try {
        const post = await db.post.findUnique({
            where: { slug },
            select: {
                id: true,
                cover: true,
                title: true,
                body: true,
                slug: true,
                createdAt: true,
                updatedAt: true,
                author: {
                    select: { id: true, name: true, username: true, avatar: true },
                },
            },
        });

        return post
    } catch (error) {
        logger.error('erro ao pegar o post', { error })
        return null
    }
}

const PagePost = async ({ params }: PagePostProps) => {
    const post = await coletarUmPost(params.slug)

    if (!post) {
        notFound();
    }

    return (
        <div>
            <CardPost post={post} highlight />
        </div>
    )
}

export default PagePost