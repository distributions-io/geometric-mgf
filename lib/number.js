'use strict';

// FUNCTIONS //

var exp = Math.exp,
	ln = Math.log;


// MGF //

/**
* FUNCTION: mgf( x, p )
*	Evaluates the moment-generating function (MGF) for a geometric distribution with success probability `p` at a value `t`.
*
* @param {Number} t - input value
* @param {Number} p - success probability
* @returns {Number} evaluated MGF
*/
function mgf( t, p ) {
	var et, q;
	q = 1 - p;
	if ( t >= -ln( q ) ) {
		return NaN;
	}
	et = exp( t );
	return ( p * et ) / ( 1 - q * et );
} // end FUNCTION mgf()


// EXPORTS //

module.exports = mgf;
