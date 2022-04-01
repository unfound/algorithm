export {}

let imgList = [...document.querySelectorAll('img')]
const length = imgList.length

const imgLazyLoad = (function () {
    let count = 0

    return function () {
        const delIndexList: number[] = []
        imgList.forEach((img, index) => {
            const rect = img.getBoundingClientRect()
            if (rect.top < window.innerHeight) {
                img.src = img.dataset.src!
                delIndexList.push(index)
                count++

                if (count === length) {
                    document.removeEventListener('scroll', imgLazyLoad)
                }
            }
        })

        imgList = imgList.filter((img, index) => !delIndexList.includes(index))
    }
})()

document.addEventListener('scroll', imgLazyLoad)