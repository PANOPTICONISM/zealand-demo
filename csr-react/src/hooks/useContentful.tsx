import { createClient } from 'contentful';
import { EntryProps } from '../types/types';

const useContentful = () => {
    const client = createClient({
        space: '3la13s77318z',
        accessToken: 'lxuCv402fN4c_ZQPe12Ec8rhlRdrS-p9-816Nz6dbQY',
        host: 'cdn.contentful.com'
    })

    const getProducts = async () => {
        try {
            const entries: EntryProps = await client.getEntries();
            const fields = entries.items.map((entry) => {
                const image = entry.fields.image.fields.file;

                return { ...entry.fields, image }
            })
            return fields;
        } catch (err) {
            console.log(err);
        }
    }

    return { getProducts }
}


export default useContentful;