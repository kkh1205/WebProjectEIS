function submitForm() {
    var id = document.frm.loginId.value;
    var pwd = document.frm.loginPass.value;

    if (id == "") {
        alert("아이디를 입력해 주세요");
    } else if (pwd == "") {
        alert("패스워드를 입력해 주십시오");
    } else if (id == "admin" && pwd == "12345") {
        location.href = "https://eissistem.herokuapp.com/main.html";
    } else {
        alert("등록된 정보가 없습니다");
    }
}
