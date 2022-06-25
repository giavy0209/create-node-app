import fs from 'fs'
import path from 'path'
import {Router} from 'express'

const prefix = path.basename(__dirname)
const router = Router()
const files = fs.readdirSync(__dirname)

files.filter(file => !file.includes('index'))
.forEach(file => {
    const API  = require(path.join(__dirname , file)).default 
    const route = new API()
    route.regisRouter()
    router.use(`/${prefix}` , route.router)
})
export default router