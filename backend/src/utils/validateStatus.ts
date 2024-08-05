import type { Status } from "../types";

const validStatuses: Status[] = ['Disponible', 'Cliente', 'Falla', 'Enviado']

export function validateStatus(status: Status) {
  if (!validStatuses.includes(status)) throw new Error(`Invalid status: ${status}`)
}