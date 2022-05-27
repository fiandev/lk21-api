const author = "ryuudev"
const time = new Date()
const date = `${time.getDate()}, ${time.getMonth() + 1} ${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`

export {time, date}