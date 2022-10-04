namespace redrawImg {
    //% block
    //% block="generate image From tilemap $selectedTilemap to image $outputImage"
    export function GenerateImage(outputImage: any, selectedTilemap: any) {
        for (let x = 0; x < 255; x++) {
            for (let y = 0; y < 255; y++) {
                drawImg(x * 16, y * 16, selectedTilemap.tileImageAtLocation(selectedTilemap.getTileLocation(x, y)), outputImage)
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
