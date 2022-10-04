namespace tilemapToImg {
    //% block
    //% block="generate image From current tilemap to image $outputImage"
    export function GenerateImage(outputImage: any) {
        for (let x = 0; x < 255; x++) {
            for (let y = 0; y < 255; y++) {
                drawImg(x * 16, y * 16, tiles.tileImageAtLocation(tiles.getTileLocation(x, y)), outputImage)
            }
        }
    }
    function drawImg(x: number, y: number, startImg: Image, targetImg: Image) {
        for (let xIdx = 0; xIdx < 16; xIdx++) {
            for (let yIdx = 0; yIdx < 16; yIdx++) {
                if (startImg.getPixel(xIdx, yIdx) != 0) {
                    targetImg.setPixel(x + xIdx, y + yIdx, startImg.getPixel(xIdx, yIdx))
                }
            }
        }
    }
}
