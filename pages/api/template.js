const fs = require('fs');
    
export default async function handler(req, res) {
    fs.writeFile(
      './template.json', 
      JSON.stringify(req.body, null, 2), 
      {encoding:'utf8',flag:'w'},
      (err) => {
        if (err) {
          console.log('write to json error', err)
        } else {
          console.log('File written succesfully!')
        }
      }
    );
    return res.status(200).json(req.body);
 
}
