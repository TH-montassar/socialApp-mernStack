const router = require("express").Router();
const { like, dislike ,newLike, getImpressions, deleteImpression} = require("../controllers/impression.controllers");
const verifyToken = require("../middlewares/verifyToken");
router.post("/newLike", verifyToken, newLike);

router.put("/like/:ImpressionId", verifyToken, like);
router.put("/dislike/:ImpressionId", verifyToken,dislike);
router.get("/", verifyToken,getImpressions);
router.delete("/delete/:ImpressionId", verifyToken,deleteImpression);

module.exports = router;
