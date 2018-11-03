//截取字符串，text为字符串，totalCharLen为总字数，extChar是可选参数，为超出补充的样式，默认为“...”
export function cutOffText(text, totalCharLen, extChar = '...') {
    if(!text || typeof totalCharLen !== "number")
        return '';

    if(totalCharLen > text.length)
        return text;

    let idx = 0;
    for(let i = 0; i < text.length; ++i) {
        if (text.codePointAt(i) < 27 || text.codePointAt(i) > 126) {
            idx += 2;
        } else {
            ++idx;
        }
    }
    return text.substring(0, idx) + extChar;
}