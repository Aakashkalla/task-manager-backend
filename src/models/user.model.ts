import mongoose , {Schema} from "mongoose";

interface User{ 
    name : string
    email : string 
    password : string
    role : string
    }

const userSchema = new Schema<User>({  
    name : {
        type : String, 
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    role : {
        type : String,
        required : true,
    },

},
{
    timestamps : true 
})

export const UserModel = mongoose.model('User' , userSchema)