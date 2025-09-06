'use client'

import PopUp, { PopUpHandle } from "@/componentes/PopUp";
import { useRef } from "react";

type TesteProps = {
  searchParams: { abobrinha?: string }
}

export default function Teste({ searchParams }: TesteProps) {

  const modalRef = useRef<PopUpHandle>(null)

  return (
    <main>
      <h1>ola mundo</h1>
      <p>estou na outra rota</p>
      <p>{searchParams.abobrinha}</p>

      <button
        onClick={() => modalRef.current?.abrir()}
        className="px-4 py-2 bg-black text-white rounded-lg"
      >
        Abrir modal
      </button>


      <PopUp ref={modalRef}>
        <p>Conteúdo do modal</p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={() => modalRef.current?.fechar()}
            className="px-3 py-2 bg-neutral-200 rounded-lg"
          >
            Fechar
          </button>
        </div>
      </PopUp>
    </main>
  );
}
