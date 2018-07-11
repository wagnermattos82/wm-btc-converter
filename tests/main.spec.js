const expect = require('chai').expect;
const exec = require('child_process').exec;

const wmBtcConverter = './src/main.js';
const pkg = require('../package.json');


describe('Main CLI', () => {
  it('should return version of wm-btc-converter', (done) => {
    exec(`${wmBtcConverter} --version`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
      done();
    });
  });

  it('should return the description when wm-btc-coverter --help', (done) => {
    exec(`${wmBtcConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.includes('Convert Bitcoin to any currency defined.')).to.be.true;
      done();
    });
  });

  it('should return the currency option when wm-btc-coverter --help', (done) => {
    exec(`${wmBtcConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.includes('--currency')).to.be.true;
      done();
    });
  });

  it('should return the amount option when wm-btc-coverter --help', (done) => {
    exec(`${wmBtcConverter} --help`, (err, stdout, stderr) => {
      if (err) throw err;
      expect(stdout.includes('--amount')).to.be.true;
      done();
    });
  });
});
