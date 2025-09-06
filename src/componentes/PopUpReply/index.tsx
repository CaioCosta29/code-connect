"use client"

import { useRef } from 'react'
import styles from './PopUpReply.module.css'
import PopUp, { PopUpHandle } from '../PopUp'
import { IComentario } from '@/shared/IPost'
import { responderComentario } from '@/actions'
import Comentario from '../Comentario'
import Botao from '../Botao'

type PopUpReplyProps = {
    comentario: IComentario
}

const PopUpReply = ({comentario}: PopUpReplyProps) => {
    const popupRef = useRef<PopUpHandle>(null)

    const submitResponderComentario = responderComentario.bind(null, comentario)
    
    return (
        <>
            <PopUp ref={popupRef}>
                <form action={submitResponderComentario} onSubmit={() => popupRef.current?.fechar()}>
                    <div className={styles.body}>
                        <Comentario comentario={comentario}/>
                    </div>
                     <div className={styles.divider}></div>
                     <textarea className={styles.textarea} required rows={8} name="texto" placeholder="Digite aqui..." />

                     <div className={styles.footer}>
                        <Botao estilo="busca">Responder</Botao>
                    </div>
                </form>
            </PopUp>

            <button className={styles.btn} onClick={() => popupRef.current?.abrir()}>
                Responder
            </button>
        </>
    )
}

export default PopUpReply