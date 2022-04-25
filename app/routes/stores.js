const express = require( 'express' );
const router = express.Router();
const { getTotalByCategory, totalBySubCategory, getByDate } = require( '../controllers/stores' );

router.get( '/getTotalByCategory', getTotalByCategory );
router.get( '/totalBySubCategory', totalBySubCategory );
router.get( '/getByDate', getByDate );

module.exports = router;