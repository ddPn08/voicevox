import { Mora, Query } from '../types'
import { Client } from '.'
import { Speaker } from '../types'

export class QueryClient {
    constructor(private readonly client: Client) {}

    public async createQuery(speaker: Speaker, text: string): Promise<Query> {
        const res = await this.client.request(`/audio_query?speaker=${speaker}&text=${encodeURIComponent(text)}`)
        return await res.json()
    }

    public async createQueryWithPreset(preset: number, text: string): Promise<Query> {
        const res = await this.client.request(`/audio_query_from_preset?preset_id=${preset}&text=${encodeURIComponent(text)}`)
        return await res.json()
    }

    public async getAccentPhrases(speaker: Speaker, text: string, is_kana?: boolean): Promise<Query['accent_phrases'][]> {
        const res = await this.client.request(`/accent_phrases?speaker=${speaker}&text=${encodeURIComponent(text)}?is_kana=${is_kana}`)
        return await res.json()
    }

    public async getPitchAndPhonemeLength(speaker: Speaker, moras: Mora[], accent: number, pause_mora?: Mora): Promise<Query['accent_phrases'][]> {
        const res = await this.client.request(`/mora_data?speaker=${speaker}`, {
            body: JSON.stringify({
                moras,
                accent,
                pause_mora,
            }),
        })
        return await res.json()
    }

    public async getPhonemeLength(speaker: Speaker, moras: Mora[], accent: number, pause_mora?: Mora): Promise<Query['accent_phrases'][]> {
        const res = await this.client.request(`/mora_length?speaker=${speaker}`, {
            body: JSON.stringify({
                moras,
                accent,
                pause_mora,
            }),
        })
        return await res.json()
    }

    public async getPitch(speaker: Speaker, moras: Mora[], accent: number, pause_mora?: Mora): Promise<Query['accent_phrases'][]> {
        const res = await this.client.request(`/mora_pitch?speaker=${speaker}`, {
            body: JSON.stringify({
                moras,
                accent,
                pause_mora,
            }),
        })
        return await res.json()
    }
}
