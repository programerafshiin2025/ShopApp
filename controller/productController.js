import product from './../models/productModel.js';


export const getProducts = async (req, res) => {
          try {
                    const products = await product.find()
                    res.status(200).json(products);
          } catch (e) {
                    res.status(500).json({ Error: e.message })
          }
};

export const getProductsById = async (req, res) => {
          try {

                    const products = await product.findById(req.params.id)
                    if (products) {
                              res.status(200).json(products)
                    }

          } catch (e) {
                    res.status(500).json({ Error: e.message })
          }
};



export const CreateProduct = async (req, res) => {
          try {

                    const { name, category, Image, description, price, oldprice, countInStock, } = req.body

                    const products = await product.create({
                              name, category, Image, description, price, oldprice, countInStock,

                    });
                    if (products) {
                              res.status(201).json(products)
                    }


          } catch (e) {
                    res.status(500).json({ Error: e.message })
          }
};



export const UpdateProduct = async (req, res) => {
          try {

                    const { name, category, Image, description, price, oldprice, countInStock, } = req.body

                    const products=await product.findById(req.params.id)
                    if(products){
                              products.name=name,
                              products. category=category,
                              products.Image=Image,
                              products.description=description,
                              products. price=price,
                              products. oldprice=oldprice,
                              products. countInStock=countInStock
                              const UpdatedProduct=await products.save()

                    if (UpdatedProduct) {
                              res.status(200).json(UpdatedProduct)
                    }

                    }else{
                              res.status(404).json({message:"products not found"})
                    }




          } catch (e) {
                    res.status(500).json({ Error: e.message })
          }
};


export const DeleteProduct = async (req, res) => {
          try {

                    const product = await product.findByIdAndDelete(req.params.id)
                    if (product) {
                              res.status(200).json({message:"Products Deleted"})
                    }

          } catch (e) {
                    res.status(500).json({ Error: e.message })
          }
};
