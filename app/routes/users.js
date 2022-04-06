const express = require( 'express' );
const router = express.Router();
const { test, getAll, create, update } = require( '../controllers/users' );

router.get( '/', test );
router.get( '/getAll', getAll );
router.post( '/create', create );
router.put( '/update/:id', update );

module.exports = router;