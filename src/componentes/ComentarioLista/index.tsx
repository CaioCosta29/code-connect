import { IComentario } from "@/shared/IPost"
import Comentario from "../Comentario"
import styels from './ComentarioLista.module.css'
import Replies from "../Replies"
import { responderComentario } from "@/actions"
import PopUpReply from "../PopUpReply"

type ComentarioListaProps = {
    comentarios: IComentario[]
}

const ComentarioLista = ({ comentarios }: ComentarioListaProps) => {
    
    return (
        <section className={styels.comentarios}>
            <h2>
                Comentários
            </h2>

            <ul className={styels.listaComentarios}>
                {comentarios.map(comentario => <li  key={comentario.id}>
                    
                    <Comentario comentario={comentario} key={comentario.id} />
                    <PopUpReply comentario={comentario}/>
                    <Replies comentario={comentario}/>
                    </li>)}

                
            </ul>
        </section>
    )
}

export default ComentarioLista