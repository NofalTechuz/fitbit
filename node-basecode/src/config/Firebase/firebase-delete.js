const { bucket } = require('./firebase-admin');

const deleteFileFromFirebase = async (oldFilePath) => {


  const fileName = oldFilePath.split('/').pop();
  const file = bucket.file(oldFilePath);
  try {
    const [exists] = await file.exists();
    if (!exists) {
      console.log(`File: ${fileName} does not exist in folder: ${oldFilePath}`);
      return;
    }

    await file.delete();
    console.log(`Successfully deleted file: ${fileName} from folder: ${oldFilePath}`);
  } catch (error) {
    console.error(`Failed to delete file: ${fileName} from folder: ${oldFilePath}`, error);
    throw new Error('Error deleting file from Firebase Storage');
  }
};

module.exports = deleteFileFromFirebase;
