/**bài 1
 *
 */

document.getElementById("btnCham").onclick = function () {
  var HD = document.getElementById("txtHD").value * 1;
  var diemMon1 = document.getElementById("txtM1").value * 1;
  var diemMon2 = document.getElementById("txtM2").value * 1;
  var diemMon3 = document.getElementById("txtM3").value * 1;
  const KVUT = document.getElementById("KVUT").value * 1;
  const DTDT = document.getElementById("DTDT").value * 1;

  var kqTong;
  if (KVUT) {
    kqTong = diemMon1 + diemMon2 + diemMon3 + KVUT;
  } else if (DTDT) {
    kqTong = diemMon1 + diemMon2 + diemMon3 + DTDT;
  }

  var kqThi;
  if (kqTong >= HD) {
    kqThi = "Đạt";
  } else {
    kqThi = "Không Đạt";
  }
  document.getElementById("tbDiem").innerHTML =
    "Tổng Điểm thi là " + kqTong + " ; Kết quả : " + kqThi;
};

/**bài 2
 *
 */
const KW_DAU = 500;
const KW_2 = 650;
const KW_3 = 850;
const KW_4 = 1100;
const KW_CL = 1300;
const KW_50 = 50 * KW_DAU;
const KW_100 = KW_50 + 50 * KW_2;
const KW_200 = KW_100 + 100 * KW_3;
const KW_PLUS = KW_200 + 150 * KW_4;

document.getElementById("btnDien").onclick = function () {
  var thongTin = document.getElementById("txtNN").value;
  var soKW = document.getElementById("txtSoDien").value * 1;
  inHoaDon(thongTin, soKW);
};
const formatVND = new Intl.NumberFormat("vn-VN").format;

function tinhTongKW(kw) {
  let tongTien;
  if (kw > 0 && kw < 51) tongTien = kw * KW_DAU;
  else if (kw > 50 && kw < 101) tongTien = (kw - 50) * KW_2 + KW_50;
  else if (kw > 100 && kw < 201) tongTien = (kw - 100) * KW_3 + KW_100;
  else if (kw > 200 && kw < 351) tongTien = (kw - 200) * KW_4 + KW_200;
  else if (kw > 350) tongTien = (kw - 350) * KW_CL + KW_PLUS;
  else tongTien = "đơn lỗi nên vui lòng nhập lại nhé !!!";
  return tongTien;
}
function inHoaDon(ten, kw) {
  document.getElementById("tbDien").innerText =
    "Hóa Đơn của " +
    ten +
    " với số kw " +
    kw +
    " là " +
    formatVND(tinhTongKW(kw));
}
