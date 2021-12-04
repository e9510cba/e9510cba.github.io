function removelinenumbers() {
    // get input
    
    let text = input()
    let out = [];
    for (let line of text.split("\n")) {
        let rest = line.split('. ', 2)[1];
        out.push(rest);
    }
    let str = out.join('<br/>');
    console.log(str);
    putoutput(str);
}

function putoutput(str) {
    console.log(str);
    document.getElementById("output").innerHTML = str;
}

function input() {
    return document.getElementById("input").value;
}

function select() {
  window.getSelection()
    .selectAllChildren(
      document.getElementById("output") 
    );
}

