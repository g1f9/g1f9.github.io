(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{268:function(t,s,a){"use strict";a.r(s);var n=a(38),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"snabbdom-解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snabbdom-解析","aria-hidden":"true"}},[t._v("#")]),t._v(" snabbdom 解析")]),t._v(" "),a("blockquote",[a("p",[t._v("分析 Snabbdom 的源码构成，理清虚拟 DOM 的编写和应用思路，相对于 Vue 等虚拟 dom 源码，Snabbdom 的目的更单一，也更加容易阅读。")])]),t._v(" "),a("h2",{attrs:{id:"virtual-dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom","aria-hidden":"true"}},[t._v("#")]),t._v(" Virtual DOM")]),t._v(" "),a("h3",{attrs:{id:"virtual-dom-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom-简介","aria-hidden":"true"}},[t._v("#")]),t._v(" Virtual DOM 简介")]),t._v(" "),a("p",[t._v("Virtual DOM 是一个能够直接描述一段 HTML DOM 结构的 JavaScript 对象，我们可以直接根据 Virtual DOM 描述的结构渲染创建出唯一确定的 HTML DOM 结构。从整体上看，Virtual DOM 的交互模式减少了 MVVM 或其他框架对 DOM 的扫描或操作次数，并且在数据发生改变后只在合适的地方根据 JavaScript 对象来进行最小化的页面 DOM 操作。Virtual DOM 在 DOM 的操作上有一定的优化，体现在 DOM 操作的优化上。如果仅仅只是 DOM 操作优化并体现不了 Virtual DOM 的价值，毕竟我们也可以通其他方式来优化 DOM 操作，并且 Diff 也需要一定的性能开销。Virtual DOM 真正的价值体现在")]),t._v(" "),a("ol",[a("li",[t._v("Virtual DOM 为函数式的 UI 编程方式打开了大门")]),t._v(" "),a("li",[t._v("Virtual DOM 可以渲染在 DOM 以外的 backend，也就是渲染到不同端，如移动端，小程序端等。")])]),t._v(" "),a("h3",{attrs:{id:"virtual-dom-节点格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom-节点格式","aria-hidden":"true"}},[t._v("#")]),t._v(" Virtual DOM 节点格式")]),t._v(" "),a("p",[t._v("虚拟 DOM 树就是一个 JavaScript 对象，它是由许多个格式相同的树节点组成，理清虚拟节点的组成格式，对于理解虚拟 DOM 树有很大的帮助")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IVNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  sel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" undefined\n  data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IVNodeData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" undefined\n  children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IVNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" undefined\n  elm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Node "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" undefined\n  text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" undefined\n  key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" undefined\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",[a("li",[t._v("sel 是一个 CSS 选择器，在创建实际 DOM 节点的时候会用到。如 div,div.cls,div#id")]),t._v(" "),a("li",[t._v("data 字段存储各种各种信息如，css 的 class，style，hook 生命周期钩子等，主要用于在创建真正的 DOM 元素的时候，提供给模块使用，用来装饰 DOM 节点")]),t._v(" "),a("li",[t._v("children 就是子节点，是一个数组")]),t._v(" "),a("li",[t._v("elm 是一个指向真正 DOM 元素的指针")]),t._v(" "),a("li",[t._v("text 是一个字符串，是一个文本节点")]),t._v(" "),a("li",[t._v("key 是用标示一个虚拟 DOM 的标识符，key 的真正用途在于告诉 Virtual DOM 数据变化时去复用 DOM 元素。比如一个数组 a1 渲染成一组 DOM 列表，我们在之后的使用 API 又请求了一批数据 a2，那么 a1!==a2,但是 a1 可能和 a2 只是一些简单的内容不一致，我们希望复用 DOM 元素，那么就可以使用 key，只要 a1.item.key === a2.item.key 那么就会复用 DOM 元素。在如何判断两个节点是否为相同的节点时，就是用 v1.sel===v2.sel&&v1.key === v2.key")])]),t._v(" "),a("h3",{attrs:{id:"生成一个虚拟节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成一个虚拟节点","aria-hidden":"true"}},[t._v("#")]),t._v(" 生成一个虚拟节点")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vnode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("sel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("IVNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("undefined"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("elm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Element"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("Text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("IVNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Element 是普通节点，Text 是文本节点")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    elm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    key\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("生成一个虚拟节点，即是把所有传入的属性包在一个对象内即可")]),t._v(" "),a("h3",{attrs:{id:"树的遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#树的遍历","aria-hidden":"true"}},[t._v("#")]),t._v(" 树的遍历")]),t._v(" "),a("p",[t._v("在虚拟 DOM 树的创建和更新，都会递归地去查找各个节点，并且决定是否更新节点，在 Snabbdom 中常用的是深度遍历的方式，大致的格式如下")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverseTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("node")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'begin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" child "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("child"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverseTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'finish'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vnode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("children")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    children\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" v1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vnode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" v2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vnode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" v3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vnode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("v2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" v4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vnode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" v5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vnode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("v4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("v3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("iterateTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("由于在创建和更新的时候也是采用了上面的遍历步骤，因此总是会先创建子节点，调用子节点的钩子，然后再创建当前节点")]),t._v(" "),a("h2",{attrs:{id:"snaddom-实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snaddom-实现","aria-hidden":"true"}},[t._v("#")]),t._v(" Snaddom 实现")]),t._v(" "),a("p",[t._v("要实现一个虚拟 DOM 的库，大概要以下几个步骤")]),t._v(" "),a("ol",[a("li",[t._v("定义虚拟节点的格式")]),t._v(" "),a("li",[t._v("实现 createElement 方法，用于将虚拟DOM 树，转换成真正的节点，其大概的实现方式也就是递归遍历虚拟 DOM 树，然后根据配置递归创建 DOM 树。")]),t._v(" "),a("li",[t._v("实现 patchNode 方法，用于对比两个虚拟 DOM 树，并对其 DOM 进行更新。然后判断子节点的差异，调用 patchChildren 去对比和更新子节点")]),t._v(" "),a("li",[t._v("实现 patchChidren 方法，用于比较虚拟 DOM 的子节点之间的差异，并对其进行更新。因为 children 是一个数组，会出现数组顺序改变，数组节点新增等情况，为了优化子节点之间的更新，需要实现一个独立的算法，用来优化子节更新。")]),t._v(" "),a("li",[t._v("最后实现 patch 方法，用来处理各种传入的参数的差异。只是一些简单的判断逻辑。")])]),t._v(" "),a("h3",{attrs:{id:"解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析","aria-hidden":"true"}},[t._v("#")]),t._v(" 解析")]),t._v(" "),a("p",[t._v("从官网上的例子开始，看看 Snabbdom 做了哪些事情")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" snabbdom "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'snabbdom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" patch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" snabbdom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'snabbdom/modules/class'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'snabbdom/modules/props'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'snabbdom/modules/style'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'snabbdom/modules/eventlisteners'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("上面的代码中，使用 snabbdom 的 init 方法，并返回了一个 patch 方法。init 的参数数组里面包含一系列模块，这些模块其实都是只是简单的 JavaScript 对象，这些模块是由 snabbdom 的生命周期的一些回调函数组成，比如在 class 模块中，其实就是一个 {create:()=>{},update:()=>{}} 这样的一个对象，在元素创建时，会调用 class 模块注册 create 方法，这个时候就可以把 class 加在 dom 上，update 的时候，就可以做移除旧的样式类，并且添加新的样式类。")]),t._v(" "),a("h4",{attrs:{id:"init-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-方法","aria-hidden":"true"}},[t._v("#")]),t._v(" init 方法")]),t._v(" "),a("p",[t._v("init 方法主要做了几件事情")]),t._v(" "),a("ol",[a("li",[t._v("收集不同模块生命周期回调函数，并把他们都保存在一个对象中，如 cbs = {create:[...],update:[…]}，在对应操作的时机就会遍历这些生命周期并进行调用")]),t._v(" "),a("li",[t._v("初始 DOM 操作 api，dom 操作 API 可以由 init 的第二参数传递进去，也可以使用默认的 html 操作 api，为了浏览器的兼容问题，我们可以自己传递一些写好 dom api，只要实现对应的接口即可")]),t._v(" "),a("li",[t._v("定义一些操作 api，其中比较重要的有 patchVnode 方法，用来对比两个虚拟节点，并进行更新，同时也会对子节点进行更新，可以理解为会对一颗子树进行比较更新。patchChildren 用来对于虚拟节点的 children 数组进行对比和更新。")]),t._v(" "),a("li",[t._v("定义 patch 方法，并返回 patch 方法。patch 方法主要用来处理传入的参数问题和调用一些生命周期。在上面的辅助方法中，都会在合适的时机去调用对应的生命周期函数")])]),t._v(" "),a("h3",{attrs:{id:"init-方法-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-方法-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Init 方法")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hooks "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'create'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'update'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'remove'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'destroy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pre'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'post'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("modules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Patial"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("domApi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOMAPI")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cbs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ModuleHooks "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lifeCircle "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" hooks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cbs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("circle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" modules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lifeCircle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        cbs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lifeCircle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lifeCircle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生命周期的回调收集，其实就是遍历所有模块，并把他们的回调存储起来,这种方式同样值得我们借鉴")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("patch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("oldNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("Element"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("IVnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("IVNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("IVNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" insertedVnodeQueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("IVNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义了一个数据，使用数组存储插入过 VNode，主要用于在 DOM 插入之后，触发 insert 钩子")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pre "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" cbs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pre"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pre")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用 pre 生命周期钩子")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所有 DOM 元素都会挂在 Vnode 的 elm 属性下，如果是一个元素的话，那么就给他一个空 Node")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      oldNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("emptyNodeAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果是相同的节点，那么使用新节点去更新旧节点")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sameNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("patchNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("insertedVnodeQueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果不是相同节点，那么重建 DOM 树")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" elm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oldNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elm\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("insertedVnodeQueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" parent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertBefore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("vnode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("elm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextSiblings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeNodes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("oldNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用 insert 生命周期钩子")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" insertedVnodeQueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hook"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用 post 生命周期钩子")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" cbs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"patchvnode-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#patchvnode-方法","aria-hidden":"true"}},[t._v("#")]),t._v(" patchVnode 方法")]),t._v(" "),a("p",[t._v("patchVnode 方法也比较简单，主要做了以下几个事情")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("调用 prepatch 生命周期钩子")])]),t._v(" "),a("li",[a("p",[t._v("调用 update 生命周期钩子")])]),t._v(" "),a("li",[a("p",[t._v("比较更新节点，主要逻辑如下")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("新的节点不是一个文本节点的话。")]),t._v(" "),a("p",[t._v("如果都定义了子节数组，那么调用 updateChildren 来更新子节点")]),t._v(" "),a("p",[t._v("​    如果只定义了 newVnode 的 children，说明为新增子节点，调用 addNodes 方法，把子节点插入，如果存在旧节点定义 text，那么旧节点是一个文本节点，需要把 text 也清除掉")]),t._v(" "),a("p",[t._v("​    如果只定义了 oldVNode.chidren 那么说明这种情况为删除节点，调用 removeNodes 把子节点删除")]),t._v(" "),a("p",[t._v("​    最后一种情况，就是 oldVNode.children,newVNode.children 都没定义，新节点又不是一个文本节点，那么即是需要删除旧的文本节点了")])]),t._v(" "),a("li",[a("p",[t._v("第二种情况就是新节点是一个文本节点了，比较并更新文本，然后如果 oldVnode 定义了 children 那么把子节点删除")])])])]),t._v(" "),a("li",[a("p",[t._v("调用 postpatch 钩子")])])]),t._v(" "),a("h3",{attrs:{id:"patchchildren"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#patchchildren","aria-hidden":"true"}},[t._v("#")]),t._v(" patchChildren")]),t._v(" "),a("p",[t._v("patchChildren 方法比较复杂，需要比较两个 vnode 数组之间的差异，并进行合适的更新，首先分别使用两个指针指向旧节点和新节点的首尾，然后使用循环来移动指针，达到去除两个数组首尾为 null 的元素。比较 首首，尾尾，首尾，尾首 元素是否相同，如果是那么使用 patchNode 对这两个元素进行更新，并对指针进行合适的移动。")]),t._v(" "),a("p",[t._v("上面的比较主要是处理元素顺序的问题，例如如果只是列表的顺序变为相反的话，那么上面的尾首比较就能识别出来，调用 patchVNode 更新节点，然后使用 insertBefore 把列表最后一个 DOM 元素插到第一个前面就可以了。如果上面比较失败的话，那么就使用 key 取判断旧节点里面是否存在着相同的 key，如果存在的话，进行更新和插入，不存在就创建插入")]),t._v(" "),a("p",[t._v("最后通过比较旧节点的首尾指针，和新节点的首尾指针来判断是进行增加节点操作还是删除节点操作")]),t._v(" "),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("以上就是 Snabbdom 的一些主要内容，整体逻辑并不难，比较有难度的地方就在 patchChildren 这一块的算法中。Snabbdom 这个库的主要功能就是比较两个 VNode 之间的差异，并对 DOM 进行合适的更新。")])])},[],!1,null,null,null);s.default=e.exports}}]);