import { atom } from 'jotai'

export const plantsAtom = atom([])

export const imagesAtom = atom({
  images: [],
})

export const lastUpdateAtom = atom(new Date())
