const fs = require('fs')
const log = console.log.bind(console);
const countSpace = function (s) {
  let counter = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ' && s[i + 1] === ' ') {
      counter += 1
    }
  }
  return counter + 1
}
const toArray = function (s) {
  let a = []
  let len = countSpace(s)
  for (let i = 0; i < len; i++) {
    a.push(s.split('  ')[i])
  }
  return a
}
const mangaJSON = function () {
  let d = [
    {
      "name": "一拳超人",
      "author": "村田雄介 ONE",
      "no": "No.1",
      "class": "少年漫画",
      "theme": "冒险  欢乐向  格斗",
      "coverUrl": "https://images.dmzj.com/webpic/1/onepunchmanfengmianl.jpg",
      "update": "等第二季动画02",
      "status": "连载中"
    },
    {
      "name": "+妖精的尾巴",
      "author": "真岛浩",
      "no": "No.2",
      "class": "少年漫画",
      "theme": "冒险  魔法",
      "coverUrl": "https://images.dmzj.com/webpic/1/yaojingdeweibaV3.jpg",
      "update": "推图",
      "status": "已完结"
    },
    {
      "name": "+五等分的花嫁",
      "author": "春场ねぎ",
      "no": "No.3",
      "class": "少年漫画",
      "theme": "爱情  后宫",
      "coverUrl": "https://images.dmzj.com/webpic/5/wudengfendehuajia111.jpg",
      "update": "第83话",
      "status": "连载中"
    },
    {
      "name": "盾之勇者成名录",
      "author": "アネコユサギ 蓝屋球",
      "no": "No.4",
      "class": "少年漫画",
      "theme": "冒险  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/18/dunzhiyongzhechengml20181217.jpg",
      "update": "第56话",
      "status": "连载中"
    },
    {
      "name": "+辉夜大小姐想让我告白 ~天才们的恋爱头脑战~",
      "author": "赤坂アカ",
      "no": "No.5",
      "class": "少年漫画",
      "theme": "欢乐向  爱情",
      "coverUrl": "https://images.dmzj.com/webpic/10/huiyedaxiaojie20190115.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "+擅长捉弄的高木同学",
      "author": "山本崇一朗",
      "no": "No.6",
      "class": "少年漫画",
      "theme": "爱情  校园  治愈",
      "coverUrl": "https://images.dmzj.com/webpic/7/190130sczndgmtx.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "+我们无法一起学习",
      "author": "筒井大志",
      "no": "No.7",
      "class": "少年漫画",
      "theme": "欢乐向  校园  后宫",
      "coverUrl": "https://images.dmzj.com/webpic/11/xue20181129.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "进击的巨人",
      "author": "諌山创(谏山创)",
      "no": "No.8",
      "class": "少年漫画",
      "theme": "冒险",
      "coverUrl": "https://images.dmzj.com/webpic/11/sanyehuxiongji.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "+我的英雄学院",
      "author": "堀越耕平",
      "no": "No.9",
      "class": "少年漫画",
      "theme": "冒险  热血",
      "coverUrl": "https://images.dmzj.com/webpic/11/160129yingxiongxueyuanfml.jpg",
      "update": "第220话",
      "status": "连载中"
    },
    {
      "name": "星期一的丰满",
      "author": "比村奇石",
      "no": "No.10",
      "class": "少年漫画",
      "theme": "欢乐向  爱情  治愈",
      "coverUrl": "https://images.dmzj.com/webpic/3/xingqiyidefengman20181225220806.jpg",
      "update": "第01卷汉化",
      "status": "连载中"
    },
    {
      "name": "黑社会的超能力女儿",
      "author": "大武政夫",
      "no": "No.11",
      "class": "少年漫画",
      "theme": "欢乐向  搞笑",
      "coverUrl": "https://images.dmzj.com/webpic/11/heishehui20190531.jpg",
      "update": "第88话",
      "status": "连载中"
    },
    {
      "name": "LV999的村民",
      "author": "岩元健一 星月子猫 ",
      "no": "No.12",
      "class": "少年漫画",
      "theme": "冒险  魔幻  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/1/lv999dcm6485l.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "只要可爱即使是变态你也会喜欢我吧",
      "author": "CHuN 花间灯 iimAn",
      "no": "No.13",
      "class": "少年漫画",
      "theme": "爱情  校园  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/13/zykajssbtnyhxhwbV1.jpg",
      "update": "第18话",
      "status": "连载中"
    },
    {
      "name": "极主夫道",
      "author": "おおのこうすけ",
      "no": "No.14",
      "class": "少年漫画",
      "theme": "生活  搞笑",
      "coverUrl": "https://images.dmzj.com/webpic/7/fu20190531.jpg",
      "update": "第03卷番外",
      "status": "连载中"
    },
    {
      "name": "+JoJo的奇妙冒险",
      "author": "荒木飞吕彦",
      "no": "No.15",
      "class": "少年漫画",
      "theme": "格斗  魔法  高清单行",
      "coverUrl": "https://images.dmzj.com/webpic/18/jojoxin.jpg",
      "update": "第121卷",
      "status": "连载中"
    },
    {
      "name": "+关于我转生后成为史莱姆的那件事",
      "author": "冈雾硝 川上泰树 伏濑",
      "no": "No.16",
      "class": "少年漫画",
      "theme": "冒险  奇幻  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/8/sl0522l.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "我是村民 有意见？",
      "author": "鲭梦 白石新",
      "no": "No.17",
      "class": "少年漫画",
      "theme": "冒险  魔法  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/5/cunmin20181129.jpg",
      "update": "第24话",
      "status": "连载中"
    },
    {
      "name": "醒醒吧！你没有女朋友",
      "author": "田尾典丈 三云ジョージ",
      "no": "No.18",
      "class": "少年漫画",
      "theme": "欢乐向  爱情  校园  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/6/xingxingbanimenvpengy.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "在地牢里寻求邂逅难道有错吗",
      "author": "九二枝 大森藤ノ",
      "no": "No.19",
      "class": "少年漫画",
      "theme": "冒险  奇幻  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/1/dilao20190531.jpg",
      "update": "琉外传18",
      "status": "连载中"
    },
    {
      "name": "海贼王",
      "author": "尾田荣一郎",
      "no": "No.20",
      "class": "少年漫画",
      "theme": "冒险  热血  高清单行",
      "coverUrl": "https://images.dmzj.com/webpic/4/onepiece.jpg",
      "update": "943话",
      "status": "连载中"
    },
    {
      "name": "摆出讨厌的表情露出胖次",
      "author": "40原",
      "no": "No.21",
      "class": "少年漫画",
      "theme": "欢乐向",
      "coverUrl": "https://images.dmzj.com/webpic/14/bctydbqlcpc4552l.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "+女朋友、借我一下",
      "author": "宫岛礼吏",
      "no": "No.22",
      "class": "少年漫画",
      "theme": "爱情  校园",
      "coverUrl": "https://images.dmzj.com/webpic/11/nvpengyoujiewoyixia111.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "+食戟之灵",
      "author": "附田佑斗 佐伯俊",
      "no": "No.23",
      "class": "少年漫画",
      "theme": "美食",
      "coverUrl": "https://images.dmzj.com/webpic/13/shijizhiling20130609.jpg",
      "update": "第310话",
      "status": "连载中"
    },
    {
      "name": "+平凡职业成就世界最强",
      "author": "RoGa 白米良(厨二好き) ",
      "no": "No.24",
      "class": "少年漫画",
      "theme": "冒险  魔幻  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/5/000.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "+擅长捉弄人的(原)高木同学",
      "author": "山本崇一朗 稻叶光史",
      "no": "No.25",
      "class": "少年漫画",
      "theme": "欢乐向  生活",
      "coverUrl": "https://images.dmzj.com/webpic/11/1114yuangaomu.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "那个人。后来…",
      "author": "成家慎一郎 三弥カズトモ ナハァト 彩乃浦助",
      "no": "No.26",
      "class": "少年漫画",
      "theme": "冒险  后宫  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/1/nagerenhoulaiv1.jpg",
      "update": "第07话",
      "status": "连载中"
    },
    {
      "name": "+想包养男子高中生的大姐姐的故事",
      "author": "英贵",
      "no": "No.27",
      "class": "少年漫画",
      "theme": "爱情  搞笑",
      "coverUrl": "https://images.dmzj.com/webpic/7/180730bynz.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "+勇者死了！是因为勇者掉进了作为村民的我挖的陷阱里",
      "author": "スバルイチ",
      "no": "No.28",
      "class": "少年漫画",
      "theme": "冒险  欢乐向  西方魔幻",
      "coverUrl": "https://images.dmzj.com/webpic/9/yzslsywyzdjlzwcmdwwdxjl111.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "打了三百年的史莱姆，不知不觉就练到了满等",
      "author": "シバユウスケ 森田季节",
      "no": "No.29",
      "class": "少年漫画",
      "theme": "欢乐向  魔法  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/19/dlsbnslmbzbjldl0000.jpg",
      "update": "第25话",
      "status": "连载中"
    },
    {
      "name": "天降之物",
      "author": "水无月すう",
      "no": "No.30",
      "class": "少年漫画",
      "theme": "欢乐向  后宫",
      "coverUrl": "https://images.dmzj.com/webpic/16/160131tianjiangzhiwufml.jpg",
      "update": "",
      "status": "已完结"
    },
    {
      "name": "+七原罪",
      "author": "铃木央",
      "no": "No.31",
      "class": "少年漫画",
      "theme": "冒险  格斗  热血",
      "coverUrl": "https://images.dmzj.com/webpic/19/0909qiyuanzuifm.jpg",
      "update": "第311话",
      "status": "连载中"
    },
    {
      "name": "+转生成为魔剑",
      "author": "丸山朝ヲ 棚架ユウ",
      "no": "No.32",
      "class": "少年漫画",
      "theme": "冒险  欢乐向  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/14/zhuanshengchegnweimojian0528.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "为什么老师会在这里！？",
      "author": "苏募ロウ",
      "no": "No.33",
      "class": "少年漫画",
      "theme": "欢乐向  爱情",
      "coverUrl": "https://images.dmzj.com/webpic/19/weishmlaoshihuizaizheli111.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "+约定的梦幻岛",
      "author": "白井カイウ 出水ぽすか",
      "no": "No.34",
      "class": "少年漫画",
      "theme": "冒险  科幻  悬疑",
      "coverUrl": "https://images.dmzj.com/webpic/10/180620menghuandaofml.jpg",
      "update": "第103话",
      "status": "连载中"
    },
    {
      "name": "+只有神知道的世界",
      "author": "若木民喜",
      "no": "No.35",
      "class": "少年漫画",
      "theme": "爱情  校园  后宫",
      "coverUrl": "https://images.dmzj.com/webpic/6/160131zhiyoushenfml.jpg",
      "update": "",
      "status": "已完结"
    },
    {
      "name": "+后街女孩",
      "author": "ジャスミン・ギュ",
      "no": "No.36",
      "class": "少年漫画",
      "theme": "欢乐向  性转换  颜艺",
      "coverUrl": "https://images.dmzj.com/webpic/9/hjnh37434l.jpg",
      "update": "",
      "status": "已完结"
    },
    {
      "name": "+火影忍者",
      "author": "岸本齐史",
      "no": "No.37",
      "class": "少年漫画",
      "theme": "冒险  热血",
      "coverUrl": "https://images.dmzj.com/webpic/5/naruto4698.jpg",
      "update": "第72卷",
      "status": "已完结"
    },
    {
      "name": "暗杀教室",
      "author": "松井优征",
      "no": "No.38",
      "class": "少年漫画",
      "theme": "冒险  悬疑  搞笑",
      "coverUrl": "https://images.dmzj.com/webpic/13/anshajiaoshi12.jpg",
      "update": "",
      "status": "已完结"
    },
    {
      "name": "别当欧尼酱了！",
      "author": "ねことうふ（猫豆腐）",
      "no": "No.39",
      "class": "少年漫画",
      "theme": "欢乐向  性转换",
      "coverUrl": "https://images.dmzj.com/webpic/18/biedangounijiangle0427.jpg",
      "update": "第28话",
      "status": "连载中"
    },
    {
      "name": "狂赌之渊",
      "author": "尚村透 河本ほむら",
      "no": "No.40",
      "class": "青年漫画",
      "theme": "校园  颜艺",
      "coverUrl": "https://images.dmzj.com/webpic/18/160131kuangduzhiyuanfml.jpg",
      "update": "第55话",
      "status": "连载中"
    },
    {
      "name": "+灵能百分百",
      "author": "ONE",
      "no": "No.41",
      "class": "少年漫画",
      "theme": "冒险",
      "coverUrl": "https://images.dmzj.com/webpic/15/guogaitou.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "+古见同学有交流障碍症",
      "author": "オダトモヒト",
      "no": "No.42",
      "class": "少年漫画",
      "theme": "欢乐向  治愈  颜艺",
      "coverUrl": "https://images.dmzj.com/webpic/13/gujian0318.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "回复术士的重来人生",
      "author": "羽贺ソウケソ 月夜泪",
      "no": "No.43",
      "class": "少年漫画",
      "theme": "冒险  西方魔幻  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/0/180330shushi1.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "为了女儿击倒魔王",
      "author": "はた。 chirolu",
      "no": "No.44",
      "class": "少年漫画",
      "theme": "冒险  魔法",
      "coverUrl": "https://images.dmzj.com/webpic/14/weilenverjidaomowang.jpg",
      "update": "第27话",
      "status": "连载中"
    },
    {
      "name": "从死亡之旅开始的异世界狂想曲",
      "author": "あやめぐむ 爱七ひろ",
      "no": "No.45",
      "class": "少年漫画",
      "theme": "冒险  西方魔幻  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/19/160202congsiwangzhilvfml.jpg",
      "update": "第55话",
      "status": "连载中"
    },
    {
      "name": "+总之就是非常可爱 fly me to the moon",
      "author": "畑健二郎",
      "no": "No.46",
      "class": "少年漫画",
      "theme": "爱情",
      "coverUrl": "https://images.dmzj.com/webpic/5/zzjsfckafmttm0225.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "再见龙生你好人生",
      "author": "くろの 永岛ひろあき",
      "no": "No.47",
      "class": "少年漫画",
      "theme": "冒险  后宫  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/18/zaijianrenshengnihaolongsheng.jpg",
      "update": "第35话",
      "status": "连载中"
    },
    {
      "name": "完全没有恋爱感情的青梅竹马",
      "author": "亘井",
      "no": "No.48",
      "class": "少年漫画",
      "theme": "爱情  校园",
      "coverUrl": "https://images.dmzj.com/webpic/8/wqmylagqdqmzm6893l.jpg",
      "update": "连载33话",
      "status": "连载中"
    },
    {
      "name": "贤惠仙狐小姐",
      "author": "リムコロ",
      "no": "No.49",
      "class": "少年漫画",
      "theme": "神鬼  治愈",
      "coverUrl": "https://images.dmzj.com/webpic/3/171020huxian.jpg",
      "update": "第37话",
      "status": "连载中"
    },
    {
      "name": "DARLING in the FRANXX",
      "author": "矢吹健太郎 code:000",
      "no": "No.50",
      "class": "少年漫画",
      "theme": "科幻  爱情  机战",
      "coverUrl": "https://images.dmzj.com/webpic/1/daling0423.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "+妄想学生会",
      "author": "氏家卜全",
      "no": "No.51",
      "class": "少年漫画",
      "theme": "欢乐向  校园  节操  搞笑",
      "coverUrl": "https://images.dmzj.com/webpic/7/wangxaingxueshenghuijuanssfengmianl.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "+元气少女缘结神",
      "author": "铃木JULIETTA",
      "no": "No.52",
      "class": "少女漫画",
      "theme": "爱情  神鬼",
      "coverUrl": "https://images.dmzj.com/webpic/3/yuanqishaonvyuanjieen.jpg",
      "update": "",
      "status": "已完结"
    },
    {
      "name": "我的妹妹是黄漫老师",
      "author": "伏见つかさ rin",
      "no": "No.53",
      "class": "少年漫画",
      "theme": "爱情  生活  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/10/wodemeimeishihuangmanlaoshiV5.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "事与愿违的不死冒险者",
      "author": "中曾根ハイジ 丘野优",
      "no": "No.54",
      "class": "少年漫画",
      "theme": "冒险  魔幻  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/1/171130maoxian.jpg",
      "update": "第16话",
      "status": "连载中"
    },
    {
      "name": "掠夺者",
      "author": "水无月すう",
      "no": "No.55",
      "class": "少年漫画",
      "theme": "冒险  爱情  奇幻",
      "coverUrl": "https://images.dmzj.com/webpic/1/ld0619l.jpg",
      "update": "第51话",
      "status": "连载中"
    },
    {
      "name": "+网购技能开启异世界美食之旅",
      "author": "赤岸K 江口连 雅",
      "no": "No.56",
      "class": "少年漫画",
      "theme": "冒险  魔法  美食  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/16/170417wanggou.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "汤摇庄的幽奈同学",
      "author": "ミウラタダヒロ",
      "no": "No.57",
      "class": "少年漫画",
      "theme": "格斗  爱情  神鬼",
      "coverUrl": "https://images.dmzj.com/webpic/18/tangyaozhuangdeyounaitongxueV6.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "从漫画了解FGO！",
      "author": "リヨ",
      "no": "No.58",
      "class": "少年漫画",
      "theme": "欢乐向  四格",
      "coverUrl": "https://images.dmzj.com/webpic/3/tongguomanhualiaojief.jpg",
      "update": "03部99话",
      "status": "连载中"
    },
    {
      "name": "表哥的搬家入住整理没法进行啦",
      "author": "吉辺あくろ",
      "no": "No.59",
      "class": "少年漫画",
      "theme": "欢乐向  伪娘",
      "coverUrl": "https://images.dmzj.com/webpic/18/biaogebanjia0618ll.jpg",
      "update": "第22话",
      "status": "连载中"
    },
    {
      "name": "理想的小白脸生活",
      "author": "渡边恒彦 日月ネコ",
      "no": "No.60",
      "class": "少年漫画",
      "theme": "欢乐向  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/1/lixiangdexiaobailianshenghuo0624l.jpg",
      "update": "第29话",
      "status": "连载中"
    },
    {
      "name": "狂野少女",
      "author": "Hun zhena",
      "no": "No.61",
      "class": "少年漫画",
      "theme": "格斗  爱情  校园  热血",
      "coverUrl": "https://images.dmzj.com/webpic/3/1112kuangyeshaonvfml.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "+欢迎来到实力至上主义的教室",
      "author": "衣笠彰梧 一乃ゆゆ",
      "no": "No.62",
      "class": "少年漫画",
      "theme": "校园  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/5/20190109slzszyjs.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "东京吃货",
      "author": "石田スイ",
      "no": "No.63",
      "class": "少年漫画",
      "theme": "冒险  美食",
      "coverUrl": "https://images.dmzj.com/webpic/15/1106fuxiaoyounafm2222.jpg",
      "update": "",
      "status": "已完结"
    },
    {
      "name": "无职转生",
      "author": "フジカワユカ 理不尽な孙の手",
      "no": "No.64",
      "class": "少年漫画",
      "theme": "冒险  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/6/wuzhizhuanshengxin.jpg",
      "update": "第52话改",
      "status": "连载中"
    },
    {
      "name": "不过是蜘蛛什么的",
      "author": "かかし朝浩 马场翁",
      "no": "No.65",
      "class": "少年漫画",
      "theme": "奇幻  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/6/181015zhizhu.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "宝石之国",
      "author": "市川春子",
      "no": "No.66",
      "class": "少女漫画",
      "theme": "神鬼",
      "coverUrl": "https://images.dmzj.com/webpic/1/180719bszg.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "+虚构推理",
      "author": "城平京 片濑茶柴",
      "no": "No.67",
      "class": "少年漫画",
      "theme": "冒险  魔幻",
      "coverUrl": "https://images.dmzj.com/webpic/17/xugoutuili.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "+伪恋",
      "author": "古味直志",
      "no": "No.68",
      "class": "少年漫画",
      "theme": "欢乐向  爱情  校园  颜艺",
      "coverUrl": "https://images.dmzj.com/webpic/17/160726weilianfml.jpg",
      "update": "",
      "status": "已完结"
    },
    {
      "name": "+魔笛MAGI",
      "author": "大高忍",
      "no": "No.69",
      "class": "少年漫画",
      "theme": "冒险  魔法  颜艺",
      "coverUrl": "https://images.dmzj.com/webpic/15/modimagiV37.jpg",
      "update": "",
      "status": "已完结"
    },
    {
      "name": "+测不准的阿波连同学",
      "author": "水あさと",
      "no": "No.70",
      "class": "少年漫画",
      "theme": "欢乐向  校园  萌系  治愈",
      "coverUrl": "https://images.dmzj.com/webpic/2/abolian0414.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "吾乃食草龙",
      "author": "イラスト*凉香 榎本快晴",
      "no": "No.71",
      "class": "少年漫画",
      "theme": "欢乐向  魔幻  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/6/wunaishicaolong.jpg",
      "update": "第09话",
      "status": "连载中"
    },
    {
      "name": "+在魔王城说晚安",
      "author": "熊之股键次",
      "no": "No.72",
      "class": "少年漫画",
      "theme": "欢乐向  奇幻",
      "coverUrl": "https://images.dmzj.com/webpic/18/mowangcheng225820190226225757.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "贤者之孙",
      "author": "绪方俊辅 吉冈刚",
      "no": "No.73",
      "class": "少年漫画",
      "theme": "冒险  魔法  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/18/xzzs68980l.jpg",
      "update": "第34-1话",
      "status": "连载中"
    },
    {
      "name": "东京吃货re",
      "author": "石田スイ",
      "no": "No.74",
      "class": "青年漫画",
      "theme": "冒险  格斗  科幻",
      "coverUrl": "https://images.dmzj.com/webpic/5/180720baitufml.jpg",
      "update": "",
      "status": "已完结"
    },
    {
      "name": "理科生坠入情网，故尝试证明。",
      "author": "山本アリフレッド",
      "no": "No.75",
      "class": "少年漫画",
      "theme": "欢乐向  爱情",
      "coverUrl": "https://images.dmzj.com/webpic/1/likeshengzhuiruqingwnagguchangshizhengmingxi.jpg",
      "update": "番外15",
      "status": "连载中"
    },
    {
      "name": "七人魔法使",
      "author": "奈央晃德 サイトウケンジ",
      "no": "No.76",
      "class": "少年漫画",
      "theme": "冒险  魔法  后宫",
      "coverUrl": "https://images.dmzj.com/webpic/4/160131qirenmofashifml.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "普通攻击是全体攻击而且能二次攻击的妈妈你喜欢吗？",
      "author": "冥茶 井中だちま",
      "no": "No.77",
      "class": "少年漫画",
      "theme": "冒险  欢乐向  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/1/putonggongjishiquantigongjierqienengercigongjidema.jpg",
      "update": "第3-3话",
      "status": "连载中"
    },
    {
      "name": "入间同学入魔了",
      "author": "西修",
      "no": "No.78",
      "class": "少年漫画",
      "theme": "魔法  搞笑",
      "coverUrl": "https://images.dmzj.com/webpic/8/20190123rjtxrml.jpg",
      "update": "第110话",
      "status": "连载中"
    },
    {
      "name": "+渡君的XX即将崩坏",
      "author": "鸣见奈留(鸣见なる)",
      "no": "No.79",
      "class": "少年漫画",
      "theme": "欢乐向  爱情  生活",
      "coverUrl": "https://images.dmzj.com/webpic/16/dujun2202234620190220234559.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "+天野惠浑身是破绽！",
      "author": "ねこぐち",
      "no": "No.80",
      "class": "少年漫画",
      "theme": "欢乐向  爱情  校园",
      "coverUrl": "https://images.dmzj.com/webpic/19/190226qianye.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "求你揉一揉吧",
      "author": "仲岛步",
      "no": "No.81",
      "class": "少年漫画",
      "theme": "爱情  节操",
      "coverUrl": "https://images.dmzj.com/webpic/11/170831rourou.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "即使是不起眼剑圣亦是最强",
      "author": "あっぺ 明石六郎",
      "no": "No.82",
      "class": "少年漫画",
      "theme": "冒险  魔幻  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/3/jishishibuqiyanjianshengyishizuiqiang48695694l.jpg",
      "update": "第19话",
      "status": "连载中"
    },
    {
      "name": "愚蠢天使与恶魔共舞",
      "author": "アズマサワヨシ",
      "no": "No.83",
      "class": "少年漫画",
      "theme": "欢乐向  校园  魔幻",
      "coverUrl": "https://images.dmzj.com/webpic/1/yuchuntianshiyuemogongwuV3.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "不熟练的两人",
      "author": "カワハラ恋",
      "no": "No.84",
      "class": "少年漫画",
      "theme": "欢乐向  爱情",
      "coverUrl": "https://images.dmzj.com/webpic/13/bsldlr190620.jpg",
      "update": "第17话",
      "status": "连载中"
    },
    {
      "name": "被传送到异世界参加令人困扰的死亡游戏",
      "author": "水あさと",
      "no": "No.85",
      "class": "少年漫画",
      "theme": "冒险  欢乐向  魔幻",
      "coverUrl": "https://images.dmzj.com/webpic/9/180712bsdysj.jpg",
      "update": "第15话",
      "status": "连载中"
    },
    {
      "name": "+打工吧魔王大人",
      "author": "柊暁生 和原聪司",
      "no": "No.86",
      "class": "少年漫画",
      "theme": "欢乐向",
      "coverUrl": "https://images.dmzj.com/webpic/18/dagongmowang07.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "关我碧事",
      "author": "松本ナミル ",
      "no": "No.87",
      "class": "少年漫画",
      "theme": "欢乐向  爱情  四格",
      "coverUrl": "https://images.dmzj.com/webpic/6/QQbicny20170803221653.png",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "Re:Monster",
      "author": "小早川ハルヨシ 金斩儿狐",
      "no": "No.88",
      "class": "少年漫画",
      "theme": "冒险  奇幻  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/17/160202remonsterfml.jpg",
      "update": "第50话",
      "status": "连载中"
    },
    {
      "name": "+如果有妹妹就好了@comic",
      "author": "平坂读 い～どぅ～",
      "no": "No.89",
      "class": "少年漫画",
      "theme": "爱情  后宫  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/19/ruguoyoumeimei03029.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "社畜女梦魔的故事",
      "author": "ゲンツキ",
      "no": "No.90",
      "class": "少年漫画",
      "theme": "欢乐向  爱情",
      "coverUrl": "https://images.dmzj.com/webpic/4/scnmy0119.jpg",
      "update": "第14话",
      "status": "连载中"
    },
    {
      "name": "恋爱四格小剧场",
      "author": "若林稔弥",
      "no": "No.91",
      "class": "少年漫画",
      "theme": "爱情  四格  治愈",
      "coverUrl": "https://images.dmzj.com/webpic/5/lianaiige0730.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "两小复无猜",
      "author": "新挑限(ばかやろう)",
      "no": "No.92",
      "class": "少年漫画",
      "theme": "欢乐向  爱情",
      "coverUrl": "https://images.dmzj.com/webpic/19/180113liangxiaofuwucaifml.jpg",
      "update": "第13话",
      "status": "连载中"
    },
    {
      "name": "为何无人记得我的世界",
      "author": "细音启  ありかん",
      "no": "No.93",
      "class": "少年漫画",
      "theme": "冒险  魔幻  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/3/xy0614l.jpg",
      "update": "第14.2话",
      "status": "连载中"
    },
    {
      "name": "回家路上捡到的老婆闺女、居然是龙",
      "author": "不确定ワオン 天野こひつじ",
      "no": "No.94",
      "class": "少年漫画",
      "theme": "欢乐向  魔法  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/13/huijia20190221.jpg",
      "update": "第08话",
      "status": "连载中"
    },
    {
      "name": "转生猪公爵，这次想说喜欢你",
      "author": "fujy 合田拍子",
      "no": "No.95",
      "class": "少年漫画",
      "theme": "欢乐向  爱情  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/13/ft0907l.jpg",
      "update": "第15话",
      "status": "连载中"
    },
    {
      "name": "野生的最终BOSS出现了",
      "author": "叶月翼 炎头",
      "no": "No.96",
      "class": "少年漫画",
      "theme": "冒险  魔法  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/1/yeshengdezuizhongbosschuxianle.jpg",
      "update": "第22话",
      "status": "连载中"
    },
    {
      "name": "天空追击",
      "author": "大羽隆广 三浦追傩",
      "no": "No.97",
      "class": "少年漫画",
      "theme": "冒险  惊悚",
      "coverUrl": "https://images.dmzj.com/webpic/4/tiankongqianfan0507l.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "+不要欺负我、长瀞同学",
      "author": "774nanash",
      "no": "No.98",
      "class": "少年漫画",
      "theme": "爱情  校园",
      "coverUrl": "https://images.dmzj.com/webpic/17/changjing1008.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "身为暗杀者的我明显比勇者还强",
      "author": "合鸭ひろゆき 赤井まつり",
      "no": "No.99",
      "class": "少年漫画",
      "theme": "冒险  魔法  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/17/181212anshazhe.jpg",
      "update": "第08话",
      "status": "连载中"
    },
    {
      "name": "失格纹的最强贤者～世界最强的贤者为了变得更强而转生了～",
      "author": "肝匠 冯昊 进行诸岛",
      "no": "No.100",
      "class": "少年漫画",
      "theme": "冒险  魔法  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/8/sgwdzqxz0317.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "+拳愿阿修罗",
      "author": "サンドロビッチ·ヤバ子 だろめおん",
      "no": "No.101",
      "class": "少年漫画",
      "theme": "格斗  竞技  颜艺",
      "coverUrl": "https://images.dmzj.com/webpic/18/170626quany.jpg",
      "update": "",
      "status": "已完结"
    },
    {
      "name": "青春期笨蛋不做兔女郎学姐的梦",
      "author": "鸭志田一 七宫つぐ实",
      "no": "No.102",
      "class": "少年漫画",
      "theme": "爱情  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/11/180910qcqbd.jpg",
      "update": "剧场版视觉图",
      "status": "已完结"
    },
    {
      "name": "路人上班族和不良女高中生",
      "author": "玉姬なお",
      "no": "No.103",
      "class": "少女漫画",
      "theme": "欢乐向  爱情  生活",
      "coverUrl": "https://images.dmzj.com/webpic/3/lurenshangbanzuhblngzs.jpg",
      "update": "特别篇",
      "status": "连载中"
    },
    {
      "name": "世界终焉的世界录 ",
      "author": "细音启  雨水龙",
      "no": "No.104",
      "class": "少年漫画",
      "theme": "魔法  后宫  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/9/190606shijiezhongyanfml.jpg",
      "update": "第36话",
      "status": "连载中"
    },
    {
      "name": "失禁少女",
      "author": "ソウマトウ",
      "no": "No.105",
      "class": "少年漫画",
      "theme": "欢乐向  爱情  节操",
      "coverUrl": "https://images.dmzj.com/webpic/17/shijinshaonvxin.jpg",
      "update": "",
      "status": "已完结"
    },
    {
      "name": "见面之后5秒开始战斗",
      "author": "はらわたさいぞう みやこかしわ",
      "no": "No.106",
      "class": "少年漫画",
      "theme": "冒险  悬疑  奇幻",
      "coverUrl": "https://images.dmzj.com/webpic/0/xywumiao190602.jpg",
      "update": "第88话",
      "status": "连载中"
    },
    {
      "name": "异世界风流记～既然难得获得了外挂那么就想要随心所欲的活着～",
      "author": "水龙敬 ブッチャーU ムンムン",
      "no": "No.107",
      "class": "少年漫画",
      "theme": "冒险",
      "coverUrl": "https://images.dmzj.com/webpic/11/yijiefengliuji.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "婚戒物语",
      "author": "めいびい",
      "no": "No.108",
      "class": "少年漫画",
      "theme": "冒险  爱情  后宫  奇幻",
      "coverUrl": "https://images.dmzj.com/webpic/4/hunjiewuyuV3.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "哥布林杀手外传：第一年",
      "author": "荣田健人",
      "no": "No.109",
      "class": "少年漫画",
      "theme": "冒险  魔法  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/19/gelinbowaizhuan.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "+柯南",
      "author": "青山刚昌",
      "no": "No.110",
      "class": "少年漫画",
      "theme": "侦探",
      "coverUrl": "https://images.dmzj.com/webpic/16/160131kenanfml.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "异世界悠闲农家",
      "author": "剑康之 内藤骑之介",
      "no": "No.111",
      "class": "少年漫画",
      "theme": "冒险  生活  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/11/yishijieyouxiannongjia.jpg",
      "update": "第80话",
      "status": "连载中"
    },
    {
      "name": "+死神",
      "author": "久保带人",
      "no": "No.112",
      "class": "少年漫画",
      "theme": "冒险  热血",
      "coverUrl": "https://images.dmzj.com/webpic/6/bleach.jpg",
      "update": "设定集10",
      "status": "已完结"
    },
    {
      "name": "消极勇者与魔王军干部",
      "author": "ハマちょん",
      "no": "No.113",
      "class": "少年漫画",
      "theme": "冒险  欢乐向  魔法",
      "coverUrl": "https://images.dmzj.com/webpic/6/xiaojiyonghze20180715.jpg",
      "update": "第11话",
      "status": "连载中"
    },
    {
      "name": "双叶家的姐弟",
      "author": "佃煮のりお",
      "no": "No.114",
      "class": "青年漫画",
      "theme": "校园  生活  伪娘",
      "coverUrl": "https://images.dmzj.com/webpic/15/170725shuangye.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "+骸骨骑士大人异世界冒险中",
      "author": "秤猿鬼 サワノアキラ",
      "no": "No.115",
      "class": "少年漫画",
      "theme": "冒险  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/12/haiguqishidarenyishijiemaoxianzhong0328.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "简明易懂的SCP",
      "author": "松(A･TYPEcorp.)",
      "no": "No.116",
      "class": "少年漫画",
      "theme": "科幻",
      "coverUrl": "https://images.dmzj.com/webpic/10/170718scp.jpg",
      "update": "第130话",
      "status": "连载中"
    },
    {
      "name": "邪神与厨二病少女",
      "author": "ユキヲ",
      "no": "No.117",
      "class": "少年漫画",
      "theme": "欢乐向  魔法  宅系",
      "coverUrl": "https://images.dmzj.com/webpic/15/bilanhangxianguanfangmanhua111.jpg",
      "update": "第142话",
      "status": "连载中"
    },
    {
      "name": "+一旦妹控哥哥与兄控妹妹变得坦率",
      "author": "叶乃はるか",
      "no": "No.118",
      "class": "少年漫画",
      "theme": "爱情  校园  生活",
      "coverUrl": "https://images.dmzj.com/webpic/9/meikonggegeyuxiongkongmeimeibianchengshi.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "这个勇者明明超强却过分慎重",
      "author": "こゆき 土日月",
      "no": "No.119",
      "class": "少年漫画",
      "theme": "魔法  轻小说  搞笑",
      "coverUrl": "https://images.dmzj.com/webpic/7/zgyzmmcq190513.jpg",
      "update": "第08话",
      "status": "连载中"
    },
    {
      "name": "更衣人偶坠入爱河",
      "author": "福田晋一",
      "no": "No.120",
      "class": "少年漫画",
      "theme": "爱情  校园",
      "coverUrl": "https://images.dmzj.com/webpic/8/181119gyrozrah.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "小弟的我与热恋的番长",
      "author": "鹿岛初",
      "no": "No.121",
      "class": "少年漫画",
      "theme": "欢乐向  爱情  校园",
      "coverUrl": "https://images.dmzj.com/webpic/14/xiaodewoyureliandefanzhang111.jpg",
      "update": "第33话",
      "status": "连载中"
    },
    {
      "name": "治愈魔法的错误使用方法",
      "author": "九我山レキ くろかた",
      "no": "No.122",
      "class": "少年漫画",
      "theme": "格斗  魔法  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/12/190219zhiyu.jpg",
      "update": "第20话",
      "status": "连载中"
    },
    {
      "name": "让人无法抱怨的爱情喜剧",
      "author": "铃木大辅 肋兵器",
      "no": "No.123",
      "class": "少年漫画",
      "theme": "欢乐向  爱情  校园  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/8/160202rangrenwufabaoyuanfml.jpg",
      "update": "第44话",
      "status": "连载中"
    },
    {
      "name": "舌尖上的地下城",
      "author": "九井谅子",
      "no": "No.124",
      "class": "少年漫画",
      "theme": "冒险  美食  颜艺",
      "coverUrl": "https://images.dmzj.com/webpic/5/shejian20190531.jpg",
      "update": "55话试看",
      "status": "连载中"
    },
    {
      "name": "+异世界的魔法太落后了",
      "author": "樋辻卧命 COMTA",
      "no": "No.125",
      "class": "少年漫画",
      "theme": "冒险  魔法  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/11/yishijiedemofatailuohoule.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "The New Gate",
      "author": "风波しのぎ 三轮ヨツユキ",
      "no": "No.126",
      "class": "少年漫画",
      "theme": "冒险  科幻  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/5/thenewgate.jpg",
      "update": "第46话",
      "status": "连载中"
    },
    {
      "name": "第一次的Gal",
      "author": "植野メグル",
      "no": "No.127",
      "class": "少年漫画",
      "theme": "欢乐向  爱情  校园",
      "coverUrl": "https://images.dmzj.com/webpic/3/180709dycdgal.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "+初恋僵尸",
      "author": "峰浪了(峰浪りょう)",
      "no": "No.128",
      "class": "少年漫画",
      "theme": "欢乐向  爱情",
      "coverUrl": "https://images.dmzj.com/webpic/17/190224cljs.jpg",
      "update": "",
      "status": "已完结"
    },
    {
      "name": "我家女仆是变态",
      "author": "saku",
      "no": "No.129",
      "class": "少年漫画",
      "theme": "欢乐向",
      "coverUrl": "https://images.dmzj.com/webpic/1/meidoushibiantai0415.jpg",
      "update": "第73话",
      "status": "连载中"
    },
    {
      "name": "大贵族",
      "author": "孙继浩 李光秀",
      "no": "No.130",
      "class": "少年漫画",
      "theme": "奇幻",
      "coverUrl": "https://images.dmzj.com/webpic/8/dadaguizhu.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "我家女友可不止可爱呢 ",
      "author": "真木萤五",
      "no": "No.131",
      "class": "少年漫画",
      "theme": "欢乐向  爱情",
      "coverUrl": "https://images.dmzj.com/webpic/13/190614wjnykbzkan.jpg",
      "update": "连载24",
      "status": "连载中"
    },
    {
      "name": "为这美好世界献上祝福",
      "author": "渡真仁 晓なつめ",
      "no": "No.132",
      "class": "少年漫画",
      "theme": "冒险  魔法  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/12/wmhdsjxszf190222.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "+世界还是女友这是个问题",
      "author": "内山敦司",
      "no": "No.133",
      "class": "少年漫画",
      "theme": "爱情",
      "coverUrl": "https://images.dmzj.com/webpic/13/shijie.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "想要成为影之实力者",
      "author": "坂野杏梨 逢泽大介",
      "no": "No.134",
      "class": "少年漫画",
      "theme": "魔幻  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/15/20181226xycwyzslz.jpg",
      "update": "第06话",
      "status": "连载中"
    },
    {
      "name": "最强魔法师的隐遁计划",
      "author": "うおぬまゆう イズシロ",
      "no": "No.135",
      "class": "少年漫画",
      "theme": "爱情  魔法  校园  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/3/zuiqiangmofashiyidujihua.jpg",
      "update": "第08话",
      "status": "连载中"
    },
    {
      "name": "肥宅勇者",
      "author": "弘松凉 上月ヲサム",
      "no": "No.136",
      "class": "少年漫画",
      "theme": "冒险  欢乐向",
      "coverUrl": "https://images.dmzj.com/webpic/14/001feizhaiyongzhe720.jpg",
      "update": "第10话",
      "status": "连载中"
    },
    {
      "name": "转生吸血鬼桑想要午睡一下",
      "author": "咲良 ちょきんぎょ 47AgDragon",
      "no": "No.137",
      "class": "少年漫画",
      "theme": "魔法  性转换  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/2/zhuanshengxixueguiyaowusuiyixia.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "地狱三头犬的日常",
      "author": "樱井亚都",
      "no": "No.138",
      "class": "少年漫画",
      "theme": "欢乐向  爱情  后宫",
      "coverUrl": "https://images.dmzj.com/webpic/5/diyusantouquanderichangV2.jpg",
      "update": "第56话",
      "status": "已完结"
    },
    {
      "name": "+虫奉行",
      "author": "福田宏",
      "no": "No.139",
      "class": "少年漫画",
      "theme": "冒险",
      "coverUrl": "https://images.dmzj.com/webpic/8/0209chongfengxingfml.jpg",
      "update": "",
      "status": "已完结"
    },
    {
      "name": "唐山葬",
      "author": "otosama",
      "no": "No.140",
      "class": "青年漫画",
      "theme": "欢乐向  节操",
      "coverUrl": "https://images.dmzj.com/webpic/4/0201tangsanzhan1l.jpg",
      "update": "第47话下",
      "status": "连载中"
    },
    {
      "name": "29与JK",
      "author": "裕时悠示 加藤かきと",
      "no": "No.141",
      "class": "少年漫画",
      "theme": "爱情  职场  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/15/18110529yjk.jpg",
      "update": "第17话",
      "status": "连载中"
    },
    {
      "name": "老爷爷还不会死",
      "author": "まどろみ太郎",
      "no": "No.142",
      "class": "少年漫画",
      "theme": "欢乐向  爱情",
      "coverUrl": "https://images.dmzj.com/webpic/15/caibushilaoyeye.jpg",
      "update": "第16话",
      "status": "连载中"
    },
    {
      "name": "群聚一堂！西顿学园",
      "author": "山下文吾",
      "no": "No.143",
      "class": "少年漫画",
      "theme": "欢乐向  爱情  校园",
      "coverUrl": "https://images.dmzj.com/webpic/9/1126xidunxueyuan.jpg",
      "update": "第77话",
      "status": "连载中"
    },
    {
      "name": "重生的猫骑士与精灵娘的日常",
      "author": "东云太郎 银翼のぞみ",
      "no": "No.144",
      "class": "少年漫画",
      "theme": "冒险  魔法  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/12/maoqishi0330.jpg",
      "update": "第15话",
      "status": "连载中"
    },
    {
      "name": "+超能力者齐木楠雄的灾难",
      "author": "麻生周一",
      "no": "No.145",
      "class": "少年漫画",
      "theme": "欢乐向",
      "coverUrl": "https://images.dmzj.com/webpic/11/160202chaonenglifml.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "MoMo-the blood taker",
      "author": "杉户アキラ",
      "no": "No.146",
      "class": "青年漫画",
      "theme": "冒险  悬疑",
      "coverUrl": "https://images.dmzj.com/webpic/8/momodegjr0420.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "+笨女孩",
      "author": "ヒロユキ",
      "no": "No.147",
      "class": "少年漫画",
      "theme": "欢乐向  四格  节操",
      "coverUrl": "https://images.dmzj.com/webpic/7/bennvhail.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "月光下的异世界之旅",
      "author": "あずみ圭 木野コトラ",
      "no": "No.148",
      "class": "少年漫画",
      "theme": "冒险  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/18/181015yueg.jpg",
      "update": "第38话",
      "status": "连载中"
    },
    {
      "name": "魔奴嫁",
      "author": "手岛史词 板桓ハコ",
      "no": "No.149",
      "class": "少年漫画",
      "theme": "冒险  魔法  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/3/monujia0813vbv.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "终将成为你",
      "author": "仲谷鳰(仲谷)",
      "no": "No.150",
      "class": "少年漫画",
      "theme": "百合",
      "coverUrl": "https://images.dmzj.com/webpic/16/zj0427l.jpg",
      "update": "第42话",
      "status": "连载中"
    },
    {
      "name": "自称贤者弟子的贤者",
      "author": "すえみつぢっか  りゅうせんひろつぐ",
      "no": "No.151",
      "class": "少年漫画",
      "theme": "冒险  魔法  性转换  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/6/181119zcxzdzdxzgai.jpg",
      "update": "第33话",
      "status": "连载中"
    },
    {
      "name": "异世界迷宫黑心企业",
      "author": "安村洋平",
      "no": "No.152",
      "class": "少年漫画",
      "theme": "冒险",
      "coverUrl": "https://images.dmzj.com/webpic/3/heixin20180906.jpg",
      "update": "莉姆的一天",
      "status": "连载中"
    },
    {
      "name": "刺客守则",
      "author": "加藤よし江 天城ケイ",
      "no": "No.153",
      "class": "少年漫画",
      "theme": "冒险  格斗  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/14/cikeshouzeV2.jpg",
      "update": "第23话",
      "status": "连载中"
    },
    {
      "name": "不正经的魔术讲师与禁忌教典",
      "author": "羊太郎 常深アオサ",
      "no": "No.154",
      "class": "少年漫画",
      "theme": "魔法  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/17/bzjdmsjsyjjjdfengmianl.jpg",
      "update": "第35话",
      "status": "连载中"
    },
    {
      "name": "+寄宿学校的朱丽叶",
      "author": "金田阳介",
      "no": "No.155",
      "class": "少年漫画",
      "theme": "爱情  校园",
      "coverUrl": "https://images.dmzj.com/webpic/17/jisuxuexiaodezhliye20190101235604.jpg",
      "update": "第100话",
      "status": "连载中"
    },
    {
      "name": "平凡士兵梦回过去",
      "author": "丘野优 铃木イゾ",
      "no": "No.156",
      "class": "少年漫画",
      "theme": "冒险  魔法  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/4/pingfanshibingmenghuiguoqu.jpg",
      "update": "第28话",
      "status": "连载中"
    },
    {
      "name": "灌篮高手全国大赛篇(全彩版本)",
      "author": "井上雄彦",
      "no": "No.157",
      "class": "少年漫画",
      "theme": "竞技",
      "coverUrl": "https://images.dmzj.com/webpic/12/sdqc2010.jpg",
      "update": "第77话",
      "status": "已完结"
    },
    {
      "name": "+死神少爷与黑女仆",
      "author": "井上小春",
      "no": "No.158",
      "class": "少年漫画",
      "theme": "爱情  魔法",
      "coverUrl": "https://images.dmzj.com/webpic/12/sishenshaoyeyuheinvpu0804vbvb.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "狂怒的暴食 ～只有我突破了等级这概念～",
      "author": "滝乃大祐 一色一凛",
      "no": "No.159",
      "class": "少年漫画",
      "theme": "冒险  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/10/0606kuangnudebaoshizhiyouwo.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "班级同学都被召唤到异世界，只有我幸存下来",
      "author": "上田キク サザンテラス",
      "no": "No.160",
      "class": "少年漫画",
      "theme": "魔法  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/18/zh0614l.jpg",
      "update": "第14话（后篇）",
      "status": "连载中"
    },
    {
      "name": "+因为会长大人是未婚夫",
      "author": "华夜",
      "no": "No.161",
      "class": "少女漫画",
      "theme": "爱情",
      "coverUrl": "https://images.dmzj.com/webpic/8/160131huizhangdarenfml.jpg",
      "update": "",
      "status": "已完结"
    },
    {
      "name": "我的现实是恋爱游戏",
      "author": "彭杰 わるいおとこ 奈栩",
      "no": "No.162",
      "class": "少年漫画",
      "theme": "爱情  侦探  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/18/wdexianshislianaiyouxi0426.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "我是魔王。与女勇者的母亲再婚后变成了女勇者的爸爸",
      "author": "森田季节 郁桥むいこ",
      "no": "No.163",
      "class": "少年漫画",
      "theme": "爱情  魔法  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/14/190106mowang2fml.jpg",
      "update": "第13话",
      "status": "连载中"
    },
    {
      "name": "+旋风管家",
      "author": "畑健二郎",
      "no": "No.164",
      "class": "少年漫画",
      "theme": "欢乐向  后宫",
      "coverUrl": "https://images.dmzj.com/webpic/19/xfgjV2.jpg",
      "update": "",
      "status": "已完结"
    },
    {
      "name": "刃牙道",
      "author": "板垣惠介",
      "no": "No.165",
      "class": "少年漫画",
      "theme": "格斗  颜艺",
      "coverUrl": "https://images.dmzj.com/webpic/9/renyadaoxinfnem107.jpg",
      "update": "第198话",
      "status": "已完结"
    },
    {
      "name": "转生之后的我变成了龙蛋~目标乃是世界最强~",
      "author": "RIO 猫子",
      "no": "No.166",
      "class": "少年漫画",
      "theme": "冒险  魔法  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/0/zhuanshengzhihoudewobianchenglelongdan.jpg",
      "update": "第08话",
      "status": "连载中"
    },
    {
      "name": "女主陷阱",
      "author": "十三木考",
      "no": "No.167",
      "class": "少年漫画",
      "theme": "校园  伪娘",
      "coverUrl": "https://images.dmzj.com/webpic/2/nvzuxianjxx.jpg",
      "update": "第27.2话",
      "status": "连载中"
    },
    {
      "name": "废柴女友爱撒娇",
      "author": "よしだもろへ",
      "no": "No.168",
      "class": "少年漫画",
      "theme": "爱情  生活",
      "coverUrl": "https://images.dmzj.com/webpic/10/feicainvyouaisajiao0506.jpg",
      "update": "",
      "status": "已完结"
    },
    {
      "name": "佐仓同学有你的指名哦",
      "author": "森みさき",
      "no": "No.169",
      "class": "少年漫画",
      "theme": "欢乐向  伪娘",
      "coverUrl": "https://images.dmzj.com/webpic/15/zuocangtongxueyounidezhimingo.jpg",
      "update": "第19话",
      "status": "已完结"
    },
    {
      "name": "毒贽Cooking",
      "author": "水无月すう",
      "no": "No.170",
      "class": "少年漫画",
      "theme": "欢乐向  魔幻",
      "coverUrl": "https://images.dmzj.com/webpic/8/duzhicooking.jpg",
      "update": "第20话",
      "status": "连载中"
    },
    {
      "name": "彼得·格里尔的贤者时间",
      "author": "桧山大辅",
      "no": "No.171",
      "class": "少年漫画",
      "theme": "欢乐向  后宫",
      "coverUrl": "https://images.dmzj.com/webpic/10/xianzhe20190531.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "僵尸百分百",
      "author": "麻生羽吕 高田康太郎",
      "no": "No.172",
      "class": "少年漫画",
      "theme": "欢乐向",
      "coverUrl": "https://images.dmzj.com/webpic/14/jiangshibaifenbai0628.jpg",
      "update": "第08话",
      "status": "连载中"
    },
    {
      "name": "骑乘之王",
      "author": "马场康志",
      "no": "No.173",
      "class": "少年漫画",
      "theme": "冒险  魔幻",
      "coverUrl": "https://images.dmzj.com/webpic/6/190528qichengfml.jpg",
      "update": "第13话",
      "status": "连载中"
    },
    {
      "name": "重生勇者面露冷笑 步上复仇之路",
      "author": "四方屋やも 木塚ネロ ",
      "no": "No.174",
      "class": "少年漫画",
      "theme": "冒险  魔法  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/10/2chongshengyongnzhe312245.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "最强的职业不是勇者也不是贤者好像是鉴定士(伪)的样子",
      "author": "あてきち 武田充司",
      "no": "No.175",
      "class": "少年漫画",
      "theme": "冒险  欢乐向  爱情  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/0/zuiqiangzhiyebushiyongzheshijiandingshi.png",
      "update": "第13话",
      "status": "连载中"
    },
    {
      "name": "+山田和七个魔女",
      "author": "吉河美希",
      "no": "No.176",
      "class": "少年漫画",
      "theme": "欢乐向  爱情  校园",
      "coverUrl": "https://images.dmzj.com/webpic/13/shantianjun1l.jpg",
      "update": "圣诞节短篇与2018新年贺岁",
      "status": "已完结"
    },
    {
      "name": "为了拯救世界 能和亚人（我）度过事后的早晨吗？",
      "author": "音井れこ丸",
      "no": "No.177",
      "class": "少年漫画",
      "theme": "欢乐向  爱情  魔幻",
      "coverUrl": "https://images.dmzj.com/webpic/0/weilezhengjiushijienengheyarenwoduguo.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "勇者辞职不干了",
      "author": "风都野丽(风都ノリ) クオンタム",
      "no": "No.178",
      "class": "少年漫画",
      "theme": "冒险  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/12/190224yzczbgl.jpg",
      "update": "第09话",
      "status": "连载中"
    },
    {
      "name": "药屋少女的呢喃",
      "author": "ねこクラゲ 日向夏",
      "no": "No.179",
      "class": "青年漫画",
      "theme": "历史  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/4/ywsndnn190327.jpg",
      "update": "第25话",
      "status": "连载中"
    },
    {
      "name": "剃须，然后捡到女高中生",
      "author": "しめさば 足立いまる",
      "no": "No.180",
      "class": "少年漫画",
      "theme": "爱情  生活  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/18/tixudao0515.jpg",
      "update": "第07话",
      "status": "连载中"
    },
    {
      "name": "明明从最强职业《龙骑士》转职成了初级职业《送货人》、却为何依然备受勇者们的青睐呢",
      "author": "幸路 あまうい白一",
      "no": "No.181",
      "class": "少年漫画",
      "theme": "冒险  西方魔幻",
      "coverUrl": "https://images.dmzj.com/webpic/7/181006nbdlqsbclj.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "+你遭难了吗？",
      "author": "さがら梨々 冈本健太郎",
      "no": "No.182",
      "class": "少年漫画",
      "theme": "冒险  百合",
      "coverUrl": "https://images.dmzj.com/webpic/2/nizaonanlema0409.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "好比是最终迷宫前的少年到新手村生活一般的故事",
      "author": "卧待始 サトウとシオ",
      "no": "No.183",
      "class": "少年漫画",
      "theme": "冒险  魔法  轻小说  搞笑",
      "coverUrl": "https://images.dmzj.com/webpic/11/hbszzmgqdsndxscshybdgs111.jpg",
      "update": "第19话",
      "status": "连载中"
    },
    {
      "name": "别哭啊魔王酱",
      "author": "エンチ",
      "no": "No.184",
      "class": "少年漫画",
      "theme": "欢乐向  魔幻",
      "coverUrl": "https://images.dmzj.com/webpic/16/biekuamowangjiang.jpg",
      "update": "第25.5话",
      "status": "连载中"
    },
    {
      "name": "今天开始当女子小学生",
      "author": "牛乳のみお(牛乳乃澪)",
      "no": "No.185",
      "class": "少年漫画",
      "theme": "欢乐向  萌系  性转换",
      "coverUrl": "https://images.dmzj.com/webpic/4/jtksdnzxss668l.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "坠落JK与废人老师",
      "author": "SORA",
      "no": "No.186",
      "class": "少女漫画",
      "theme": "爱情  校园",
      "coverUrl": "https://images.dmzj.com/webpic/18/duoluojkyufeirenlaoshi.jpg",
      "update": "第24话",
      "status": "连载中"
    },
    {
      "name": "通过扭蛋增加同伴，做成最强美少女军团",
      "author": "ちんくるり 晴野しゅー",
      "no": "No.187",
      "class": "少年漫画",
      "theme": "冒险  欢乐向  魔幻  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/17/tgndzjtbzczqmsnjt.jpg",
      "update": "第10话",
      "status": "连载中"
    },
    {
      "name": "双星之阴阳师",
      "author": "助野嘉昭",
      "no": "No.188",
      "class": "少年漫画",
      "theme": "冒险  神鬼",
      "coverUrl": "https://images.dmzj.com/webpic/8/160131shuangxing2fml.jpg",
      "update": "第63话试看",
      "status": "连载中"
    },
    {
      "name": "不堪一击",
      "author": "色白好",
      "no": "No.189",
      "class": "少年漫画",
      "theme": "爱情  生活",
      "coverUrl": "https://images.dmzj.com/webpic/17/bukanyiji0621.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "关于前辈很烦人的事",
      "author": "しろまんた",
      "no": "No.190",
      "class": "少年漫画",
      "theme": "爱情  职场",
      "coverUrl": "https://images.dmzj.com/webpic/12/fr0415l.jpg",
      "update": "第76话",
      "status": "连载中"
    },
    {
      "name": "+姐姐的妄想日记",
      "author": "田口ケンジ",
      "no": "No.191",
      "class": "少年漫画",
      "theme": "欢乐向  节操",
      "coverUrl": "https://images.dmzj.com/webpic/13/jjwangxiangrijifengmianl.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "圣癖✟樱之丘",
      "author": "里好 夕仁",
      "no": "No.192",
      "class": "少年漫画",
      "theme": "欢乐向  校园  百合",
      "coverUrl": "https://images.dmzj.com/webpic/14/181026sqqp.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "Leave nest",
      "author": "堂本裕贵",
      "no": "No.193",
      "class": "少年漫画",
      "theme": "爱情  校园  生活",
      "coverUrl": "https://images.dmzj.com/webpic/6/181010mkjxs.jpg",
      "update": "外传05",
      "status": "已完结"
    },
    {
      "name": "+我的女友棒极啦！",
      "author": "伊织 高田タカミ",
      "no": "No.194",
      "class": "少年漫画",
      "theme": "欢乐向  爱情  四格  生活",
      "coverUrl": "https://images.dmzj.com/webpic/0/wodenvyoubangjila.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "恋爱暴君",
      "author": "三星めがね",
      "no": "No.195",
      "class": "少年漫画",
      "theme": "欢乐向  爱情",
      "coverUrl": "https://images.dmzj.com/webpic/18/lianaidebaojun.jpg",
      "update": "单行附赠",
      "status": "已完结"
    },
    {
      "name": "+美食的俘虏",
      "author": "岛袋光年",
      "no": "No.196",
      "class": "少年漫画",
      "theme": "格斗  美食",
      "coverUrl": "https://images.dmzj.com/webpic/10/meishidefulu20110505.jpg",
      "update": "",
      "status": "已完结"
    },
    {
      "name": "龙珠超",
      "author": "鸟山明 とよたろう",
      "no": "No.197",
      "class": "少年漫画",
      "theme": "冒险  格斗",
      "coverUrl": "https://images.dmzj.com/webpic/12/longzhuchaoV2.jpg",
      "update": "第42话",
      "status": "连载中"
    },
    {
      "name": "路人女主的养成方法-恋爱节拍器",
      "author": "武者サブ 丸户史明",
      "no": "No.198",
      "class": "少年漫画",
      "theme": "爱情  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/3/lrnzdycffwzx.png",
      "update": "第51话试看",
      "status": "已完结"
    },
    {
      "name": "神眼勇者",
      "author": "ファースト 白濑岬",
      "no": "No.199",
      "class": "少年漫画",
      "theme": "冒险  魔幻  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/12/duyanongzx.jpg",
      "update": "",
      "status": "连载中"
    },
    {
      "name": "原最强剑士憧憬着异世界魔法",
      "author": "天乃ちはる 红月シン",
      "no": "No.200",
      "class": "少年漫画",
      "theme": "冒险  魔法  轻小说",
      "coverUrl": "https://images.dmzj.com/webpic/11/yuanzuiqinjianshix.jpg",
      "update": "第16话",
      "status": "连载中"
    }
  ]
  let c = []
  for (let i = 0; i < d.length; i++) {
    let a = d[i].theme
    // log(toArray(a))
    c.push(toArray(a))
  }
  // log(c)
  return c

}
const deepFlat = (array) => {
  let res = []
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      res = res.concat(deepFlat(array[i]))
    } else {
      res.push(array[i])
    }
  }
  // log(res)
  return res
}
const f = (a) => {
  let arr = []
  for (let i = 0; i < a.length; i++) {
    arr[i] = {}
    arr[i].theme = a[i]
  }
  return arr
}
// 把 json 格式字符串写入到 文件 中
const saveManga = (mangas) => {
  let s = JSON.stringify(mangas, null, 2)
  let path = 'manga.json'
  fs.writeFileSync(path, s)
}
const __main = () => {
  let a = deepFlat(mangaJSON())
  let b = f(a)
  saveManga(b)
}
__main()
