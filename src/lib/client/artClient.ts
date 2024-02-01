
type ErrorResponse = {
    msg: string
}

type LikeArtResponse = {
    current_likes: number
}


const base_url = "/api/art/";

export async function likeArt(art_id: string) {
    const [response, err] = await post<LikeArtResponse>(`like/${art_id}`);

    if (err) return console.log(err);

    return response!.current_likes;
}

export async function getArtById(art_id: string): Promise<ArtModel> {
    const [response, err] = await get(art_id);

    if (err) throw err;

    return response;
}


async function post<T = any>(route: string, body: any = {}): Promise<[T | null, ErrorResponse | null]> {
    const url = base_url + route;
    const response = await fetch(base_url + route, {
        method: "POST",
        body
    });

    
    const json = await response.json();
    
    if (!response.ok) return [null, json];

    return [json, null];
}

async function get<T = any>(route: string): Promise<[T | null, ErrorResponse | null]> {
    const url = base_url + route;
    const response = await fetch(base_url + route);
    
    const json = await response.json();
    
    if (!response.ok) return [null, json];

    return [json, null];
}
