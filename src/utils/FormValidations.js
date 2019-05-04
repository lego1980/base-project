export const requiredField = async(elm) => {
    let node = elm;
    if (node["required"] && node["value"].length === 0) {
        return false
    }
    return true;
}