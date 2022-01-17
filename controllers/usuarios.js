const { response, request } = require('express')

const usuariosGet = (req = request, res = response) => { 
    
    const { q, nombre = 'no name', apikey, page = 1, limit } = req.query;

    res.json( {
        msg: 'Get API - controlador',
        q,
        nombre, 
        apikey, 
        page,
        limit,
    } );
}

const usuariosPut  = (req, res = response ) => {

    const { id } = req.params;

    res.status(500).json( {
        msg: 'Put API - controlador',
        id, 
    });
}

const usuariosPost = (req = request, res = response) => {

    const { nombre, edad } = req.body;

    res.json( {
        msg: 'Post API - controlador',
        nombre,
        edad,
    });
}

const usuariosPatch = (req, res = response) => {
    res.json( {
        msg: 'Patch API - controlador'
    } );
}

const usuariosDelete = (req, res = response) => {
    res.json( {
        msg: 'Delete API - controlador'
    } );
}






module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
}