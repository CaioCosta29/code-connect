import CardPost from "@/componentes/CardPost";
import logger from "@/logger";
import db from "../../../../prisma/db";
import { IPost, postSelect } from "@/shared/IPost";
import { notFound } from "next/navigation";
import ComentarioLista from "@/componentes/ComentarioLista";

type PagePostProps = {
    params: { slug: string }
}

async function coletarUmPost(slug: string): Promise<IPost | null> {
    try {
        const post = await db.post.findUnique({
            where: { slug },
            ...postSelect, 

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

            <div style={{marginTop: "2em"}}>
                
                <ComentarioLista comentarios={post.comentarios} />
            </div>
        </div>
    )
}

export default PagePost