'use strict';

// FUNCTIONS //

var exp = Math.exp,
	ln = Math.log;


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
		var et, q;
		q = 1 - p;
		if ( t >= -ln( q ) ) {
			return NaN;
		}
		et = exp( t );
		return ( p * et ) / ( 1 - q * et );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
