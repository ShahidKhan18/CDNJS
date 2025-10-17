const currentScript = document.currentScript;
const url = new URL(currentScript.src);
const param = url.searchParams.get("param");

if (param) {
    console.log("Param from script URL:", param);
    // you can call a function here
}

const greetFn=(name)=>console.log(`Hello ${name} !`)
greetFn(param)
let dummy="dummy"