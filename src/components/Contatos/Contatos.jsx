import React from 'react'

import styles from "./Contatos.module.scss"

import Github from "../../assets/github_logo.jpeg"
import Linkedin from "../../assets/linkedin.jpeg"

function Contatos() {
  return (
    <>
      <section className={styles.links}>

        <div>
          <h2>Contatos</h2>
          <h2>Vamos transformar projetos em realidade?</h2>
          <p>Entre em contato comigo</p>
        </div>
        

          <button onClick={() => window.open('https://github.com/arnaldocnt', "_blank")}>
            <img src={Github} alt="Contato github" />
          </button>
    
          <button onClick={() => window.open('https://www.linkedin.com/in/arnaldo-neto-641908152/', "_blank")}>
            <img src={Linkedin} alt="Contato linkedin" />
          </button>

        

      </section>
    </>
  )
}

export default Contatos