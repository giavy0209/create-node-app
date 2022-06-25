import { AbstractModel } from "abstracts"
import { FilterQuery, Model } from "mongoose"

export default class AbtractController<I, S> {
    model: Model<I>
    service: S
    constructor(modelTenant: AbstractModel<I>, tenantId: string,) {
        this.model = modelTenant.getInstance(tenantId)
    }
    async _get(query: FilterQuery<I>, pagin: { skip: number, limit: number }) {
        const { skip, limit } = pagin
        const [data, total] = await Promise.all([
            this.model.find(query).skip(skip).limit(limit),
            this.model.countDocuments(query)
        ])
        return { data, total }
    }
}