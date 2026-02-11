export type Attachments = {
    url: string
}
export type TrackAttributes = {
    title: string
    attachments: Attachments[]
}
export type Track = {
    id: string
    attributes: TrackAttributes
}

export type TrackDetailsAttributes = {
    title: string
    lyrics: string
    attachments: Attachments[]
}
export type TrackDetailsResource = {
    id: string
    attributes: TrackDetailsAttributes
}