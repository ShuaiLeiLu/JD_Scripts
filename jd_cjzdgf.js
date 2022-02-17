/*
活动地址为：https://cjhydz-isv.isvjcloud.com/wxTeam/activity?activityId=xxxxx
一共有2个变量
jd_cjhy_activityId  活动ID 必需
jd_cjhy_activityUrl 活动地址 必需

cron:10 10 10 10 *
============Quantumultx===============
[task_local]
#CJ组队瓜分京豆
10 10 10 10 * jd_cjzdgf.js, tag=CJ组队瓜分京豆, enabled=true

*/

let jd_cjhy_activityId="2584bc5fb137415c87cedbb2e56bda3c" // 活动ID
let jd_cjhy_activityUrl="https://cjhydz-isv.isvjcloud.com" // 活动地址

var _0xodu='jsjiami.com.v6',_0xodu_=['_0xodu'],_0x296f=[_0xodu,'\x43\x4a\u7ec4\u961f\u74dc\u5206\u4eac\u8c46','\x69\x73\x4e\x6f\x64\x65','\x2e\x2f\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x2e\x2f\x6a\x64\x43\x6f\x6f\x6b\x69\x65\x2e\x6a\x73','\x67\x65\x74\x64\x61\x74\x61','\x6a\x64\x5f\x6b\x72\x5f\x63\x6a\x68\x79\x5f\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64','\x6a\x64\x5f\x6b\x72\x5f\x63\x6a\x68\x79\x5f\x61\x63\x74\x69\x76\x69\x74\x79\x55\x72\x6c','\x65\x6e\x76','\x6a\x64\x5f\x63\x6a\x68\x79\x5f\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64','\x6a\x64\x5f\x63\x6a\x68\x79\x5f\x61\x63\x74\x69\x76\x69\x74\x79\x55\x72\x6c','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x69\x6e\x64\x65\x78\x4f\x66','\x47\x49\x54\x48\x55\x42','\x65\x78\x69\x74','\x6b\x65\x79\x73','\x66\x6f\x72\x45\x61\x63\x68','\x70\x75\x73\x68','\x4a\x44\x5f\x44\x45\x42\x55\x47','\x66\x61\x6c\x73\x65','\x6c\x6f\x67','\x43\x6f\x6f\x6b\x69\x65\x4a\x44','\x43\x6f\x6f\x6b\x69\x65\x4a\x44\x32','\x74\x6f\x4f\x62\x6a','\x43\x6f\x6f\x6b\x69\x65\x73\x4a\x44','\x6d\x61\x70','\x63\x6f\x6f\x6b\x69\x65','\x66\x69\x6c\x74\x65\x72','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x63\x6c\x69\x65\x6e\x74\x2e\x61\x63\x74\x69\x6f\x6e','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x64\x6f\x6e\x65','\x0a\u3010\u5982\u679c\u663e\u793a\uff1a\u5956\u54c1\u4e0e\u60a8\u64e6\u80a9\u800c\u8fc7\u4e86\u54df\uff0c\u606d\u559c\u4f60\x20\u6b64\u811a\u672c\u4e0d\u7528\u8dd1\u4e86\uff01\x20\u3011\x0a\u3010\u5982\u679c\u663e\u793a\uff1a\x52\x65\x73\x70\x6f\x6e\x73\x65\x20\x63\x6f\x64\x65\x20\x34\x39\x33\x20\uff0c\u606d\u559c\u4f60\x20\u6b64\u5bb9\u5668\x20\x49\x50\x20\u9ed1\u4e86\uff01\x20\u3011\x0a','\x6d\x73\x67','\x6e\x61\x6d\x65','\u6d3b\u52a8\x69\x64\u4e0d\u5b58\u5728','\u3010\u63d0\u793a\u3011\u8bf7\u5148\u83b7\u53d6\u4eac\u4e1c\u8d26\u53f7\u4e00\x63\x6f\x6f\x6b\x69\x65\x0a\u76f4\u63a5\u4f7f\u7528\x4e\x6f\x62\x79\x44\x61\u7684\u4eac\u4e1c\u7b7e\u5230\u83b7\u53d6','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f','\x6d\x65\x6d\x62\x65\x72\x43\x6f\x75\x6e\x74','\u6d3b\u52a8\x69\x64\x3a\x0a','\x74\x6f\x61\x63\x74\x69\x76\x69\x74\x79','\x6c\x65\x6e\x67\x74\x68','\x55\x73\x65\x72\x4e\x61\x6d\x65','\x6d\x61\x74\x63\x68','\x69\x6e\x64\x65\x78','\x69\x73\x4c\x6f\x67\x69\x6e','\x6e\x69\x63\x6b\x4e\x61\x6d\x65','\x0a\x2a\x2a\x2a\x2a\x2a\x2a\u5f00\u59cb\u3010\u4eac\u4e1c\u8d26\u53f7','\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x0a','\u3010\u63d0\u793a\u3011\x63\x6f\x6f\x6b\x69\x65\u5df2\u5931\u6548','\u4eac\u4e1c\u8d26\u53f7','\x0a\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\x0a\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x63\x6f\x6f\x6b\x69\x65\u5df2\u5931\u6548\x20\x2d\x20','\x0a\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\x63\x6f\x6f\x6b\x69\x65','\x6d\x61\x78\x54\x65\x61\x6d','\u961f\u4f0d\u4eba\u6570\x20','\x63\x61\x74\x63\x68','\x2c\x20\u5931\u8d25\x21\x20\u539f\u56e0\x3a\x20','\x66\x69\x6e\x61\x6c\x6c\x79','\x73\x69\x64','\x75\x73\x65\x72\x49\x64','\x36\x39\x31\x33\x39\x39','\x54\x6f\x6b\x65\x6e','\x50\x69\x6e','\x68\x69\x73\x50\x69\x6e','\x63\x61\x72\x64','\x73\x61\x76\x65\x54\x65\x61\x6d','\u83b7\u53d6\x5b\x74\x6f\x6b\x65\x6e\x5d\u5931\u8d25\uff01','\x41\x55\x54\x48\x5f\x43\x5f\x55\x53\x45\x52','\x46\x34\x65\x56\x2b\x46\x74\x63\x45\x64\x54\x4e\x4f\x43\x4c\x77\x6d\x52\x67\x4f\x45\x74\x41\x31\x44\x72\x71\x33\x7a\x61\x34\x6c\x68\x36\x4c\x46\x4c\x66\x6c\x65\x64\x46\x31\x63\x64\x53\x69\x71\x4d\x62\x43\x78\x35\x65\x64\x45\x45\x61\x4c\x33\x52\x6e\x43\x53\x6b\x64\x4b\x33\x72\x4c\x42\x51\x70\x45\x51\x48\x39\x56\x34\x74\x64\x72\x72\x68\x30\x77\x3d\x3d','\x77\x61\x69\x74','\x70\x69\x6e\x3a','\u961f\u4f0d\u5df2\u6ee1\u5458','\u3010\u4eac\u4e1c\u8d26\u53f7','\u3011\x20\u672a\u80fd\u83b7\u53d6\u6d3b\u52a8\u4fe1\u606f','\u3011\x20\u672a\u80fd\u83b7\u53d6\u6d3b\u52a8\u4fe1\u606f\x0a','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x6a\x68\x79\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d\x2f\x77\x78\x43\x6f\x6d\x6d\x6f\x6e\x49\x6e\x66\x6f\x2f\x67\x65\x74\x53\x79\x73\x74\x65\x6d\x43\x6f\x6e\x66\x69\x67','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x6a\x68\x79\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d\x2f\x77\x78\x54\x65\x61\x6d\x2f\x61\x63\x74\x69\x76\x69\x74\x79\x3f\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3d','\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64','\x26\x73\x68\x61\x72\x65\x55\x75\x69\x64\x3d','\x73\x68\x61\x72\x65\x55\x75\x69\x64','\x67\x65\x74','\x74\x6f\x53\x74\x72','\x20\x63\x6f\x6f\x6b\x69\x65\x20\x41\x50\x49\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u8def\u91cd\u8bd5','\x68\x65\x61\x64\x65\x72\x73','\x73\x65\x74\x2d\x63\x6f\x6f\x6b\x69\x65','\x53\x65\x74\x2d\x43\x6f\x6f\x6b\x69\x65','\x6f\x62\x6a\x65\x63\x74','\x73\x70\x6c\x69\x74','\x74\x72\x69\x6d','\x4c\x5a\x5f\x54\x4f\x4b\x45\x4e\x5f\x4b\x45\x59\x3d','\x72\x65\x70\x6c\x61\x63\x65','\x4c\x5a\x5f\x54\x4f\x4b\x45\x4e\x5f\x56\x41\x4c\x55\x45\x3d','\x6c\x6f\x67\x45\x72\x72','\x6a\x64\x61\x70\x70\x3b\x69\x50\x68\x6f\x6e\x65\x3b\x31\x30\x2e\x33\x2e\x30\x3b\x3b\x3b\x4d\x2f\x35\x2e\x30\x3b\x61\x70\x70\x42\x75\x69\x6c\x64\x2f\x31\x36\x37\x39\x30\x33\x3b\x6a\x64\x53\x75\x70\x70\x6f\x72\x74\x44\x61\x72\x6b\x4d\x6f\x64\x65\x2f\x30\x3b\x65\x66\x2f\x31\x3b\x65\x70\x2f\x25\x37\x42\x25\x32\x32\x63\x69\x70\x68\x65\x72\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x35\x25\x32\x43\x25\x32\x32\x63\x69\x70\x68\x65\x72\x25\x32\x32\x25\x33\x41\x25\x37\x42\x25\x32\x32\x75\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x5a\x57\x59\x35\x59\x74\x54\x76\x59\x77\x56\x73\x43\x7a\x59\x34\x44\x57\x59\x6e\x59\x32\x56\x74\x44\x4e\x55\x30\x5a\x74\x56\x77\x43\x4e\x55\x32\x45\x51\x54\x74\x5a\x74\x59\x31\x44\x74\x54\x75\x44\x74\x75\x34\x44\x6d\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x73\x76\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x4a\x47\x6b\x45\x4b\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x69\x61\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x37\x44\x25\x32\x43\x25\x32\x32\x74\x73\x25\x32\x32\x25\x33\x41\x31\x36\x34\x35\x30\x36\x38\x35\x34\x39\x25\x32\x43\x25\x32\x32\x68\x64\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x4a\x4d\x39\x46\x31\x79\x77\x55\x50\x77\x66\x6c\x76\x4d\x49\x70\x59\x50\x6f\x6b\x30\x74\x74\x35\x6b\x39\x6b\x57\x34\x41\x72\x4a\x45\x55\x33\x6c\x66\x4c\x68\x78\x42\x71\x77\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x76\x65\x72\x73\x69\x6f\x6e\x25\x32\x32\x25\x33\x41\x25\x32\x32\x31\x2e\x30\x2e\x33\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x6e\x61\x6d\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x63\x6f\x6d\x2e\x33\x36\x30\x62\x75\x79\x2e\x6a\x64\x6d\x6f\x62\x69\x6c\x65\x25\x32\x32\x25\x32\x43\x25\x32\x32\x72\x69\x64\x78\x25\x32\x32\x25\x33\x41\x2d\x31\x25\x37\x44\x3b\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x69\x50\x68\x6f\x6e\x65\x20\x4f\x53\x20\x31\x34\x5f\x38\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x35\x45\x31\x34\x38\x3b\x73\x75\x70\x70\x6f\x72\x74\x4a\x44\x53\x48\x57\x4b\x2f\x31\x3b','\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3d','\x70\x6f\x73\x74','\x2f\x63\x75\x73\x74\x6f\x6d\x65\x72\x2f\x67\x65\x74\x53\x69\x6d\x70\x6c\x65\x41\x63\x74\x49\x6e\x66\x6f\x56\x6f','\x20\x67\x65\x74\x53\x69\x6d\x70\x6c\x65\x41\x63\x74\x49\x6e\x66\x6f\x56\x6f\x20\x41\x50\x49\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u8def\u91cd\u8bd5','\x73\x74\x61\x74\x75\x73','\x61\x62\x63\x64\x65\x66\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39','\x63\x68\x61\x72\x41\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x2f\x77\x78\x54\x65\x61\x6d\x2f\x61\x63\x74\x69\x76\x69\x74\x79\x3f\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3d','\x61\x64\x69\x64\x3d\x37\x42\x34\x31\x31\x43\x44\x39\x2d\x44\x36\x32\x43\x2d\x34\x32\x35\x42\x2d\x42\x30\x38\x33\x2d\x39\x41\x46\x43\x34\x39\x42\x39\x34\x32\x32\x38\x26\x61\x72\x65\x61\x3d\x31\x36\x5f\x31\x33\x33\x32\x5f\x34\x32\x39\x33\x32\x5f\x34\x33\x31\x30\x32\x26\x62\x6f\x64\x79\x3d\x25\x37\x42\x25\x32\x32\x75\x72\x6c\x25\x32\x32\x25\x33\x41\x25\x32\x32\x68\x74\x74\x70\x73\x25\x33\x41\x25\x35\x43\x2f\x25\x35\x43\x2f\x63\x6a\x68\x79\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d\x25\x32\x32\x25\x32\x43\x25\x32\x32\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x37\x44\x26\x62\x75\x69\x6c\x64\x3d\x31\x36\x37\x35\x34\x31\x26\x63\x6c\x69\x65\x6e\x74\x3d\x61\x70\x70\x6c\x65\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x39\x2e\x34\x2e\x30\x26\x64\x5f\x62\x72\x61\x6e\x64\x3d\x61\x70\x70\x6c\x65\x26\x64\x5f\x6d\x6f\x64\x65\x6c\x3d\x69\x50\x68\x6f\x6e\x65\x38\x25\x32\x43\x31\x26\x65\x69\x64\x3d\x65\x69\x64\x49\x64\x31\x30\x62\x38\x31\x32\x31\x39\x31\x73\x65\x42\x43\x46\x47\x6d\x74\x62\x65\x54\x58\x32\x76\x58\x46\x33\x6c\x62\x67\x44\x41\x56\x77\x51\x68\x53\x41\x38\x77\x4b\x71\x6a\x36\x4f\x41\x39\x4a\x34\x66\x6f\x50\x51\x6d\x33\x55\x7a\x52\x77\x72\x72\x4c\x64\x4f\x32\x33\x42\x33\x45\x32\x77\x43\x55\x59\x2f\x62\x4f\x44\x48\x30\x31\x56\x6e\x78\x69\x45\x6e\x41\x55\x76\x6f\x4d\x36\x53\x69\x45\x6e\x6d\x50\x33\x49\x50\x71\x52\x75\x4f\x25\x32\x42\x79\x2f\x25\x32\x42\x5a\x6f\x26\x69\x73\x42\x61\x63\x6b\x67\x72\x6f\x75\x6e\x64\x3d\x4e\x26\x6a\x6f\x79\x63\x69\x6f\x75\x73\x3d\x34\x38\x26\x6c\x61\x6e\x67\x3d\x7a\x68\x5f\x43\x4e\x26\x6e\x65\x74\x77\x6f\x72\x6b\x54\x79\x70\x65\x3d\x77\x69\x66\x69\x26\x6e\x65\x74\x77\x6f\x72\x6b\x6c\x69\x62\x74\x79\x70\x65\x3d\x4a\x44\x4e\x65\x74\x77\x6f\x72\x6b\x42\x61\x73\x65\x41\x46\x26\x6f\x70\x65\x6e\x75\x64\x69\x64\x3d\x32\x66\x37\x35\x37\x38\x63\x62\x36\x33\x34\x30\x36\x35\x66\x39\x62\x65\x61\x65\x39\x34\x64\x30\x31\x33\x66\x31\x37\x32\x65\x31\x39\x37\x64\x36\x32\x32\x38\x33\x26\x6f\x73\x56\x65\x72\x73\x69\x6f\x6e\x3d\x31\x33\x2e\x31\x2e\x32\x26\x70\x61\x72\x74\x6e\x65\x72\x3d\x61\x70\x70\x6c\x65\x26\x72\x66\x73\x3d\x30\x30\x30\x30\x26\x73\x63\x6f\x70\x65\x3d\x31\x31\x26\x73\x63\x72\x65\x65\x6e\x3d\x37\x35\x30\x25\x32\x41\x31\x33\x33\x34\x26\x73\x69\x67\x6e\x3d\x36\x30\x62\x64\x65\x35\x31\x62\x34\x62\x37\x66\x37\x66\x66\x36\x65\x31\x62\x63\x31\x66\x34\x37\x33\x65\x63\x66\x33\x64\x34\x31\x26\x73\x74\x3d\x31\x36\x31\x33\x37\x32\x30\x32\x30\x33\x39\x30\x33\x26\x73\x76\x3d\x31\x31\x30\x26\x75\x74\x73\x3d\x30\x66\x33\x31\x54\x56\x52\x6a\x42\x53\x74\x47\x39\x4e\x6f\x5a\x4a\x64\x58\x4c\x47\x64\x39\x33\x39\x57\x76\x34\x41\x6c\x73\x57\x4e\x41\x65\x4c\x31\x6e\x78\x61\x66\x55\x73\x5a\x71\x69\x56\x34\x4e\x4c\x73\x56\x45\x6c\x7a\x36\x41\x6a\x43\x34\x4c\x37\x74\x73\x6e\x5a\x31\x6c\x6f\x65\x54\x32\x41\x38\x5a\x35\x2f\x4b\x66\x49\x2f\x59\x6f\x4a\x41\x55\x66\x4a\x7a\x54\x64\x38\x6b\x43\x65\x64\x66\x6e\x4c\x47\x35\x32\x32\x79\x64\x49\x30\x70\x34\x30\x6f\x69\x38\x68\x54\x32\x70\x32\x73\x4e\x5a\x69\x49\x49\x52\x59\x43\x66\x6a\x49\x72\x37\x49\x41\x4c\x25\x32\x42\x46\x6b\x4c\x73\x72\x57\x64\x53\x69\x50\x5a\x50\x35\x51\x4c\x70\x74\x63\x38\x43\x79\x34\x4f\x64\x36\x2f\x63\x64\x59\x69\x64\x43\x6c\x52\x30\x4e\x77\x50\x4d\x64\x35\x38\x4b\x35\x4a\x39\x6e\x61\x72\x7a\x37\x38\x79\x39\x6f\x63\x47\x65\x38\x75\x54\x66\x79\x42\x49\x6f\x41\x39\x61\x43\x64\x2f\x58\x33\x4d\x75\x78\x77\x25\x33\x44\x25\x33\x44\x26\x75\x75\x69\x64\x3d\x68\x6a\x75\x64\x77\x67\x6f\x68\x78\x7a\x56\x75\x39\x36\x6b\x72\x76\x2f\x54\x36\x48\x67\x25\x33\x44\x25\x33\x44\x26\x77\x69\x66\x69\x42\x73\x73\x69\x64\x3d\x39\x63\x66\x39\x30\x63\x35\x38\x36\x63\x34\x34\x36\x38\x65\x30\x30\x36\x37\x38\x35\x34\x35\x62\x31\x36\x31\x37\x36\x65\x64\x32','\x3f\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x69\x73\x76\x4f\x62\x66\x75\x73\x63\x61\x74\x6f\x72','\x20\x32\x20\x41\x50\x49\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u8def\u91cd\u8bd5','\x70\x61\x72\x73\x65','\x63\x6f\x64\x65','\x74\x6f\x6b\x65\x6e','\u5f02\u5e38\x32\uff1a','\x75\x73\x65\x72\x49\x64\x3d','\x26\x74\x6f\x6b\x65\x6e\x3d','\x26\x66\x72\x6f\x6d\x54\x79\x70\x65\x3d\x41\x50\x50\x26\x72\x69\x73\x6b\x54\x79\x70\x65\x3d\x31','\x2f\x63\x75\x73\x74\x6f\x6d\x65\x72\x2f\x67\x65\x74\x4d\x79\x50\x69\x6e\x67','\x20\x33\x20\x41\x50\x49\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u8def\u91cd\u8bd5','\x72\x65\x73\x75\x6c\x74','\x64\x61\x74\x61','\x73\x65\x63\x72\x65\x74\x50\x69\x6e','\u5f02\u5e38\x33\uff1a','\x2f\x77\x78\x54\x65\x61\x6d\x2f\x73\x68\x6f\x70\x49\x6e\x66\x6f','\x20\x31\x20\x41\x50\x49\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u8def\u91cd\u8bd5','\x73\x68\x6f\x70\x4e\x61\x6d\x65','\u5f02\u5e38\x31\uff1a','\x76\x65\x6e\x64\x65\x72\x49\x64\x3d','\x26\x62\x75\x79\x65\x72\x50\x69\x6e\x3d','\x2f\x6d\x63\x2f\x6e\x65\x77\x2f\x62\x72\x61\x6e\x64\x43\x61\x72\x64\x2f\x63\x6f\x6d\x6d\x6f\x6e\x2f\x73\x68\x6f\x70\x41\x6e\x64\x42\x72\x61\x6e\x64\x2f\x67\x65\x74\x4f\x70\x65\x6e\x43\x61\x72\x64\x49\x6e\x66\x6f','\x41\x50\x49\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u8def\u91cd\u8bd5','\x6f\x70\x65\x6e\x43\x61\x72\x64\x4c\x69\x6e\x6b','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x63\x6c\x69\x65\x6e\x74\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x61\x70\x70\x69\x64\x3d\x6a\x64\x5f\x73\x68\x6f\x70\x5f\x6d\x65\x6d\x62\x65\x72\x26\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x62\x69\x6e\x64\x57\x69\x74\x68\x56\x65\x6e\x64\x65\x72\x26\x62\x6f\x64\x79\x3d','\x26\x63\x6c\x69\x65\x6e\x74\x3d\x48\x35\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x39\x2e\x32\x2e\x30\x26\x75\x75\x69\x64\x3d\x38\x38\x38\x38\x38\x26\x6a\x73\x6f\x6e\x70\x3d\x6a\x73\x6f\x6e\x70\x5f\x31\x36\x31\x33\x37\x31\x38\x33\x33\x33\x33\x31\x37\x5f\x35\x34\x34\x38\x39','\u5f02\u5e38\x34\uff1a','\x2a\x2f\x2a','\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72','\x7a\x68\x2d\x63\x6e','\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65','\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d','\x20\u5165\u4f1a\x20\x41\x50\x49\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u8def\u91cd\u8bd5','\x70\x69\x6e\x3d','\x2f\x77\x78\x41\x63\x74\x69\x6f\x6e\x43\x6f\x6d\x6d\x6f\x6e\x2f\x67\x65\x74\x55\x73\x65\x72\x49\x6e\x66\x6f','\x20\x36\x2d\x31\x20\x41\x50\x49\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u8def\u91cd\u8bd5','\x61\x74\x74\x72\x54\x6f\x75\x58\x69\x61\x6e\x67','\x79\x75\x6e\x4d\x69\x64\x49\x6d\x61\x67\x65\x55\x72\x6c','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x69\x6d\x67\x31\x30\x2e\x33\x36\x30\x62\x75\x79\x69\x6d\x67\x2e\x63\x6f\x6d\x2f\x69\x6d\x67\x7a\x6f\x6e\x65\x2f\x6a\x66\x73\x2f\x74\x31\x2f\x32\x31\x33\x38\x33\x2f\x32\x2f\x36\x36\x33\x33\x2f\x33\x38\x37\x39\x2f\x35\x63\x35\x31\x33\x38\x64\x38\x45\x30\x39\x36\x37\x63\x63\x66\x32\x2f\x39\x31\x64\x61\x35\x37\x63\x35\x65\x32\x31\x36\x36\x30\x30\x35\x2e\x6a\x70\x67','\u5f02\u5e38\x36\x2d\x32\uff1a','\x26\x70\x69\x6e\x3d','\x73\x69\x67\x6e\x55\x75\x69\x64','\x26\x73\x69\x67\x6e\x55\x75\x69\x64\x3d','\x2f\x77\x78\x54\x65\x61\x6d\x2f\x61\x63\x74\x69\x76\x69\x74\x79\x43\x6f\x6e\x74\x65\x6e\x74','\x20\x35\x20\x41\x50\x49\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u8def\u91cd\u8bd5','\x61\x63\x74\x69\x76\x65','\x65\x6e\x64\x54\x69\x6d\x65\x53\x74\x72','\x67\x65\x74\x54\x69\x6d\x65','\u6d3b\u52a8\u7ed3\u675f','\u6d3b\u52a8\u7ed3\u675f\x0a','\x63\x61\x6e\x43\x72\x65\x61\x74\x65','\x6c\x69\x73\x74','\u4eba\u6570\u5df2\u6ee1\x0a','\x73\x68\x61\x72\x65','\x74\x65\x61\x6d\x4e\x75\x6d','\x61\x63\x74\x52\x75\x6c\x65','\u6700\u591a\u53ef\u4ee5\u7ec4\u5efa','\u4e2a\u6218\u961f','\u52a0\u5165\u961f\u4f0d\x20\x69\x64\x3a\x20','\u961f\u4f0d\x69\x64\x3a\x20','\u3011\x20\u521b\u5efa\u961f\u4f0d\x69\x64\x3a\x20','\u5f02\u5e38\x35\uff1a','\x26\x70\x69\x6e\x49\x6d\x67\x3d','\x2f\x77\x78\x54\x65\x61\x6d\x2f\x73\x61\x76\x65\x43\x61\x70\x74\x61\x69\x6e','\x20\x36\x20\x41\x50\x49\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u8def\u91cd\u8bd5','\u521b\u5efa\u961f\u4f0d\u6210\u529f\x20\x69\x64\x3a\x20','\u5f02\u5e38\x36\uff1a','\x65\x72\x72\x6f\x72\x4d\x65\x73\x73\x61\x67\x65','\u4e0d\u662f\u5e97\u94fa\u4f1a\u5458','\u5956\u54c1\u4e0e\u60a8\u64e6\u80a9\u800c\u8fc7','\x2f\x77\x78\x54\x65\x61\x6d\x2f\x73\x61\x76\x65\x4d\x65\x6d\x62\x65\x72','\x20\x37\x20\x41\x50\x49\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u8def\u91cd\u8bd5','\u3011\x20\u52a0\u5165\u961f\u4f0d\x0a','\u52a0\u5165\u961f\u4f0d\u6210\u529f','\u961f\u4f0d\u5df2\u7ecf\u6ee1\u5458','\u5f02\u5e38\x37\uff1a','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x6a\x68\x79\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d\x2f\x6d\x69\x63\x72\x6f\x44\x7a\x2f\x69\x6e\x76\x69\x74\x65\x2f\x61\x63\x74\x69\x76\x69\x74\x79\x2f\x77\x78\x2f\x67\x65\x74\x4f\x70\x65\x6e\x43\x61\x72\x64\x41\x6c\x6c\x53\x74\x61\x74\x75\x65\x73\x4e\x65\x77','\x3b\x49\x73\x76\x54\x6f\x6b\x65\x6e\x3d','\x3b\x41\x55\x54\x48\x5f\x43\x5f\x55\x53\x45\x52\x3d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64\x3b\x20\x63\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x6a\x68\x79\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d\x2f\x6d\x69\x63\x72\x6f\x44\x7a\x2f\x69\x6e\x76\x69\x74\x65\x2f\x61\x63\x74\x69\x76\x69\x74\x79\x2f\x77\x78\x2f\x76\x69\x65\x77\x2f\x69\x6e\x64\x65\x78\x3f\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x2c\x20\x74\x65\x78\x74\x2f\x6a\x61\x76\x61\x73\x63\x72\x69\x70\x74\x2c\x20\x2a\x2f\x2a\x3b\x20\x71\x3d\x30\x2e\x30\x31','\x69\x73\x49\x6e\x76\x69\x74\x65\x64\x3d\x30\x26\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3d','\x69\x73\x43\x61\x6e\x4a\x6f\x69\x6e','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e','\x63\x6a\x68\x79\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x6a\x68\x79\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x71\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x2f\x69\x6e\x66\x6f\x2f\x51\x75\x65\x72\x79\x4a\x44\x55\x73\x65\x72\x49\x6e\x66\x6f\x3f\x73\x63\x65\x6e\x65\x76\x61\x6c\x3d\x32','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x2c\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e\x2c\x20\x2a\x2f\x2a','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x71\x73\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x6d\x79\x2f\x6a\x69\x6e\x67\x64\x6f\x75\x2f\x6d\x79\x2e\x73\x68\x74\x6d\x6c\x3f\x73\x63\x65\x6e\x65\x76\x61\x6c\x3d\x32','\x20\x41\x50\x49\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u8def\u91cd\u8bd5','\x72\x65\x74\x63\x6f\x64\x65','\u4eac\u4e1c\u670d\u52a1\u5668\u8fd4\u56de\u7a7a\u6570\u636e','\u4eac\u4e1c\u670d\u52a1\u5668\u8bbf\u95ee\u6570\u636e\u4e3a\u7a7a\uff0c\u8bf7\u68c0\u67e5\u81ea\u8eab\u8bbe\u5907\u7f51\u7edc\u60c5\u51b5','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x63\x6a\x68\x79\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d\x2f\x63\x6f\x6d\x6d\x6f\x6e\x2f\x61\x63\x63\x65\x73\x73\x4c\x6f\x67','\x2f\x77\x78\x54\x65\x61\x6d\x2f\x61\x63\x74\x69\x76\x69\x74\x79\x3f\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64','\x76\x65\x6e\x64\x65\x72\x49\x64\x3d\x36\x39\x31\x33\x39\x39\x26\x63\x6f\x64\x65\x3d\x31\x30\x32\x26\x70\x69\x6e\x3d','\x26\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3d','\x26\x70\x61\x67\x65\x55\x72\x6c\x3d\x68\x74\x74\x70\x73\x25\x33\x41\x25\x32\x46\x25\x32\x46\x63\x6a\x68\x79\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d\x25\x32\x46\x6d\x69\x63\x72\x6f\x44\x7a\x25\x32\x46\x69\x6e\x76\x69\x74\x65\x25\x32\x46\x61\x63\x74\x69\x76\x69\x74\x79\x25\x32\x46\x77\x78\x25\x32\x46\x76\x69\x65\x77\x25\x32\x46\x69\x6e\x64\x65\x78\x25\x33\x46\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x25\x33\x44','\x26\x73\x75\x62\x54\x79\x70\x65\x3d\x61\x70\x70','\x6a\x6f\x69\x6e','\x73\x74\x72\x69\x6e\x67','\u4e0d\u8981\u5728\x42\x6f\x78\x4a\x53\u624b\u52a8\u590d\u5236\u7c98\u8d34\u4fee\u6539\x63\x6f\x6f\x6b\x69\x65','\x75\x72\x6c','\x62\x6f\x64\x79','\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3a\x20','\x61\x63\x74\x69\x76\x69\x74\x79\x55\x72\x6c\x3a\x20','\x73\x65\x74\x64\x61\x74\x61','\u83b7\u53d6\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3a\x20\u6210\u529f','\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3a','\x0a\x61\x63\x74\x69\x76\x69\x74\x79\x55\x72\x6c\x3a','\u627e\u4e0d\u5230\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64','\x45\x49\x6b\x6a\x56\x73\x6a\x41\x53\x69\x66\x4c\x43\x61\x71\x6d\x69\x43\x7a\x2e\x77\x57\x63\x78\x6f\x6d\x2e\x76\x36\x3d\x3d'];function _0x4f1c(_0x900e06,_0x4005d1){_0x900e06=~~'0x'['concat'](_0x900e06['slice'](0x0));var _0x145fd7=_0x296f[_0x900e06];return _0x145fd7;};(function(_0x35bca9,_0x45f93f){var _0x32d8d5=0x0;for(_0x45f93f=_0x35bca9['shift'](_0x32d8d5>>0x2);_0x45f93f&&_0x45f93f!==(_0x35bca9['pop'](_0x32d8d5>>0x3)+'')['replace'](/[EIkVASfLCqCzwWx=]/g,'');_0x32d8d5++){_0x32d8d5=_0x32d8d5^0xd187b;}}(_0x296f,_0x4f1c));const $=new Env(_0x4f1c('0'));const notify=$[_0x4f1c('1')]()?require(_0x4f1c('2')):'';const jdCookieNode=$[_0x4f1c('1')]()?require(_0x4f1c('3')):'';let cookiesArr=[],cookie='',message='',messageTitle='';activityId=$[_0x4f1c('4')](_0x4f1c('5'))?$[_0x4f1c('4')](_0x4f1c('5')):jd_cjhy_activityId;activityUrl=$[_0x4f1c('4')](_0x4f1c('6'))?$[_0x4f1c('4')](_0x4f1c('6')):jd_cjhy_activityUrl;let activityCookie='';if($[_0x4f1c('1')]()){if(process[_0x4f1c('7')][_0x4f1c('8')])activityId=process[_0x4f1c('7')][_0x4f1c('8')];if(process[_0x4f1c('7')][_0x4f1c('9')])activityUrl=process[_0x4f1c('7')][_0x4f1c('9')];if(JSON[_0x4f1c('a')](process[_0x4f1c('7')])[_0x4f1c('b')](_0x4f1c('c'))>-0x1)process[_0x4f1c('d')](0x0);Object[_0x4f1c('e')](jdCookieNode)[_0x4f1c('f')](_0x1aadd4=>{cookiesArr[_0x4f1c('10')](jdCookieNode[_0x1aadd4]);});if(process[_0x4f1c('7')][_0x4f1c('11')]&&process[_0x4f1c('7')][_0x4f1c('11')]===_0x4f1c('12'))console[_0x4f1c('13')]=()=>{};}else{cookiesArr=[$[_0x4f1c('4')](_0x4f1c('14')),$[_0x4f1c('4')](_0x4f1c('15')),...$[_0x4f1c('16')]($[_0x4f1c('4')](_0x4f1c('17'))||'\x5b\x5d')[_0x4f1c('18')](_0xef5695=>_0xef5695[_0x4f1c('19')])][_0x4f1c('1a')](_0x4421f9=>!!_0x4421f9);}const JD_API_HOST=_0x4f1c('1b');let isGetCookie=typeof $request!==_0x4f1c('1c');if(isGetCookie){GetCookie();$[_0x4f1c('1d')]();}!(async()=>{console[_0x4f1c('13')](_0x4f1c('1e'));if(!activityId){$[_0x4f1c('1f')]($[_0x4f1c('20')],'',_0x4f1c('21'));$[_0x4f1c('1d')]();return;}if(!cookiesArr[0x0]){$[_0x4f1c('1f')]($[_0x4f1c('20')],_0x4f1c('22'),_0x4f1c('23'),{'open-url':_0x4f1c('23')});return;}$[_0x4f1c('24')]=0x0;messageTitle+=_0x4f1c('25')+activityId+'\x0a';$[_0x4f1c('26')]=[];for(let _0x5fb00b=0x0;_0x5fb00b<cookiesArr[_0x4f1c('27')];_0x5fb00b++){if(cookiesArr[_0x5fb00b]){cookie=cookiesArr[_0x5fb00b];$[_0x4f1c('28')]=decodeURIComponent(cookie[_0x4f1c('29')](/pt_pin=(.+?);/)&&cookie[_0x4f1c('29')](/pt_pin=(.+?);/)[0x1]);$[_0x4f1c('2a')]=_0x5fb00b+0x1;$[_0x4f1c('2b')]=!![];$[_0x4f1c('2c')]='';console[_0x4f1c('13')](_0x4f1c('2d')+$[_0x4f1c('2a')]+'\u3011'+($[_0x4f1c('2c')]||$[_0x4f1c('28')])+_0x4f1c('2e'));if(!$[_0x4f1c('2b')]){$[_0x4f1c('1f')]($[_0x4f1c('20')],_0x4f1c('2f'),_0x4f1c('30')+$[_0x4f1c('2a')]+'\x20'+($[_0x4f1c('2c')]||$[_0x4f1c('28')])+_0x4f1c('31'),{'open-url':_0x4f1c('23')});if($[_0x4f1c('1')]()){await notify[_0x4f1c('32')]($[_0x4f1c('20')]+_0x4f1c('33')+$[_0x4f1c('28')],_0x4f1c('30')+$[_0x4f1c('2a')]+'\x20'+$[_0x4f1c('28')]+_0x4f1c('34'));}continue;}await jrzd();if(!$[_0x4f1c('26')]||$[_0x4f1c('35')]){break;}}}messageTitle+=_0x4f1c('36')+$[_0x4f1c('24')]+'\x0a';await showMsg();})()[_0x4f1c('37')](_0x1bac00=>{$[_0x4f1c('13')]('','\x20'+$[_0x4f1c('20')]+_0x4f1c('38')+_0x1bac00+'\x21','');})[_0x4f1c('39')](()=>{$[_0x4f1c('1d')]();});async function jrzd(){getUA();$[_0x4f1c('3a')]='';$[_0x4f1c('3b')]=_0x4f1c('3c');$[_0x4f1c('3d')]='';$[_0x4f1c('3e')]='';$[_0x4f1c('3f')]='';$[_0x4f1c('40')]=[];$[_0x4f1c('41')]=![];await getCk();await getToken();if($[_0x4f1c('3d')]==''){console[_0x4f1c('13')](_0x4f1c('42'));return;}$[_0x4f1c('43')]=_0x4f1c('44');await getSimpleActInfoVo();await getshopInfo();await $[_0x4f1c('45')](0x3e8);if($[_0x4f1c('3a')]&&$[_0x4f1c('3b')]){await getToken();if($[_0x4f1c('3d')])await getPin();console[_0x4f1c('13')](_0x4f1c('46')+$[_0x4f1c('3e')]);await $[_0x4f1c('45')](0x3e8);await accessLog();await $[_0x4f1c('45')](0x3e8);await getUserInfo();await $[_0x4f1c('45')](0x3e8);await getTeam();await $[_0x4f1c('45')](0x3e8);if($[_0x4f1c('35')]){console[_0x4f1c('13')](_0x4f1c('47'));return;}}else{console[_0x4f1c('13')](_0x4f1c('48')+$[_0x4f1c('2a')]+_0x4f1c('49'));message+=_0x4f1c('48')+$[_0x4f1c('2a')]+_0x4f1c('4a');}}function token(){return new Promise(_0x5660e7=>{let _0x5f13fc={'\x75\x72\x6c':_0x4f1c('4b'),'\x68\x65\x61\x64\x65\x72\x73':{'Cookie':activityCookie+'\x20'+cookie,'Referer':_0x4f1c('4c')+$[_0x4f1c('4d')]+_0x4f1c('4e')+$[_0x4f1c('4f')],'User-Agent':$['\x55\x41']}};$[_0x4f1c('50')](_0x5f13fc,async(_0x15e343,_0x40a227,_0x1ca8c5)=>{try{if(_0x15e343){console[_0x4f1c('13')](''+$[_0x4f1c('51')](_0x15e343));console[_0x4f1c('13')]($[_0x4f1c('20')]+_0x4f1c('52'));}else{let _0x31d878='';let _0x1c425a='';let _0x293c67=_0x40a227[_0x4f1c('53')][_0x4f1c('54')]||_0x40a227[_0x4f1c('53')][_0x4f1c('55')]||'';let _0x9c68ac='';if(_0x293c67){if(typeof _0x293c67!=_0x4f1c('56')){_0x9c68ac=_0x293c67[_0x4f1c('57')]('\x2c');}else _0x9c68ac=_0x293c67;for(let _0x2e679f of _0x9c68ac){let _0x26760a=_0x2e679f[_0x4f1c('57')]('\x3b')[0x0][_0x4f1c('58')]();if(_0x26760a[_0x4f1c('57')]('\x3d')[0x1]){if(_0x26760a[_0x4f1c('b')](_0x4f1c('59'))>-0x1)_0x31d878=_0x26760a[_0x4f1c('5a')](/ /g,'')+'\x3b';if(_0x26760a[_0x4f1c('b')](_0x4f1c('5b'))>-0x1)_0x1c425a=_0x26760a[_0x4f1c('5a')](/ /g,'')+'\x3b';}}}if(_0x31d878&&_0x1c425a)activityCookie=_0x31d878+'\x20'+_0x1c425a;}}catch(_0x40a04c){$[_0x4f1c('5c')](_0x40a04c,_0x40a227);}finally{_0x5660e7();}});});}function getUA(){$['\x55\x41']=_0x4f1c('5d');}function showMsg(){return new Promise(_0x55e12d=>{$[_0x4f1c('1f')]($[_0x4f1c('20')],'','\x0a'+message);_0x55e12d();});}function getSimpleActInfoVo(){return new Promise(_0x6a55bc=>{let _0x2e88ab=_0x4f1c('5e')+activityId;$[_0x4f1c('5f')](taskPostUrl(_0x4f1c('60'),_0x2e88ab),async(_0x5859ec,_0x257ac0,_0x7160cf)=>{try{if(_0x5859ec){console[_0x4f1c('13')](''+$[_0x4f1c('51')](_0x5859ec));console[_0x4f1c('13')]($[_0x4f1c('20')]+_0x4f1c('61'));}else{if(_0x257ac0[_0x4f1c('62')]==0xc8){refreshToken(_0x257ac0);}}}catch(_0x3d8c22){$[_0x4f1c('5c')](_0x3d8c22,_0x257ac0);}finally{_0x6a55bc();}});});}function randomString(_0x4b8372){_0x4b8372=_0x4b8372||0x20;let _0xfe6fc7=_0x4f1c('63'),_0x343437=_0xfe6fc7[_0x4f1c('27')],_0x549ec0='';for(i=0x0;i<_0x4b8372;i++)_0x549ec0+=_0xfe6fc7[_0x4f1c('64')](Math[_0x4f1c('65')](Math[_0x4f1c('66')]()*_0x343437));return _0x549ec0;}function getCk(){return new Promise(_0x257429=>{let _0x28b428={'\x75\x72\x6c':activityUrl+_0x4f1c('67')+activityId,'\x68\x65\x61\x64\x65\x72\x73':{'\x43\x6f\x6f\x6b\x69\x65':cookie,'User-Agent':$['\x55\x41']}};$[_0x4f1c('50')](_0x28b428,async(_0x4bee24,_0x1f6e3b,_0x5e344e)=>{try{if(_0x4bee24){console[_0x4f1c('13')](''+JSON[_0x4f1c('a')](_0x4bee24));console[_0x4f1c('13')]($[_0x4f1c('20')]+_0x4f1c('52'));}else{if(_0x1f6e3b[_0x4f1c('62')]==0xc8){refreshToken(_0x1f6e3b);}}}catch(_0x1e6193){$[_0x4f1c('5c')](_0x1e6193,_0x1f6e3b);}finally{_0x257429();}});});}function getToken(){return new Promise(_0xa2fd85=>{let _0x516faf=_0x4f1c('68');$[_0x4f1c('5f')](taskUrl(_0x4f1c('69'),_0x516faf),async(_0x8c94a8,_0x504c95,_0x5ca4ab)=>{try{if(_0x8c94a8){console[_0x4f1c('13')](''+JSON[_0x4f1c('a')](_0x8c94a8));console[_0x4f1c('13')]($[_0x4f1c('20')]+_0x4f1c('6a'));}else{if(safeGet(_0x5ca4ab)){_0x5ca4ab=JSON[_0x4f1c('6b')](_0x5ca4ab);if(_0x5ca4ab[_0x4f1c('6c')]==0x0&&_0x5ca4ab[_0x4f1c('6d')]){$[_0x4f1c('3d')]=_0x5ca4ab[_0x4f1c('6d')];}else{console[_0x4f1c('13')](_0x4f1c('6e')+JSON[_0x4f1c('a')](_0x5ca4ab));}}}}catch(_0x9b0d){$[_0x4f1c('5c')](_0x9b0d,_0x504c95);}finally{_0xa2fd85();}});});}function getPin(){return new Promise(_0x3d5e98=>{let _0x2539ea=_0x4f1c('6f')+$[_0x4f1c('3b')]+_0x4f1c('70')+$[_0x4f1c('3d')]+_0x4f1c('71');$[_0x4f1c('5f')](taskPostUrl(_0x4f1c('72'),_0x2539ea),async(_0x4f7ded,_0x30dcb0,_0x4ee357)=>{try{if(_0x4f7ded){console[_0x4f1c('13')](''+JSON[_0x4f1c('a')](_0x4f7ded));console[_0x4f1c('13')]($[_0x4f1c('20')]+_0x4f1c('73'));}else{if(safeGet(_0x4ee357)){_0x4ee357=JSON[_0x4f1c('6b')](_0x4ee357);if(_0x4ee357[_0x4f1c('74')]&&_0x4ee357[_0x4f1c('75')]){$[_0x4f1c('3e')]=_0x4ee357[_0x4f1c('75')][_0x4f1c('76')];}else{console[_0x4f1c('13')](_0x4f1c('77')+JSON[_0x4f1c('a')](_0x4ee357));}}}}catch(_0x5b4625){$[_0x4f1c('5c')](_0x5b4625,_0x30dcb0);}finally{_0x3d5e98();}});});}function getshopInfo(){return new Promise(_0x2f5320=>{$[_0x4f1c('5f')](taskPostUrl(_0x4f1c('78'),_0x4f1c('5e')+activityId),async(_0x433419,_0x294c33,_0x308550)=>{try{if(_0x433419){console[_0x4f1c('13')](''+JSON[_0x4f1c('a')](_0x433419));console[_0x4f1c('13')]($[_0x4f1c('20')]+_0x4f1c('79'));}else{if(_0x308550&&safeGet(_0x308550)){_0x308550=JSON[_0x4f1c('6b')](_0x308550);if(_0x308550[_0x4f1c('75')]){$[_0x4f1c('3a')]=_0x308550[_0x4f1c('75')][_0x4f1c('3a')];$[_0x4f1c('3b')]=_0x308550[_0x4f1c('75')][_0x4f1c('3b')];$[_0x4f1c('7a')]=_0x308550[_0x4f1c('75')][_0x4f1c('7a')];}else{console[_0x4f1c('13')](_0x4f1c('7b')+JSON[_0x4f1c('a')](_0x308550));}}}}catch(_0x566b1e){$[_0x4f1c('5c')](_0x566b1e,_0x294c33);}finally{_0x2f5320();}});});}function joinShop(){return new Promise(_0x56bdc4=>{let _0x2ae848=_0x4f1c('7c')+$[_0x4f1c('3b')]+_0x4f1c('7d')+encodeURIComponent($[_0x4f1c('3e')]);$[_0x4f1c('5f')](taskPostUrl(_0x4f1c('7e'),_0x2ae848),async(_0x587b90,_0x4d4dbe,_0x4e33b3)=>{try{if(_0x587b90){console[_0x4f1c('13')](''+JSON[_0x4f1c('a')](_0x587b90));console[_0x4f1c('13')]($[_0x4f1c('20')]+_0x4f1c('7f'));}else{if(safeGet(_0x4e33b3)){_0x4e33b3=JSON[_0x4f1c('6b')](_0x4e33b3);if(_0x4e33b3[_0x4f1c('74')]&&_0x4e33b3[_0x4f1c('75')]){if(_0x4e33b3[_0x4f1c('75')][_0x4f1c('80')]){let _0x5ea99f=_0x4e33b3[_0x4f1c('75')][_0x4f1c('80')][_0x4f1c('29')](/channel=(\d+)/);const _0x2ae848={'venderId':$[_0x4f1c('3b')],'shopId':$[_0x4f1c('3a')],'bindByVerifyCodeFlag':0x1,'registerExtend':{},'writeChildFlag':0x0,'channel':_0x5ea99f[0x1]};let _0x42baf8=_0x4f1c('81')+encodeURIComponent(JSON[_0x4f1c('a')](_0x2ae848))+_0x4f1c('82');let _0x49ff86=''+_0x4e33b3[_0x4f1c('75')][_0x4f1c('80')];await jiaru(_0x42baf8,_0x49ff86);}}else{console[_0x4f1c('13')](_0x4f1c('83')+JSON[_0x4f1c('a')](_0x4e33b3));}}}}catch(_0x53193f){$[_0x4f1c('5c')](_0x53193f,_0x4d4dbe);}finally{_0x56bdc4();}});});}function jiaru(_0x3236b4,_0x147af1){return new Promise(_0x9c1770=>{let _0x55d443={'url':_0x3236b4,'headers':{'Accept':_0x4f1c('84'),'Accept-Encoding':_0x4f1c('85'),'Accept-Language':_0x4f1c('86'),'Connection':_0x4f1c('87'),'Host':_0x4f1c('88'),'Referer':_0x147af1,'Cookie':cookie,'User-Agent':$['\x55\x41']}};$[_0x4f1c('50')](_0x55d443,async(_0x5e073c,_0x2453d2,_0x2beb7e)=>{try{if(_0x5e073c){console[_0x4f1c('13')](''+JSON[_0x4f1c('a')](_0x5e073c));console[_0x4f1c('13')]($[_0x4f1c('20')]+_0x4f1c('89'));}else{$[_0x4f1c('13')](_0x2beb7e);}}catch(_0x27ca51){$[_0x4f1c('5c')](_0x27ca51,_0x2453d2);}finally{_0x9c1770();}});});}function getUserInfo(){return new Promise(_0x5a907e=>{let _0x812bcc=_0x4f1c('8a')+encodeURIComponent($[_0x4f1c('3e')]);$[_0x4f1c('5f')](taskPostUrl(_0x4f1c('8b'),_0x812bcc),async(_0x17215a,_0x181e15,_0x24b331)=>{try{if(_0x17215a){console[_0x4f1c('13')](''+JSON[_0x4f1c('a')](_0x17215a));console[_0x4f1c('13')]($[_0x4f1c('20')]+_0x4f1c('8c'));}else{if(safeGet(_0x24b331)){_0x24b331=JSON[_0x4f1c('6b')](_0x24b331);if(_0x24b331[_0x4f1c('74')]&&_0x24b331[_0x4f1c('75')]){$[_0x4f1c('8d')]=_0x24b331[_0x4f1c('75')][_0x4f1c('8e')]?_0x24b331[_0x4f1c('75')][_0x4f1c('8e')]:_0x4f1c('8f');}else{console[_0x4f1c('13')](_0x4f1c('90')+JSON[_0x4f1c('a')](_0x24b331));}}}}catch(_0x5751b5){$[_0x4f1c('5c')](_0x5751b5,_0x181e15);}finally{_0x5a907e();}});});}function getTeam(){return new Promise(_0x3ffeb1=>{let _0x4cbdb9=_0x4f1c('5e')+activityId+_0x4f1c('91')+encodeURIComponent(encodeURIComponent($[_0x4f1c('3e')]));if($[_0x4f1c('92')])_0x4cbdb9+=_0x4f1c('93')+$[_0x4f1c('92')];$[_0x4f1c('5f')](taskPostUrl(_0x4f1c('94'),_0x4cbdb9),async(_0x157c83,_0x3a76b6,_0x19f7b1)=>{try{if(_0x157c83){console[_0x4f1c('13')](''+JSON[_0x4f1c('a')](_0x157c83));console[_0x4f1c('13')]($[_0x4f1c('20')]+_0x4f1c('95'));}else{if(safeGet(_0x19f7b1)){_0x19f7b1=JSON[_0x4f1c('6b')](_0x19f7b1);if(_0x19f7b1[_0x4f1c('74')]&&_0x19f7b1[_0x4f1c('75')]){if(new Date(_0x19f7b1[_0x4f1c('75')][_0x4f1c('96')][_0x4f1c('97')][_0x4f1c('5a')](/-/g,'\x2f'))[_0x4f1c('98')]()<new Date()[_0x4f1c('98')]()){$[_0x4f1c('26')]=![];console[_0x4f1c('13')](_0x4f1c('99'));messageTitle+=_0x4f1c('9a');message+=_0x4f1c('9a');_0x3ffeb1();}else{if(!_0x19f7b1[_0x4f1c('75')][_0x4f1c('9b')]&&_0x19f7b1[_0x4f1c('75')][_0x4f1c('9c')]==null)message+=_0x4f1c('9d');if(_0x19f7b1[_0x4f1c('75')][_0x4f1c('9e')]){$[_0x4f1c('24')]=parseInt(_0x19f7b1[_0x4f1c('75')][_0x4f1c('9e')][_0x4f1c('24')],0xa)+0x1;}else{$[_0x4f1c('24')]=0x0;}if($[_0x4f1c('2a')]==0x1){$[_0x4f1c('41')]=!![];$[_0x4f1c('9f')]=_0x19f7b1[_0x4f1c('75')][_0x4f1c('96')][_0x4f1c('a0')][_0x4f1c('29')](/最多可以组建(\d+)个战队/);if($[_0x4f1c('9f')]){$[_0x4f1c('9f')]=$[_0x4f1c('9f')][0x1];messageTitle+=_0x4f1c('a1')+$[_0x4f1c('9f')]+_0x4f1c('a2');}}if($[_0x4f1c('92')]){$[_0x4f1c('13')](_0x4f1c('a3')+$[_0x4f1c('92')]);await $[_0x4f1c('45')](0x3e8);await joinTeam();}if($[_0x4f1c('41')]){if(_0x19f7b1[_0x4f1c('75')][_0x4f1c('9b')]){await $[_0x4f1c('45')](0x3e8);await saveTeam();}else{$[_0x4f1c('92')]=_0x19f7b1[_0x4f1c('75')][_0x4f1c('92')];messageTitle+=_0x4f1c('a4')+$[_0x4f1c('92')]+'\x0a';message+=_0x4f1c('48')+$[_0x4f1c('2a')]+_0x4f1c('a5')+$[_0x4f1c('92')];$[_0x4f1c('13')](_0x4f1c('a4')+$[_0x4f1c('92')]);$[_0x4f1c('45')](0x3e8);$[_0x4f1c('13')](_0x4f1c('a3')+$[_0x4f1c('92')]);await joinTeam();}}}}else{console[_0x4f1c('13')](_0x4f1c('a6')+JSON[_0x4f1c('a')](_0x19f7b1));}}}}catch(_0x38268a){$[_0x4f1c('5c')](_0x38268a,_0x3a76b6);}finally{_0x3ffeb1(_0x3ffeb1);}});});}function saveTeam(_0x40a2f6=0x0){return new Promise(_0x4ceae5=>{let _0x42a33c=encodeURIComponent(encodeURIComponent($[_0x4f1c('3e')]));if(_0x40a2f6==0x1)_0x42a33c=encodeURIComponent(encodeURIComponent($[_0x4f1c('3e')]));let _0x576155=_0x4f1c('5e')+activityId+_0x4f1c('91')+_0x42a33c+_0x4f1c('a7')+encodeURIComponent(encodeURIComponent($[_0x4f1c('8d')]));$[_0x4f1c('5f')](taskPostUrl(_0x4f1c('a8'),_0x576155),async(_0x57cc6c,_0x2ca9e3,_0x34107d)=>{try{if(_0x57cc6c){console[_0x4f1c('13')](''+JSON[_0x4f1c('a')](_0x57cc6c));console[_0x4f1c('13')]($[_0x4f1c('20')]+_0x4f1c('a9'));}else{if(safeGet(_0x34107d)){_0x34107d=JSON[_0x4f1c('6b')](_0x34107d);if(_0x34107d[_0x4f1c('74')]&&_0x34107d[_0x4f1c('75')]){message+=_0x4f1c('48')+$[_0x4f1c('2a')]+_0x4f1c('a5')+_0x34107d[_0x4f1c('75')][_0x4f1c('92')]+'\x20';console[_0x4f1c('13')](_0x4f1c('aa')+_0x34107d[_0x4f1c('75')][_0x4f1c('92')]);$[_0x4f1c('92')]=_0x34107d[_0x4f1c('75')][_0x4f1c('92')];messageTitle+=_0x4f1c('a4')+$[_0x4f1c('92')]+'\x20';}else{console[_0x4f1c('13')](_0x4f1c('ab')+JSON[_0x4f1c('a')](_0x34107d));if(_0x34107d[_0x4f1c('ac')][_0x4f1c('b')](_0x4f1c('ad'))>-0x1&&_0x40a2f6!=0x3){await joinShop();await $[_0x4f1c('45')](0x3e8);await saveTeam(0x3);}else if(_0x34107d[_0x4f1c('ac')][_0x4f1c('b')](_0x4f1c('ae'))>-0x1&&_0x40a2f6==0x0){await $[_0x4f1c('45')](0x3e8);await saveTeam(0x1);}}}}}catch(_0x3908e0){$[_0x4f1c('5c')](_0x3908e0,_0x2ca9e3);}finally{_0x4ceae5();}});});}function joinTeam(_0x472793=0x0){return new Promise(_0x439523=>{let _0x36fe55=encodeURIComponent(encodeURIComponent($[_0x4f1c('3e')]));if(_0x472793==0x1)_0x36fe55=encodeURIComponent(encodeURIComponent($[_0x4f1c('3e')]));let _0x297033=_0x4f1c('5e')+activityId+_0x4f1c('93')+$[_0x4f1c('92')]+_0x4f1c('91')+_0x36fe55+_0x4f1c('a7')+encodeURIComponent(encodeURIComponent($[_0x4f1c('8d')]));$[_0x4f1c('5f')](taskPostUrl(_0x4f1c('af'),_0x297033),async(_0xe515a2,_0x23e389,_0x5740a7)=>{try{if(_0xe515a2){console[_0x4f1c('13')](''+JSON[_0x4f1c('a')](_0xe515a2));console[_0x4f1c('13')]($[_0x4f1c('20')]+_0x4f1c('b0'));}else{if(safeGet(_0x5740a7)){_0x5740a7=JSON[_0x4f1c('6b')](_0x5740a7);if(_0x5740a7[_0x4f1c('74')]&&_0x5740a7[_0x4f1c('75')]){message+=_0x4f1c('48')+$[_0x4f1c('2a')]+_0x4f1c('b1');$[_0x4f1c('13')](_0x4f1c('b2'));}else{if(_0x5740a7[_0x4f1c('ac')][_0x4f1c('b')](_0x4f1c('ad'))>-0x1&&_0x472793!=0x3){await joinShop();await joinTeam(0x3);}else if(_0x5740a7[_0x4f1c('ac')][_0x4f1c('b')](_0x4f1c('b3'))>-0x1){$[_0x4f1c('35')]=!![];}else if(_0x5740a7[_0x4f1c('ac')][_0x4f1c('b')](_0x4f1c('ae'))>-0x1&&_0x472793==0x0){await joinTeam(0x1);}else{console[_0x4f1c('13')](_0x4f1c('b4')+JSON[_0x4f1c('a')](_0x5740a7));message+=_0x4f1c('48')+$[_0x4f1c('2a')]+'\u3011\x20'+_0x5740a7[_0x4f1c('ac')]+'\x0a';}}}}}catch(_0x7ad589){$[_0x4f1c('5c')](_0x7ad589,_0x23e389);}finally{_0x439523();}});});}function getOpenCardAllStatuesNew(){return new Promise(_0x34ab88=>{let _0x3812c7={'\x75\x72\x6c':_0x4f1c('b5'),'\x68\x65\x61\x64\x65\x72\x73':{'\x63\x6f\x6f\x6b\x69\x65':activityCookie+_0x4f1c('b6')+$[_0x4f1c('3d')]+_0x4f1c('b7')+$[_0x4f1c('3e')],'\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e':_0x4f1c('87'),'Accept-Encoding':_0x4f1c('85'),'Content-Type':_0x4f1c('b8'),'User-Agent':$['\x55\x41'],'Accept-Language':_0x4f1c('86'),'\x52\x65\x66\x65\x72\x65\x72':_0x4f1c('b9')+activityId,'\x41\x63\x63\x65\x70\x74':_0x4f1c('ba')},'\x62\x6f\x64\x79':_0x4f1c('bb')+activityId+_0x4f1c('91')+encodeURIComponent(encodeURIComponent($[_0x4f1c('3e')]))};$[_0x4f1c('5f')](_0x3812c7,async(_0x2f47ff,_0x17803e,_0x3f2b64)=>{try{if(_0x2f47ff){console[_0x4f1c('13')](''+JSON[_0x4f1c('a')](_0x2f47ff));console[_0x4f1c('13')]($[_0x4f1c('20')]+_0x4f1c('79'));}else{if(_0x3f2b64&&safeGet(_0x3f2b64)){_0x3f2b64=JSON[_0x4f1c('6b')](_0x3f2b64);if(_0x3f2b64[_0x4f1c('75')]&&_0x3f2b64[_0x4f1c('75')][_0x4f1c('bc')]){(_0x3f2b64[_0x4f1c('75')][_0x4f1c('9c')]||[])[_0x4f1c('f')](_0xe53aaf=>{if(_0xe53aaf[_0x4f1c('80')]){$[_0x4f1c('40')][_0x4f1c('10')](_0xe53aaf[_0x4f1c('80')]);}});}}}}catch(_0x34bbe0){$[_0x4f1c('5c')](_0x34bbe0,_0x17803e);}finally{_0x34ab88();}});});}function taskPostUrl(_0x45949f,_0x583f7b){return{'\x75\x72\x6c':''+activityUrl+_0x45949f,'\x62\x6f\x64\x79':_0x583f7b,'\x68\x65\x61\x64\x65\x72\x73':{'\x41\x63\x63\x65\x70\x74':_0x4f1c('bd'),'Accept-Encoding':_0x4f1c('85'),'Accept-Language':_0x4f1c('86'),'\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e':_0x4f1c('87'),'\x48\x6f\x73\x74':_0x4f1c('be'),'\x4f\x72\x69\x67\x69\x6e':_0x4f1c('bf'),'Content-Type':_0x4f1c('c0'),'\x52\x65\x66\x65\x72\x65\x72':activityUrl+_0x4f1c('67')+activityId,'\x43\x6f\x6f\x6b\x69\x65':cookie+activityCookie+_0x4f1c('b6')+$[_0x4f1c('3d')]+_0x4f1c('b7')+$[_0x4f1c('43')],'User-Agent':$['\x55\x41']}};}function taskUrl(_0x5c59e2,_0x148fbb){return{'\x75\x72\x6c':_0x4f1c('1b')+_0x5c59e2,'\x62\x6f\x64\x79':_0x148fbb,'\x68\x65\x61\x64\x65\x72\x73':{'\x41\x63\x63\x65\x70\x74':_0x4f1c('84'),'Accept-Encoding':_0x4f1c('85'),'Accept-Language':_0x4f1c('86'),'\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e':_0x4f1c('87'),'Content-Type':_0x4f1c('c0'),'\x48\x6f\x73\x74':_0x4f1c('88'),'\x43\x6f\x6f\x6b\x69\x65':cookie,'User-Agent':$['\x55\x41']}};}function TotalBean(){return new Promise(async _0x414138=>{const _0x599dcc={'url':_0x4f1c('c1'),'headers':{'Accept':_0x4f1c('c2'),'Content-Type':_0x4f1c('c0'),'Accept-Encoding':_0x4f1c('85'),'Accept-Language':_0x4f1c('86'),'Connection':_0x4f1c('87'),'Cookie':cookie,'Referer':_0x4f1c('c3'),'User-Agent':$['\x55\x41']}};$[_0x4f1c('5f')](_0x599dcc,(_0x433e37,_0x8be08d,_0x41679c)=>{try{if(_0x433e37){console[_0x4f1c('13')](''+JSON[_0x4f1c('a')](_0x433e37));console[_0x4f1c('13')]($[_0x4f1c('20')]+_0x4f1c('c4'));}else{if(_0x41679c){_0x41679c=JSON[_0x4f1c('6b')](_0x41679c);if(_0x41679c[_0x4f1c('c5')]===0xd){$[_0x4f1c('2b')]=![];return;}}else{console[_0x4f1c('13')](_0x4f1c('c6'));}}}catch(_0xe1c92f){$[_0x4f1c('5c')](_0xe1c92f,_0x8be08d);}finally{_0x414138();}});});}function safeGet(_0x28f519){try{if(typeof JSON[_0x4f1c('6b')](_0x28f519)==_0x4f1c('56')){return!![];}}catch(_0x278db3){console[_0x4f1c('13')](_0x278db3);console[_0x4f1c('13')](_0x4f1c('c7'));return![];}}function accessLog(){return new Promise(async _0x208b2d=>{const _0x3236f1={'\x75\x72\x6c':_0x4f1c('c8'),'\x68\x65\x61\x64\x65\x72\x73':{'\x41\x63\x63\x65\x70\x74':_0x4f1c('bd'),'Accept-Encoding':_0x4f1c('85'),'Accept-Language':_0x4f1c('86'),'\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e':_0x4f1c('87'),'\x48\x6f\x73\x74':_0x4f1c('be'),'\x4f\x72\x69\x67\x69\x6e':_0x4f1c('bf'),'Content-Type':_0x4f1c('c0'),'\x52\x65\x66\x65\x72\x65\x72':activityUrl+_0x4f1c('c9')+activityId,'\x43\x6f\x6f\x6b\x69\x65':cookie+activityCookie+_0x4f1c('b6')+$[_0x4f1c('3d')]+_0x4f1c('b7')+$[_0x4f1c('43')],'User-Agent':$['\x55\x41']},'\x62\x6f\x64\x79':_0x4f1c('ca')+encodeURIComponent(encodeURIComponent($[_0x4f1c('3e')]))+_0x4f1c('cb')+activityId+_0x4f1c('cc')+activityId+_0x4f1c('cd')};$[_0x4f1c('5f')](_0x3236f1,(_0x29eb9c,_0x3685f9,_0x3e3438)=>{try{if(_0x29eb9c){console[_0x4f1c('13')](''+JSON[_0x4f1c('a')](_0x29eb9c));console[_0x4f1c('13')]($[_0x4f1c('20')]+_0x4f1c('c4'));}else{if(_0x3685f9[_0x4f1c('62')]==0xc8){refreshToken(_0x3685f9);}}}catch(_0x3d9440){$[_0x4f1c('5c')](_0x3d9440,_0x3685f9);}finally{_0x208b2d();}});});}function refreshToken(_0x111a48){let _0x1022f4=_0x111a48[_0x4f1c('53')][_0x4f1c('54')];if(_0x1022f4){activityCookie=_0x1022f4[_0x4f1c('18')](_0x43e67f=>{return _0x43e67f[_0x4f1c('57')]('\x3b')[0x0];})[_0x4f1c('ce')]('\x3b');}}function jsonParse(_0x47f985){if(typeof strv==_0x4f1c('cf')){try{return JSON[_0x4f1c('6b')](_0x47f985);}catch(_0x546795){console[_0x4f1c('13')](_0x546795);$[_0x4f1c('1f')]($[_0x4f1c('20')],'',_0x4f1c('d0'));return[];}}}function GetCookie(){if($request[_0x4f1c('d1')][_0x4f1c('b')](_0x4f1c('78'))>-0x1){if($request[_0x4f1c('d2')]){let _0x1f7eb2=$request[_0x4f1c('d2')][_0x4f1c('29')](/activityId=([a-zA-Z0-9._-]+)/);if(_0x1f7eb2){let _0x5204ad=$request[_0x4f1c('d1')][_0x4f1c('57')]('\x2f');console[_0x4f1c('13')](_0x4f1c('d3')+_0x1f7eb2[0x1]);console[_0x4f1c('13')](_0x4f1c('d4')+_0x5204ad[0x0]+'\x2f\x2f'+_0x5204ad[0x2]);$[_0x4f1c('d5')](_0x1f7eb2[0x1],_0x4f1c('5'));$[_0x4f1c('d5')](_0x5204ad[0x0]+'\x2f\x2f'+_0x5204ad[0x2],_0x4f1c('6'));$[_0x4f1c('1f')]($[_0x4f1c('20')],_0x4f1c('d6'),_0x4f1c('d7')+_0x1f7eb2[0x1]+_0x4f1c('d8')+_0x5204ad[0x0]+'\x2f\x2f'+_0x5204ad[0x2]);}else{$[_0x4f1c('1f')]($[_0x4f1c('20')],_0x4f1c('d9'),'');}}}};;_0xodu='jsjiami.com.v6';

// prettier-ignore
function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {url: t} : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `${this.name}, 开始!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({url: t}, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {
        })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => {
                const {message: s, response: i} = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t)); else if (this.isNode()) {
                this.initGotEnv(t);
                const {url: s, ...i} = t;
                this.got.post(s, i).then(t => {
                    const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                    e(null, {status: s, statusCode: i, headers: r, body: o}, o)
                }, t => {
                    const {message: s, response: i} = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
                        return {openUrl: e, mediaUrl: s}
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
                        return {"open-url": e, "media-url": s}
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {url: e}
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============系统通知=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `${this.name}, 错误!`, t.stack) : this.log("", `${this.name}, 错误!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}, 结束!  ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
