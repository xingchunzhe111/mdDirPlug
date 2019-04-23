
### Go-Common


#### Version 7.17
1. 添加 WithContext 方法, Conn 待实现
2. 使用 traceConn 实现 trace 埋点
3. GetMulti 检查 key 列表不为空, 空列表直接返回空 map
4. legalKey 检查 key 不为空
###### Version 7.19
1. 更新vendor下github.com/xanzy/go-gitlab包

###### Version 7.18
1. 删除无用的git文件
#### Version 7.16.8
1. 修改saga check无需在master分支跑

### Version 7.16.7
1. pipeline编译暂时去掉merge master

#### Version 7.16.5
1. pipeline增加bazel局部编译job

##### Version 7.16.4
1. pipeline增加unitest的执行stage

# Version 7.16.7
1. pipeline编译暂时去掉merge master

## Version55555555
1. pipeline编译暂时去掉merge master

### Version 7.16.3
1. gometalinter暂时不检查pb

######   Version 7.16.3
1. 修正gometalinter的bug
2.合并make update到COMPILE里

###### Version 7.16.2
1. 增加saga-admin的功能

### Version 7.16.1
1. 将编译次数改为一次
2. 增加gometalinter

### Version 7.15.2
1. 树状结构展示个业务方权限责任人

### Version 7.15.1
1. 去掉发邮件的stage
2. 调整makeupdate为独立的stage

### Version 7.14.3
1. 由于历史代码太多无法通过lint，所以暂时允许lint失败
2. 增加将lint不通过的文件列表打印出来

### Version 7.14.2
1. Runner触发以后，先Merge Master，然后触发Compile


### Version 6.6.4

> 1.fix mc expire max ttl

### Version 6.6.3

> 1. 将配置中心启动参数设置成和disconf的一样

### Version 6.6.2

> 1. 优化了net/http Client的buffer过小导致的syscall过多



#### Version 5.2.2

> 1.Zone结构体加json tag  

#### Version 5.2.0

> 1.更改http包名和路径  
> 2.增加http单元测试  
> 3.statd去掉hostname  
> 4.ip结构体增加isp字段  

#### Version 5.1.2

> 1.xip改为支持对象访问，去掉全局对象和函数  

#### Version 5.1.1

> 1.修复上报trace的位置  

#### Version 5.1.0

> 1.支持熔断  
> 2.rpc server判断zk是否注册  
> 3.修复Infoc连接重连  
> 4.xhttp xrpc xweb改为httpx rpcx webx  
> 5.修复trace level的bug  

#### Version 5.0.0

> 0.注意一定要使用Go1.7及以上版本  
> 1.用golang/rpcx替换官方库  
> 2.使用go1.7的context包  
> 3.增加traceon业务监控上报  
> 4.xhttp中ip方法挪到xip包  
> 5.rpc服务暴露close接口  
> 6.修复ugc配置中心等待30s的bug  
> 7.修复rpc client因权重变更导致panic的bug  
> 8.使用context.WithTimeout替代timer  

#### Version 4.4.1

> 1.日志新增按文件大小rotate  

#### Version 4.4.0

> 1.infoc支持udp和tcp方式  
> 2.去掉stdout、stderr输出到syslog的逻辑  

#### Version 4.3.2

> 1.fix rpc timeout连接泄露的bug  
> 2.rpc单连接改为多连接  

#### Version 4.3.1

> 1.支持从环境变量获取配置  
> 2.syslog支持打印标准输出和错误  

