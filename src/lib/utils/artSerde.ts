
/** Art data example
 * Deserialized: 01220122012201220122... (256 digit base-3 number)
 * Serialized: "pmn28pmn28pmn28 ..." (16 sections of base-36 numbers)
 */

type DrawData = {
    pixel_data: string
    palette?: string
}


export const example_art_data = [...Array(256)].map(()=> Math.floor(Math.random() * 3)).join("");
///"01220122012201220122".repeat(16);

export function deserializeArt(art_string: string) {
    const rows = art_string.match(/.{1,5}/g);
    const rows_base3 = rows?.map(row => parseInt(row, 36).toString(3));
    return rows_base3?.map(row => "0".repeat(16 - row.length) + row);
}

export function serializeArt(art_data: string) {
    const rows = art_data.match(/.{1,16}/g);
    const rows_base36 = rows?.map(row => parseInt(row, 3).toString(36));
    return rows_base36?.map(row => "0".repeat(5 - row.length) + row);
}

export function drawArtToCanvas(canvas: HTMLCanvasElement, draw_data: DrawData) {
    const palette = ["#FFFFFF", "#999999", "#000000"];

    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    if (ctx == null) throw "Context for canvas is null!";

    const pixel_width = canvas.width / 16;
    const pixel_height = canvas.height / 16;

    for (let i = 0; i < draw_data.pixel_data.length; i++) {
        const digit = parseInt(draw_data.pixel_data[i]);
        const color = palette[digit];

        const x = Math.ceil(pixel_width) * (i % 16);
        const y = Math.ceil(pixel_height) * Math.floor(i / 16);

        ctx.fillStyle = color;
        ctx.fillRect(x, y, Math.ceil(pixel_width), Math.ceil(pixel_height));
    }
}

export function generateArtBorderColor(art_data: string) {
    if (!art_data) return '#FFFFFF';

    let hash = 0;
    for (let i = 0; i < art_data.length; i++) {
        hash = art_data.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';
    for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xFF;
        color += ('00' + value.toString(16)).slice(-2);
    }

    return color;
}