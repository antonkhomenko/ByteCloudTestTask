

export const getLowestPriceItemColor = (dataset) => {
    const prices = dataset.map(item => item.price);
    const lowestPrice =  Math.min(...prices);
    const lowerPriceItemName =  dataset.find(item => item.price === lowestPrice).name;
    let result = [lowerPriceItemName.toLowerCase()];
    switch (lowerPriceItemName.toLowerCase()) {
        case 'backblaze':
            result.push('linear-gradient(90deg, rgba(173,20,0,1) 0%, rgba(255,13,0,1) 100%)') ;
            break;
        case 'bunny':
            result.push('linear-gradient(90deg, rgba(247,101,4,1) 0%, rgba(251,181,67,1) 100%)');
            break;
        case 'scaleway':
            result.push('linear-gradient(90deg, rgba(155,0,181,1) 0%, rgba(209,1,231,1) 100%)');
            break;
        case 'vultr':
            result.push('linear-gradient(90deg, rgba(0,37,181,1) 0%, rgba(5,109,251,1) 100%)');
            break;
        default:
            throw Error('unknown company item');

    }
    return result;
}
