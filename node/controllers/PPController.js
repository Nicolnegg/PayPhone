import UsuariosModel from '../models/PPModel.js';


//mostrara usuarios

export const getAllUusuarios =async (req,res) => {
    try{
        const usuarios = await UsuariosModel.findAll()
        res.json(usuarios)
    }catch (error){
        res.json({message:error.message})
    }
}

