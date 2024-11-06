import { Header } from "../../components/Header";


export default function Home() {
    return (
        <Header>
            <div className="profile-card position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="container-fluid p-0 position-relative">
                                        <img
                                            src="/image/frentecasadapaz.jpg"
                                            alt="Foto de um desfile na Casa da Paz"
                                            className="img-fluid w-100"
                                            style={{ height: '95vh', objectFit: 'cover' }}
                                        />
                                        <div className="image-buttons position-absolute d-flex justify-content-center w-100" style={{ bottom: '20px' }}>
                                            <a href="/sobre-nos">
                                                <button className='btn btn-success me-3' >Conheça a Casa da Paz</button>
                                            </a>
                                            <a href="/como-doar">
                                                <button className='btn btn-success'>Como Doar</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            <div className=" socials text-center my-3">
                <a href="https://www.instagram.com/casadapaz_umuarama/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-facebook mx-2">Instagram</i>
                </a>
            </div>
        </Header>
    );
}

