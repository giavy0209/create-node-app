import { Router, Request, Response } from "express";

export default abstract class AbstractRouter<C> {
    router: Router = Router()
    routes: {
        param: string,
        method: string,
        ref: (req: Request, res: Response) => void
    }[] = []
    prefix: string
    controller: C
    constructor(prefix: string) {
        this.prefix = prefix
    }
    regisRouter: () => void = () => {
        this.routes.forEach(route => {
            this.router.use(`/${this.prefix}`, route.ref)
        })
    }
}

