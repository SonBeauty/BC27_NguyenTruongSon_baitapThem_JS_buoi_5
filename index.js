function baiTap1() {
    //B1: Dom tới thẻ input để lấy dữ liệu nhập vào
    var name = document.getElementById("name").value
    var thuNhap = +document.getElementById("thuNhap").value
    var member = +document.getElementById("member").value
    var incomeTax = thuNhap - 4000000 - member * 1600000
    // xét điều kiện đầu vào
    if (incomeTax <= 0) {
        alert("Số tiền thu nhập không hợp lệ")
        return
    //B2; Xét điều kiện tính thuế
    } else if (incomeTax <= 60000000) {
        incomeTax = incomeTax * 0.05
    } else if (incomeTax <= 120000000) {
        incomeTax = incomeTax * 0.1
    } else if (incomeTax <= 210000000) {
        incomeTax = incomeTax * 0.15
    } else if (incomeTax <= 384000000) {
        incomeTax = incomeTax * 0.2
    } else if (incomeTax <= 624000000) {
        incomeTax = incomeTax * 0.25
    } else if (incomeTax <= 960000000) {
        incomeTax = incomeTax * 0.3
    } else {
        incomeTax = incomeTax * 0.35
    }
   

    //B3: xuất kết quả ra màn hình
    document.getElementById("hienThi").style.display = "block"
    document.getElementById("txtResult").innerHTML = "Họ và tên: "+ name + ", tiền thuế: " +incomeTax
}
function baiTap2(){
    
}