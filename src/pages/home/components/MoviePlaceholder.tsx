

export default function MoviePostersPlaceholder() {

    const numbers: Array<number> = []
    for (let i = 0; i < 20; i++) {
        numbers.push(i)
    }

    return <>
        <div className="flex flex-wrap gap-5 justify-around md:justify-between">
            {
                numbers.map(number => (
                    <div key={number} className="bg-slate-800 w-60 h-96">
                    </div>
                ))
            }
        </div>
    </>
}