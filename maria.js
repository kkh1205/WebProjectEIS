const maria = require("mysql");
// 설치한 모듈인 mysql을 사용하기 위해 불러왔습니다.

const conn = maria.createConnection({
    host: 'database-1.chaokiahnhcd.us-east-2.rds.amazonaws.com',
    port: '3306',
    user: 'root',
    password: '123456789',
    database: 'soyeonidb'
});
// 연결하기 전에 정보를 설정해야 합니다.
// 위에서 제가 DB에 관한 내용을 다시 복기한 이유가 있습니다. 잘 적어주셔야 합니다.

module.exports = conn;
// 그리고 해당 js파일이 모듈로 사용될 때 conn을 담습니다.