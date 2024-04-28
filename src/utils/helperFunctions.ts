

export function formatDate(date: Date) {

    date = new Date(date)

    const day = date.getDate()+1
    const month = date.getMonth()+1
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
}

export function camelCase(str: string) {
    return str.toLocaleLowerCase().replace(" ", "_")
}