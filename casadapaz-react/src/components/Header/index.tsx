import { ReactNode } from "react";
interface IProps {
    children: ReactNode
}

export const Header = (props: IProps) => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className="container">
                        <a className="navbar-brand fs-2 text-success fw-bolder" href="/">Casa da Paz</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item navbar-brand">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item navbar-brand">
                                    <a className="nav-link" href="/sobre-nos">Sobre Nós</a>
                                </li>
                                <li className="nav-item navbar-brand">
                                    <a className="nav-link" href="/como-doar">Como Doar</a>
                                </li>
                                <li className="nav-item navbar-brand">
                                    <a className="nav-link" href="galeria">Galeria</a>
                                </li>
                                <li className="nav-item navbar-brand">
                                    <a className="nav-link" href="/transparencia">Transparência</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="col-12 px-md-4 custom-background">{props.children}</main>
        </>
    );
};