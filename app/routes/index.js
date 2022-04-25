const express = require( 'express' );
const router = express.Router();
const fs = require( 'fs' );

const pathRouter = __dirname;
const removeExtension = ( file ) => file.split( '.' ).shift();

fs.readdirSync( pathRouter ).filter( file => {
    const fileWithOutExtension = removeExtension( file );
    const skip = [ 'index' ].includes( fileWithOutExtension );
    if ( !skip ) {
        router.use( `/${ fileWithOutExtension }`, require( `./${ fileWithOutExtension }` ) );
    }
} );

module.exports = router;