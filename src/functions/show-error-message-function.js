import { Dialog } from "quasar"

export function showErrorMessage(message){
    Dialog.create({
        title:'Error',
        message:message
    })
}