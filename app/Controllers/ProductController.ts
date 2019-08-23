import Controller from './Controller';

class ProductController extends Controller {

    constructor(args: any, string: string) {
        super(args, string);
    }

    public getAll(): any {
        return this.res.json({products: []});
    }

}

export default ProductController; 