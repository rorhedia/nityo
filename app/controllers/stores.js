const { httpErrors } = require( '../helpers/handleError' );
const storesModel = require( '../models/stores' );

/**
 * Devolver el numero de registros con la categoria Abarotes y Cocina,
 * así mismo  cuantos pertenecen a la categoria Aluminio y Herrería.
 * @function
 * @name getTotalByCategory
 * @param req
 * @param res
 * @returns {Promise<storesModel>}
 */
const getTotalByCategory = async ( req, res ) => {
    try {
        const result = await storesModel.aggregate( [ {
            $group: { _id: "$categoria.nombre", total: { $sum: 1 } }
        } ] );
        res.status( 200 ).json( { data: result } )
    } catch ( e ) {
        httpErrors( res, e );
    }
}

/**
 * Devolver cuantas tiendas tienen más de una sub categoria.
 * @function
 * @name totalBySubCategory
 * @param req
 * @param res
 * @returns {Promise<storesModel>}
 */
const totalBySubCategory = async ( req, res ) => {
    try {
        let result = await storesModel.find();
        result = result.filter( value => value.categoria.subcategorias.length > 1 );

        res.status( 200 ).json( {
            data: {
                total:  result.length,
                stores: result
            }
        } )
    } catch ( e ) {
        httpErrors( res, e );
    }
}

/**
 * Tiendas creadas despues del 04/04/2022.
 * @function
 * @name getByDate
 * @param req
 * @param res
 * @returns {Promise<storesModel>}
 */
const getByDate = async ( req, res ) => {
    try {
        const result = await storesModel.find( {
            fechaHoraAlta: { $gt: "2022-04-04" }
        } );
        res.status( 200 ).json( { data: result } )
    } catch ( e ) {
        httpErrors( res, e );
    }
}

module.exports = {
    getTotalByCategory,
    totalBySubCategory,
    getByDate
}