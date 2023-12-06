const video = document.querySelector('.video')
let count = 0;
let a = '100vw'


$(video).click(() => {
    if(count % 2 == 0) {
        video.pause()
    } else {
        video.play()
    }
    count++
    console.log(count)
})

// $('.text').animate( {
//     left: a
// }, 5000
// )