
import estilos from './SecaoProdutos.module.css';
import Image from 'next/image';



export default function SecaoProdutos(){
    return (
        <section className={estilos.secao_produtos} id='produtos'>
            <div className={estilos.container_titulo}>
                <h3>Nossos produtos</h3>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            </div>

            <div className={estilos.container_imagens}>
                <div className={estilos.card}>
                    <h4>Óculos de grau</h4>
                    <Image src="/oculos01.png" alt='oculos de grau' width={200} height={100}/>
                    <p>R$ 500,00</p>
                </div>
                <div className={estilos.card}>
                    <h4>Óculos transition</h4>
                    <Image src="/oculos02.png" alt='oculos de grau' width={200} height={100}/>
                    <p>R$ 750,00</p>
                </div>
                <div className={estilos.card}>
                    <h4>Óculos de sol</h4>
                    <Image src="/oculos03.png" alt='oculos de grau' width={200} height={100}/>
                    <p>R$ 700,00</p>
                </div>
                <div className={estilos.card}>
                    <h4>Óculos infantil</h4>
                    <Image src="/oculos04.png" alt='oculos de grau' width={200} height={100}/>
                    <p>R$ 500,00</p>
                </div>
            </div>

            <div className={estilos.garantia}>
                <h3>Todos os nossos produtos incluem:</h3>
                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>

        </section>
    );
};