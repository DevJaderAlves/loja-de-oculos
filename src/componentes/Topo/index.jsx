

import Image from "next/image";
import Link from "next/link";
import estilos from "./Topo.module.css";

export default function Topo() {
  return (
    <header className={estilos.container_topo}>
      <div className={estilos.container_logo}>
        <Image className={estilos.image} src="/logo.png" alt="Logo" width={150} height={50} />
      </div>
      <div className={estilos.container_links}>
        <Link  className={estilos.links} href="#produtos">Produtos</Link>
        <Link className={estilos.links} href="#sobre">Sobre</Link>
        <Link className={estilos.links} href="#contatos">Contato</Link>
      </div>
    </header>
  );
};
