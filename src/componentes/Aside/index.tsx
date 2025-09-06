import Image from 'next/image'
import styles from './aside.module.css'

import logo from "../../../public/Logo.png"
import Link from 'next/link'

const Aside = () => {
    return (
        <aside className={styles.aside}>
            {/* <img src="/logo.png" alt="Code connect" /> */}

            <Link href={'/'}>
                <Image src={logo} alt='Imagem do logo'/>
            </Link>
        </aside>
    )
}

export default Aside