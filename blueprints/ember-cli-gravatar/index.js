module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function(options) {
    this.addBowerPackageToProject('JavaScript-MD5');
  }
};