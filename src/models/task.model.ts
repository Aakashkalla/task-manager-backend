import mongoose, {Schema} from "mongoose";

interface Task{
    title : string
    description : string
    status : boolean
    assignedTo : mongoose.Types.ObjectId
    createdBy : mongoose.Types.ObjectId
}

const taskSchema = new Schema<Task>({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    status : {
        type : Boolean,
        default : false
    },
    assignedTo :{
        required : true,
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    createdBy : {
        required : true,
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
},{
    timestamps : true
});

export const TaskModel = mongoose.model('Task', taskSchema);