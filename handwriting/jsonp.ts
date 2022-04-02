interface Options {
    url: string
    params: Record<string, string>
    cbName: string
}

const jsonp = ({ url, params, cbName }: Options) => {
    const createUrl = () => {
        let paramsStr = ''
        for (let key in params) {
            if (params.hasOwnProperty(key)) {
                paramsStr += `${key}=${params[key]}`
            }
        }
        paramsStr += `callback=${cbName}`
        return `${url}?${paramsStr}`
    }

    return new Promise((resolve, reject) => {
        const scriptEle = document.createElement('script')
        scriptEle.src = createUrl()
        document.body.appendChild(scriptEle)
        // @ts-ignore
        window[cbName] = (data: unknown) => {
            resolve(data)
            document.removeChild(scriptEle)
        }
    })
}