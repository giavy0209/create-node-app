import { AbstractRouter } from 'abstracts'
import { Router1Controller } from 'controllers'
import { Model1 } from 'models'
import path from 'path'
const filename = path.basename(__filename)
const ext = path.extname(filename)
const param = filename.replace(ext, '')


export default class Router1 extends AbstractRouter<Router1Controller> {
    constructor() {
        super(param)
        this.controller = new Router1Controller(Model1, '')
        this.routes = [
            {
                param: '/test',
                method: 'GET',
                ref: this.controller.get
            }
        ]
    }
}
