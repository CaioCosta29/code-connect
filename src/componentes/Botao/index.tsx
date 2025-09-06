import { ButtonHTMLAttributes, ReactNode } from "react"
import styles from './Botao.module.css'
import { Inter } from "next/font/google";

type BotaoProps = {
    children: ReactNode,
    estilo: "busca" | "icon"
} & ButtonHTMLAttributes<HTMLButtonElement>

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

const Botao = ({ children, estilo, ...rest }: BotaoProps) => {
    return (
        <button {...rest} className={`${styles[estilo]} ${inter.className}`}>
            {children}
        </button>
    )
}

export default Botao