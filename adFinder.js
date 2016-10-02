const adSizes = [
    { width: 300, height: 250 },
    { width: 320, height: 260 },
    { width: 300, height: 600 },
    { width: 120, height: 60 },
    { width: 970, height: 90 },
    { width: 88, height: 31 },
    { width: 180, height: 150 },
    { width: 160, height: 600 },
    { width: 728, height: 90 },
    { width: 550, height: 480 },
    { width: 970, height: 250 },
    { width: 250, height: 250 },
    { width: 240, height: 400 },
    { width: 336, height: 280 },
    { width: 300, height: 100 },
    { width: 720, height: 300 },
    { width: 468, height: 60 },
    { width: 234, height: 60 },
    { width: 120, height: 90 },
    { width: 125, height: 125 },
    { width: 120, height: 600 },
];



const adElements = Array.prototype.slice.call(document.querySelectorAll("iframe"))
                    .filter((el) => {
                        return el.style.visibility !== "hidden" && el.style.display !== "none" && adSizeCheck(el);
                    }).map((el) => {
                        const rect = el.getBoundingClientRect();
                        const formattedEl = {
                            width: Number(el.width || el.style.width),
                            height: Number(el.height || el.style.height),
                            position: {
                                x: rect.left,
                                y: rect.top,
                            },
                        };
                        return formattedEl;
                    });

function adSizeCheck(el) {
    return adSizes.some((adSize) => {
        return String(adSize.width) === el.width && String(adSize.height) === el.height;
    });
}


function logResponse(els) {
    const res = {
        location: window.location.href,
        advertisements: els,
    };
    console.log(res);
}

logResponse(adElements);
