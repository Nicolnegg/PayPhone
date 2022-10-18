import React from 'react'
import {Layout} from "antd"
import Sidebar from "../components/Sidebar"
import useAuth from '../hooks/useAuth'
import { Navigate } from "react-router-dom";
import ModalError from "../components/ModalError";


function Adminn(props) {

  const {children} = props;
  const {Header, Content, Footer, Sider} = Layout;
  const rol = props.rol;
  const{user, isLoading, isAdmin} = useAuth();
  console.log("usuario: "+ user)
  const error = localStorage.getItem("ERR")

  if(!user && !isLoading){
      localStorage.setItem("ERR","Se ha cerrado tu sesión.")
    return(
      <>
      <Navigate to = "/login" />
      </>
    )
  }

  if(user && !isLoading && !isAdmin){
      localStorage.setItem("ERR","Estás registrado como usuario. Para acceder al rol de admin y/o visitante debes cerrar sesión.")
    return(
      <>
      <Navigate to = "/usuario" />
      </>
    )
    }
    if(user && !isLoading && isAdmin){
        return (
            <div>

                <Layout className='d-flex flex-row'>
                    <Sider>
                        <Sidebar rol={rol}/>
                    </Sider>
                    <Content> {children} </Content>
                </Layout>
                <ModalError error={error}/>
            </div>
        )
    }

  return null;
}

export default Adminn