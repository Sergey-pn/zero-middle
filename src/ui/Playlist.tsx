import {useTracks} from "../bll/useTracks.ts";
import {TrackItem} from "./TrackItem.tsx";

type Props = {
    selectedTrackId: string | null
    onTrackSelect: (trackId: string) => void
}

export function Playlist(props: Props) {
    const {tracks} = useTracks()

    return <div>
        {tracks === null && <span>Loading...</span>}
        {tracks?.length === 0 && <span>No tracks</span>}
        <ul>
            {tracks?.map(track => {
                return <TrackItem track={track} key={track.id}
                                  isSelected={track.id === props.selectedTrackId}
                                  onTrackSelect={props.onTrackSelect}
                />
            })}
        </ul>
    </div>
}