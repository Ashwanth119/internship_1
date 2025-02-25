"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.reviewArray = exports.productArray = exports.product_category = exports.product_status = void 0;
var productWarranty_1 = require("./productWarranty");
var productReview_1 = require("./productReview");
var product_status;
(function (product_status) {
    product_status["in_stock"] = "In Stock";
    product_status["out_of_stock"] = "Out of Stock";
})(product_status || (exports.product_status = product_status = {}));
var product_category;
(function (product_category) {
    product_category["electronics"] = "Electronics";
    product_category["clothing"] = "Clothing";
    product_category["books"] = "Books";
})(product_category || (exports.product_category = product_category = {}));
exports.productArray = [];
exports.reviewArray = [];
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product(id, name, description, price, status, category, duration, type, color, size) {
        var _this = _super.call(this, duration, type) || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        _this.price = price;
        _this.status = status;
        _this.category = category;
        var obj = {
            id: id,
            name: name,
            description: description,
            price: price,
            status: status,
            category: category,
            duration: duration,
            type: type
        };
        if (color !== undefined) {
            _this.color = color;
            obj['color'] = color;
        }
        if (size !== undefined) {
            _this.size = size;
            obj['size'] = size;
        }
        exports.productArray.push(obj);
        return _this;
    }
    Product.prototype.addReview = function (review) {
        exports.reviewArray.push(review);
    };
    Product.prototype.getProductDetails = function () {
        var id = this.id;
        for (var _i = 0, productArray_1 = exports.productArray; _i < productArray_1.length; _i++) {
            var product = productArray_1[_i];
            if (product.id === id) {
                console.log(product);
            }
        }
        for (var _a = 0, reviewArray_1 = exports.reviewArray; _a < reviewArray_1.length; _a++) {
            var review = reviewArray_1[_a];
            if (review.id === id) {
                console.log(review);
            }
        }
    };
    Product.prototype.calculateAvgRating = function () {
        var id = this.id;
        var avg_rating = 0, count = 0;
        for (var _i = 0, reviewArray_2 = exports.reviewArray; _i < reviewArray_2.length; _i++) {
            var review = reviewArray_2[_i];
            if (review.id === id) {
                avg_rating += review.rating;
                count++;
            }
        }
        console.log(avg_rating / count);
    };
    return Product;
}(productWarranty_1.ProductWarranty));
exports.Product = Product;
var p1 = new Product(1, "Roadster shirt", "Shirt", 1000, product_status.in_stock, product_category.clothing, '1 Year', 'Limited', 'Red', "M");
var p2 = new Product(2, "HP laptop", "Laptop", 100000, product_status.in_stock, product_category.electronics, '1 Year', 'Limited', "White");
var p3 = new Product(3, "Wings of fire", "Book", 1500, product_status.in_stock, product_category.books, '10 days', 'Limited');
var p4 = new Product(4, "Realme Mobile", "Mobile", 20000, product_status.in_stock, product_category.electronics, '1 Year', 'Limited', 'Blue');
var p5 = new Product(5, "Samsung", "Washing Machine", 35000, product_status.in_stock, product_category.electronics, '2 Year', 'Unlimited', 'Black');
var r1_1 = new productReview_1.ProductReview(1, 'user1', 5, "Nice Product");
var r1_2 = new productReview_1.ProductReview(1, 'user2', 4, "Good Product");
var r1_3 = new productReview_1.ProductReview(1, 'user3', 5, "Awesome Product");
var r1_4 = new productReview_1.ProductReview(1, 'user4', 3, "Worst Product");
p1.addReview(r1_1);
p1.addReview(r1_2);
p1.addReview(r1_3);
p1.addReview(r1_4);
var r2_1 = new productReview_1.ProductReview(2, 'user1', 5, "Nice Product");
var r2_2 = new productReview_1.ProductReview(2, 'user2', 4, "Good Product");
var r2_3 = new productReview_1.ProductReview(2, 'user3', 5, "Awesome Product");
var r2_4 = new productReview_1.ProductReview(2, 'user4', 4, "Best Product");
p2.addReview(r2_1);
p2.addReview(r2_2);
p2.addReview(r2_3);
p2.addReview(r2_4);
// console.log(p1);
p1.getProductDetails();
p1.calculateAvgRating();
p2.getProductDetails();
p2.calculateAvgRating();
