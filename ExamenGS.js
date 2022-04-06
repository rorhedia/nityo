/*
 * Complete the 'mostCommonWord' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING parrafo
 *  2. STRING_ARRAY palabrasNoPermitidas
 */

function mostCommonWord( parrafo, palabrasNoPermitidas ) {
    parrafo = parrafo.replace( /\.|\,/g, ' ' ).trim();
    let arrayDePalabras = parrafo.split( ' ' );
    let obj = {}

    let palabrasParrafo = arrayDePalabras.filter( palabra => {
        if ( palabra !== '' && !palabrasNoPermitidas.includes( palabra ) ) {
            return palabra.toUpperCase();
        }
    } );

    for ( let i = 0; i < palabrasParrafo.length; i++ ) {
        let palabra = palabrasParrafo[i].toLowerCase();
        obj[palabra] = 1;
        for ( j = 0; j < palabrasParrafo.length; j++ ) {
            let palabra2 = palabrasParrafo[j].toLowerCase();
            if ( i !== j ) {
                if ( palabra == palabra2 ) {
                    obj[palabra]++;
                }
            }
        }
    }

    let mayor = Object.entries( obj ).reduce( ( prev, curr ) => {
        return prev[1] > curr[1] ? prev : curr;
    } );

    return mayor;
}

function main() {
    const parrafo = "Bob hit a ball, the hit BALL flew long after it was hit.";
    const palabrasNoPermitidas = [ "hit" ];
    const parrafo2 = 'a, a, a, a, b,b,b,c, c';
    const palabrasNoPermitidas2 = [ 'a', ]

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