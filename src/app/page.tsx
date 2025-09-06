import type { Prisma } from "@prisma/client";
import CardPost from "@/componentes/CardPost";
import styles from './page.module.css'
import Link from "next/link";
import logger from "@/logger";
import db from "../../prisma/db";
import FormPesquisa from "@/componentes/FormPesquisa";
import { postSelect } from "@/shared/IPost";

type HomeProps = {
  searchParams: { pagina?: number, q?: string }
}

async function coletarPosts(page: number, pesquisa: string) {
  try {

    let where: Prisma.PostWhereInput = {}

    if (pesquisa) {
      where = {
        title: {
          contains: pesquisa
        },
      };
    }

    const perPage = 6;
    const skip = (page - 1) * perPage

    const totalPosts = await db.post.count({ where })

    const totalPages = Math.ceil(totalPosts / perPage)

    const prev = page > 1 ? page - 1 : null
    const next = totalPages > page ? page + 1 : null


    const posts = await db.post.findMany({
      take: perPage,
      skip,
      where,
      orderBy: { id: "desc" },
      ...postSelect, 
    })

    return { posts, prev, next }

  } catch (error) {
    logger.error('erro ao pegar os psots', { error })
    return { posts: [], prev: null, next: null }
  }

}

export default async function Home({ searchParams }: HomeProps) {
  const pagina = Number(searchParams.pagina ?? 1);
  const pesquisa = (searchParams.q ?? "").trim();

  const { posts, prev, next } = await coletarPosts(pagina, pesquisa)

  return (
    <main className={styles.main}>
      <FormPesquisa/>
      <div className={styles.posts}>
        {posts.map((post) => {
          return <CardPost key={post.id} post={post} />
        })}
      </div>

      <div className={styles.links}>
        {prev && <Link href={{pathname: "/", query: {pagina:prev, ...(pesquisa && { q: pesquisa }) }}}>Pagina anterior</Link>}
        {next && <Link href={{pathname: "/", query: {pagina: next, ...(pesquisa && { q: pesquisa }) }}} >Proxima pagina</Link>}
        <Link href='/teste?abobrinha=ola'>Aperte aqui para fazer um teste</Link>
      </div>
    </main>
  );
}
