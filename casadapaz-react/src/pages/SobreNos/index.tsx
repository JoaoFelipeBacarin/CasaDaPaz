import { Header } from "../../components/Header";


export default function SobreNos() {
    return (
        <Header>
            <h1>/n</h1>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="fw-bold text-success">Sobre Nós</h1>
                        <p className="mt-4">
                            A Casa da Paz é uma organização dedicada a ajudar a comunidade de Umuarama. 
                            Desde sua fundação, temos como missão proporcionar um ambiente seguro, acolhedor 
                            e de apoio para aqueles que mais precisam. Com a ajuda de nossos voluntários e 
                            doadores, conseguimos realizar ações de impacto que fazem a diferença na vida 
                            de muitas famílias.
                        </p>
                        <p>
                            Ao longo dos anos, expandimos nossos serviços e parcerias para alcançar um 
                            número cada vez maior de pessoas. Nosso compromisso é transformar vidas, e 
                            com o apoio da comunidade, continuamos a crescer e fortalecer nossa atuação.
                        </p>
                        <img
                            src="/image/imgsobrenos.jpg"
                            alt="Equipe da Casa da Paz em uma reunião comunitária"
                            className="img-fluid rounded mt-4"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </div>
                </div>
            </div>
        </Header>
    );
}
