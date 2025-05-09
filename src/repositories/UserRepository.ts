import { UserModel } from "../models/User";
import { UserInterface } from "../interfaces/UserInterface";

export class UserRepository {
    async create(user:UserInterface) {
        return await new UserModel(user).save();
    }

    async findByEmail (email:String) {
        return await UserModel.findOne({email});
    }
}