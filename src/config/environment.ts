import dotenv from'dotenv';

if (process.env.NODE_ENV !== "production"){
    dotenv.config()
}
export const config = {
    port: process.env.PORT || 3005,
    mongoUrl: process.env.MONGO_URL || 'mongodb+srv://kimberlysantosalves:UwgrXDwADfCno1b3@aprofunda-render.jmpjac5.mongodb.net/?retryWrites=true&w=majority&appName=Aprofunda-Render',
    jwtSecret: process.env.JWT_SECRET || 'aprofunda_projeto5_ghactions_render',
    nodeEnv: process.env.NODE_ENV || 'development'
}