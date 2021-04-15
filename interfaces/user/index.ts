import { Organization } from '../organization'

export interface User {
  _id: string
  name: string
  email: string
  age?: number
  org: string|Organization
}