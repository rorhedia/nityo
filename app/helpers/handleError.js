const httpErrors = ( res, error ) => {
    console.log( error );
    res.status( 500 ).send( { err: 'Ocurrió un error' } )
}

module.exports = { httpErrors }