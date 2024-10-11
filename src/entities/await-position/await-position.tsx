import {TAwaitEntity} from "../../features/await-list/await-list.tsx";
import "./await-position.css"
import arrow from "../../shared/arrow.svg"

export const AwaitPosition = ({entity}: {entity: TAwaitEntity, setEntities: (ent: TAwaitEntity[]) => void}) => {

    return (
        <ul className={"await_position"}>
            <li>{entity.id}</li>
            <li>{entity.login}</li>
            <li>{entity.percent}</li>
            <li>{entity.income}</li>
            <li>{entity.balance}</li>
            <li>{entity.date}</li>
            <li><div className={"arrow-container"}><img src={arrow} alt={"v"}/></div></li>
            <li><div className={`circle ${entity.takeToWork ? "active" : ""}`}/></li>
        </ul>
    )
}