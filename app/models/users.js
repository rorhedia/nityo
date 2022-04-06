const mongoose = require( 'mongoose' );

const UserScheme = new mongoose.Schema( {
    nombre:       { type: String },
    paterno:      { type: String },
    materno:      { type: String },
    edad:         { type: Number },
    genero:       { type: String },
    especialidad: { type: String }
}, {
    timestamps: true,
    versionKey: false
} );

module.exports = mongoose.model( 'users', UserScheme );