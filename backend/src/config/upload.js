const multer = require("multer");
const path = require("path");

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: (request, file, callback) => {
      const datetime = Date.now();
      const extension = path.extname(file.originalname);
      const filename = path.basename(
        file.originalname.replace(/\W/g, ""),
        extension
      );

      callback(null, `${filename}-${datetime}${extension}`);
    }
  })
};
