/** 更新收藏 */
export type WebHookCollection = {
  type: "collection",
  data: {
    type: CollectionType;
    rate: number;
    comment: string;
    private: boolean;
    tags: string[];
    subject: Subject;
    user: User;
    ts: number;
  }
}

/**
 * 收藏状态
 * 1: 想看, 2: 看过, 3: 在看,
 * 4: 搁置, 5: 抛弃
 * */
//   export type CollectionType = 1 | 2 | 3 | 4 | 5
export const enum CollectionType {
  DESIRE = 1,
  DONE = 2,
  WATCHING = 3,
  LAY = 4,
  ABANDON = 5,
}

/** 条目简略信息 */
export type Subject = {
  id: number;
  image: string;
  name: string;
  name_cn: string;
  type: SubjectType;
  rating: RatingType;
  eps: number | "";
};

/**
 * 条目类型
 * 1: 书籍, 2: 动画, 3: 音乐,
 * 4: 游戏, 6: 三次元 (没有 5)
 * */
//   export type SubjectType = 1 | 2 | 3 | 4 | 6

export const enum SubjectType {
  BOOK = 1,
  ANIME = 2,
  MUSIC = 3,
  GAME = 4,
  THREE = 6,
}

/** 评分相关 */
export type RatingType = {
  rank: number;
  total: number;
  score: number;
};

/** 操作用户简略信息 */
export type User = {
  id: number;
  username: string;
  avatar: string;
  nickname: string;
  sign: string;
};
