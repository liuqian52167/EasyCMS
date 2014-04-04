var bookmarkname = document.title;
var dynamichost = document.location.host;
var countimg = document.createElement('img');
document.onclick = clickOut;
function checkhomepage() {
    if (document.getElementById('logo').isHomePage('http://' + document.location.host + '/')) {
        return true;
    } else {
        return false;
    }
}
function clicklogo() {
    if (checkhomepage()) {
        window.location = ('http://' + document.location.host + '/');
    } else {
        document.getElementById('logourl').style.behavior = 'url(#default#homepage)';
        document.getElementById('logourl').setHomePage('http://' + document.location.host + '/');
    }
}
function selectTag(showContent, selfObj) {
    var tag = document.getElementById("tags").getElementsByTagName("a");
    var taglength = tag.length;
    for (i = 0; i < taglength; i++) {
        tag[i].className = "";
    }
    selfObj.className = "focu";
    for (i = 0; j = document.getElementById("baidu" + i); i++) {
        j.style.display = "none";
    }
    document.getElementById(showContent).style.display = "block";
}
function addBookmark(title, url) {
    if (window.sidebar) {
        window.sidebar.addPanel(title, url, "");
    } else if (document.all) {
        window.external.AddFavorite(url, title);
    } else if (window.opera && window.print) {
        return true;
    }
}
function setHomePage(url) {
    if (window.sidebar) {
        try {
            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
        } catch (e) {
            alert("�˲�����������ܾ�\n�����������ַ�����롰about:config�����س�\nȻ��[signed.applets.codebase_principal_support]����Ϊ'true'");
        }
        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
        prefs.setCharPref('browser.startup.homepage', url);
    }
}
function SetCookie(name, value) {
    var exp = new Date();
    exp.setTime(exp.getTime() + 86400 * 365);
    document.cookie = name + "=" + value + "; expires=" + exp.toGMTString() + "; path=/";
}
function getCookieVal(offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1) endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
}
function DelCookie(name) {
    SetCookie(name, '');
    return;
}
function GetCookie(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg) return getCookieVal(j);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
    }
    return null;
}
function $(o) {
    var o = document.getElementById(o) ? document.getElementById(o) : '';
    return o;
}
function history_show() {
    try {
        var history = GetCookie("history");
        history = unescape(history);
        var content = '';
        if (history != "null" && history.indexOf("&") == -1) {
            history_arg = history.split("_honghesoft_");
            i = 0;
            linknum = 0;
            len = history_arg.length;
            for (i = 0; i < len; i++) {
                var wlink = history_arg[i].split("+");
                if (history_arg[i] != "null" && content.indexOf(wlink[0]) == -1 && linknum < 44) {
                    content += "<li><a href=\"" + wlink[1] + "\" target=\"_blank\"  title=\"" + wlink[0] + "\">" + wlink[0] + "</a></li>";
                    linknum += 1;
                }
            }
            document.getElementById("history").innerHTML = content;
        } else {
            document.getElementById("history").innerHTML = "<div style='margin-top:8px;text-align=center'>��û��������κε��̣�</div>";
            document.getElementById("del_his").style.display = "none";
        }
    } catch (e) {
    }
}
function ClearHistory() {
    DelCookie("history");
    document.getElementById("history").innerHTML = "<li style='width:100%;text-align:center;'>�������ĵ����Ѿ���գ�</li>";
}
function clickOut(evt) {
    evt = evt ? evt : window.event;
    var srcElem = (evt.target) ? evt.target : evt.srcElement;
    if (('A' == srcElem.tagName.toUpperCase()) && ('' != srcElem.id) && (!isNaN(srcElem.id))) {
        var wlink = srcElem.innerHTML + "+" + srcElem.href + "_honghesoft_";
        wlink += GetCookie("history");
        wlink = escape(wlink);
        SetCookie("history", wlink);
        history_show();
        var url = "apps/clickout.php?sId=" + srcElem.id + "&t=" + (new Date()).getTime();
        try {
            if (!isIndex) {
                url = '../' + url;
            }
        } catch (e) {
            url = '../' + url;
        }
        countimg.src = url;
    }
}
try {
    if (isIndex && ('' != document.referrer) && !isSameSite(document.referrer)) {
        countimg.src = "apps/clickin.php?url=" + document.referrer;
    }
} catch (e) {
}
function showStm(n) {
    for (i = 0; i <= 1; i++) {
        document.getElementById("stgm" + i).className = "";
        document.getElementById("stm" + i).style.display = "none";
    }
    document.getElementById("stgm" + n).className = "active";
    document.getElementById("stm" + n).style.display = "block";
}
function copyToClipBoard() {
    var clipBoardContent = "";
    clipBoardContent += "�����Ƽ�һ������ַ ---�Ա��ʹڵ�---��վ�����ϰ�����������������������Ƽ������ɣ���ʵ��������";
    clipBoardContent += "\n";
    clipBoardContent += "��ַ��https://code.google.com/p/freecms/";
    window.clipboardData.setData("Text", clipBoardContent);
    alert("�����Ѿ��ɹ����Ƶ�ճ��壬�����ʹ�� Ctrl+V ����Ҫ�ĵط�ȥ��Ŷ��");
}