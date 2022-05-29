var $ = function(id) {
  return document.getElementById(id);
};

function show(elmnt) {
  $(elmnt).style.display = "block";
}

function hide(elmnt) {
  $(elmnt).style.display = "none";
}

function sc(elm) {
  var x = document.getElementsByClassName(elm);
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = '';
  }
}

function hc(elm) {
  var x = document.getElementsByClassName(elm);
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
}

function show(e) {
  $(e).style.display = "block"
}

function hide(e) {
  $(e).style.display = "none"
}

function unitconv() {
  1 == $("ut").value ? show("table1") : hide("table1"), 2 == $("ut").value ? show("table2") : hide("table2"), 3 == $("ut").value ? show("table3") : hide("table3"), 4 == $("ut").value ? show("table4") : hide("table4"), 5 == $("ut").value ? show(
    "table5") : hide("table5"), 6 == $("ut").value ? show("table6") : hide("table6");
  var e = $("flength").value,
    t = $("tlength").value,
    l = $("tlength").options[$("tlength").selectedIndex].text,
    a = $("lip").value;
  null == $("lip").value || 0 == $("lip").value.length ? $("lop").value = "{$eunit}" : $("lop").value = Math.round(a * e / t * 1e5) / 1e5 + " " + l;
  e = $("farea").value, t = $("tarea").value, l = $("tarea").options[$("tarea").selectedIndex].text;
  a = $("aip").value, null == $("aip").value || 0 == $("aip").value.length ? $("aop").value = "{$eunit}" : $("aop").value = Math.round(a * e / t * 1e5) / 1e5 + " " + l;
  e = $("fspeed").value, t = $("tspeed").value, l = $("tspeed").options[$("tspeed").selectedIndex].text, a = $("sip").value;
  null == $("sip").value || 0 == $("sip").value.length ? $("sop").value = "{$eunit}" : $("sop").value = Math.round(a * e / t * 1e5) / 1e5 + " " + l;
  e = $("fweight").value, t = $("tweight").value, a = $("wip").value, l = $("tweight").options[$("tweight").selectedIndex].text;
  null == $("wip").value || 0 == $("wip").value.length ? $("wop").value = "{$eunit}" : $("wop").value = Math.round(a * e / t * 1e5) / 1e5 + " " + l;
  e = $("fvol").value, t = $("tvol").value, a = $("vip").value, l = $("tvol").options[$("tvol").selectedIndex].text;
  null == $("vip").value || 0 == $("vip").value.length ? $("vop").value = "{$eunit}" : $("vop").value = Math.round(a * e / t * 1e5) / 1e5 + " " + l;
  e = $("ftemp").value, t = $("ttemp").value, a = $("tip").value, l = $("ttemp").options[$("ttemp").selectedIndex].text;
  null == $("tip").value || 0 == $("tip").value.length ? $("top").value = "{$eunit}" : 1 == e && 1 == t && ($("top").value = a + " " + l), 1 == e && 2 == t && ($("top").value = (9 * a / 5 + 32).toFixed(2) + " " + l), 1 == e && 3 == t && ($("top")
    .value = (1 * a + 273.15).toFixed(2) + " " + l), 2 == e && 1 == t && ($("top").value = (5 * (a - 32) / 9).toFixed(2) + " " + l), 2 == e && 2 == t && ($("top").value = a + " " + l), 2 == e && 3 == t && ($("top").value = (5 * (a - 32) / 9 +
    273.15).toFixed(2) + " " + l), 3 == e && 1 == t && ($("top").value = (a - 273.15).toFixed(2) + " " + l), 3 == e && 2 == t && ($("top").value = (9 * (a - 273.15) / 5 + 32).toFixed(2) + " " + l), 3 == e && 3 == t && ($("top").value = a +
    " " + l)
}
window.onload = function() {
  unitconv()
}
