"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3">
        Em 2015, após trabalhar como {" "}
        <span className="font-medium">militar concursado da FAB</span>, por 5 anos. 
        Decidi ir em busca do meu sonho de trabalhar com programação, me matriculei no curso
        <span className="font-medium"> Full-stack PHP Developer</span>, da UpInside. {" "}
        <span className="italic">Minha parte favorita como programador</span> é poder criar soluções úteis e com impacto positivo. Eu <span className="underline">amo</span> a sensação de encontrar a solução para um problema. Minha stack principal é{" "}
        <span className="font-medium">
          React, Next.js, Node.js, MongoDB e PostgreSQL
        </span>
        . Estou bastante familiarizado com Typescript e Prisma. Estou sempre buscando novos conhecimentos e ferramentas que complementem o meu trabalho. Atualmente estou buscando posição de {" "}
         desenvoldedor de software <span className="font-medium">em tempo integral </span>
      </p>

      <p>
        <span className="italic">Quando eu não estou "codando" </span>, gosto de jogar video games, assistir filmes, ir à academia, brincar com meus filhos e cachorro. Adoro {" "}
        <span className="font-medium">aprender coisas novas</span>. Atualmente, além da faculdade estou constantemente em buscando conhecimento sobre {" "}
        <span className="font-medium">testes automatizados e arquitetura hexagonal </span>. Também adoro ler.
      </p>
    </motion.section>
  );
}
