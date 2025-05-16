import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";
import { AuthService } from "../services/AuthService";

const authService = new AuthService(new UserRepository());


export class AuthController {
    static async register(req:Request, res:Response) {
        try {
            const token = await authService.register(req.body);
            res.json({token});
        } catch (error:any) {
            res.status(400).json({message: error.message || "Los datos enviados no corresponden a credenciales validas"})
        }
    }
    static async login(req:Request, res:Response) {
        try {
            const token = authService.login(req.body); //{email, password}
            res.json({token})
        } catch (error:any) {
            res.status(400).json({message: error.message || "Credenciales no validas"})
        }
    }
}