const Jimp = require('jimp');

const createIcons = async (text, color) => {
    let image = new Jimp(400, 400, color ? color : 'white', (err, image) => {
        if (err) throw err;
    });
    let time = Date.now();
    let file = './src/images/' + time + '.' + image.getExtension();
    const font = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK)
    image.print(font, 0, 0, {
        text: text,
        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
    }, 400, 400).write(file)
    return file
}

const createIcon = async (i) => {
    let image = new Jimp(200, 200, 'white', (err, image) => {
        if (err) throw err;
    });
    let file = './src/images/iconsFromNumber/' + i + '.' + image.getExtension();
    const font = await Jimp.loadFont(Jimp.FONT_SANS_128_BLACK)
    image.print(font, 0, 0, {
        text: i.toString(),
        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
    }, 200, 200).write(file)
    return file
}

const createIconsFromList = async (list) => {

}

const createIconsFromNumber = async (range) => {
    let files = []
    for (let i = 0; i < range; i++) {
        let file = await createIcon(i)
        files.push(file)
    }
    return files
}

module.exports = {createIcons, createIconsFromNumber}
