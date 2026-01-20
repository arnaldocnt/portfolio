import React from 'react'
import { useState } from 'react'

import PetAdopt from "../assets/petadopt.jpeg"
import ReciclaTech from "../assets/reciclatech.jpeg"
import VerdeAcao from "../assets/verdeacao.jpeg"

function Projetos() {

  const [projetos, setProjetos] = useState([
    {
      id: 1,
      imagem: PetAdopt,
      nome: "PetAdopt",
      descricao: "Projeto criado para adoção de pets."
      //link:
    },

    {
      id: 2,
      imagem: ReciclaTech,
      nome: "ReciclaTech",
      descricao: "Projeto para desapego de produtos de tecnologia."
    },

    {
      id: 3,
      imagem: VerdeAcao,
      nome: "VerdeAção",
      descricao: "Projeto para conectar interessados em ações voluntárias."
    }

  ]);


  return (
    <>
      <article>


        {projetos.map((item) => (

          <div key={item.id} >
            <img src={item.imagem} alt="" />
            <h2> {item.nome} </h2>
            <p> {item.descricao} </p>
          </div>

        ))}



      </article>
    </>
  )
}

export default Projetos