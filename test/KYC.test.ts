import { UserEstonia } from '../src/UserEstonia'
import { UserLatvia } from '../src/UserLatvia'
import { KYC } from '../src/KYC'
import { Contract } from '../src/Contract'

describe('KYC tests', () => {
  let oldEstonianUser: UserEstonia
  let youngEstonianUser: UserEstonia
  let oldLatvianUser: UserLatvia
  let youngLatvianUser: UserLatvia

  beforeEach(() => {
    oldEstonianUser = new UserEstonia('Jakob', 'Lvovich', 24)
    youngEstonianUser = new UserEstonia('Jakob', 'Lvovich', 15)
    oldLatvianUser = new UserLatvia('Jakob', 'Lvovich', 24)
    youngLatvianUser = new UserLatvia('Jakob', 'Lvovich', 17)
  })

  //1 case
  test('ESTONIA: mobileIDAuthorization default value is undefined', () => {
    expect(oldEstonianUser.mobileIDAuthorization).toBeUndefined()
  })
  test('LATVIA: mobileIDAuthorization default value is undefined', () => {
    expect(oldLatvianUser.activateEParakstsForLatvia).toBeUndefined()
  })

  //case 2, 3
  test('ESTONIA: activateMobileIDForEstonia works', () => {
    KYC.activateMobileIDForEstonia(oldEstonianUser)
    expect(oldEstonianUser.mobileIDAuthorization).not.toBeUndefined()
    expect(oldEstonianUser.mobileIDAuthorization).toBeTruthy()
  })
  test('LATVIA: activateEParakstsForLatvia works', () => {
    KYC.activateEParakstsForLatvia(oldLatvianUser)
    expect(oldLatvianUser.activateEParakstsForLatvia).not.toBeUndefined()
    expect(oldLatvianUser.activateEParakstsForLatvia).toBeTruthy()
  })

  //case 4
  test('ESTONIA: activateMobileIDForEstonia throws error', () => {
    expect(() => {
      KYC.activateMobileIDForEstonia(youngEstonianUser)
    }).toThrow('User is too young')
  })
  test('LATVIA: activateEParakstsForLatvia throws error', () => {
    expect(() => {
      KYC.activateEParakstsForLatvia(youngLatvianUser)
    }).toThrow('User is too young')
  })

  // Test Estonia sign contracts
  test('Initially contract created as not signed', () => {
    const contractYoungEstonian = new Contract('Loan agreement')
    expect(contractYoungEstonian.signed).toBe(false)
  })

  test('ESTONIA: it is possible to sign if mobileIDAuthorization is activated', () => {
    const contract = new Contract('Loan agreement')

    KYC.activateMobileIDForEstonia(oldEstonianUser)
    contract.signEstonia(oldEstonianUser)

    expect(contract.signed).toBe(true)
  })

  test('ESTONIA: it is not possible to sign if mobileIDAuthorization is not activated for old user', () => {
    const contract = new Contract('Loan agreement')

    contract.signEstonia(oldEstonianUser)

    expect(contract.signed).toBe(false)
  })

  test('ESTONIA: it is not possible to sign if mobileIDAuthorization is not activated for young user', () => {
    const contract = new Contract('Loan agreement')

    expect(() => {
      KYC.activateMobileIDForEstonia(youngEstonianUser)
    }).toThrow('User is too young')

    contract.signEstonia(youngEstonianUser)

    expect(contract.signed).toBe(false)
  })

  // Test Latvia sign contracts
  test('LATVIA: it is possible to sign if mobileIDAuthorization is activated', () => {
    const contract = new Contract('Loan agreement')

    KYC.activateEParakstsForLatvia(oldLatvianUser)
    contract.signLatvia(oldLatvianUser)

    expect(contract.signed).toBe(true)
  })

  test('LATVIA: it is not possible to sign if mobileIDAuthorization is not activated for old user', () => {
    const contract = new Contract('Loan agreement')

    contract.signLatvia(oldLatvianUser)

    expect(contract.signed).toBe(false)
  })

  test('LATVIA: it is not possible to sign if mobileIDAuthorization is not activated for young user', () => {
    const contract = new Contract('Loan agreement')

    expect(() => {
      KYC.activateEParakstsForLatvia(youngLatvianUser)
    }).toThrow('User is too young')

    contract.signLatvia(youngLatvianUser)

    expect(contract.signed).toBe(false)
  })
})
