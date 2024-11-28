
import * as fs from 'fs';

export default async function handler(req, res) {
    try {
        let data = await fs.readdirSync('blogdata');
        let currentFile;
        let filesArray = [];
        for (let i = 0; i < data.length; i++) {
            let item = data[i];
            currentFile = await fs.promises.readFile('blogdata/' + item, 'utf-8');
          
            filesArray.push(JSON.parse(currentFile))
        }
        res.status(200).json(filesArray);
  
    } catch (error) {
        res.status(500).json({ error: "No blogs found" });
    }
}
