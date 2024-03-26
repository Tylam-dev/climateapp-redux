import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween.js'

dayjs.extend(isBetween)
export const sunShow = (date, sunrise, sunset) => {
    return dayjs(date).isBetween(sunrise, sunset, 'hour')
}
