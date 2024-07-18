const { bucket } = require('./firebase-admin');
const fs = require('fs');

const uploadFileToFirebase = (file, filePath) => {
  return new Promise((resolve, reject) => {

    const blob = bucket.file(filePath);
    const blobStream = blob.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });

    blobStream.on('error', (error) => {
      console.error(error);
      reject(new Error('Error uploading file to Firebase Storage'));
    });

    blobStream.on('finish', async () => {
      try {
        // Make the file public
        await blob.makePublic();
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
        resolve(publicUrl);
      } catch (error) {
        reject(new Error('Error making file public'));
      }
    });

    blobStream.end(fs.readFileSync(file.path));
  });
};

module.exports = uploadFileToFirebase;



// const { file } = req;
// const blob = bucket.file(file.filename);
// const blobStream = blob.createWriteStream({
//   metadata: {
//     contentType: file.mimetype,
//   },
// });

// blobStream.on('error', (error) => {
//   console.error(error);
//   return res.status(500).send({ message: 'Error uploading file to Firebase Storage', error: error.message });
// });

// blobStream.on('finish', async () => {
//   const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
  
//   // Optionally, delete the file from the local filesystem
//   fs.unlinkSync(file.path);
  
//   return res.status(200).send({ message: 'File uploaded successfully!', url: publicUrl });
// });

// blobStream.end(fs.readFileSync(file.path));