module.exports = {
    joinArgs: {
        /**
         * 
         * @param {...any} args The args to pass through
         */
        returnType(...args){
            let options;
            let args2 = [];
            args.map(f => {
                if(typeof f == "object") options = f;
                else args2.push(f);
            });
            if(!options.LookForType) return console.log("COULD NOT FIND LookForType PROPERTY IN OPTIONS.");
            if(typeof options.LookForType == "string"){
                let res = [];
                args2.map(ok => {
                    if(typeof ok == options.LookForType.toLowerCase()){
                        res.push(ok)
                    }
                })
                return res;
            }else {
                let res = {};
                options.LookForType.map(TYPE =>res[TYPE] = []);
                args2.map(obj => {
                    options.LookForType.map(type => {
                        if(typeof obj == type.toLowerCase()){
                            res[type].push(obj)
                        }
                    })    
                });
                return res;
            }
        },
        matchString(...args){
            let options;
            let args2 = [];
            args.map(f => {
                if(typeof f == "object") options = f;
                else args2.push(f);
            });
            if(!options.SearchString) return console.log("COULD NOT FIND SearchString PROPERTY IN OPTIONS.");
            let actualArgs = [];
            args2.map(ok => {
                if(typeof ok == "string"){
                    ok.split(/ +/g).map(a => actualArgs.push(a));
                }
            });
            let res = [];
            actualArgs.map((key,value) => {
                if(key.includes(options.SearchString)){
                    res.push({value:key,i:value})
                }
            })
            return {
                res,
                actualArgs,
            }
        }
    }
}
