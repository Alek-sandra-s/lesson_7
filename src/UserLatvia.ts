import { UserBase } from './UserBase'

export class UserLatvia extends UserBase {
  activateEParakstsForLatvia: boolean | undefined

  constructor(name: string, surname: string, age: number) {
    super(name, surname, age)
  }
}
