import { Model } from "mongoose"

export default abstract class AbtractModel<I> {
    tenantId: string
    getInstance: (tenantId: string) => Model<I>
    name : string
    constructor(tenantId : string,name : string) {
        this.tenantId = tenantId
        this.name = name
    }
}