function aax_punt() {
    var a = aax_size.split("x");
    a = 'width="' + a[0] + '" height="' + a[1] + '"', html = '<iframe src="//c.amazon-adsystem.com/aax2/assoc_lra.html?tag=' + aax_pubname + "&c=" + aax_channel + "&src=" + aax_src + "&sz=" + aax_size + '" ' + a + ' scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>',
        document.write(html), document.close()
}

function aax_write(a, e) {
    a.write(e), a.close()
}

function aax_render_ad(a) {
    if (a.passback || "undefined" == typeof a.html || "" == a.html)
        return void aax_punt();

    var e = a.slotSize;
    if (!e) return void aax_write(document, a.html);
    var r = e.indexOf("x"), n = e.substring(0, r), t = e.substring(r + 1), c = "amznad" + Math.round(1e6 * Math.random());
    aax_write(document, '<iframe id="' + c + '" width="' + n + '" height="' + t + '" src="javascript:\'\'" scrolling="no" frameborder="0" marginwidth="0" marginheight="0" bgcolor="#FFFFFF" topmargin="0" leftmargin="0" rightmargin="0" bottommargin="0"></iframe>');
    var i;
    try {
        i = document.getElementById(c);
        var o = i.contentWindow || i.contentDocument; o.document && (o = o.document), aax_write(o, a.html)
    }
    catch (m) { i && (i.style.display = "none") }
} 

try { 
    var params = {};
    "undefined" == typeof aax_src && (aax_src = 300), "undefined" == typeof aax_channel && (aax_channel = 100), params.src = aax_src, params.c = aax_channel, params.sz = aax_size, params.ec = 0, params.u = document.location, params.ec = 0;
    try {
          params.u = "" + window.top.location 
    } 
    catch (e) { } 
    "undefined" == typeof aax_pubname && (aax_pubname = ""), "undefined" != typeof aax_refurl && (params.u = aax_refurl), "undefined" != typeof aax_clickurl && (params.ct = aax_clickurl), params.cup = "undefined" != typeof aax_clickurlparams ? aax_clickurlparams : '{linkCode:"ax1",tag:"' + aax_pubname + '"}', params.pub = aax_pubname; 
    var href = ""; for (var key in params) href += key + "=" + encodeURIComponent(params[key]) + "&"; 
    href += "rnd=" + Math.round(1e6 * Math.random()); 
    var aaxserver = "aax-eu"; 
    ("300" == aax_src || "301" == aax_src) && (aaxserver = "aax-us-east"), document.write("<script src='//" + aaxserver + ".amazon-adsystem.com/x/getad?jsd=1&" + href + "'></script>"), document.close() 
} catch (e) { aax_punt() }