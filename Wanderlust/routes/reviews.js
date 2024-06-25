const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const {addReview, deleteReview} = require("../controller/reviews.js");
const {reviewSchema }= require("../schema.js");

//POST review Route
router.post("/", isLoggedIn, validateReview, wrapAsync(addReview));
 
 //Delete review Route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(deleteReview));

module.exports = router;