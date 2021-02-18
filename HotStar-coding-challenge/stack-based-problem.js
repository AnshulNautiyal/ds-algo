function stack(a = []) {
  for (let i = 0; i < a.length; i++) {
    let temp = a[i].split(""),
      push = [],
      flag = 0;
    for (let j = 0; j < temp.length; j++) {
      if (temp[j] === "[" || temp[j] === "{" || temp[j] === "(") {
        push.push(temp[j]);
      } else {
        if (push[push.length - 1] === "(" && temp[j] === ")") {
          push.pop();
        } else if (push[push.length - 1] === "{" && temp[j] === "}") {
          push.pop();
        } else if (push[push.length - 1] === "[" && temp[j] === "]") {
          push.pop();
        } else {
          flag = 1; // special case when we have only close bracket
          break;
        }
      }
    }
    if (!push.length && flag === 0) {
      a[i] = "YES";
    } else {
      a[i] = "NO";
    }
  }
  console.log(a);
}

stack(["()({[]})([((()))])", "[{()}]]"]);
