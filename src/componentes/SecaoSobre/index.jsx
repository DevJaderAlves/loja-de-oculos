
import Image from "next/image";
import estilos from './SecaoSobre.module.css';

export default function SecaoSobre(){
    return (
        <section className={estilos.secao_sobre} id="sobre">
            <div className={estilos.titulo}>
            <h3>QUEM SOMO NÓS?</h3>
            <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
            </div>
            <div className={estilos.informacao}>
               
                <Image className={estilos.image} src="/loja.png" alt='oculos de grau' width={300} height={300}/>

                <div className={estilos.card}>
                    <h4>NOSSAS FILIAIS</h4>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>

                <div className={estilos.card}>
                    <h4>ATENDIMENTO FLEXÍVEL</h4>
                    <p>Nossa equipe possui é treinada para te atender</p>
                </div>

                <Image className={estilos.image} src="/atendimento.png" alt='oculos de grau' width={300} height={300}/>
            </div>
        </section>
    );
};