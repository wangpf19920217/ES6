//ES6新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。

{
  let a = 10;
  var b = 1;
}

a // ReferenceError: a is not defined.
b // 1
