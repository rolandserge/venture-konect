import { PrismaClient } from "@prisma/client"
import { validateProject } from "../lib/validation.js"
import sendMail from "../utils/sendEmail.js"

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
            await prisma.project.create({
                data: req.body
            })

            const html = `
                <div>
                    <p>
                        Salut Monsieur/Madame, <br />Mr/mde ${req.body.name} souhaite initié son projet avec Venture Konect.
                        Voici son adresse email <strong>${req.body.email}</strong> et son numéro <strong style="color: blue">${req.body.phone}</strong>. Plus d'infos en bas
                    </p>
                    <p><span style="font-weight: bold;">Nom de la personne: </span> ${req.body.name}</p>
                    <p><span style="font-weight: bold;">Titre de son poste: </span> ${req.body.jobTitle}</p>
                    <p><span style="font-weight: bold;">Nom de son entreprise: </span> ${req.body.company}</p>
                    <p><span style="font-weight: bold;">Adresse email: </span> ${req.body.email}</p>
                    <p><span style="font-weight: bold;">Numéro de telephone: </span> ${req.body.phone}</p>
                    <p><span style="font-weight: bold;">Interet: </span> ${req.body.interest}</p>
                </div>  
            `

            await sendMail("Initate your project with us", html)

            res.status(200).json({
                message: "Project created successfully",
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}