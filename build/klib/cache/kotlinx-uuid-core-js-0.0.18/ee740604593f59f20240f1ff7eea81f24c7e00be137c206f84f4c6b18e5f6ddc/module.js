(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kotlinx-uuid-kotlinx-uuid-core'] = factory(typeof this['kotlinx-uuid-kotlinx-uuid-core'] === 'undefined' ? {} : this['kotlinx-uuid-kotlinx-uuid-core']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));
