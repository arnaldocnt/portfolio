import { useState } from 'react'

import PetAdopt from "../../assets/petadopt.jpeg"
import ReciclaTech from "../../assets/reciclatech.jpeg"
import VerdeAcao from "../../assets/verdeacao.jpeg"

function Projetos() {

  const [projetos, setProjetos] = useState([
    {
      id: 1,
      imagem: PetAdopt,
      nome: "PetAdopt",
      descricao: "Projeto criado para adoção de pets.",
      site: "verde-acao-kappa.vercel.app"
    },

    {
      id: 2,
      imagem: ReciclaTech,
      nome: "ReciclaTech",
      descricao: "Projeto para desapego de produtos de tecnologia.",
      site: "google.com"
    },

    {
      id: 3,
      imagem: VerdeAcao,
      nome: "VerdeAção",
      descricao: "Projeto para conectar interessados em ações voluntárias.",
      site: "msn.com"
    }

  ]);


  return (
    <>
      <article>


        {projetos.map((item) => (

          <div key={item.id} >
            <h2> {item.nome} </h2>
            <p> {item.descricao} </p>
            <a
              href={item.site}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visitar projeto
            </a>

          </div>

        ))}



      </article>
    </>
  )
}

export default Projetos