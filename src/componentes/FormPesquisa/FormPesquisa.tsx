import Botao from "../Botao"
import Input from "../Input/Input"
import styles from './FormPesquisa.module.css'

const Pesquisa = () => {
    return (
        <form className={styles.form} action={'/'}>
            <Input/>
            <Botao estilo="busca">Buscar</Botao>
        </form>
    )
}

export default Pesquisa