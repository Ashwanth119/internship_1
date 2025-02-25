// export let warrantyArray:ProductWarranty[]=[];
export class ProductWarranty{
    // id:number;
    duration:string;
    type:'Limited'|'Unlimited';
    constructor(duration:string, type:'Limited'|'Unlimited'){
        this.duration=duration;
        this.type=type;
        /*
        let obj:ProductWarranty={
            id:id,
            duration:duration,
            type:type
        }
        warrantyArray.push(obj);
        */
    }
}