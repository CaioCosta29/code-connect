import Image from "next/image"
import Avatar from "../Avatar"
import { IPost } from "@/shared/IPost"

import styles from './cardpost.module.css'
import Link from "next/link"
import Botao from "../Botao"
import { Joinha } from "../icons/Joinha"
import { curtirOPost, publicarComentario, responderComentario } from "@/actions"
import PopUpComentario from "../PopUpComentario"

type CardPostProps = {
    post: IPost,
    highlight?: boolean
}

const CardPost = ({ post, highlight }: CardPostProps) => {

    const submitCurtirPost = curtirOPost.bind(null, post);
    const submitPublicarComentario = publicarComentario.bind(null, post)

    return (
        <article className={styles.cardContainer} style={{ width: highlight ? 993 : 486 }}>
            <header>
                <figure className={styles.imgContainer} style={{ height: highlight ? 300 : 156 }}>
                    <div className={styles.imgInner}>
                        <Image className={styles.imagem} src={post.cover} alt="Banner" fill />
                    </div>
                </figure>
            </header>
            <div className={styles.infoContainer}>
                <section className={styles.textContainer}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link href={`/posts/${post.slug}`}>Ver detalhes</Link>
                </section>
                <footer className={styles.footerContainer}>
                    <div className={styles.actions}>
                        <form action={submitCurtirPost}>
                            <Botao estilo="icon">
                                <Joinha/>
                            </Botao>

                            <p>
                                {post.likes}
                            </p>
                        </form>
                        <div>
                            <PopUpComentario action={submitPublicarComentario}/>

                            <p>
                                {post.comentarios?.length}
                            </p>
                        </div>
                    </div>
                    <Avatar iconeSrc={post.author.avatar} nome={post.author.username} corNome="textoCinza"/>
                </footer>
            </div>
        </article>
    )
}

export default CardPost