import {React, useState, useEffect} from 'react'
import { buscarAdmin } from '../api/buscar';
import BusquedaAdmin from './buscar/BusquedaAdmin';

export const Admin = () => {
  const[admin, setAdmin] = useState([])

  useEffect(() => {
    buscarAdmin().then(response => {
      setAdmin(response);
    })
  }, [])

return(
    <BusquedaAdmin admin={admin}/>
  )
}
