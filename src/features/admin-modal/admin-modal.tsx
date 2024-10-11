import "./admin-modal.css"
import {AwaitList} from "../await-list/await-list.tsx";

export const AdminModal = () => {
    return <div className={"admin-modal"}>
        <h1 className={"await-title"}>Ожидают</h1>
        <AwaitList />
    </div>
}