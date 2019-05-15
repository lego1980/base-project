export const requiredField = async(elm) => {
    //console.log("requiredField",elm);
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
            return obj[value].valid === false || obj[value].valid === null;
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
        name : elm["name"],
        bool : null,
        msg : "",
    };
    let matchedObj = {
        name : null,
        bool : true,
        msg : "",
    };
    let mObj = matchObj;

    return matchInput(elm,mObj).then((matched) => {  
        //console.log("matched",matched,mObj);      
        if (matched) {
            // set other to true if matched and return obj
            if (mObj) {
                matchedObj = {
                    name : mObj.name,
                    bool : true,
                    msg: ""
                }
            }
            
            return requiredField(elm).then((bool) => {
                //console.log("requiredField",bool);
                let arrObj = []; 
                if (bool) {
                    return patternField(elm).then((bool2) => {
                        //console.log("patternField",bool2); 
                        obj.bool = bool2;
                        if (bool2 === false) {
                            obj.msg = "Enter a valid " + (elm.getAttribute("data-name") || elm["name"]);
                        }
                        arrObj = [obj,matchedObj];
                        return arrObj;
                    });
                } else {
                    obj.bool = bool;
                    if (bool === false) {
                        obj.msg = (elm.getAttribute("data-name") || elm["name"]) + " is required";
                    }
                    arrObj = [obj,matchedObj];            
                    return arrObj; 
                }        
            });   
        } else {
            obj.bool = matched;
            if (matched === false) {
                //obj.msg = mObj.name + " and " + (elm.getAttribute("data-name") || elm["name"]) + " does not match";
                obj.msg = mObj.label + " does not match";
            }
            return new Array(obj);  
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