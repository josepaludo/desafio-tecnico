import { useEffect, useState } from "react"
import { TTrack } from "../../../utils/api/types"
import { axiosClient } from "../../../utils/api/axiosClient"
import { ApiRoute } from "../../../utils/api/apiRoutes"
import MusicPlayer from "./MusicPlayer"


type Params = {
    imdb_id: string
}

export default function Soundtrack({ imdb_id }: Params) {

    const [ musics, setMusics ] = useState<Array<TTrack>|null>(null)

    useEffect(() => {

        axiosClient
            .get(ApiRoute.Songs, { params: { imdb_id } })
            .then(res => {
                const data = res.data as Array<TTrack>
                setMusics(data)
            })
            .catch(err => console.log(err))
    }, [])

    return <>
        { musics && musics.length > 0 && <>
            <div>
                <h2 className="text-2xl">
                    Trilha Sonora
                </h2>

                <div className="py-3">
                    { 
                        musics.map(music => (
                            <MusicPlayer key={music.name} music={music} />
                        ))
                    }
                </div>
            </div>
        </>}
    </>
}
