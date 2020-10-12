export interface MessageDataReducerModel {
    message: string | null,
    messageType: string | null,
}

export const defaultMessageDataReducerModel: MessageDataReducerModel = {
    message: null,
    messageType: null
}