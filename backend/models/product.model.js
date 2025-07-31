// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema(
// 	{
// 		name: {
// 			type: String,
// 			required: true,
// 		},
// 		price: {
// 			type: Number,
// 			required: true,
// 		},
// 		image: {
// 			type: String,
// 			required: true,
// 		},
// 	},
// 	{
// 		timestamps: true, // createdAt, updatedAt
// 	}
// );

// const Product = mongoose.model("Product", productSchema);

// export default Product;

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
    },
    image: {
      type: String,
      required: [true, "Product image is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
