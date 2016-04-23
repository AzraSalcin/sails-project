/**
 * Balance.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        amount: {
            type: 'float',
            required: true,
            defaultsTo: '0'
        },
        balanceNumber: {
            type: 'string',
           creditcard: true,
           unique: true
            
        },
        userOwner: {
            model: 'user',
            unique: true
        },
        shopOwner: {
            model: 'shop',
            unique: true
        }
    }
};
