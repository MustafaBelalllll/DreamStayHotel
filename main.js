const proxy = "https://localhost:7197"
const getElement = (element) => document.querySelector(element)
async function handleLoginButton() {
    let formData = new FormData(getElement("#loginModal"))
    let { username, password } = Object.fromEntries(formData.entries());

    await fetch(`${proxy}/api/Account/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName: username, password })
    }).then(async(response) => await response.text()).then((data) => {
        window.localStorage.setItem("Token", data)
    })
}
async function handleRegisterButton() {
    let formData = new FormData(getElement("#registerModal"))
    let { email, userName, password, verifyPassword, fullName, phoneNumber, address, dateOfBirth } = Object.fromEntries(formData.entries());

    if (password !== verifyPassword) {
        alert("Nem egyezik a jelszó")
        return
    }

    await fetch(`${proxy}/api/Account/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, userName, password, fullName, phoneNumber, address, dateOfBirth })
    }).then(async(response) => await response.text()).then((data) => {
        console.log(data);
    })
}

getElement("#loginModal").onsubmit = (event) => {
    event.preventDefault()
    handleLoginButton()
}

getElement("#registerModal").onsubmit = (event) => {
    event.preventDefault()
    handleRegisterButton()
}