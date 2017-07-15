const makeSafeForCssClass = (str) => {
    return str.replace(/[^a-z0-9]/gi, '');
}

export { makeSafeForCssClass }