const fs = require('fs');
const ncp = require('ncp').ncp;

const copySampleData = (
  sourcePath = 'src/sampleDataProviders',
  targetPath = 'src/dataProviders'
) => {
  const copyFolder = () =>
    ncp(sourcePath, targetPath, function(err) {
      if (err) throw err;
      console.log('Moving sample data complete');
    });

  // if it doesnt exist copy
  if (!fs.existsSync(targetPath)) {
    copyFolder();
    return;
  }

  // if folder is empty remove it and copy
  const files = fs.readdirSync(targetPath);

  if (files && !files.length) {
    fs.unlinkSync(targetPath);
    copyFolder();
  }
};

module.exports = {
  run: copySampleData
};
