const Listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });


module.exports.index = async(req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
};
    
module.exports.newForm = (req, res) => {
    console.log(req.user);
    if(!req.isAuthenticated()) {
        req.flash("error", "You must be logged in to create listing");
        return res.redirect("/login");
    }
    res.render("listings/new.ejs");
};

module.exports.createNew = async (req, res, next)=> {
    // let {title, description, image, price, location, country} = req.body;
    // let response = await geocodingClient.forwardGeocode({
    //     query: req.body.listing.location,
    //     limit: 2
    // }).send();
    // console.log(response.body.features[0].geometry);

    let url = req.file.path;
    let filename = req.file.filename;

    let {title, description, image, price, location, country} = req.body;
    const newListing = new Listing({
        title: title,
        description: description,
        image: image,
        price: price,
        location: location,
        country: country,
    });

    let response = await geocodingClient.forwardGeocode({
        query: location,
        limit: 1,
    }).send();
    // console.log(response.body.features[0].geometry);

    newListing.owner = req.user._id;
    newListing.image = {url, filename};

    newListing.geometry = response.body.features[0].geometry;

    let savedListing = await newListing.save();
    console.log(savedListing);
    req.flash("success", "New Listing Created");
    res.redirect("/listings");
};

module.exports.updateForm = async(req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing) {
        req.flash("error", "Listing doesn't exists");
        res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/uploads", "/uploads/h_300,w_250")
    res.render("listings/edit.ejs", {listing, originalImageUrl});
};

module.exports.update = async (req, res) => {
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body});

    if(typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url, filename};
        await listing.save();
    }
    
    req.flash("success", "Listing Updated");
    res.redirect(`/listings/${id}`);
};

module.exports.show = async(req, res) => {
    let {id} = req.params;
    let listing = await Listing.findById(id)
    .populate({
        path: "reviews",
        populate: {
            path: "author",
        },
    }).populate("owner");
    if(!listing) {
        req.flash("error", "Listing doesn't exists");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", {listing});
};

module.exports.deleteListing = async (req, res) => {
    let {id} = req.params;
    const deletedList = await Listing.findByIdAndDelete(id);
    req.flash("success", " Listing Deleted");
    console.log(deletedList);
    res.redirect("/listings");
};