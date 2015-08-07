'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( p )
*	Partially applies success probability `p` and returns a function for evaluating the moment-generating function (MGF) for a geometric distribution.
*
* @param {Number} p - success probability
* @returns {Function} MGF
*/
function partial( p ) {

	/**
	* FUNCTION: mgf( t )
	*	Evaluates the moment-generating function (MGF) for a geometric distribution.
	*
	* @private
	* @param {Number} t - input value
	* @returns {Number} evaluated MGF
	*/
	return function mgf( t ) {

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
