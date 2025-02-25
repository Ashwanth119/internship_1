export let reviewArray:ProductReview[]=[];
export class ProductReview{
    id:number;
    user:string;
    rating:1|2|3|4|5;
    comment:string;
    constructor(id:number, user:string, rating:1|2|3|4|5, comment:string){
        this.id=id;
        this.user=user;
        this.rating=rating;
        this.comment=comment;
        let obj:ProductReview={
            id:id,
            user:user,
            rating:rating,
            comment:comment
        };
        reviewArray.push(obj);
    }
}
