import { Prompt } from 'next/font/google'

import type { Metadata } from "next";
import "./globals.css";
import Aside from "@/componentes/Aside";
import Pesquisa from '@/componentes/FormPesquisa/FormPesquisa';

export const metadata: Metadata = {
  title: "Code Connect",
  description: "Rede social",
};

const prompt = Prompt({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className="app-container">
          <Aside />
          <div className='main'>
            <Pesquisa />
            {children}
          </div>
        </div>

      </body>
    </html>
  );
}
