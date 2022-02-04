export * from './Query'
export * from './Other'

export type Speaker = 0 | 1 | 2 | 3 | 4

export type Mora = {
    text: string,
    consonant: string,
    consonant_length: number,
    vowel: string,
    vowel_length: number,
    pitch: number
}