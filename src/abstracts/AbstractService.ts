import { Model } from "mongoose"

export default abstract class AbstractService<I> {
    model: Model<I>
    constructor(model: Model<I>) {
        this.model = model
    }
}