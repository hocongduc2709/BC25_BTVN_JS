//------------------------BÀI 1------------------------------

/**
    - ĐẦU VÀO: 
        + biết lương: 100k 1 ngày;
        + nhập số ngày làm;
    - XỬ LÝ:
        + tạo biến LUONGMOTNGAY = 100000;
        + tạo biến soNgayLam = value thẻ input txtSoNgayLam;
        + tạo biến tongLuong = luongMotNgay * soNgayLam;
        + gán kết quả sự kiện onlick button btnTinhLuong cho thẻ div thongBaoLuong;
    - ĐẦU RA: show kết quả sau khi click button btnTinhLuong;
 */

document.getElementById("btnTinhLuong").onclick = function()
{
    const LUONGMOTNGAY = 100000;
    var soNgayLam = document.getElementById("txtSoNgayLam").value * 1;
    var tongLuong = soNgayLam * LUONGMOTNGAY;
    var kqTongLuong = "Tổng lương tháng này: " + tongLuong;

    document.getElementById("thongBaoLuong").innerHTML = kqTongLuong;
}


//------------------------BÀI 2------------------------------

/**
    - ĐẦU VÀO: Nhập vào 5 số thực
    - XỬ LÝ: 
        + tạo các biến soThuNhat, soThuHai, soThuBa, soThuTu, soThuNam
            lần lượt gán cho các thẻ input để lấy value:
            txtSoThuNhat, txtSoThuHai, txtSoThuBa, txtSoThuTu, txtSoThuNam;
        + ép kiểu cho 5 số;
        + tạo biến giaTriTB = tổng 5 số trên chia 5;
        + gán kết quả sự kiện onclick btnTinhTB cho thẻ div thongBaoGiaTriTB;
    - ĐẦU RA: show kết quả click btnTinhTB;
 */

document.getElementById("btnTinhTB").onclick = function()
{
    var soThuNhat = document.getElementById("txtSoThuNhat").value;
    var soThuHai = document.getElementById("txtSoThuHai").value;
    var soThuBa = document.getElementById("txtSoThuBa").value;
    var soThuTu = document.getElementById("txtSoThuTu").value;
    var soThuNam = document.getElementById("txtSoThuNam").value;

    soThuNhat = parseInt(soThuNhat);
    soThuHai = parseInt(soThuHai);
    soThuBa = parseInt(soThuBa);
    soThuTu = parseInt(soThuTu);
    soThuNam = parseInt(soThuNam);

    var giaTriTB = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam)/5;
    var kqGiaTriTB = "Trung bình của 5 số là: " + giaTriTB;

    document.getElementById("thongBaoGiaTriTB").innerHTML = kqGiaTriTB;
}

//------------------------BÀI 3---------------------------------
/**
    - ĐẦU VÀO: 
        + biết giá USD = 23500;
        + nhập số USD
    - XỬ LÝ:
        + tạo biến giaUSD = 23500;
        + tạo biến soUSD cho thẻ input txtSoUSD;
        + tạo biến soVND = soUSD * giaUSD;
        + gán kết quả sự kiện onlick btnQuyDoi 
            cho thẻ div thongBaoQuyDoi;
    - ĐẦU RA: show kết quả thongBaoQuyDoi khi click btnQuyDoi;
 */

document.getElementById("btnQuyDoi").onclick = function()
{
    var giaUSD = 23500;
    var soUSD = document.getElementById("txtSoUSD").value * 1;
    var soVND = soUSD * giaUSD; 
    var kqQuyDoi = soUSD+"USD "+ " bằng "+soVND+"VND"
    
    document.getElementById("thongBaoQuyDoi").innerHTML = kqQuyDoi;
}

//-------------------------BÀI 4--------------------------------
/**
    - ĐẦU VÀO:
        + nhập: chieuDai, chieuRong;
    - XỬ LÝ:
        + tạo biến chieuDai cho thẻ input txtChieuDai lấy value;
        + tạo biến chieuRong cho thẻ input txtChieuRong lấy value;
        + tạo biến dienTich = chieuDai * chieuRong;
        + tạo biến chuVi = (chieuDai + chieuRong) * 2;
        + gán kết quả sự kiện onclick btnTinhHCN
            cho thẻ div thongBaoHCN;
    - ĐẦU RA: show kết quả  thongBaoHCN khi click btnTinhHCN;
 */

document.getElementById("btnTinhHCN").onclick = function()
{
    var chieuDai = document.getElementById("txtChieuDai").value;
    var chieuRong = document.getElementById("txtChieuRong").value;

    chieuDai = parseInt(chieuDai);
    chieuRong = parseInt(chieuRong);

    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2;
    var kqHCN = "Diện tích HCN là: "+dienTich+" . Chu vi HCN là: "+chuVi;
    document.getElementById("thongBaoHCN").innerHTML = kqHCN;
}

//-------------------------BÀI 5-------------------------------
/**
    - ĐẦU VÀO: nhập vào 1 số có 2 chữ số
    - XỬ LÝ: 
        + tạo biến number cho thẻ input txtNumber lấy value;
        + tạo biến hangDonVi = number % 10;
        + tạo biến hangChuc = Math.floor(number / 10);
        + gán kết quả sự kiện onclick btnTinhKySo
            cho thẻ div thongBaoTinhKySo;
    - ĐẦU RA: show kết quả thongBaoTinhKySo khi click btnTinhKySo;
 */

document.getElementById("btnTinhKySo").onclick = function()
{
    var number = document.getElementById("txtNumber").value;
    number = parseInt(number);
    
    var hangDonVi = number % 10;
    var hangChuc = Math.floor(number/10);
    console.log("Hàng chục: "+ hangChuc + " . Hàng đơn vị: " + hangDonVi);
    var kqTinhKySo = "Tổng 2 ký số: "+ (hangChuc + hangDonVi);

    document.getElementById("thongBaoTinhKySo").innerHTML = kqTinhKySo;
}
