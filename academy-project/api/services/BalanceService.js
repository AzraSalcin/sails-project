module.exports = {
    spendByBalance: function(buyerBalanceNumber, sellerBalanceNumber, amount) {
        Balance.findOne({ balanceNumber: buyerBalanceNumber }).exec(function(err, data) {
            if (err) {
                throw err;
            }
            else {
                if (Number(buyer.amount) > amount) {
                    var newAmount = Number(buyer.amount) - amount;
                    Balance.update({ balanceNumber: buyerBalanceNumber }, { amount: newAmount }).exec(function(err, buyerAmount) {
                        if (err) {
                            throw err;
                        }
                        else {
                            Balance.update({ balanceNumber: sellerBalanceNumber }, { amount: thisAmount }).exec(function(err, seller) {
                                if (err) {
                                    throw err;
                                }
                                else {
                                    newAmount = Number(seller.amount) + amount;
                                    Balance.update({ balanceNumber: sellerBalanceNumber }, { amount: newAmount }).exec(functiosellerAmount){
                                        if (err) {
                                            throw err;
                                        }
                                        else {
                                            return true;
                                        }
                                    })
                        }
                    })
                }
            })
    }
}

        })

    }
spendByUser: function(buyerId, sellerId, buyerEntity, sellerEntity, amount) {
    //buyerEntity i sellerEntity je za odredjivanje identiiteta kupcai prodavaca -> moze da bude "shop" ili "user"
    var sellerBalanceNumber, buyerbalanceNumber;
    if (buyerEntity === "user") {
        User.findOne({ id: buyerId }).exec(function(err, user) {
            if (err) {
                throw err;
            }
            else {
                Balance.findOne({ id: user.balance }).exec(function(err, userBalance) {
                    buyerBalanceNumber = userBalance.balanceNumber;

                })

            }
        })
    }
    else if(buyerEntity === "shop"){
        shop.findOne({ id: buyerId }).exec(function(err, user) {
            if (err) {
                throw err;
            }
            else {
                Balance.findOne({ id: shop.balance }).exec(function(err, shopBalance) {
                    if(err){
                        throw err;
                    }
                    else {
                    buyerBalanceNumber = shopBalance.balanceNumber;
                    }
                })

            }
        )}
    }
    else{
        return{error: "BuyerEntity must be user or shop!!!"}
    }
}

};