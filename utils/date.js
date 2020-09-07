import dayjs from 'dayjs'
export function formatDate(date) {
    const display_date = dayjs(date).format('YYYY-MM-DD')
    return display_date
}