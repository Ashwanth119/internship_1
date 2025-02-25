import * as pp from "./productProperties"
// In Details, 
// we can access the details of the product by getProductDetails(id)
// we can calculate the average rating by calculateAvgRating
class Details{
    getProductDetails(id:number):void{
        for(let product of pp.productArray){
            if(product.id===id){
                console.log(product);
            }
        }
        for(let review of pp.reviewArray){
            if(review.id===id){
                console.log(review);
            }
        }
    }
    calculateAvgRating(id:number):void{
        let avg_rating=0,count=0;
        for(let review of pp.reviewArray){
            if(review.id===id){
                avg_rating+=review.rating;
                count++;
            }
        }
        console.log(avg_rating/count);
    }
}
let obj=new Details();

obj.getProductDetails(1);
obj.calculateAvgRating(1);

obj.getProductDetails(2);
obj.calculateAvgRating(2);