import { AbstractController, AbstractModel } from "abstracts";
import { Request, Response } from "express";
import { IModel1 } from "interfaces";
import { Router1Service } from "services";

export default class Router1Controller extends AbstractController<IModel1, Router1Service> {
    constructor (model : AbstractModel<IModel1>, tenantId : string) {
        super(model, tenantId )
        this.service = new Router1Service(this.model)
    }
    async get (_ : Request,res : Response) {
        const query = {}
        const {data,total} = await this._get(query,{skip : 10, limit : 10})
        res.send({data,total})
    }
}

