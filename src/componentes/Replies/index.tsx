'use client'

import { useEffect, useState } from 'react'
import styles from './Replies.module.css'
import { IComentario } from '@/shared/IPost'
import Comentario from '../Comentario'

type RepliesProps = {
    comentario: IComentario
}

const Replies = ({ comentario }: RepliesProps) => {
    const [mostrarReplies, setMostrarReplies] = useState(false)
    const [respostas, setRespostas] = useState<IComentario[]>([])

    async function fetchData() {
        const response = await fetch(`/api/comentario/${comentario?.id}`)
        const data = await response.json()
        setRespostas(data)
    }

    useEffect(() => {
        if (mostrarReplies) {
            fetchData()
        }
    }, [mostrarReplies])

    return (
        <div className={styles.replies}>
            <button className={styles.btn} onClick={() => setMostrarReplies(!mostrarReplies)}>

                {mostrarReplies ? "Ocultar" : "Ver"} respostar
            </button>

            {mostrarReplies && (
                <ul className={styles.respostas}>
                    {respostas.map(resposta => <li key={resposta.id}>
                        <Comentario comentario={resposta}/>
                    </li>)}
                </ul>
            )}
        </div>
    )
}

export default Replies