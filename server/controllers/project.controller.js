import { PrismaClient } from "@prisma/client"
import { validateProject } from "../lib/validation.js"

const prisma = new PrismaClient()

export const projectController = async(req, res) => {

    const { error } = validateProject(req.body)

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