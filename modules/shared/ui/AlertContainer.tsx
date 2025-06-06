'use client'

import { useAlert } from "../hooks/useAlert"
import CardDialog, { CardFooterDialog, CardHeaderDialog } from "./CardDialog"

const AlertContainer: React.FC = () => {

    const { alerts, removeAlert } = useAlert()

    return (
        <>
            {alerts.map(a => (
                <CardDialog state={a.status} key={a.id}>
                    <CardHeaderDialog>
                        <div className="space-y-4">
                            <h2 className="text-3xl text-blue-primary font-bold">{a.title}</h2>
                            <div className="text-text-4">{a.description}</div>
                        </div>
                    </CardHeaderDialog>
                    <CardFooterDialog>
                        <button className="h-10 w-[250px] rounded-[10px] bg-yellow-primary text-white cursor-pointer" onClick={() => {
                            removeAlert(a.id)
                            if (a.onConfirm) a.onConfirm()
                        }}>Aceptar</button>
                    </CardFooterDialog>
                </CardDialog>
            ))}
        </>
    )
}

export default AlertContainer;
