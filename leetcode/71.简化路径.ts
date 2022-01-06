function simplifyPath(path: string): string {
    const list: string[] = []
    path.split('/').forEach(route => {
        if (route === '' || route === '.') {
            return
        } else if (route === '..') {
            list.pop()
        } else {
            list.push(route)
        }
    })
    return '/' + list.join('/')
};

console.log(simplifyPath('/home/'))
console.log(simplifyPath('/../'))
console.log(simplifyPath('/home//foo/'))
console.log(simplifyPath('/a/./b/../../c/'))