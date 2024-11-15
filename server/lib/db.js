import mysql from "mysql2/promise"
import dotenv from "dotenv"

dotenv.config()

const { HOST, USER, PASSWORD, DB_NAME, DB_PORT } = process.env

let connection;

export const connectDB = async() => {

    if(!connection) {

        try  { 
        
            var connection = mysql.createConnection({
                host: HOST,
                user: USER,
                password: PASSWORD,
                connectionLimit : 10,
                database: DB_NAME,
                port: DB_PORT
            });
        
            console.log('Database connected successfully');
        
            return connection;
        
        } catch (error) {
            console.log("Erreur de connexion a la base de donnée " + error)
        }
    }

    return connection;
}

