'use client'

import { forwardRef, useImperativeHandle, useRef } from "react"
import Botao from "../Botao"
import styles from "./PopUp.module.css"

export type PopUpHandle = {
  abrir: () => void
  fechar: () => void
}

const PopUp = forwardRef<PopUpHandle, { children: React.ReactNode }>(({ children }, ref) => {
    
    const dialogRef = useRef<HTMLDialogElement>(null)

    useImperativeHandle(ref, () => ({
      abrir: () => dialogRef.current?.showModal(),
      fechar: () => dialogRef.current?.close(),
    }))

    return (
        <dialog ref={dialogRef} className={styles.dialog}>
            <header className={styles.header}>
                <Botao estilo="icon" onClick={() => dialogRef.current?.close()}>X</Botao>
            </header>
            {children}
        </dialog>
    )

})

export default PopUp