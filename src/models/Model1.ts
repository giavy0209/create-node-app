import { AbstractModel } from "abstracts";
import { IModel1 } from "interfaces";
import { model, Model, models, Schema } from "mongoose";

class Model1 extends AbstractModel<IModel1> {
    constructor(tenantId?: string) {
        super(tenantId || '', 'model1s')
    }
    getInstance: (tenantId: string) => Model<IModel1, {}, {}, {}, any> = () => {
        const schema = new Schema<IModel1>({
            name: String
        })
        let modelObject: Model<IModel1> = models[this.tenantId + this.name]
        if (!modelObject) {
            modelObject = model<IModel1>(this.tenantId + this.name, schema)
        }
        return modelObject
    }
}

export default new Model1()