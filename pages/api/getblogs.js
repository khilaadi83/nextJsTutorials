import * as fs from 'fs'

export default function handler(req, res){
    var reqparam = req.query.slug;
    console.log('parameter is ', reqparam)
    fs.readFile(`blogdata/${reqparam}`, 'utf-8', (err, data) => {
        if (err) {
            res.status(500).json({ error: "No such file or directory" })
            return
        }
        res.status(200).json(JSON.parse(data))
        console.log(reqparam)
    })
}