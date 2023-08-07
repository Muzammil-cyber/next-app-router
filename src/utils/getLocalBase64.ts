import { getPlaiceholder } from 'plaiceholder';

export default async function getBase64(imageURL: string) {
    try {
        const buffer: Buffer = await fetch(imageURL).then(async (res) => Buffer.from(await res.arrayBuffer()))
        const { base64 } = await getPlaiceholder(buffer);
        return base64;
    } catch (e) {
        console.error(e);
    }
}
