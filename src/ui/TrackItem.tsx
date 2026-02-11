import type {Track} from "../dal/types.ts";
import type {CSSProperties} from "react";

type TrackItemProps = {
    track: Track
    isSelected: boolean
    onTrackSelect: (trackId: string) => void
}

export function TrackItem(props: TrackItemProps) {
    const style: CSSProperties = {}
    if (props.isSelected) {
        style.border = '1px solid orange'
    }
    const handleClick = () => {
        props.onTrackSelect(props.track.id)
    }
    return <li style={style}>
        <div onClick={handleClick}>{props.track.attributes.title}</div>
        <audio src={props.track.attributes.attachments[0].url} controls></audio>
    </li>
}