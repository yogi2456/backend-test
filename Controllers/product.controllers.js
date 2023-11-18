import productModal from "../Modals2/product.modal.js";

export const GetAllProducts = (req, res) => {
     try {

     } catch (error) {
        return res.status(500).json({success: false, message: error})
     }
}

export const AddProducts = async (req, res) => {
    try {
        const {name, price, image, category} = req.body;
        
        if(!name || !price || !image || !category) return res.status(401).json({success: false, message: "All fields are mandatory"})

        const product = new productModal({
            name, image, price, category
        })

        const ress = await product.save();

        return res.status(200).json({success: true, message: "product added successfully"})
    } catch (error) {
       return res.status(500).json({success: false, message: error})
    }
}