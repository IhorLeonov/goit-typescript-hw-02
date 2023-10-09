/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

enum Toggle {
  "enable",
  "disable",
}

let union: string | number;
let literal: Toggle.disable;

// literal = Toggle.disable;
