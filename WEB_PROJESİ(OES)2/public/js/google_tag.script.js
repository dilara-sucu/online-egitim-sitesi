(function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });
    let f = d.getElementsByTagName(s)[0];
    const j = d.createElement(s);
    const dl = l !== 'dataLayer' ? '&l=' + l : '';
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl + '';
        j.async = true;
        f.parentNode.insertBefore(j, f);
    }
)(window, document, 'script', 'dataLayer', `GTM-KCHFKP7`)
