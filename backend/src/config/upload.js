const multer = require("multer");
const path = require("path");

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: (request, file, callback) => {
      const extension = path.extname(file.originalname);
      const filename = path.basename(file.originalname, extension);
      const datetime = Date.now();

      callback(null, `${filename}-${datetime}${extension}`);
    }
  })
};
