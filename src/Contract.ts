import { UserEstonia } from './UserEstonia'
import { UserLatvia } from './UserLatvia'

export class Contract {
  title: string
  signed: boolean

  constructor(title: string) {
    this.title = title
    this.signed = false
  }

  signEstonia(user: UserEstonia): void {
    if (user.mobileIDAuthorization === true) {
      this.signed = true
    }
  }

  signLatvia(user: UserLatvia): void {
    if (user.activateEParakstsForLatvia === true) {
      this.signed = true
    }
  }
}
