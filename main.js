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

document.getElementById("btnDien").onclick = function () {
  var thongTin = document.getElementById("txtNN").value;
  var soKW = document.getElementById("txtSoDien").value * 1;

  const KW_DAU = 500;
  const KW_2 = 650;
  const KW_3 = 850;
  const KW_4 = 1100;
  const KW_CL = 1300;

  let tongTien;
  if (soKW <= 50) {
    tongTien = soKW * KW_DAU;
  } else if (soKW <= 100) {
    tongTien = soKW * KW_2;
  } else if (soKW <= 150) {
    tongTien = soKW * KW_3;
  } else if (soKW <= 200) {
    tongTien = soKW * KW_4;
  } else {
    tongTien = soKW * KW_4;
  }

  document.getElementById("tbDien").innerHTML =
    "Số Tiền phải trả của " + thongTin + " là : " + tongTien;
};
