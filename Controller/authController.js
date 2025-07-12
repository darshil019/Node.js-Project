const { adminSignInModel } = require('../Models/authModel')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const userSignUp = async (req, res) => {
    const {  name,email,password } = req.body;

    try {
        if(!name || !email || !password){
            return res.status(400).json({message: "Please fill in all fields."})
        }

         const securePass = bcrypt.hashSync(password, 10)

        const newData = new adminSignInModel({
            name,
            email,
            securePass
        })
        newData.save()
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error });
    }
}

const userSignin = async (req, res) => {
    const { email, password } = req.body
    if (email && password) {
            try {
                getUserData = adminSignInModel.find({email:email})
                if (getUserData) {
                    const checkPass = bcrypt.compareSync(password, getUserData.password)
                    
                    if (checkPass) {
                        const token = jwt.sign({ email },
                            "abc", { expiresIn: '1h' }
                        )
                        res.status(200).send({
                            token: token
                        })
                    }
                    else {
                        res.status(404).send({
                            msg: "Password Error"
                        })
                    }
                }
            }
            catch {
                res.status(404).send({
                    "msg": "Email & Password Not Found"
                })
            }
        }
    }

const getData = (req,res) => {
    const {email} = req.user
    const getData = adminSignInModel.find({email:email})
    if(getData){
        res.status(200).send(getData)
    }
    else{
        res.status(404).send({msg:"Email Not Found"})
    }
}


module.exports = { userSignUp, userSignin , getData}