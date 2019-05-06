export const requiredField = async(elm) => {
    let node = elm;
    if (node["required"] && node["value"].length === 0) {
        return false;
    }
    return true;
}

export const patternField = async(elm) => {
    let node = elm;
    if (node["pattern"] && node["value"].length !== 0) {
        let pattern = node["pattern"];
        let re = new RegExp(pattern);      
        return re.test(node["value"]);
    }
    return true;
}

export const validate = async(element) => {
    let elm = element;        
    return requiredField(elm).then(function(bool) {
        if (bool) {
            return patternField(elm).then(function(bool2) {
                return bool2;
            });
        } else {
            return bool; 
        }        
    });
}