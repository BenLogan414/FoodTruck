(async()=>{
    const result = await fetch('/api/v1/events')
    const result1 = await fetch ('/api/v1/menu')
    const events = await result.json()
    const menus = await result1.json()
    const eventList = document.querySelector(".event-list")
    const menuList = document.querySelector(".menu-list")

    menus.forEach(({name, description, price, image}) => {
        const div = document.createElement("div")
        div.className = "menu"
        div.innerHTML = `
        <img src="${image}" alt="${name}", width="150", height="150">
        <h2>${name}</h2>
        <p>${description}</p>
        <p><strong>Price:</strong> ${price}</p>
        `
    menuList.appendChild(div)
    })

    events.forEach(({name, location, date, time}) => {
        const div = document.createElement("div")
        div.className = "event"
        div.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Location:</strong> ${location} mins | <strong>Date:</strong> ${date}</p> | <strong>Time:</strong> ${time}</p>
        `
    eventList.appendChild(div)
    }

)})()