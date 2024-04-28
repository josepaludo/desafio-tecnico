

export default function HomeSubPage() {

    const numbers: Array<number> = []
    for (let i = 0; i < 100; i++) {
        numbers.push(i)
    }

    return <>

        <div className="flex flex-col lg:flex-row gap-10">

            <div className="w-full lg:w-1/2">

                <h1 className="text-3xl">
                    Últimos Acessados
                </h1>
            </div>

            <div className="w-full lg:w-1/2">

                <div className="h-full w-full min-h-96 bg-red-400"></div>
            </div>
        </div>

        <h1 className="text-4xl my-10">
            Filmes em destaque
        </h1>

        <div className="flex flex-wrap gap-5 justify-around md:justify-between">
            {
                numbers.map(number => (
                    <div key={number} className="bg-red-200 w-60 h-96">
                    </div>
                ))
            }
        </div>

    </>
}