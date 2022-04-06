const mongoose = require( 'mongoose' );

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
const URI = `mongodb+srv://${ DB_USER }:${ DB_PASSWORD }@${ DB_HOST }/${ DB_NAME }?retryWrites=true&w=majority`;

const dbConnect = () => {
    mongoose.connect( URI, {
        useNewUrlParser:    true,
        useUnifiedTopology: true
    }, ( err, res ) => {
        if ( err ) throw new Error( 'Error de conexión' );
        console.log( '¡Conexión exitosa!' );
    } );
}

module.exports = { dbConnect };