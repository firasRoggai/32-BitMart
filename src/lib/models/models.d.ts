
type ArtModel = {
    liked: boolean

    id: string
    pixel_data: string
    owner_id: string
    artist_id: string
    palette: ArtPalette
    likes: number
    price: number
}

type UserModel = {
    display_name: string
    user_id: string
    profile_pic_id: string
}

type CurrentUserModel = {
    display_name: string
    user_id: string
    profile_pic_id: string
    coins: number
    palettes: string[]
    role: string
    previous_bonus_collect
}

type ProfilePicModel = {
    pixel_data: string
}
