import Link from "next/link";
import Image from "next/image"
import styles from "./not-found.module.css"

export default function NotFound() {
    return (
        <div className={styles.container}>
            <Image src={"/erro-404_desktop.png"} alt="Imagem 404" height={367} width={656} />
            <h1>OPS! Pagina não encontrada</h1>
            <p className={styles.paragrafo}>Você pode voltar ao feed e continuar buscando projetos incriveis!</p>
            <Link href={'/'}>Voltar ao feed</Link>
        </div>
    )
}