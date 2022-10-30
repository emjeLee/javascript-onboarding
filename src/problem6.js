function getNickName(list) {
    return list.map((info) => {
        const [, nickName] = info;
        return nickName;
    });
}

function checkNameCount(name) {
    let nameList = {};
    name.forEach((na) => {
        for (let i = 0; i < na.length - 1; i++) {
            const name = na.slice(i, i + 2);
            nameList[`${name}`] = (nameList[`${name}`] += 1) || 1;
        }
    });
    return nameList;
}

function getErrorName(obj) {
    return Object.entries(obj)
        .filter(([, count]) => count > 1)
        .map(([name]) => name);
}

function getErrorUserEmail(formList, xName) {
    return formList
        .filter((info) => {
            for (let i = 0; i < xName.length; i++) {
                if (info[1].includes(xName[i])) {
                    return info;
                }
            }
        })
        .map(([email]) => email);
}

function problem6(forms) {}

module.exports = problem6;
