export function get_randomColor(){
    let r = 150 + Math.floor(Math.random() * 106);
    let g = 150 + Math.floor(Math.random() * 106);
    let b = 150 + Math.floor(Math.random() * 106);

    return String(`rgb(${String(r)}, ${String(g)}, ${String(b)})`);
}

/*
    localStorage에 있는 "배열"의 원하는 인덱스에
    원하는 값을 담는다.
                            ex) func("memoValueArr", 3, "안녕하세요");
*/
export function change_localStorageArr_element(valueName, index, content){
    let copy = JSON.parse(localStorage.getItem(valueName));
    copy[index] = content;
    copy = JSON.stringify(copy);
    localStorage.setItem(valueName, copy);
}

export function push_localStorageArr(valueName, content){
    let copy = JSON.parse(localStorage.getItem(valueName));
    copy.push(content);
    copy = JSON.stringify(copy);
    localStorage.setItem(valueName, copy);
}

export function set_defaultValue_localStorage(valueName, content){
    if(localStorage.getItem(valueName) == null){
        localStorage.setItem(valueName, JSON.stringify(content));
    }
}