interface data {
    id: string,
    name: string
}

const dataMap = new Map<data['id'], number>()
const dataMap2 = new Map<keyof data, number>()
dataMap2.set('name', 1)