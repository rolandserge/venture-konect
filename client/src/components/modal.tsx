import { Modal } from "@mantine/core";
import { Trans } from "react-i18next";

interface ModalProps {
    opened: boolean, 
    close: () => void,
    poste: PosteProps
}

type PosteProps = {
    name: string,
    experienceKey: string
}
export default function ModalTeams({ opened, close, poste }: ModalProps) {

    console.log(poste)

    return (
        <Modal 
            opened={opened} 
            onClose={close} 
            title={poste ? poste.name : "Profil"}
            centered
            size='lg'
        >
            <p style={{ padding: "1.5em 1em"}}>{poste && <Trans i18nKey={poste.experienceKey} />}</p>
        </Modal>
    )
}
