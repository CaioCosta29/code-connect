import Image from "next/image"
import styles from './avatar.module.css'

type AvatarProps = {
    nome: string,
    iconeSrc: string
    corNome: "textoCinza" | "textoPreto"
}

const Avatar = ({ nome, iconeSrc, corNome }: AvatarProps) => {
    return (
        <ul className={styles.avatar}>
            <li>
                <Image className={styles.icon} src={iconeSrc} alt="Icone do perfil" width={32} height={32}/>
            </li>
            <li className={styles[corNome]}>
                @{nome}
            </li>
        </ul>
    )
}

export default Avatar