szukaj([5, 2, 9, 7, 1, 12, 98, 34, 77, 9, 1111], 1111)
function szukaj(arr: number[], k: number) {
    for (let i = 0; i <= 11; i++) {
        if (arr[i] == k) {
            for (let index = 0; index < 10; index++) {
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
                basic.pause(100)
                basic.clearScreen()
                basic.pause(100)
            }
        }
        basic.pause(100)
    }
}
