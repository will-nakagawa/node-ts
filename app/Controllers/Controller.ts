const error = 'Cannot load the required controller. Controller does not exists';

class Controller {

    res: any;
    req: any;
    next: any;
    args: any;

    constructor(args: any[]) {

        if (args != null) {
            const [{ res }, { req }, next] = args;

            this.args = args;
            this.res = res;
            this.req = req;
            this.next = next;
        }

    }

}

export {Controller};
