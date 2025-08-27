import CardPost from "@/componentes/CardPost";
import styles from './page.module.css'
import Link from "next/link";
import logger from "@/logger";
import db from "../../prisma/db";

type HomeProps = {
  searchParams: {pagina?: number}
}

async function coletarPosts(page: number) {
  try {

    const posts = await db.post.findMany()
    return {data : posts, prev: null, next: null}

  } catch (error) {
    logger.error('erro ao pegar os psots', {error})
    return {data : [], prev: null, next: null}
  }
  
}

export default async function Home({ searchParams } : HomeProps) {
  const pagina = Number(searchParams.pagina ?? 1)

  const {data : posts, prev, next} = await coletarPosts(pagina)
  
  return (
    <main className={styles.main}>
      {posts.map((post) => {
        return <CardPost key={post.id} post={post} />  
      })}
      
      <div className={styles.links}>
        {prev && <Link href={`/?pagina=${prev}`}>Pagina anterior</Link>}
        {next && <Link href={`/?pagina=${next}`} >Proxima pagina</Link>}
        <Link href='/teste?abobrinha=ola'>Aperte aqui para fazer um teste</Link>
      </div>
    </main>
  );
}
