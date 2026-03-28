import type { Quote } from "@/lib/types"

export const quotes: Quote[] = [
  // 坂本龍馬
  {
    id: "ryoma-001",
    text: "世の人は我を何とも言わば言え 我が成す事は我のみぞ知る",
    personId: "sakamoto-ryoma",
    categories: ["人生", "信念"],
    source: "手紙",
  },
  {
    id: "ryoma-002",
    text: "日本を今一度せんたくいたし申候",
    personId: "sakamoto-ryoma",
    categories: ["志", "国家"],
    source: "姉・乙女への手紙",
  },
  {
    id: "ryoma-003",
    text: "業なかばで倒れてもよい。そのときは、目標の方角にむかい、その姿勢で倒れよ。",
    personId: "sakamoto-ryoma",
    categories: ["信念", "覚悟"],
  },
  {
    id: "ryoma-004",
    text: "人の世に道は一つということはない。道は百も千も万もある。",
    personId: "sakamoto-ryoma",
    categories: ["人生", "知恵"],
  },
  {
    id: "ryoma-005",
    text: "何でも思い切ってやってみることですよ。どっちに転んだって人間、野辺の石ころ同様、骨となって一生を終えるのだから。",
    personId: "sakamoto-ryoma",
    categories: ["行動", "人生"],
  },

  // 織田信長
  {
    id: "nobunaga-001",
    text: "人間五十年、下天の内をくらぶれば、夢幻の如くなり",
    personId: "oda-nobunaga",
    categories: ["人生", "無常"],
    source: "敦盛",
  },
  {
    id: "nobunaga-002",
    text: "是非に及ばず",
    personId: "oda-nobunaga",
    categories: ["覚悟", "運命"],
    source: "本能寺の変",
  },
  {
    id: "nobunaga-003",
    text: "臆病者の目には、敵は常に大軍に見える。",
    personId: "oda-nobunaga",
    categories: ["戦略", "勇気"],
  },
  {
    id: "nobunaga-004",
    text: "理想を持ち、信念に生きよ。理想や信念を見失った者は、戦う前から負けているといえよう。",
    personId: "oda-nobunaga",
    categories: ["信念", "志"],
  },

  // 宮本武蔵
  {
    id: "musashi-001",
    text: "我、事において後悔せず。",
    personId: "miyamoto-musashi",
    categories: ["信念", "覚悟"],
    source: "独行道",
  },
  {
    id: "musashi-002",
    text: "千日の稽古をもって鍛となし、万日の稽古をもって錬となす。",
    personId: "miyamoto-musashi",
    categories: ["修行", "努力"],
    source: "五輪書",
  },
  {
    id: "musashi-003",
    text: "道においては、死をいとわず思う。",
    personId: "miyamoto-musashi",
    categories: ["覚悟", "武道"],
    source: "独行道",
  },
  {
    id: "musashi-004",
    text: "構えあって構えなし。",
    personId: "miyamoto-musashi",
    categories: ["武道", "知恵"],
    source: "五輪書",
  },

  // 毛沢東
  {
    id: "mao-001",
    text: "革命は、客を招いてごちそうすることでもなければ、文章を練ることでも、絵を描くことでも、刺繍をすることでもない。",
    personId: "mao-zedong",
    categories: ["革命", "政治"],
    source: "毛沢東語録",
  },
  {
    id: "mao-002",
    text: "実践は真理を検証する唯一の基準である。",
    personId: "mao-zedong",
    categories: ["哲学", "実践"],
    source: "実践論",
  },
  {
    id: "mao-003",
    text: "人民、人民だけが、世界の歴史を創造する原動力である。",
    personId: "mao-zedong",
    categories: ["人民", "歴史"],
    source: "毛沢東語録",
  },
  {
    id: "mao-004",
    text: "学習の敵は自己の満足である。",
    personId: "mao-zedong",
    categories: ["学習", "自省"],
    source: "毛沢東語録",
  },
  {
    id: "mao-005",
    text: "銃口から政権が生まれる。",
    personId: "mao-zedong",
    categories: ["権力", "政治"],
    source: "毛沢東語録",
  },
]
