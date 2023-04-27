/**
 * * Primitivos (imutaveis) -> string, number, boolean, undefined, null, (bigint, symbol)
 * * VALORES COPIADOS
 */

/**
 * ! Referencia (mutavel) -> array, object, function
 * ! PASSADOS POR REFERENCIA
 */

//! Spread
//? O valor de (a) foi totalmente copiado para o valor de (b)
let a = [1, 2, 3];
let b = [...a]; //? (b) corresponde a -> [1, 2, 3]
//? Se eu tirar, adicionar ou alterar o valor em (a), nao fara mudança fixa no valor de (b), ou seja, (b) copiou somente o primeiro valor de (a) em sua memoria