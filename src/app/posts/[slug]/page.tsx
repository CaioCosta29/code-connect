import { obterUmPost } from "@/api/requisicao";
import CardPost from "@/componentes/CardPost";

type PagePostProps = {
    params: { slug: string }
}

const PagePost = async ({ params }: PagePostProps) => {
    const post = await obterUmPost(params.slug)

    return (
        <div>
            <CardPost post={post} highlight/>
        </div>
    )
}

export default PagePost