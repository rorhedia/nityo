const { httpErrors } = require( '../helpers/handleError' );
const userModel = require( './../models/users' );

const test = async ( req, res ) => {
    try {
        res.status( 200 ).json( { data: 'OK' } )
    } catch ( e ) {
        httpErrors( res, e );
    }
}

/**
 * Resgresar el listado de usuarios totales.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getAll = async ( req, res ) => {
    try {
        const result = await userModel.find();
        res.status( 200 ).json( { data: result } )
    } catch ( e ) {
        httpErrors( res, e );
    }
}

/**
 * Agregar un usuario con especialidad Leader.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const create = async ( req, res ) => {
    try {
        const { nombre, paterno, materno, edad, genero, especialidad } = req.body;
        const result = await userModel.create( {
            nombre, paterno, materno, edad, genero, especialidad
        } );

        res.status( 201 ).json( { data: result } )
    } catch ( e ) {
        httpErrors( res, e );
    }
}

/**
 * Del usuario Luis alberto Lopez cambiar el nombre por Alberto Aviles,
 * la edad por 32, así como su especialidad a Base de datos.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const update = async ( req, res ) => {
    try {
        const { id } = req.params
        const { body } = req;
        const result = await userModel.findByIdAndUpdate( id, body )
        res.status( 200 ).json( { data: result } )
    } catch ( e ) {
        httpErrors( res, e );
    }
}

module.exports = {
    test,
    getAll,
    create,
    update
}