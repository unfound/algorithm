const tpl = `
    <div>{{msg}}<div>
    <div>{{ list[0] }}</div>
    <div>{{ content.visiabled ? content.text : 'No access!' }}</div>
`

const data = {
    msg: 'hello world',
    list: ['<div>hi', 'hello'],
    content: {
        visiabled: false,
        text: 'Bilibili Cheers'
    }
}

function __escapeHTML (html) {
    const escapeCharMap = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&#x27;',
        '`': '&#x60'
    }

    return html.replace(/[<>&'"`]/g, (char) => escapeCharMap[char])
}

function createFunc (express, scope = {}) {
    console.log(`with(this){ return \`${express}\`}`)
    const func = new Function(`with(this){ return \`${express}\`}`)
    scope.__escapeHTML = __escapeHTML
    return func.call(scope)
}

function parserHTML (tpl, data) {
    const patt = /{{([^}]+)}}/g
    let cursor = 0
    let codes = []
    tpl.replace(patt, function (match, $1, offset, str) {
        codes.push(str.slice(cursor, offset))
        codes.push("${__escapeHTML(" + $1 + ")}")
        cursor = offset + match.length
        return match
    })
    codes.push(tpl.slice(cursor, tpl.length))
    const lastCodes = codes.join('')
    return createFunc(lastCodes, data)
}

// 输出
//<div>hello world<div>
//<div>hi</div>
console.log(parserHTML(tpl, data))