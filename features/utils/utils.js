export function parseMenuExpression(menuExpression) {
    const parts = menuExpression.split('->');
    return parts.map((p) => p.trim());
}
