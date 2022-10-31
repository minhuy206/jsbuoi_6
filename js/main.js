/**
 * Bài 1
 * Mô hình 3 khối
 * -Đầu vào: cho i = 0 và n = 0
 * -Xử lí: nếu n < 10000 => n +=i;
 * -Đầu ra: in ra màn hình i
 */
document.getElementById("btnFind").onclick = function name(params) {
  var foundNumber = findNumber();
  document.getElementById("info").innerHTML = "Đã tìm thấy n = " + foundNumber;
};

function findNumber() {
  var n = 0;
  for (var i = 0; n < 10000; i++) {
    if (n < 10000) {
      n += i;
    }
  }
  return --i;
}

/**
 * Bài 2
 * -Đầu vào: nhập x và n
 * -Xử lí: tạo biến tích luỹ luỹ thừa x: exponentialX = 1
 *         tạo biến tính tổng các luỹ thừa: total = 0
 *         nếu i < n => exponentialX *= x và total += exponentialX;
 * -Đầu ra: in ra màn hình total
 */
document.getElementById("btnCal").onclick = function () {
  var x = document.getElementById("numX").value * 1;
  var n = document.getElementById("numN").value * 1;
  var total = cal(x, n);
  document.getElementById("infoCal").innerHTML = "Kết quả là: " + total;
};

function cal(x, n) {
  var total = 0;
  var exponentialX = 1;
  for (var i = 0; i < n; i++) {
    exponentialX *= x;
    total += exponentialX;
  }
  return total;
}

/**
 * Bài 3
 *  -Đầu vào: n
 *  -Xử lí: tạo biến tích luỹ giai thừa factorialOfN = 1;
 *          nếu i <= n => factorialOfN *= i
 * -Đầu ra: in ra màn hình factorialOfN
 */
document.getElementById("btnCalFactorialOfN").onclick = function () {
  var n = document.getElementById("number").value * 1;
  var factorialOfN = calFactorialOfN(n);
  document.getElementById("infoCalFactorialOfN").innerHTML =
    "Giai thừa của " + n + " = " + factorialOfN;
};
function calFactorialOfN(n) {
  var factorialOfN = 1;
  for (var i = 1; i <= n; i++) {
    factorialOfN *= i;
  }
  return factorialOfN;
}

/**
 * Bài 4
 * Đầu vào: i = 0 chạy tới 10 
 * Xử lí: nếu ++i % 2 == 0 => in ra thẻ div có màu xanh 
 *        nếu ++i % 2 == 1 => in ra thẻ div có màu đỏ
 * Đầu ra: in ra màn hình kết quả
 */
document.getElementById("btnAddDiv").onclick = function () {
  var txt = addDiv();
  var rs = document.getElementById("infoAddDiv");
  rs.innerHTML = txt;
};
function addDiv() {
  var txt = "";
  for (var i = 0; i < 10; i) {
    if (++i % 2 == 0) {
      txt += '<div class="bg-primary text-dark">Div chẵn ' + i + "</div>";
    } else {
      txt += '<div class="bg-danger text-dark">Div lẻ ' + i + "</div>";
    }
  }
  return txt;
}
