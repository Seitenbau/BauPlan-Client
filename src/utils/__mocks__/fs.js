const path = require('path');

const fs = jest.genMockFromModule('fs');

// This is a custom function that our tests can use during setup to specify
// what the files on the "mock" filesystem should look like when any of the
// `fs` APIs are used.
let mockFiles = Object.create(null);
function __setMockFiles(newMockFiles) {
  mockFiles = Object.create(null);
  for (const file in newMockFiles) {
    const dir = path.dirname(file);

    if (!mockFiles[dir]) {
      mockFiles[dir] = [];
    }
    mockFiles[dir].push(path.basename(file));
  }
}

function __getMockFiles() {
  return mockFiles;
}

// A custom version of `readdirSync` that reads from the special mocked out
// file list set via __setMockFiles
function readdirSync(directoryPath) {
  return mockFiles[directoryPath] || [];
}

function existsSync(fpath) {
  const dir = path.dirname(fpath);
  return mockFiles[fpath] !== undefined || mockFiles[dir] !== undefined;
}

function rename(from, to) {
  if (!mockFiles[from]) {
    return false;
  }
  mockFiles[to] = mockFiles[from];
  delete mockFiles[from];
  return true;
}

fs.__setMockFiles = __setMockFiles;
fs.__getMockFiles = __getMockFiles;
fs.readdirSync = readdirSync;
fs.existsSync = existsSync;
fs.rename = rename;

module.exports = fs;
