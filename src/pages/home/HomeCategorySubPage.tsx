

type Params = { categoryName: string }


export default function HomeCategorySubPage({ categoryName }: Params) {

    return <>
        <h1>
            Hello, HomeCategorySubPage { categoryName }
        </h1>
    </>
}