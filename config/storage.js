const multer = require('multer')

const storage = (input, path = '') => {
    const st = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './public/img' + path)
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname)
        }
    })
    return multer({ storage: st }).single(input)
}

module.exports = storage