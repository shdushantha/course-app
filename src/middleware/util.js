const multer = require("multer");
const path = require("path");


const registarationNumber = (birthDate) => {
  const prefix = "CS";
  const suffix = Math.floor(Math.random() * 1000);
  const bDate = new Date(birthDate);
  const middle = bDate.getFullYear() + bDate.getMonth() + bDate.getDay();
  return prefix + middle + suffix;
};

const storage = multer.diskStorage({
 destination: function (req, file, cb) {
    cb(null, path.join(__dirname,"../uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadProfileImage = multer({
  storage: storage,
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload an image"));
    }
    cb(undefined, true);
  },
});

const userRole = {
  admin: "ADMIN",
  coordinator: "COORDINATOR",
  instructor: "INSTRUCTOR",
  student: "STUDENT",
};

const getUserRoleKey = (role) => {
  let roleKey = "";
  Object.keys(userRole).forEach((value) => {
    if (userRole[value] === role) {
      roleKey = value;
      return false;
    }
  });
  return roleKey;
};

const getUseRole = () => {
  return userRole;
};

module.exports = {
  registarationNumber: registarationNumber,
  uploadProfileImage: uploadProfileImage,
  getUserRoleKey: getUserRoleKey,
  getUseRole: getUseRole,
};
