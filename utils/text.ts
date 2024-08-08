import { CollectionType, Subject, SubjectType, WebHookCollection } from "../types/WebhookCollection";
import env from "./env";

export function tagText(subject_type: SubjectType, nickname: string) {

    let tag_format = {
        1: '$nickname读过的书',
        2: '$nickname的追番',
        3: '$nickname听过的音乐',
        4: '$nickname玩过的游戏',
        6: '$nickname看过的剧'
    }

    return '#' + tag_format[subject_type].replace('$nickname', nickname)
}

export function subjectText(subject: Subject, type: CollectionType, nickname: string) {

    let action_text = '收藏了'

    switch (type) {
        case CollectionType.DESIRE:
            const desire_formats = {
                1: '想读',
                2: '想看',
                3: '想听',
                4: '想玩',
                6: '想看'
            }
            action_text = desire_formats[subject.type]
            break
        case CollectionType.DONE:
            const done_formats = {
                1: '读过',
                2: '看过',
                3: '听过',
                4: '玩过',
                6: '看过'
            }
            action_text = done_formats[subject.type]
            break
        case CollectionType.WATCHING:
            const watching_formats = {
                1: '在读',
                2: '在看',
                3: '在听',
                4: '在玩',
                6: '在看'
            }
            action_text = watching_formats[subject.type]
            break
        case CollectionType.LAY:
            action_text = '搁置了'
            break
        case CollectionType.ABANDON:
            action_text = '抛弃了'
            break
    }

    let subject_name = subject.name_cn || subject.name

    return `${nickname} ${action_text} <a href="https://bgm.tv/subject/${subject.id}">${subject_name}</a>`
}

export function genFullMessage(info: WebHookCollection) {

    let nickname = info.data.user.nickname

    if(env.NICKNAME) nickname = env.NICKNAME

    return `${tagText(info.data.subject.type, nickname)}\n${subjectText(info.data.subject, info.data.type, nickname)}`
}

export function getBangumiImage(info: WebHookCollection) {
    return info.data.subject.image.replace('http://', 'https://').replace('cover/c', 'cover/l')
}