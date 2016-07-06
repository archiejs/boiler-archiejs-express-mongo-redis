'use strict';

let Dummy = function( options, imports ) {
}

Dummy.prototype.whoAmI = function() {
    return 'dummy';
}

module.exports = Dummy;
