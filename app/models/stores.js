const mongoose = require( 'mongoose' );

const StoreScheme = new mongoose.Schema( {
    categoria:         { type: String },
    direccion:         { type: String },
    nombrePropietario: { type: String },
    nombreTienda:      { type: String },
    fechaHoraAlta:     { type: String }
}, {
    timestamps: true,
    versionKey: false
} );

module.exports = mongoose.model( 'stores', StoreScheme );