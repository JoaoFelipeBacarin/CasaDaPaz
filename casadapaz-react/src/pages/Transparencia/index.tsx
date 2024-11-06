import { Header } from "../../components/Header";

interface GallerySectionProps {
    title: string;
    images: string[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ title, images }) => (
    <div className="my-5">
        <h2 className="text-success text-center">{title}</h2>
        
        <div className={`row g-3 mt-3 ${images.length < 3 ? 'justify-content-center' : ''}`}>
            {images.map((src, index) => (
                <div className="col-12 col-sm-6 col-md-4" key={index}>
                    <div className="card border-0">
                        <img
                            src={src}
                            alt={`${title} ${index + 1}`}
                            className="img-fluid rounded shadow-sm"
                            style={{ maxHeight: "600px", objectFit: "cover" }}
                        />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default function Transparencia() {
    const funcionarios: string[] = ["/image/funcionarios1.jpg"];
    const diretoria: string[] = [
        "/image/diretoria1.jpg",
        "/image/diretoria2.jpg",
        "/image/diretoria3.jpg",
        "/image/diretoria4.jpg",
        "/image/diretoria5.jpg",
        "/image/diretoria6.jpg",
        "/image/diretoria7.jpg",
        "/image/diretoria8.jpg"
    ];
    const construcao: string[] = ["/image/construcao1.jpg", "/image/construcao2.jpg"];
    const premios: string[] = ["/image/premios.jpg"];

    return (
        <Header>
            <h1>/n</h1>
            <div className="container page-content my-5">
                <h1 className="fw-bold text-success text-center">Transparência</h1>
                <p className="text-center mt-3">
                    Conheça a equipe e a estrutura da Casa da Paz. Transparência é um dos nossos pilares!
                </p>

                <GallerySection title="Funcionários" images={funcionarios} />
                <GallerySection title="Diretoria" images={diretoria} />
                <GallerySection title="Construção" images={construcao} />
                <GallerySection title="Prêmios" images={premios} />
            </div>
        </Header>
    );
}
