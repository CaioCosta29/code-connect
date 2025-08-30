import { ReactNode } from "react"
import styles from './Botao.module.css'
import { Inter } from "next/font/google";

type BotaoProps = {
    children: ReactNode,
    estilo: "busca" | "outro"
}

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const Botao = ({ children, estilo }: BotaoProps) => {
    return (
        <button className={`${styles[estilo]} ${inter.className}`}>
            {children}
        </button>
    )
}

export default Botao