import Buscar from "./views/Buscar"
import Categoria from "./components/buscar/Categoria"
import Carrito from "./views/Carrito"
import Ordenes from "./views/Ordenes"
import Perfil from "./views/Perfil"
import Recomendaciones from "./views/Recomendaciones"
import ExtraInfo from "./views/ExtraInfo"
import Productos from './views/Productos'
import EleccionSupermercado from "./views/EleccionSupermercado"
import RegistroAdmin from "./views/RegistroAdmin";
import MisVentas from "./views/MisVentas";
import Usuario from "./layouts/Usuario";
import Adminn from "./layouts/Adminn";

const routesSidebar = [
    {
        path: 'buscar',
        component: Buscar,
    },
    {
        path: 'perfil',
        component: Perfil,
    },
    {
        path: 'ordenes',
        component: Ordenes,
    },
    {
        path: 'recomendaciones',
        component: Recomendaciones,
    },
    {
        path: 'carrito',
        component: Carrito,
    },
    {
        path: 'buscarcategoria',
        component: Categoria
    },
    {
        path: '',
        component: Perfil,
    },
    {
        path: 'informacionExtra',
        component: ExtraInfo,
    },
    {
        path: 'misVentas',
        component: MisVentas,
        layout: Adminn
    },
    {
        path: 'productos',
        component: Productos
    },
    {
        path: 'eleccionSupermercado',
        component: EleccionSupermercado
    },
    {
        path: 'registro-admin',
        component: RegistroAdmin,
        layout: Adminn
    }
]
    


const internalRoutes = [...routesSidebar]

export default internalRoutes