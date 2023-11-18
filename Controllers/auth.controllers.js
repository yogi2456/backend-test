import userModal from "../Modals2/user.modal.js";
import userModals from "../Modals2/user.modal.js";

export const Login = async (req, res) => {
    try {
       const { email, password} =req.body;

       if(!email || !password) return res.status(401).json({success: false, message: "All fields are mandatory"})

       const user = new userModals({
        email,
        password
       })

       await user.save();

       return res.status(200).json({success: true, message: "Login successful"})
    } catch (error) {
         return res.status(500).json({success : false, message: error})
    }
}
export const Register = async (req, res) => {
    try {
       
        const {name, email, password} = req.body;

        if(!name || !email || !password) return res.status(401).json({success: false, message: "All fields are mandatory"})

        const user = new userModal({
            name: name,
            email,
            password
        })

        await user.save();

        return res.status(200).json({success: true, message: "register successful"})
    } catch (error) {
        return res.status(500).json({success: false, message: error})
    }
}