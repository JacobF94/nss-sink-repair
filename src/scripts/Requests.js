import { getRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()
    const requestList = (request) => {
        return `<li>${request}</li>`
    }
    requestList(requests)
    let html = `
        <ul>
            ${requests.map(requestList)}
        </ul>
    `

    return html
}