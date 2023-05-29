const router = require("express").Router();
const multer = require("multer");
const randToken = require("rand-token");
const memberController = require("./_controller/memberController");

const newName = randToken.generate(16);

const storage = multer.diskStorage({
  destination : function (req, file, cb) {
    cb(null, `${MEMBER_PHOTO_PATH}`);
  },

  filename : function (req, file, cb) {
    cb(null, `${newName}.jpg`);
  },
});

const upload = multer({ storage : storage});

router.post("/", upload.single("mb_image"), async (req, res) => {
  const result = await memberController.createMember(req);
  console.log("result", result);
  res.json(result);
});

router.get("/duplicationCheck/:field/:value", async (req, res) => {
  console.log(req.params);
  const result = await memberController.duplicationCheck(req);
  res.json(result);
});

module.exports = router;
