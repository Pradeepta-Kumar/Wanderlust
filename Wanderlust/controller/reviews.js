const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

module.exports.addReview = async (req, res) => {
    try {
        const { id } = req.params;
        const listing = await Listing.findById(id);
        const newReview = new Review(req.body.review); // Directly assign the review data
        newReview.author = req.user._id;

        listing.reviews.push(newReview);
        await newReview.save();
        await listing.save();

        req.flash("success", "New Review Created");
        res.redirect(`/listings/${listing._id}`);
    } catch (error) {
        console.error(error);
        req.flash("error", "Failed to add review");
        res.redirect("back");
    }
};

module.exports.deleteReview = async (req, res) => {
    try {
        const { id, reviewId } = req.params;
        //console.log(reviewId);

        await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
        await Review.findByIdAndDelete(reviewId);

        req.flash("success", "Review Deleted");
        res.redirect(`/listings/${id}`);
    } catch (error) {
        console.error(error);
        req.flash("error", "Failed to delete review");
        res.redirect("back");
    }
};
