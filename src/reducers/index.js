export default (state, actions) => {
    switch (actions.type) {
        case 'WITHDRAW_MONEY':
            return {
                ...state,
                totalAmount: state.totalAmount -= actions.amount
            }
        default:
            return state
    }
    // return state;

} 