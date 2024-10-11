import {FC} from "react";

export const ErrorScreen: FC<{title: string}> = ({title}) => {
    return <div className={"error_screen"}>{title}</div>
}