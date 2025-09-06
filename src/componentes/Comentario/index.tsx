import { IComentario, IReply } from "@/shared/IPost"
import Image from "next/image"
import Avatar from "../Avatar"
import styles from './Comentario.module.css'

type ComentarioProps = {
    comentario: IComentario | IReply
}

const Comentario = ({comentario}: ComentarioProps) => {
    return (
        <div className={styles.comentario}>
            <Avatar iconeSrc={comentario.author.avatar} nome={comentario.author.username} corNome="textoPreto"/>

            <p>
                {comentario.texto}
            </p>

        </div>

        
    )
}

export default Comentario