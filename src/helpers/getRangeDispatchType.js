

export const getRangeDispatchType = (value) => {
    switch(value) {
        case 'storage': {
            return 'setStorage';
        }
        case 'transfer': {
            return 'setTransfer';
        }
    }
}