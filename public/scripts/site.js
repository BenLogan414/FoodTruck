(async()=>{
    if(document.title=="Food Truck"){
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
        <br>
        `
    menuList.appendChild(div)
    })
 
    events.forEach(({name, location, date, time,_id}) => {
        const div = document.createElement("div")
        div.className = "event"
        div.innerHTML = `
        <h2><a href="/event/${_id}">${name}</a></h2>
        <p><strong>Location:</strong> ${location} | <strong>Date:</strong> ${date}</p> | <strong>Time:</strong> ${time} mins</p>
        `
    eventList.appendChild(div)
    }
   
 
)}
if (document.title=="Event"){
    const result = await fetch('/api/v1/events')
    const events = await result.json()
    const eventList = document.querySelector(".events-list")
    const splitURL = document.URL.split('/')
    events.forEach(({name, location, date, time, _id}) => {
        console.log(_id)
        if (splitURL[4] == _id){
        const div = document.createElement("div")
        div.className = "event"
        div.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Location:</strong> ${location} | <br><strong>Date:</strong> ${date}<br><strong>Time:</strong> ${time} mins</p>
        `
    eventList.appendChild(div)
}})}
})()