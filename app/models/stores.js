const mongoose = require( 'mongoose' );

const StoresScheme = new mongoose.Schema( {
    categoria:         { type: Object },
    direccion:         { type: Object },
    nombrePropietario: { type: String },
    nombreTienda:      { type: String },
    fechaHoraAlta:     { type: String }
}, {
    timestamps: true,
    versionKey: false
} );

module.exports = mongoose.model( 'stores', StoresScheme );