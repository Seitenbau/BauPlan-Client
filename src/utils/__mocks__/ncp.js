const path = require('path');

const ncp = jest.genMockFromModule('ncp');

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

function copy(from, to) {
  if (!mockFiles[from]) {
    return false;
  }
  mockFiles[to] = mockFiles[from];
  return true;
}

ncp.__setMockFiles = __setMockFiles;
ncp.__getMockFiles = __getMockFiles;
ncp.ncp = copy;

module.exports = ncp;
