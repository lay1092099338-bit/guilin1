
import { DayPlan } from './types';

export const ITINERARY: DayPlan[] = [
  {
    day: 1,
    title: "启程与山水初见",
    route: "广州 -> 桂林",
    driveTime: "约 5.5 小时 / 480km",
    highlights: ["象鼻山夜景", "两江四湖码头", "桂林米粉初体验"],
    attractions: [
      {
        name: "象鼻山",
        description: "桂林的城徽，春节期间会有贺岁灯光秀，夜游更加迷人。",
        tags: ["城徽", "必打卡", "夜景"],
        image: "https://picsum.photos/seed/guilin1/800/600"
      },
      {
        name: "两江四湖",
        description: "乘船环游桂林核心水系，感受“城在景中，景在城中”的园林风貌。",
        tags: ["游船", "浪漫", "夜生活"],
        image: "https://picsum.photos/seed/guilin2/800/600"
      }
    ],
    tips: "建议避开春节出行首日上午高峰，中午出发可避开广州出城拥堵。晚餐推荐‘小南国’或‘椿记烧鹅’。"
  },
  {
    day: 2,
    title: "阳朔风光 甲天下",
    route: "桂林 -> 阳朔",
    driveTime: "约 1.5 小时 / 80km",
    highlights: ["漓江精华游", "西街漫步", "印象刘三姐"],
    attractions: [
      {
        name: "漓江 (杨堤-兴坪)",
        description: "漓江最美的一段，20元人民币背景所在地。春节期间人多，需提前预约竹筏。",
        tags: ["人民币同款", "竹筏", "绝美"],
        image: "https://picsum.photos/seed/yangshuo1/800/600"
      },
      {
        name: "阳朔西街",
        description: "拥有1400多年历史，中西合璧的步行街，夜晚热闹非凡，适合感受年味。",
        tags: ["步行街", "酒吧", "美食"],
        image: "https://picsum.photos/seed/yangshuo2/800/600"
      }
    ],
    tips: "阳朔县城春节期间实行交通管制，建议将车停在酒店，租电动车骑行遇龙河边。"
  },
  {
    day: 3,
    title: "跨越喀斯特 奔向百色",
    route: "阳朔 -> 百色",
    driveTime: "约 4.5 小时 / 380km",
    highlights: ["浩坤湖日落", "桂西高速景观"],
    attractions: [
      {
        name: "浩坤湖",
        description: "凌云县的明珠，被誉为‘藏在深山里的翡翠’，湖水碧绿，周边群山环绕。",
        tags: ["世外桃源", "小众", "摄影"],
        image: "https://picsum.photos/seed/baise1/800/600"
      }
    ],
    tips: "百色路段多为山区高速，桥隧比高，注意限速。浩坤湖周边农家乐较多，可品尝当地土鸡。"
  },
  {
    day: 4,
    title: "地心探险 壮美天坑",
    route: "百色 (乐业)",
    driveTime: "往返约 3 小时",
    highlights: ["大石围天坑", "地心森林"],
    attractions: [
      {
        name: "乐业大石围天坑群",
        description: "世界级天坑群，规模宏大，站在云海天舟上俯瞰，极其震撼。",
        tags: ["世界奇观", "高空挑战", "大自然"],
        image: "https://picsum.photos/seed/baise2/800/600"
      }
    ],
    tips: "乐业海拔较高，冬季较冷，请带好保暖衣物。云海天舟玻璃平台需要另外购票。"
  },
  {
    day: 5,
    title: "跨国瀑布 中越边境",
    route: "百色 -> 崇左 (大新)",
    driveTime: "约 3 小时 / 260km",
    highlights: ["德天跨国瀑布", "中越边境集市"],
    attractions: [
      {
        name: "德天跨国瀑布",
        description: "亚洲第一大跨国瀑布，与越南板约瀑布连成一体，气势磅礴。",
        tags: ["跨国", "瀑布", "必去"],
        image: "https://picsum.photos/seed/chongzuo1/800/600"
      },
      {
        name: "明仕田园",
        description: "素有‘小桂林’之称，是《花千骨》取景地，非常适合租车骑行。",
        tags: ["骑行", "田园", "影视基地"],
        image: "https://picsum.photos/seed/chongzuo2/800/600"
      }
    ],
    tips: "德天瀑布建议上午游览，水量和光线最佳。可以在边境集市买些越南特产（咖啡、腰果）。"
  },
  {
    day: 6,
    title: "峡谷幽深 边城古韵",
    route: "崇左 (龙州/市区)",
    driveTime: "市内游玩",
    highlights: ["通灵大峡谷", "崇左太平古城"],
    attractions: [
      {
        name: "通灵大峡谷",
        description: "拥有188米高的单级落差瀑布，谷底植被茂密，宛如侏罗纪世界。",
        tags: ["峡谷", "丛林", "瀑布"],
        image: "https://picsum.photos/seed/chongzuo3/800/600"
      },
      {
        name: "太平古城",
        description: "崇左版‘大唐不夜城’，夜景恢弘大体，是春节期间最具年味的地方。",
        tags: ["汉服", "夜景", "古风"],
        image: "https://picsum.photos/seed/chongzuo4/800/600"
      }
    ],
    tips: "通灵大峡谷台阶较多且湿滑，建议穿防滑运动鞋。太平古城非常适合穿汉服拍照。"
  },
  {
    day: 7,
    title: "满载而归 跨越粤桂",
    route: "崇左 -> 广州",
    driveTime: "约 8.5 小时 / 680km",
    highlights: ["平安返程", "沿途服务区补给"],
    attractions: [
      {
        name: "友谊关 (可选)",
        description: "若时间充裕，早起可去凭祥友谊关感受中国古代九大名关之一的雄伟。",
        tags: ["关隘", "历史", "边境"],
        image: "https://picsum.photos/seed/return/800/600"
      }
    ],
    tips: "返程路途遥远，又是春节假期最后一天，务必提前出发（建议早6点），避开进广州城的特大拥堵。"
  }
];
