
export const companiesDataReducer = (state, action) => {
    switch (action.type) {
        case 'changeStorage': {
            return state.map(item => {
                const storagePrice = action.storage * item.coef[0];
                let price = storagePrice + item.transferPrice;
                if(item.minPrice !== undefined) {
                    price = price >= item.minPrice ? price : item.minPrice;
                }
                return {
                    ...item,
                    storagePrice,
                    price
                }
            })
        }
        case 'changeTransfer': {
            return state.map(item => {
                const transferPrice = action.transfer * item.coef[1];
                let price = transferPrice + item.storagePrice;
                if(item.minPrice !== undefined) {
                    price = price >= item.minPrice ? price : item.minPrice;
                }
                return {
                    ...item,
                    transferPrice,
                    price,
                }
            })
        }
    }
}
