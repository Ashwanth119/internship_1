"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductReview = exports.reviewArray = void 0;
exports.reviewArray = [];
var ProductReview = /** @class */ (function () {
    function ProductReview(id, user, rating, comment) {
        this.id = id;
        this.user = user;
        this.rating = rating;
        this.comment = comment;
        var obj = {
            id: id,
            user: user,
            rating: rating,
            comment: comment
        };
        exports.reviewArray.push(obj);
    }
    return ProductReview;
}());
exports.ProductReview = ProductReview;
