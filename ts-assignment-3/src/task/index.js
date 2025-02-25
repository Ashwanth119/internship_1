"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pp = require("./productProperties");
var Details = /** @class */ (function () {
    function Details() {
    }
    Details.prototype.getProductDetails = function (id) {
        for (var _i = 0, _a = pp.productArray; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.id === id) {
                console.log(product);
            }
        }
        for (var _b = 0, _c = pp.reviewArray; _b < _c.length; _b++) {
            var review = _c[_b];
            if (review.id === id) {
                console.log(review);
            }
        }
    };
    Details.prototype.calculateAvgRating = function (id) {
        var avg_rating = 0, count = 0;
        for (var _i = 0, _a = pp.reviewArray; _i < _a.length; _i++) {
            var review = _a[_i];
            if (review.id === id) {
                avg_rating += review.rating;
                count++;
            }
        }
        console.log(avg_rating / count);
    };
    return Details;
}());
var obj = new Details();
obj.getProductDetails(1);
obj.calculateAvgRating(1);
obj.getProductDetails(2);
obj.calculateAvgRating(2);
