# sokoban

推箱子小游戏

## 项目介绍

## 功能点

- [x] 1 地图编辑
  - [x] 1.1 地板编辑
    - [x] 1.1.1 添加墙体和地板
    - [x] 1.1.2 其他地板编辑功能
  - [x] 1.2 地图大小更改
    - [x] 1.2.1 增大地图大小
    - [x] 1.2.2 减小地图大小
  - [x] 1.3 地图块大小统一控制
    - [x] 1.3.1 增大地图块大小
    - [x] 1.3.2 减小地图块大小
  - [x] 1.4 添加玩家
    - [x] 1.4.1 添加玩家模型
    - [x] 1.4.2 设置玩家属性
    - [x] 1.4.3 玩家上地图
    - [x] 1.4.4 玩家准确定位
    - [x] 1.4.5 玩家放置合理判断(只有地板的情况)
  - [x] 1.5 添加箱子
    - [x] 1.5.1 添加箱子模型
    - [x] 1.5.2 设置箱子属性
    - [x] 1.5.3 玩家放置合理判断(只有地板的情况)
  - [x] 1.6 添加放置点
    - [x] 1.6.1 添加放置点模型
    - [x] 1.6.2 设置放置点属性
  - [x] 1.7 修改 setting block 大小, 全局进行更改
  - [x] 1.8 显示地图 json
    - [x] 1.8.1 显示地图数据
    - [x] 1.8.2 地图响应式更改
  - [ ] 1.9 单元测试
    - [x] 1.9.1 箱子模块
    - [x] 1.9.2 放置点模块
- [ ] 2 游戏进行

  - [x] 2.1 地图
    - [x] 2.1.1 读取地图数据
    - [x] 2.1.2 渲染地图
    - [x] 2.1.3 使用 setup 方式重构地图初始化逻辑
  - [x] 2.2 人物
    - [x] 2.2.1 回显人物
    - [x] 2.2.2 人物基本运动
    - [x] 2.2.3 人物不能运动到墙里
    - [x] 2.2.4 人物撞箱子判断
  - [ ] 2.3 箱子

    - [x] 2.3.1 回显
    - [x] 2.3.2 可推动
    - [x] 2.3.3 箱子可移动放置点

  - [x] 2.4 放置点

    - [x] 2.4.1 回显

  - [x] 2.5 游戏结束处理
  - [x] 2.6 跳转下一关

- [ ] 3 整体样式
  - [ ] 3.1 设计样式
  - [ ] 3.2 实现样式
- [ ] 需要一个撤回的功能点
  - 这是一个非常重要的功能

## 优化点

- [配合后台]
  - [ ] setting 文件配置属性后台控制
- [资源加载]
  - [x] 图片的加载 统一导入和使用
    - [x] 所有图片同一个地方导入, 其它地方统一获取
- [编辑地图]
- [游戏页面]

- [代码组织优化]
  - [x]地图块常量
- [样式优化]
  - [x] 引入统一样式处理方式
- [用户体验]
  - [x] 默认值是否可以是全地板呢?

## BUG

- [x] 地板数量更改的 默认全地板没了
- [x] setting size 设置过大,图片没有撑开

## 提出疑问?

- [1.4] 为什么 Tile 里面的属性是 1, 2, 箱子和人物的操作又是 'cargo' 这样的
- [2.1] 管理多种数据的地方,暴露接口的时候 是应该统一接口返回, 还是拆开之后单独暴露
  - 分情况讨论吗?
- [2.1] 同样的组件(Floor Wall Empth)真的需要每一个都单独封装吗
- [2] 为什么 mapEdit 的时候叫 Keeper 而游戏进行的时候 叫 Player
- [2.2] setupPlayer 比 usePlayer 这种方式的优势在哪里?
  - setup 执行初始化 和一些逻辑操作
  - usePlayer 执行一些公用的操作
- [2.3] vue3 中还存在响应式不出来的情况
- [2.2.3] 为什么需要两个 postion 文件

## 自我思考

- 在定义声明常量声明的时候, 文件所处的位置一定要考虑到项目全局
- 具有 同样(类似)操作 的逻辑 功能 应该放在一起组织, 方便管理

## 天马行空

- [ ] 加一个填充功能
- [ ] 自定义编辑模板
- [ ] 人吃药水
  - [ ] 物品栏药水
  - [ ] 地图药水
- [ ] 箱子推动的难度增加
- [ ] 地板发生变化, 导致移动的方式发生变化
- [ ] 人物移动是否可以增强(黑洞)
  - [ ] 人物自动移动(点击地板)
- [ ] 所有图片存在动画
- [ ] 添加声音特效
- [ ] 自动解答?


## 写在最后
> 革命尚未成功, 同志还需努力