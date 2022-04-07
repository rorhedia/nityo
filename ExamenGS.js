/*
 * Complete the 'mostCommonWord' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING parrafo
 *  2. STRING_ARRAY palabrasNoPermitidas
 */

function mostCommonWord( parrafo, palabrasNoPermitidas ) {
    let palabras = parrafo.replace( /\.|\,/g, ' ' ).split( ' ' );
    let obj = {}

    palabrasNoPermitidas = palabrasNoPermitidas.map( palabra => palabra.toLowerCase() );
    palabras = palabras
        .map( palabra => palabra.toLowerCase() )
        .filter( palabra => palabra !== '' && !palabrasNoPermitidas.includes( palabra ) );

    palabras.forEach( ( palabra ) => {
        obj.hasOwnProperty( palabra ) ? obj[palabra]++ : obj[palabra] = 1;
    } );

    let max = 0;
    let val = '';
    for ( const key in obj ) {
        if ( obj[key] > max ) {
            max = obj[key];
            val = key;
        }
    }

    return `La palabra más repetida es '${val}' con ${max} apariciones.`;
}

function main() {
    const parrafo = "Bob hit a ball, the hit BALL flew long after it was hit.";
    const palabrasNoPermitidas = [ "hit" ];
    const parrafo2 = 'a, a, a, a, b,b,b,c, c';
    const palabrasNoPermitidas2 = [ 'a' ]

    const result = mostCommonWord( parrafo, palabrasNoPermitidas );
    console.log( result + '\n--------------' );

    const result2 = mostCommonWord( parrafo2, palabrasNoPermitidas2 );
    console.log( result2 + '\n--------------' );
    return;
}

main();

/*
 * Complete the 'MaxProfit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING pricesAsString as parameter.
 */

function MaxProfit( pricesAsString ) {
}

function main2() {
    var pricesAsString = "7,1,5,3,6,4";
    var result = MaxProfit( pricesAsString );
    // Valor esperado 5
    console.log( result + '\n--------------' );

    pricesAsString = "2, 50, 10, 1, 11";
    result = MaxProfit( pricesAsString );
    // Valor esperado 48
    console.log( result + '\n--------------' );

    pricesAsString = "7,6,4,3,1";
    result = MaxProfit( pricesAsString );
    // Valor esperado 0
    console.log( result + '\n--------------' );
}

// main2();