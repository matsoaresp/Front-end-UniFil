import { Button } from "./Button";

export function Card() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 pt-10">
      <div className="h-96 w-full max-w-[1200px] rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-gray-800">
          Card
        </h2>

        <p className="mb-6 text-center text-lg text-gray-600">
          Descrição do card com um conteúdo simples e estilizado.
        </p>

        <div className="flex justify-center">
          <Button />
        </div>
      </div>
    </div>
  );
}