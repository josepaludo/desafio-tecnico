
export function shuffleArray<T>(array: Array<T>) {
    return array
        .map(value => ({ value, sort: Math.random()*10 }))
        .sort((a, b) => b.sort - a.sort)
        .map(({ value }) => value)
}