import { PrismaClient } from "@prisma/client"
import { validateContact } from "../lib/validation.js"
import sendMail from "../utils/sendEmail.js"

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
            
            await prisma.contact.create({
                data: req.body
            })

            const html = `
                <div>
                    <p>
                        Salut Monsieur/Madame, <br />Mr/mde ${req.body.name} souhaite contacté Venture Konect.
                        Voici son adresse email <strong>${req.body.email}</strong> et son numéro <strong style="color: blue">${req.body.phone}</strong>. Plus d'infos en bas
                    </p>
                    <p><span style="font-weight: bold;">Nom de la personne: </span> ${req.body.name}</p>
                    <p><span style="font-weight: bold;">Adresse email: </span> ${req.body.email}</p>
                    <p><span style="font-weight: bold;">Numéro de telephone: </span> ${req.body.phone}</p>
                    <p><span style="font-weight: bold;">Le poste: </span> ${req.body.job}</p>
                    <p><span style="font-weight: bold;">Nom de l'entreprise: </span> ${req.body.company}</p>
                    <p><span style="font-weight: bold;">Secteur d'activité: </span> ${req.body.industry}</p>
                    <p><span style="font-weight: bold;">La ville de residence: </span> ${req.body.city}</p>
                    <p><span style="font-weight: bold;">Interet: </span> ${req.body.interest}</p>
                    <p><span style="font-weight: bold;">Le moyen de contact: </span> ${req.body.about}</p>
                    <p><span style="font-weight: bold;">Le message: </span> ${req.body.message}</p>
                </div>  
            `

            sendMail('Get in touch with Venture konect', html)

            res.status(200).json({
                message: "Successfully create contact",
                status: 200
            })
        } catch (error) {
            console.log(error)
            res.status(210).json(error)
        }
    }
}