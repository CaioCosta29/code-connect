import Image from 'next/image'
import styles from './aside.module.css'

import logo from "../../../public/Logo.png"

const Aside = () => {
    return (
        <aside className={styles.aside}>
            {/* <img src="/logo.png" alt="Code connect" /> */}
            <Image src={logo} alt='Imagem do logo'/>
        </aside>
    )
}

export default Aside