const updateBalance = (amt) => {
    return {
        type: 'WITHDRAW_MONEY',
        amount: amt
    }
}

export default updateBalance;