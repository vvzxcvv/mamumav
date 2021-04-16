function clickEvent() {
'use strict';

let user = prompt ("name");
if (user == "admin") {

    let pass = prompt ("pass")
    if (pass == "zzz") {
        alert ("da");
    } else if (pass = null || pass == '') {
        alert ("hz)");
    } else {
        alert ("ne)");
    }

} else if (user == null || user == '') {
    alert ("hz kto")
} else {
    alert ("nezn)")
}

}