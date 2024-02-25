import { Country, Currency } from 'shared/const/common'
import { getProfileForm } from './getProfileForm'
import { StateSchema } from 'app/providers/StorePropvider'

describe('getProfileForm', () => {
  it('should return the data from the state', () => {
    const data = {
      firstName: 'Alex',
      lastName: 'Berezov',
      age: 41,
      currency: Currency.EUR,
      country: Country.Germany,
      city: 'Moscow',
      userName: 'admin',
      avatar:
        'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    }

    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    }
    expect(getProfileForm(state as StateSchema)).toEqual(data)
  })

  it('should return undefined if there is no error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {},
    }
    expect(getProfileForm(state as StateSchema)).toBeUndefined()
  })
})
