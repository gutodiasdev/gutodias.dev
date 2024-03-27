import React from "react";

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {year} JAYSON AUGUSTO DIAS DA SILVA LTDA | CNPJ: 52.287.782/0001-95. Todos os direitos reservados. 
      </small>
      <p className="text-xs">
        <span className="font-semibold">Sobre este site:</span> Foi desenvolvido com 
        React & Next.js (App Router e Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend e Vercel hosting.
      </p>
    </footer>
  );
}
