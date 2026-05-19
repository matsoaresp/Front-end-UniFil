import { Container } from "../components/Container";
import { Card } from "../components/Card";
import { Carrossel } from "../components/Carrossel";
import { Sidebar } from "../components/Sidebar";

export function Home() {
  return (
    <Container>
      <div className="flex min-h-screen bg-gray-200">
        
        <Sidebar />

        <main className="flex-1 p-4 md:p-8">
          <Card />

          <div className="mt-8">
            <Carrossel />
          </div>
        </main>

      </div>
    </Container>
  );
}