const filterElement = document.querySelector('header input')
const contacts = document.querySelectorAll('ul .person')


filterElement.addEventListener('input', filterContacts)



function filterContacts() {
    if (filterElement.value != '') {
        for (let contact of contacts) {
            let title = contact.querySelector('h3')
            title = title.textContent.toLowerCase()
            let filterText = filterElement.value.toLowerCase()
            if (!title.includes(filterText)) {
                contact.parentElement.style.display = "none"

            }
            else {
                contact.parentElement.style.display = "block"

            }
        }
    }
    else {
        for (let contact of contacts) {
            contact.parentElement.style.display = "block"


        }
    }
}

