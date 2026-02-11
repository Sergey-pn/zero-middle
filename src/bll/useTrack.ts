import {useEffect, useState} from "react";
import type {TrackDetailsResource} from "../dal/types.ts";
import {getTrack} from "../dal/api.ts";

export function useTrack(selectedTrackId: string | null) {
    const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null)

    useEffect(() => {
        if (!selectedTrackId) return

        getTrack(selectedTrackId)
            .then(json => setSelectedTrack(json.data))
    }, [selectedTrackId])

    return {selectedTrack}
}