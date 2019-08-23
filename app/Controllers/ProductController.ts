import {Controller} from './Controller';

class ProductController extends Controller {

    constructor(args:any[]) {
        super(args);
    }

    public getAll(): object {
        return this.res.json({products: []});
    }

    public getById(): object {
        return this.res.json({_id: "12323qqeqwe"});
    }

}

export default ProductController;