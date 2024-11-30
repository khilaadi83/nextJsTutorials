  import { NextApiRequest, NextApiResponse } from 'next';
  import fs from 'fs';
  import path from 'path';

  export default async function handler(req, res) {
      if (req.method === 'POST') {
          // Handle the POST request
          const data = req.body;
          const { name, email, message } = data;
          console.log(data);

          // Save the data to a file
          const filePath = path.join(process.cwd(), 'data.json');
          fs.appendFileSync(filePath, JSON.stringify(data) + '\n');

          res.status(200).json({ message: 'Data received successfully', data });
      } else {
          // Handle any other HTTP method
          res.status(200).json({ msg: 'Get method detected request rejected' });
      }
  }
