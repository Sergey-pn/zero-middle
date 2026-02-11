type Props = {
    value: string
}

export function PageTitle(props: Props) {
    return <div>
        <h1>{props.value}</h1>
    </div>
}