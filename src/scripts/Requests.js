import { getRequests, deleteRequest } from "./dataAccess.js"

export const Requests = () => {
    const requestArray = getRequests()
    const requestHtml = (request) => {
        return `<li>${request.description} at ${request.address} by ${request.neededBy}<button class="request_delete" id="request--${request.id}">Delete</button></li>`
    }
    let html = `
        <ul>
            ${requestArray.map((request) => requestHtml(request))}
        </ul>
    `
    
    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})