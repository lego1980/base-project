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

export const checkError = async(data) => {
    let obj = data; 
    let error = [];
    // old safari ipad 1 doesnt support values
    // let error = Object.values(dataArray).filter((item) => {
    //     return item.valid === false;
    // }); 
    try {
        // console.log("obj try");
        let error = Object.keys(obj).filter((value) => { 
            return obj[value].valid === false;
        });
        return error;
    } catch(err) {
        console.log("checkError err",err);
        // return empty array
        return error;
    }
}

export const matchInput = async(elm,matchObj) => {
    let node = elm;
    if (matchObj !== null) {
        if (node["value"] !== matchObj.value) {
            return false;
        }
    }    
    return true;
}

export const validate = async(element,matchObj) => {
    let elm = element;        
    let obj = {
        bool : true,
        msg : "",
    };
    let mObj = matchObj;

    return matchInput(elm,mObj).then((matched) => {        
        if (matched) {
            return requiredField(elm).then((bool) => {
                if (bool) {
                    return patternField(elm).then((bool2) => {
                        obj.bool = bool2;
                        if (bool2 === false) {
                            obj.msg = "Enter a valid " + (elm.getAttribute("data-name") || elm["name"]);
                        }
                        return obj;
                    });
                } else {
                    obj.bool = bool;
                    if (bool === false) {
                        obj.msg = (elm.getAttribute("data-name") || elm["name"]) + " is required";
                    }            
                    return obj; 
                }        
            });   
        } else {
            console.log("elm",elm,elm.getAttribute("data-name"));
            obj.bool = matched;
            if (matched === false) {
                //obj.msg = mObj.name + " and " + (elm.getAttribute("data-name") || elm["name"]) + " does not match";
                obj.msg = mObj.name + " does not match";
            }
            return obj;  
        }
    });

    // return requiredField(elm).then((bool) => {
    //     if (bool) {
    //         return patternField(elm).then((bool2) => {
    //             obj.bool = bool2;
    //             if (bool2 === false) {
    //                 obj.msg = "Enter a valid " + elm["name"];
    //             }
    //             return obj;
    //         });
    //     } else {
    //         obj.bool = bool;
    //         if (bool === false) {
    //             obj.msg = elm["name"] + " is field";
    //         }            
    //         return obj; 
    //     }        
    // });
}