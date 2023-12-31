const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = new schema(
  {
    name: {
      type: String,
      // required: [true, "Email is required"],
      trim: true,
      maxlength: [50, "Email cannot be more than 50 characters"],
    },
   
    email: {
      type: String,
    //   required: [true, "Email is required"],
      trim: true,
      maxlength: [50, "Email cannot be more than 50 characters"],
    },
   
    password:{
       type: String,
    },
  
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "user",
    },
   
    contact: {
      type: String,
      trim: true,
    },
    age: {
      type: Number,
    }
    
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
// Define the schema for the Product model
const productSchema = new schema({
    name: {
      type: String,
      required: true, // This field is required
    },
    description: String,
    category: String,
    price: {
      type: Number,
      required: true,
    },
    // Additional fields can be defined here
  });
  
  // Create a model using the schema
  module.exports = mongoose.model("Product", productSchema);
  
   // Export the model for use in other parts of your application