(() => {
    if (window.__cdnjs_script_v1__) return; // guard
    window.__cdnjs_script_v1__ = true;

    const current = document.currentScript || document.querySelector('script[src*="CDNJS"]');
    const url = new URL(current.src);
    const param = url.searchParams.get("param");

    const greetFn = (name) => console.log(`Hello ${name} !`);

    if (param) {
        console.log("Param from script URL:", param);
        greetFn(param);
    }
})();
