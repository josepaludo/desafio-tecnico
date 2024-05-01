

export function formatDate(date: Date) {

    date = new Date(date)

    const day = date.getDate()+1
    const month = date.getMonth()+1
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
}

export function camelCase(str: string) {

    //@ts-expect-error Error
    return str.toLocaleLowerCase().replaceAll(" ", "_")
}

function slice(str: string, arr: Array<string>) {

    if (str.length === 0) {
        return arr
    }

    const rest = str.length%3 

    if (rest !== 0) {
        return slice(
            str.slice(rest),
            [...arr, str.slice(0, rest)]
        )
    }

    return slice(
        str.slice(3),
        [...arr, str.slice(0, 3)]
    )
}

export function toDollars(num: number) {

    const dotSeparatedNums = slice( num.toString(), [] ).join(".") 

    return "$" + dotSeparatedNums + ",00"
}