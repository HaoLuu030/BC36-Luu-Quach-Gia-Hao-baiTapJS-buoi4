/**
 * Bài 1: Xuất số theo thứ tự tăng dần
 *
 * Input: 3 số nguyên (a, b, c)
 *
 * Process:
 *
 * Lấy input: var a = 1; var b = 2; var c = 3
 *
 * Đặt biến cho 3 vị trí với tên biến biểu thị cho thứ tự của từng số (var max = 0; var second = 0; var third = 0)
 *
 * Lấy ra 2 số ngẫu nhiên (a, b) rối so sánh với nhau, xét các trường hợp con.
 * Ví dụ nếu a > b thì sẽ có các trường hợp nào xảy ra và xét trường hợp ngược lại
 *
 * Dựa vào kết quả so sánh ở trên mà ta lần lượt gán số lớn nhất cho max, số lớn thứ 2 cho second và số lớn thứ 3 cho third
 *
 *
 * Xuất ra màn hình dãy số: third, second; max
 *
 *
 * Output: Dãy số gồm 3 chữ số có thứ tự tăng dần
 */

var a = 5000000;
var b = 1000000000;
var c = -26000000;

var max = 0;
var second = 0;
var third = 0;

if (a > b) {
  max = a;
  if (a > c) {
    if (b > c) {
      second = b;
      third = c;
    } else {
      second = c;
      third = b;
    }
  } else {
    max = c;
    second = a;
    third = b;
  }
} else {
  max = b;
  if (a > c) {
    second = a;
    third = c;
  } else {
    if (b > c) {
      second = c;
      third = a;
    } else {
      max = c;
      second = b;
      third = a;
    }
  }
}

console.log("Kết quả bài 1:", third, second, max);

/************************************************/

/***
 * Bài 2: Chào thành viên dựa theo người sử dụng máy
 *
 * Input: Người sửa dụng máy (Ba, Mẹ, Anh trai, Em gái)
 *
 * Process:
 *
 * Lấy input: var member = ""
 * Sử dụng switch case để xét từng trường hợp để in ra câu chào tương ứng.
 *
 *
 * Output: Câu chào tương ứng (ví dụ: ba => Xin chào ba!)
 *
 *
 *
 *
 */

var member = "Anh trai";

switch (member) {
  case "Ba":
    member = "Ba";
    break;
  case "Mẹ":
    member = "Mẹ";
    break;
  case "Em gái":
    member = "Em gái";
    break;
  case "Anh trai":
    member = "Anh trai";
    break;
}

console.log("Kết quả bài 2:", "Hello " + member + "!");

/************************************************/

/*Bài 3: Có bao nhiêu số chẵn và lẻ
 *
 *
 * Input: 3 số nguyên (x, y, z)
 *
 * Process:
 *
 * Lấy input var x = 1; var y = 2; var z = 3; var odd = 0 (số lượng số lẻ); var even = 0 (số lượng số chẵn)
 *
 * Chia lấy dư lần lượt 3 số cho 2, cứ mỗi 1 số chia hết cho 2 thì even = even + 1
 *
 * Sau đó lấy 3 trừ cho even để ra được odd
 *
 *
 *
 * Output: Có bao nhiêu số chẵn và lẻ
 */

var x = 1;
var y = 2;
var z = 3;
var odd = 0;
var even = 0;

if (x % 2 === 0) {
  even++;
}

if (y % 2 === 0) {
  even++;
}

if (z % 2 === 0) {
  even++;
}

odd = 3 - even;

console.log("Kết quả bài 3: có " + even + " số chẵn và " + odd + " số lẻ");

/************************************************/
/*Bài 4: Xác định loại tam giác
 * 
 * Input: độ dài 3 cạnh
 * 
 * Process:
 * 
 * Lấy input: var edge1 = 3 (cạnh 1); edge2 = 4 (cạnh 2); var edge3 = 5 (cạnh 3);
 * 
 * Xét 3 trường hợp đề bài yêu cầu:
 * Tam giác đều: edge1 = edge2 = edge3;
 * Tam giác cân: edge1 = edge2 hoặc edge1 = edge3 hoặc edge2 = edge3
 * Tam giác vuông: edge1^2 = edge2^2 + edge3^2 hoặc
  edge2^2 = edge1^2 + edge3^2 hoặc
  edge3^2 = edge1^2 + edge2^2
  Sau đó xem tổng 2 cạnh bất kì có lớn hơn cạnh còn lại hay không. Nếu có thì in dòng "Tam giác khác"
  Nếu không thì in dòng "Không phài tam giác"
 * 
 * 
 * Output: loại tam giác
 */
var type = '';
var edge1 = 4;
var edge2 = 4;
var edge3 = 4;

if (edge1 === edge2 && edge2 === edge3) {
  type = "Tam giác đều";
} else if (edge1 === edge2 || edge1 === edge3 || edge2 === edge3) {
    type = "Tam giác cân";
} else if (
  edge1 ** 2 === edge2 ** 2 + edge3 ** 2 ||
  edge2 ** 2 === edge1 ** 2 + edge3 ** 2 ||
  edge3 ** 2 === edge1 ** 2 + edge2 ** 2
) {
    type = "Tam giác vuông";
} else {
  if (edge2 > edge3 + edge1 || edge1 > edge2 + edge3 || edge3 > edge2 + edge1) {
    type = "Không phải tam giác";
  } else {
    type = "Tam giác khác";
  }
}

console.log("Kết quả bài 4:", type);
