type TesteProps = {
  searchParams: {abobrinha?: string}
}

export default function Teste({searchParams}: TesteProps) {
  console.log(searchParams.abobrinha)
  return (
    <main>
      <h1>ola mundo</h1>
      <p>estou na outra rota</p>
      

    </main>
  );
}
