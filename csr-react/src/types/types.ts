export type EntryProps = {
    items: {
        fields: {
            title: string,
            category: Array<string>,
            price: string,
            description: string,
            image: {
                fields: {
                    description: string,
                    title: string,
                    file: {
                        url: string,
                        fileName: string,
                        contentType: string,
                        details: {
                            height: number,
                            width: number,
                            size: number,
                        }
                    }
                }
            }
        },
    }[]
}

export type ProductProps = {
    title: string,
    category: Array<string>,
    price: string,
    description: string,
    image: {
        url: string,
        fileName: string,
        contentType: string,
        details: {
            height: number,
            width: number,
            size: number,
        }
    }
}