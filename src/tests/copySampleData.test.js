jest.mock('fs');

const copySampleData = require('../utils/copySampleData').run;

describe('Move sample data to folder', () => {
  const MOCK_FILE_INFO = {
    '/path/from/file1.js': 'console.log("file1 contents");',
    '/path/from/file2.js': 'console.log("file2 contents");'
  };

  beforeEach(() => {
    // Set up some mocked out file info before each test
    require('ncp').__setMockFiles(MOCK_FILE_INFO);
  });

  test('includes all files in the directory', () => {
    copySampleData('/path/from', '/path/to');
    const allFiles = require('ncp').__getMockFiles();
    expect(allFiles['/path/to']).toBeDefined();
    expect(allFiles['/path/to']).toEqual(['file1.js', 'file2.js']);
  });
});

describe('Do not move sample data to folder', () => {
  const MOCK_FILE_INFO = {
    '/path/from/file1.js': 'console.log("file1 contents");',
    '/path/from/file2.js': 'console.log("file2 contents");',
    '/path/to/file3.js': 'console.log("file3 contents");'
  };

  beforeEach(() => {
    // Set up some mocked out file info before each test
    require('fs').__setMockFiles(MOCK_FILE_INFO);
  });

  test('includes the same files as before', () => {
    copySampleData('/path/from', '/path/to');
    const allFiles = require('fs').__getMockFiles();
    expect(allFiles['/path/to']).toEqual(['file3.js']);
  });
});
