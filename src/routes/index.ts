import fs from 'fs'
import path from 'path'
import {Router} from 'express'

const router = Router()
const files = fs.readdirSync(__dirname)


files.filter(file => !file.includes('index'))
.forEach(file => router.use('/' , require(path.join(__dirname , file)).default))
router.get('/', (_,res) =>{
    res.send('ok')
})
export default router