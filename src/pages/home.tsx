import Header from "../components/Header"
import { Container } from "../components/Container"
import { Card } from "../components/Card"
import { Button } from "../components/Button"
import { Carrossel } from "../components/Carrossel"
import { Sidebar } from "../components/Sidebar"

export function Home() {
    return (
        <>
            <Header />
            <Container>
                <h1>Apps</h1>
                <Sidebar>

                </Sidebar>

                <section>
                    <h2>Categorias</h2>
                    <Card />
                </section>

                <section>
                    <h2>Aplicativos</h2>

                    <Carrossel />
                </section>
            </Container>
        </>
    )
}