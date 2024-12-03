import Image from "next/image";
import estilos from "./SecaoCapa.module.css";


export default function SecaoCapa(){
    return (
        <section className={estilos.secao_capa}>
            <div className={estilos.secao_conteudo}>
                <p>Preços baixos em</p>
                <h1>Óculos de grau e de sol</h1>
                <p>Você só encontra aqui</p>
            </div>
        </section>
    );
};