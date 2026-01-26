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
      descricao: "Projeto para conectar interessados em ações voluntárias.",
      link: "https://verde-acao-kappa.vercel.app/",
      habilidades: "<React/>, .SCSS{}"
    },

    {
      id: 2,
      imagem: ReciclaTech,
      nome: "ReciclaTech",
      descricao: "Projeto para desapego de produtos de tecnologia.",
      link: "https://google.com",
      habilidades: "<React/>, .SCSS{}"
    },

    {
      id: 3,
      imagem: PetAdopt,
      nome: "Pet Adopt",
      descricao: "Projeto voltado a para adoção de animais.",
      link: "https://msn.com ",
      habilidades: "<React/>, .SCSS{}"
    }

  ]);


  return (
    <>
      <article>

        {projetos.map((item) => (

          <section className={styles.card} key={item.id} >

            
              <img src={item.imagem} alt="" />
              <p> {item.nome} </p>
              <h2> {item.descricao} </h2>
              <h3> {item.habilidades}</h3>
              <button onClick={() => window.open(item.link, "_blank")}>Ver</button>



          </section>

        ))}



      </article>
    </>
  )
}

export default Projetos