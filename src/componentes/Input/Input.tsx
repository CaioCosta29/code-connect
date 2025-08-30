import styles from './Input.module.css'

const Input = () => {
    return (
        <input type="text" placeholder="Digite o que você procura" className={styles.input} name='q'/>
    )
}

export default Input