import { Container } from "../components/Container"
import { Card } from "../components/Card"
import { Carrossel } from "../components/Carrossel"
import { Sidebar } from "../components/Sidebar"

export function Home() {
    return (
        <>
            <Container>
                
                <Sidebar>

                </Sidebar>

                <section>
                    <Card />
                </section>

                <section>
                    <Carrossel />
                </section>
            </Container>
        </>
    )
}