import app from "./app";
import { connectDB } from "./config/database";

const PORT = 3000;

connectDB().then(res=>{
    app.listen(PORT, () => {
        console.log("Servidor corriendo en http://localhost:" +PORT+ ":3"); 
    })
}).catch(err => console.error(err));