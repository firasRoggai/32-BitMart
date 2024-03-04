import { ArtPalette, art_tags } from '$src/const';
import { json } from '@sveltejs/kit';

export function GET({ params }) {
    const { tag, page_size, page_index } = params;

    if (!art_tags.has(tag)) {
        return json({
            msg: `Tag must look like: "${[...art_tags].join("\", \"")}"`,
        }, {
            status: 400
        });
    }

    if (!isNaN(parseInt(page_size)) || !isNaN(parseInt(page_index))) {
        return json({
            msg: `Page size and index must be numbers!`,
        }, {
            status: 400
        });
    }

    // with this we're going to need a function per query tag (ie: a function that holds how to organize a query for popular art)
    // we're also going to need a function that takes the raw art data and turns it into the public version

    return json([
    ]);
}
