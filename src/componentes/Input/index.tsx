import styles from './Input.module.css'

type InputProps = {
    nome: string
}

const Input = ({nome}: InputProps) => {
    return (
        <input type="text" placeholder="Digite o que você procura" className={styles.input} name={nome}/>
    )
}

export default Input