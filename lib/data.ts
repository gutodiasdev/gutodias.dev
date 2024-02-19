import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import postgateImg from "@/public/postgate.png";
import sixImg from "@/public/six.png";
import promogateImg from "@/public/promogate.png";
import papelPolenImg from "@/public/papel-polen.png";

export const links = [
  {
    name: "Início",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Experiência",
    hash: "#experience",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "FIAP",
    location: "Remoto",
    description:
      "Inicei os estudos em Análise e Desenvolvimento de Sistemas na melhor faculdade de tecnologia do Brasil.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Hero99 - Desenvolvedor Full Stack Sênior",
    location: "Home Office",
    description:
      "Trabalhei como desenvolvedor full-stack com javascript num ambiente principamente GCP com Edge Functions e Firestore.",
    icon: React.createElement(CgWorkAlt),
    date: "Ago. 2023 - Jan. 2024",
  },
  {
    title: "Agência Lab8 - Desenvolvedor Web",
    location: "Home Office",
    description:
      "Trabalhei como desenvolvedor e gestor do ambiente cloud Digital Ocean, trabalhando e grande parte com WordPress e Node",
    icon: React.createElement(CgWorkAlt),
    date: "Ago. 2020 - Mai. 2023",
  },
  {
    title: "meufindi - CTO",
    location: "Home Office",
    description:
      "Trabalhei no modelo de vesting, implementando todo o ecossistema de uma startup. Meu dia-a-dia haviam stacks diversas, como: React, Node e Wordpress",
    icon: React.createElement(CgWorkAlt),
    date: "Jan. 2022 - Dez. 2022",
  },
  {
    title: "Techtools - Desenvolvedor Web",
    location: "Home Office",
    description:
      "Trabalhei principalmente com React e Lambda Functions no ambiente AWS. Garantindo a qualidade de código e implementando novas funcionalidades.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar. 2022 - Jun. 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Promogate",
    description:
      "Trabalho como desenvolvedor full-stack a 1 ano, utilizando várias tecnologias. Projeto de longo prazo em andamento.",
    tags: ["React", "Next.js", "Node", "MongoDB", "Tailwind", "Prisma", "PostgreSQL"],
    imageUrl: promogateImg,
    projectUrl: "https://dashboard.promogate.app"
  },
  {
    title: "Postgate",
    description:
      "Trabalho feito com scripts pré-prontos, efetuando manutenção e extensão de acordo com as regras de negócio.",
    tags: ["PHP", "CodeIgniter", "Node.js", "Sass"],
    imageUrl: postgateImg,
    projectUrl: "https://postgate.app/"
  },
  {
    title: "Six O'clock",
    description:
      "Site institucional para uma produtora. Implementação do design proposto em wordpress.",
    tags: ["WordPress", "Elementor", "CSS", "HTML", "Javascript"],
    imageUrl: sixImg,
    projectUrl: "https://sixpost.com.br/",
  },
  {
    title: "Papel Pólen",
    description:
      "Uma marca Suzano. Projeto desenvolvido para servir como landing page de captura de novos clientes.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: papelPolenImg,
    projectUrl: "https://papelpolen.com.br/"
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Wordpress",
  "Firebase"
] as const;
