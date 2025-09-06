'use client'

import { useRef } from "react"
import Botao from "../Botao"
import { Comentario } from "../icons/Comentario"
import PopUp, { PopUpHandle } from "../PopUp"
import styles from './PopUpComentario.module.css'

type PopUpComentarioProps = {
    action: (formData: FormData) => void | Promise<void>
}

const PopUpComentario = ({action}: PopUpComentarioProps) => {
    const popupRef = useRef<PopUpHandle>(null)

    return (
        <>
            <PopUp ref={popupRef}>
                <form action={action} onSubmit={() => popupRef.current?.fechar()}>
                    <h2 className={styles.subheading}>Deixe seu comentário sobre o post:</h2>
                    <textarea className={styles.textarea} required rows={8} name="texto" placeholder="Digite aqui..."></textarea>
                    <div className={styles.footer}>
                        <Botao estilo="busca">Comentar</Botao>
                    </div>
                </form>
            </PopUp>

            <Botao estilo="icon" onClick={() => popupRef.current?.abrir()}>
                <Comentario/>
            </Botao>
        </>

    )
}

export default PopUpComentario