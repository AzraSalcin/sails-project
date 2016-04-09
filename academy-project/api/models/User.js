/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      firstname : {
          type: 'string',
          required : true
      },
    lastname: {
          type: 'string',
          required : true,
       },
    birthdate: {
         type : 'date',
         required : true        
    },
    username: {
        type: 'string',
        required : true,
        alphanumeric : true,
        maxLength : 20,
        unique : true,
     },
    country: {
        type : 'string',
        enum : ['BIH', 'UK', 'USA']
    },
    email: {
        type :'string',
        email : true,
        required : true,
        unique : true
    },
    image: {
        type : 'string',
        defaultsTo : 'http://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Black-Widow-icon.png'
    },
    gender: {
        type : 'string',
        enum : ['Male', 'Female', 'Other'],
        required : true,
    },    


  }
  
};

