import { useEffect, useState } from "react"
import { axiosClient } from "../../../utils/api/axiosClient"
import { ApiRoute } from "../../../utils/api/apiRoutes"
import { TTrack } from "../../../utils/api/types"


export default function MusicPlayer() {

    const [ music, setMusic ] = useState<TTrack|null>(null)

    useEffect(() => {

        axiosClient
            .get(ApiRoute.Songs)
            .then(res => {
                const data = res.data as TTrack
                console.log(data)
                data.artists.push({
                    external_urls: { spotify: "" },
                    name: "Diogo"
                })
                setMusic(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    if (!music) {
        return <>
            <h1>
                Loading
            </h1>
        </>
    }

    return <>
        <div className="
            border rounded-sm shadow
            py-3 px-5
            bg-slate-100 text-stone-950
        ">
            <p className="flex gap-1 mb-1">
                <a
                    href={ music.external_urls.spotify }
                    className="font-semibold"
                >
                    { music.name } 
                </a>
                |
                {
                    music.artists.map((artist, int) => <>
                        { int > 0 ? ", " : ""}
                        <a
                            key={ artist.name }
                            href={ artist.external_urls.spotify }
                        >
                            { artist.name }
                        </a>
                    </>)
                }
                |
                <a
                    className="italic"
                    href={ music.album.external_urls.spotify }
                >
                    { music.album.name }
                </a>
            </p>

            { music.preview_url && (
                <div className="flex h-14 w-full">
                    <a
                        className="rounded-full mr-2 overflow-hidden"
                        href={ music.external_urls.spotify }
                    >
                        <img
                            className="h-14 w-14"
                            src={ music.album.images[0].url }
                        />
                    </a>
                    <div className="grow h-full flex items-center pb-1">
                        <iframe src={music.preview_url} className="w-full h-full"/>
                    </div>
                </div>
            )}
        </div>
    </>
}