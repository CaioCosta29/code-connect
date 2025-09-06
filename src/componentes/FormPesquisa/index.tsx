import Botao from "../Botao"
import Input from "../Input"
import styles from './FormPesquisa.module.css'

const FormPesquisa = () => {
    return (
        <form className={styles.form} action={'/'}>
            <Input nome="q"/>
            <Botao estilo="busca">Buscar</Botao>
        </form>
    )
}

export default FormPesquisa