const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const {index, show, createNew, newForm, updateForm, update, deleteListing} = require("../controller/listings.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});


//index route
router.get("/", wrapAsync(index));

//new route
router.get("/new", isLoggedIn, newForm);

//show route
router.get("/:id", wrapAsync(show));

//create route
router.post("/", isLoggedIn, upload.single("image"), validateListing, wrapAsync(createNew)) ;

//edit - update route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(updateForm));
router.put("/:id", isLoggedIn, isOwner, upload.single("image"), validateListing, wrapAsync(update));

//delete route
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(deleteListing));

module.exports = router;