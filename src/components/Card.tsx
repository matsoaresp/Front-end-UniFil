export function Card() {
  return (
    <div className="w-full rounded-2xl bg-white p-6 shadow-lg md:p-8">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:text-3xl">
        Card
      </h2>
      <p className="mb-6 text-center text-sm text-gray-600 md:text-base">
        Descrição do card com um conteúdo simples e estilizado.
      </p>
      <div className="flex justify-center">
        <button className="rounded-lg bg-black px-5 py-2 text-white transition hover:bg-gray-800">
          Visualizar
        </button>
      </div>
    </div>
  );
}