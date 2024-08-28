namespace tilemapToImg {
    //% block
    //% block="generate image from  tilemap $inputTilemap to image $outputImage"
    export function generateImage(inputTilemap: any, outputImage: any) {
        for (let x = 0; x < inputTilemap.width; x++) {
            for (let y = 0; y < inputTilemap.height; y++) {
                helpers.imageBlit(outputImage, x * 16, x * 16, x * 16 + 15, x * 16 + 15, inputTilemap.tileImageAtLocation(inputTilemap.getTileLocation(x, y)), 0, 0, 16, 16, true, false)
            }
        }
    }
}
