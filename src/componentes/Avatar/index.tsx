import Image from "next/image"
import styles from './avatar.module.css'

type AvatarProps = {
    nome: string,
    iconeSrc: string
}

const Avatar = ({ nome, iconeSrc }: AvatarProps) => {
    return (
        <ul className={styles.avatar}>
            <li>
                <Image src={iconeSrc} alt="Icone do perfil" width={32} height={32}/>
            </li>
            <li>
                @{nome}
            </li>
        </ul>
    )
}

export default Avatar