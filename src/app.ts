import { yarg } from "./config/plugins/args.plugin";

// console.log(process.env)

// console.log(yarg.d)

(async() =>{
    await main();
})();

async function main() {
    console.log(yarg.base)
}