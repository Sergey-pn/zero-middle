import type {Track} from "../dal/types.ts"
import styles from "./TrackItem.module.css"
import clsx from "clsx";

type TrackItemProps = {
    track: Track
    isSelected: boolean
    onTrackSelect: (trackId: string) => void
}

export function TrackItem(props: TrackItemProps) {
    const classNames = clsx({
        [styles.track]: true,
        [styles.selected]: props.isSelected
    })

    const handleClick = () => {
        props.onTrackSelect(props.track.id)
    }

    return <li className={classNames}>
        <div onClick={handleClick}>{props.track.attributes.title}</div>
        <audio src={props.track.attributes.attachments[0].url} controls></audio>
    </li>
}