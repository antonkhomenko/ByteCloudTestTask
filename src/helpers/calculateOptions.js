
export const calculateOptions = (companiesItem, storage, transfer) => {
    switch (companiesItem.name.toLowerCase()) {
        case 'bunny': {
            const storagePrice = companiesItem.activeOption === 'HDD' ? 0.01 : 0.02;
            let price = storage * storagePrice + transfer * companiesItem.transferPrice;
            if(price > companiesItem.maxPrice) price = companiesItem.maxPrice;
            return {...companiesItem, storagePrice, price};
        }
        case 'scaleway': {
            if(storage <= 75 && transfer <= 75) {
                return {...companiesItem, price: 0}
            }
            const storagePrice = companiesItem.activeOption === 'Multi' ? 0.06 : 0.03;
            const transferPrice = 0.02;
            const price = (storage - 75) * storagePrice + (transfer - 75) * transferPrice;
            return {...companiesItem, storagePrice, transferPrice, price}
        }
    }
}