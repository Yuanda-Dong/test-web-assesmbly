import init, { run_app } from './pkg/wasm_app.js';

async function main() {
   await init('wasm_app_bg.wasm');
   run_app();
}

main()
