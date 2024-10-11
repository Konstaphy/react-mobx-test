import "./await-list.css"
import {AwaitPosition} from "../../entities/await-position/await-position.tsx";
import {useState} from "react";

export type TAwaitEntity = {
    id: string;
    login: string;
    percent: number;
    income: number;
    balance: number;
    date: string;
    takeToWork: boolean;
}

export const AwaitList = () => {
    const [entities, setEntities] = useState<TAwaitEntity[]>( [
        {id: "1231232", login: "хуйхухйу", percent: 88, income: 2312, balance:23213, date: "22:38 / 20.07.24", takeToWork: true},
        {id: "123", login: "хуйхухйу", percent: 88, income: 2312, balance:23213, date: "22:38 / 20.07.24", takeToWork: false},
        {id: "321312", login: "хуйхухйу", percent: 88, income: 2312, balance:23213, date: "22:38 / 20.07.24", takeToWork: true},
        {id: "321", login: "хуйхухйу", percent: 88, income: 2312, balance:23213, date: "22:38 / 20.07.24", takeToWork: false},
        {id: "1245325", login: "хуйхухйу", percent: 88, income: 2312, balance:23213, date: "22:38 / 20.07.24", takeToWork: false},
        {id: "1235367", login: "хуйхухйу", percent: 88, income: 2312, balance:23213, date: "22:38 / 20.07.24", takeToWork: true},
    ]);

    return <section className={"await_list"}>
        <ul className={"await_list__header"}>
            <li>ID-заявки</li>
            <li>Логин</li>
            <li>%</li>
            <li>Профит</li>
            <li>Баланс</li>
            <li>Дата и время</li>
            <li>Взять в работу</li>
        </ul>
        <div className={"await_list_content"}>
            {entities.map(entity => {
                return <AwaitPosition setEntities={setEntities} key={entity.id} entity={entity}></AwaitPosition>
            })}
        </div>
    </section>
}