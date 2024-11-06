import { Header } from "../../components/Header";

export default function Galeria() {
    const images = [
        "/public/image/banda1.jpg",
        "/public/image/banda2.jpg",
        "/public/image/banda3.jpg",
        "/public/image/banda4.jpg",
        "/public/image/banda5.jpg",
        "/public/image/banda6.jpg",
        "/public/image/construcao1.jpg",
        "/public/image/construcao2.jpg",
        "/public/image/desfile1.jpg",
        "/public/image/desfile2.jpg",
        "/public/image/desfile3.jpg",
        "/public/image/desfile4.jpg",
        "/public/image/desfile5.jpg",
        "/public/image/informatica1.jpg",
        "/public/image/informatica2.jpg",
        "/public/image/informatica3.jpg",
        "/public/image/karate1.jpg",
        "/public/image/karate2.jpg",
        "/public/image/karate3.jpg",
        "/public/image/karate4.jpg",
        "/public/image/karate5.jpg",
    ];
    return (
        <Header>
            <h1>/n</h1>
            <div className="container page-content my-5">
                <h1 className="fw-bold text-success text-center">Galeria</h1>
                <p className="text-center mt-3">
                    Veja algumas fotos dos eventos e atividades realizados pela Casa da Paz.
                </p>

                <div className="row g-3 mt-4">
                    {images.map((src, index) => (
                        <div className="col-12 col-sm-6 col-md-4" key={index}>
                            <div className="card border-0">
                                <img
                                    src={src}
                                    alt={`Imagem ${index + 1}`}
                                    className="img-fluid rounded shadow-sm"
                                    style={{ maxHeight: "300px", objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Header>
    );
}
