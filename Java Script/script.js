//(function(x){ delete x; return x; })(1);
//var foo = { bar: function() { return this.baz; }, baz: 1 }; (function(){ return typeof arguments[0](); })(foo.bar);
var foo = { bar: function(){ return this.baz; }, baz: 1 } typeOf (f = foo.bar)();