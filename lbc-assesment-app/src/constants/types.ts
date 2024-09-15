export type Task = {
  description: string
  creationDate: Date
  finishedDate?: Date
}

export enum ToastType {
  Success,
  Error,
  Information,
}

export type ToastProps = {
  type: ToastType
  message: string
  customKey: number
  delaySeconds?: number
  hide?: boolean
}
