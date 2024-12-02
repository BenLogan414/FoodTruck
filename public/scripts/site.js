(async()=>{
    const result = await fetch('/api/v1/events')
    const events = await result.json()
    const eventList = document.querySelector(".menu-list")
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