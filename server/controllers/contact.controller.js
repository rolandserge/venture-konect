import { PrismaClient } from "@prisma/client"
import { validateContact } from "../lib/validation.js"

const prisma = new PrismaClient()

export const contactController = async(req, res) => {

    const { error } = validateContact(req.body)

    if(error) {
        return res.status(400).json({
            message: error.details[0].message,
            status: 1,
            messages: error.details
        })
    } else {
        try {
            
    
        } catch (error) {
            console.log(error)
        }
    }
}