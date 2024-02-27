export function parseMenuExpression(menuExpression) {
    // menuExpression: Women -> Dresses
    const parts = menuExpression.split('->');

    return parts.map((p) => p.trim());
}

// console.log(parseMenuExpression("Women -> Dresses"))
// result: [ 'Women', 'Dresses' ]