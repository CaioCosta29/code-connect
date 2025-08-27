import Image from "next/image"
import Avatar from "../Avatar"
import { IPost } from "@/shared/IPost"

import styles from './cardpost.module.css'
import Link from "next/link"

type CardPostProps = {
    post: IPost,
    highlight?: boolean
}

const CardPost = ({ post, highlight }: CardPostProps) => {
    return (
        <Link href={`/posts/${post.slug}`} className={styles.link}>
            <article className={styles.cardContainer} style={{ width: highlight ? 993 : 486}}>
                <header>
                    <figure className={styles.imgContainer} style={{ height: highlight ? 300 : 156}}>
                        <div className={styles.imgInner}>
                            <Image className={styles.imagem} src={post.cover} alt="Banner" fill />
                        </div>
                    </figure>
                </header>
                <div className={styles.infoContainer}>
                    <section className={styles.textContainer}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </section>
                    <footer className={styles.avatarContainer}>
                        <Avatar iconeSrc={post.author.avatar} nome={post.author.username} />
                    </footer>
                </div>
            </article>
        </Link>
    )
}

export default CardPost