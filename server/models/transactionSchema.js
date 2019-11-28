/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

// Create your schema for the data in the listings.json file that will define how data is saved in your database
var transactionSchema = new Schema({
  id: { type: Number, required: true, unique: true},
  cid: Number,
  vid: Number,
  itemInfo: [ {id: Number , addOns: Boolean} ],
  addOns: [String],
  price: Number,
  time: {type: Date, default: Date.now }, 
  created_at: Date,
  updated_at: Date
});

// Create a 'pre' function that adds the updated_at (and created_at if not already there) property 
transactionSchema.pre('save', function(next) {
        var curr = new Date();
        this.updated_at = curr;
        if(!this.created_at)
                this.created_at = curr;
        next();
});
/* Use your schema to instantiate a Mongoose model */
var Transaction = mongoose.model('Transaction', transactionSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Transaction;
