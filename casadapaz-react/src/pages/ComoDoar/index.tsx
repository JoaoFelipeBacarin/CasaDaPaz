import { Header } from "../../components/Header";


export default function ComoDoar() {
    return (
        <Header>
            <h1>/n</h1>
            <div className="container page-content my-5 text-center">
                <h1 className="fw-bold text-success">Como Doar</h1>
                <p className="mt-4">
                    A Casa da Paz agradece a sua generosidade! Com sua ajuda, podemos continuar impactando vidas e oferecendo suporte à nossa comunidade. As doações são feitas via PIX para facilitar e garantir agilidade no processo.
                </p>
                
                <div className="mt-5">
                    <h3 className="text-secondary">Nossa chave PIX:</h3>
                    <p className="fw-bold fs-5">casadapaz@exemplo.com</p>
                    
                    <div className="mt-4">
                        <h3 className="text-secondary">Escaneie o QR Code</h3>
                        <img 
                            src="/image/qrcode.avif" 
                            alt="QR Code para doação via PIX" 
                            className="img-fluid" 
                            style={{ maxWidth: '250px', height: 'auto' }}
                        />
                    </div>
                </div>
                
                <p className="mt-4">
                    Ou, se preferir, copie nossa chave PIX e faça uma transferência diretamente pelo seu aplicativo bancário.
                </p>
            </div>
        </Header>
    );
}
