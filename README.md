# opinion ate vue3

测试驱动开发在 vue3 的落地项目

从 outside 到 inside

outside 是指的 e2e 测试，

它的意义在于把所有的单元测试都链接到一起，解决单元测试过于零散的问题

还有一个是 e2e 测试是比较慢的，需要少写

    那么那些边缘情况怎么办呢？ 这时候就可以放到单元测试里面去搞定

    所以 e2e 测试只需要写 happy path 即可

inside 是指的是单元测试

这里我会对它做个升级，变成 2 个点：

1. 组件级别的单元测试

1. 只针对于组件做单元测试

1. 测试什么？

1. 只测试组件的行为

1. 函数逻辑级别的单元测试

1. 针对于特定的代码逻辑，比如说工具函数等

1. 一大测试＋多小测试来逐步完成所有的任务点

   2. 对于单个组件的话，使用 cypress.js 的组件测试

   3. 对于函数逻辑的话，使用 jest 来测试
