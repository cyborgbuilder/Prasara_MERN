const multer = require('multer')

const Storage = multer.diskStorage({
    destination: "./client/public/uploads",
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

  const upload = multer({
    storage: Storage
  }).single('Image')

module.exports = upload