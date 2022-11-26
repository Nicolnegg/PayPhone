import Adminn from "./layouts/Adminn"
import Usuario from "./layouts/Usuario"

const routesUsuario = [
    
    {
        path: "/usuario",
        layout: Usuario,
    }
]

const routesAdminn = [
    
    {
        path: "/admin",
        layout: Adminn,
    }
]

const routes = [...routesAdminn, ...routesUsuario]

export default routes