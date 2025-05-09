import {Schema,model} from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema ({
    email: {
        type:String, 
        required:true,
        unique: true
    },
    password: {
        type: String,
        unique: true,
    },
});
UserSchema.pre("save", async (next) => {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
})

export const UserModel = model("User", UserSchema);;