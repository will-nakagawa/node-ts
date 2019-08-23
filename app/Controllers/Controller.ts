const error = 'Cannot load the required controller. Controller does not exists';

class Controller {

    res: any;
    req: any;
    next: any;
    string: string;
    path: string;
    method: string;

    constructor(args: any[], string: string) {

        if(args != null) {
            const [{res},{req},{next}] = args;

            this.res = res;
            this.req = req;
            this.next = next;
        }

        if(string == null || string === '') {
            return this.res.status(500).json({error: error + string});
        }

        this.string = string;
           
    }

    /*setConfig(string) {
        const [path, method] = string.split('@', 2);
        this.path = path;
        this.method = method;
    }

    load() {
        try {
            const RequiredFileController = require('./' + this.path);

            RequiredFileController.prototype.req = this.req;
            RequiredFileController.prototype.res = this.res;
            RequiredFileController.prototype.next = this.next;

            const newRequiredController = (new RequiredFileController());

            return newRequiredController[this.method]();
        } catch(err) {
            console.error(err.message);
            return this.res.status(500).json({error: err.message});
        }
    }*/
}

export default Controller;
