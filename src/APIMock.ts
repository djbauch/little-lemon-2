import { DateTime } from 'luxon'

const seededRandom = function (seed: number) {
  const m = 2 ** 35 - 31
  const a = 185852
  let s = seed % m
  return function () {
    s = (s * a) % m
    return s / m
  }
}

export const fetchAPI = function (date: DateTime) {
  const result = []
  const random = seededRandom(date.day)

  console.log('Day is ' + date.day )
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00')
    }
    if (random() < 0.5) {
      result.push(i + ':30')
    }
  }
  return result
}

export const submitAPI = function (formData: any) {
  return true
}
