const refs = {
  day: document.querySelector('[data-value="days"]'),
  hour: document.querySelector('[data-value="hours"]'),
  min: document.querySelector('[data-value="mins"]'),
  sec: document.querySelector('[data-value="secs"]'),
}

const timer = {
  start() {
    const startTime = new Date("2021-08-21 12:00:08")

    setInterval(() => {
      const currentTime = new Date()
      const deltaTime = startTime - currentTime
      const time = getTimeComponents(deltaTime)
      console.log(time)
      updateClockFace(time)
    }, 1000)
  },
}
timer.start()

function updateClockFace({ days, hours, mins, secs }) {
  // refs.clockFace.textContent = `${days}::${hours}:${mins}:${secs}`
  refs.day.textContent = `${days}`
  refs.hour.textContent = `${hours}`
  refs.min.textContent = `${mins}`
  refs.sec.textContent = `${secs}`
}

function pad(value) {
  return String(value).padStart(2, "0")
}

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)))

  /*
   * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
   * остатка % и делим его на количество миллисекунд в одном часе
   * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
   */
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))

  /*
   * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
   * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
   */
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)))

  /*
   * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
   * миллисекунд в одной секунде (1000)
   */
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000))

  return { days, hours, mins, secs }
}
