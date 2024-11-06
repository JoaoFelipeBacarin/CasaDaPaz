import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Home from './pages/Home';
import ComoDoar from './pages/ComoDoar';
import Galeria from './pages/Galeria';
import SobreNos from './pages/SobreNos';
import Transparencia from './pages/Transparencia';

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/como-doar' element={<ComoDoar />}/>
                <Route path='/galeria' element={<Galeria />}/>
                <Route path='/sobre-nos' element={<SobreNos />}/>
                <Route path='/transparencia' element={<Transparencia />}/>
            </Routes>
        </BrowserRouter>
    );
}