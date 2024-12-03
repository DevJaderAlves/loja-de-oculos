
import Image from "next/image";
import estilos from './SecaoContatos.module.css';

export default function SecaoContatos(){
    return (
        <section className={estilos.secao_contatos} id="contatos">
            <div className={estilos.titulo}>
                <h3>Fale conosco</h3>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
            </div>

        <div className={estilos.info_contatos}>
  {/* Seção de Contatos */}
  <div className={estilos.contato}>
    <h3>Nossos Contatos</h3>
    <div className={estilos.contatos}>
      <div className={estilos.imgSpan}>
        <Image src="/local.png" alt="Local" width={30} height={30} />
        <span>Nova Iguaçu, RJ</span>
      </div>
      <div className={estilos.imgSpan}>
        <Image src="/telefone.png" alt="Telefone" width={30} height={30} />
        <span>(21) 9999-9999</span>
      </div>
      <div className={estilos.imgSpan}>
        <Image src="/email.png" alt="Email" width={30} height={30} />
        <span>contato@oticavida.com</span>
      </div>
    </div>
  </div>

  {/* Seção de Redes Sociais */}
  <div className={estilos.contato}>
    <h3>Nossas Redes Sociais</h3>
    <div className={estilos.contatos}>
      <div className={estilos.imgSpan}>
        <Image src="/fb.png" alt="Facebook" width={30} height={30} />
        <span>/OticaVida</span>
      </div>
      <div className={estilos.imgSpan}>
        <Image src="/ig.png" alt="Instagram" width={30} height={30} />
        <span>@oticavidarj</span>
      </div>
      <div className={estilos.imgSpan}>
        <Image src="/tt.png" alt="Twitter" width={30} height={30} />
        <span>@oticavidarj</span>
      </div>
    </div>
  </div>
</div>

        </section>
    );
};