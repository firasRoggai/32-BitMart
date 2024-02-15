# 32-BitMart

```ts

///// ART /////

/// Getting arrays of art by a filter tag
[GET] /api/art/get/["new" | "popular" | "expensive" | "cheap"]/[page_size]/[page_index]
    ? JWT
    >> ArtModel[]

/// Like an art piece. Returns whether you've liked it now and how many likes
[POST] /api/art/like/[art_id]
    ! JWT
    // Save/remove user ID in DB: Art/<id>/likes
    >> {
        liked: boolean
        likes: number
    }

/// Reported
[POST] /api/art/report/[art_id]
    ! JWT
    // Save user ID of who reported it in DB: Art/<id>/reports
    >> {
        msg: string // "Reported!"
    }

/// Create art. Give the request body the art data
[POST] /api/art/create
    ! JWT
    // Check if art is unique
    // Check if user can afford to create art (subtract cost from account)
    >> {
        msg: string // "Created new art!"
        coins: number // New amount of coins the user has
    }


///// PROFILE /////

/// Get your own profile
[GET] /api/profile
    ! JWT
    >> CurrentUserModel

/// Update profile (work in progress)
[UPDATE] /api/profile
    ! JWT
    // Provide with properties you're changing
    >> CurrentUserModel

```