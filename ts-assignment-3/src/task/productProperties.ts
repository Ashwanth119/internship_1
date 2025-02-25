import { ProductWarranty } from "./productWarranty";
import { ProductReview } from "./productReview";

export enum product_status{
    in_stock='In Stock',
    out_of_stock='Out of Stock'
}

export enum product_category{
    electronics='Electronics',
    clothing='Clothing',
    books='Books'
}

export interface optional{
    color?:'Red'|'Green'|'Blue'|'White'|'Black';
    size?:'XS'|'S'|'M'|'L'|'XL';
}

export let productArray:any=[];
export let reviewArray:ProductReview[]=[];

export class Product extends ProductWarranty implements optional{
    id:number;
    name:string;
    description:string;
    price:number;
    status:product_status;
    category:product_category;
    color?:'Red'|'Green'|'Blue'|'White'|'Black';
    size?:'XS'|'S'|'M'|'L'|'XL';
    constructor(id:number, name:string, description:string, price:number, status:product_status, category:product_category, duration:string, type:'Limited'|'Unlimited', color?:'Red'|'Green'|'Blue'|'White'|'Black', size?:'XS'|'S'|'M'|'L'|'XL'){
        super(duration,type);
        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
        this.status=status;
        this.category=category;
        let obj={
            id:id,
            name:name,
            description:description,
            price:price,
            status:status,
            category:category,
            duration:duration,
            type:type
        }
        if(color!==undefined){
            this.color=color;
            obj['color']=color;
        }
        if(size!==undefined){
            this.size=size;
            obj['size']=size;
        }
        productArray.push(obj);
    }
    addReview(review:ProductReview):void{
        reviewArray.push(review);
    }
    getProductDetails():void{
        let id=this.id;
        for(let product of productArray){
            if(product.id===id){
                console.log(product);
            }
        }
        for(let review of reviewArray){
            if(review.id===id){
                console.log(review);
            }
        }
    }
    calculateAvgRating():void{
        let id=this.id;
        let avg_rating=0,count=0;
        for(let review of reviewArray){
            if(review.id===id){
                avg_rating+=review.rating;
                count++;
            }
        }
        console.log(avg_rating/count);
    }

}
let p1=new Product(1,"Roadster shirt","Shirt",1000,product_status.in_stock,product_category.clothing,'1 Year','Limited','Red',"M");
let p2=new Product(2,"HP laptop","Laptop",100000,product_status.in_stock,product_category.electronics,'1 Year','Limited',"White");
let p3=new Product(3,"Wings of fire","Book",1500,product_status.in_stock,product_category.books,'10 days','Limited');
let p4=new Product(4,"Realme Mobile","Mobile",20000,product_status.in_stock,product_category.electronics,'1 Year','Limited','Blue');
let p5=new Product(5,"Samsung","Washing Machine",35000,product_status.in_stock,product_category.electronics,'2 Year','Unlimited','Black');

let r1_1=new ProductReview(1,'user1',5,"Nice Product");
let r1_2=new ProductReview(1,'user2',4,"Good Product");
let r1_3=new ProductReview(1,'user3',5,"Awesome Product");
let r1_4=new ProductReview(1,'user4',3,"Worst Product");
p1.addReview(r1_1);
p1.addReview(r1_2);
p1.addReview(r1_3);
p1.addReview(r1_4);

let r2_1=new ProductReview(2,'user1',5,"Nice Product");
let r2_2=new ProductReview(2,'user2',4,"Good Product");
let r2_3=new ProductReview(2,'user3',5,"Awesome Product");
let r2_4=new ProductReview(2,'user4',4,"Best Product");
p2.addReview(r2_1);
p2.addReview(r2_2);
p2.addReview(r2_3);
p2.addReview(r2_4);

// console.log(p1);
p1.getProductDetails();
p1.calculateAvgRating()
p2.getProductDetails();
p2.calculateAvgRating();