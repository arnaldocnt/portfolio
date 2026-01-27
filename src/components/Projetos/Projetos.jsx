import { useState } from 'react'

import styles from "./Projetos.module.scss"

import PetAdopt from "../../assets/petadopt.jpeg"
import ReciclaTech from "../../assets/reciclatech.jpeg"
import VerdeAcao from "../../assets/verdeacao.jpeg"

function Projetos() {

  const [projetos, setProjetos] = useState([
    {
      id: 1,
      imagem: VerdeAcao,
      nome: "Verde Ação",
      descricao: "Projeto para ações voluntárias.",
      link: "https://verde-acao-kappa.vercel.app/",
      habilidades: "<React/>, .SCSS{}"
    },

    {
      id: 2,
      imagem: ReciclaTech,
      nome: "ReciclaTech",
      descricao: "Projeto para desapego de produtos.",
      link: "https://google.com",
      habilidades: "<React/>, .SCSS{}"
    },

    {
      id: 3,
      imagem: PetAdopt,
      nome: "Pet Adopt",
      descricao: "Projeto voltado à adoção de animais.",
      link: "https://msn.com ",
      habilidades: "<React/>, .SCSS{}"
    }

    // {
    //   id: 4,
    //   Imagem: RockFood,
    //   nome: "Rock Food",
    //   descricao: "Projeto para lanchonetes",
    //   link: "",
    //   habilidades: "<React/>, .SCSS{}"
    // }

  ]);


  return (
    <>

      <article>
        {projetos.map((item) => (
          <div className={styles.card} key={item.id}>
            <img src={item.imagem} alt="Logo" />
            <h2> {item.nome} </h2>
            <p> {item.descricao} </p>
            <button onClick={() => window.open(item.link, "_blank")}>
              Ver Projeto
            </button>

          </div>
        ))}
      </article>
    </>
  );
}


export default Projetos