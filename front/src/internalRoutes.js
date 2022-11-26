import Buscar from "./views/Buscar"
import Categoria from "./components/buscar/Categoria"
import Carrito from "./views/Carrito"
import Ordenes from "./views/Ordenes"
import Perfil from "./views/Perfil"
import Recomendaciones from "./views/Recomendaciones"
import ExtraInfo from "./views/ExtraInfo"
import Ventas from "./views/Ventas"
import Productos from './views/Productos'
import EleccionSupermercado from "./views/EleccionSupermercado"
import RegistroAdmin from "./views/RegistroAdmin";
import Usuario from "./layouts/Usuario";

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
        component: Ventas,
    },
    {
        path: 'productos',
        component: Productos
    },
    {
        path: 'eleccionSupermercado',
        component: EleccionSupermercado
    }
]
    


const internalRoutes = [...routesSidebar]

export default internalRoutes