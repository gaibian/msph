
//--------------------------------------  焦点移除时检测  --------------------------------------;

//验证登录密码
function checkpass(pwd) {
	var strLength = ($(pwd).val()).length;
	if ( strLength < 6 ) {
		return false;
	}else if(/^[0-9]*$/.test( $(pwd).val() )){
		return false;
	}else if(/^[a-zA-Z]*$/.test( $(pwd).val() )){
		return false;
	}else if(!/^[a-zA-Z0-9!\"#$%&\'()*+,-./:;<=>?@\\^_`{|}~]{6,18}$/.test( $(pwd).val() )){
		return false;
	}else{
		return true;
	}
}

//textarea剩余字数统计效果
function statInputNum(textArea,numItem) {
    var max = numItem.text(),
            curLength;
    curLength = textArea.val().length;
    numItem.text(curLength);
    textArea.on('keyup', function () {
        var _value = $(this).val().replace(/\n/gi,"");
        numItem.text(_value.length);
    });
}

//时间格式化
function getYmdData($data) {
    var arr = $data.replace(/ |:/g, '-').split('-');
    var date;
    date = arr[0] + arr[1] + arr[2];
    return date;
}

//JQ获取当前时间及小于10以下自动加0
function p(s) {
    return s < 10 ? '0' + s: s;
}
function GetDateStr(AddDayCount) { 
	var dd = new Date(); 
	dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期 
	var y = dd.getFullYear(); 
	var m = dd.getMonth()+1;//获取当前月份的日期 
	var d = dd.getDate(); 
	return y+"-"+p(m)+"-"+p(d); 
} 

//验证支付密码
function checkTradePwd(pwd) {
	var strLength = ($(pwd).val()).length;
	if ( strLength != 6 ){
		return false;
	}else if(!/^[0-9]*$/.test( $(pwd).val() )){
		return false;
	}else{
		return true;
	}
}

//验证确认密码
function checkpassagain(pwd,pwdAgain) {
	var strLength = ($(pwdAgain).val()).length;
	if ( strLength < 6 ) {
		return false;
	}else{
		if($(pwdAgain).val()!= $(pwd).val()){
			return false;
		}else{
			return true;
		}
	}
}

//验证手机验证码
function checkyz(pwd) {
	var strLength = ($(pwd).val()).length;
	if ( strLength != 6 ){
		return false;
	}else if(!/^[0-9]*$/.test( $(pwd).val() )){
		return false;
	}else{
		return true;
	}
}

//验证图形验证码
function checkgraph(pwd) {
	var strLength = ($(pwd).val()).length;
	if ( strLength != 4 ){
		return false;
	}else if(!/^(\d|[a-zA-Z])+$/.test( $(pwd).val() )){
		return false;
	}else{
		return true;
	}
}

//验证支付密码
function checktradepass(pwd) {
	var strLength = ($(pwd).val()).length;
	if ( strLength != 6 ){
		return false;
	}else if(!/^[0-9]*$/.test( $(pwd).val() )){
		return false;
	}else{
		return true;
	}
}

//邮箱验证
function checkemail(pwd) {
	if ( $(pwd).val() == ''){
		return false;
	}else if(!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test( $(pwd).val() )){
		return false;
	}else{
		return true;
	}
}

//邮政编码验证
function checkzipcode(pwd) {
	var strLength = ($(pwd).val()).length;
	if ( strLength != 6 ){
		return false;
	}else if(!/[1-9]\d{5}(?!\d)/.test( $(pwd).val() )){
		return false;
	}else{
		return true;
	}
}

//添加中手机号验证
function checkpho(pwd){
	var strtel = $(pwd).val();
	var telReg = !!strtel.match(/^(13[0-9]|15[012356789]|17[012356789]|18[0-9]|14[57])[0-9]{8}$/);
	if ( $(pwd).val() == '') {
		return false;
	}else if(telReg == false) {
		return false;
	} else{
		return true;
	}
}

//银行卡添加中身份证验证
function checkidc(pwd){
	var pwdval = $(pwd).val();
	var strLength = ($(pwd).val()).length;
	pwdval = pwdval.toUpperCase();
	re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
	var arrSplit = pwdval.match(re);

	if ( pwdval == '') {
		return false;
	}
	else{
		if(strLength!=18){
			return false;
		}
		else{
			// 检查生日日期是否正确
			var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
			var bGoodDay;
			bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
			if (!bGoodDay) {
				return false;
			}
			else {
				// 检验18位身份证的校验码是否正确。
				// 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
				var valnum;
				var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
				var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
				var nTemp = 0, i;
				for (i = 0; i < 17; i++) {
					nTemp += pwdval.substr(i, 1) * arrInt[i];
				}
				valnum = arrCh[nTemp % 11];
				if (valnum != pwdval.substr(17, 1)) {
					return false;
				}
				else{
					return true;
				}
			}
		}
	}
}

//银行卡添加中银行卡验证
function checkbac(pwd){
	if ( $(pwd).val() == '') {
		return false;
	}
	else{
		var strtel = $(pwd).val();
		var reg = !!strtel.match(/^(\d{16}|\d{19})$/);
		if(reg == false){
			return false;
		}
		else{
			return true;
		}
	}
}

//姓名验证
function checkusername(pwd) {
	var strLength = ($(pwd).val()).length;
	if ( strLength < 2 ){
		return false;
	}else if(!/^[a-zA-Z\u4E00-\u9FA5]{1,6}$/.test( $(pwd).val() )){
		return false;
	}else{
		return true;
	}
}

//身份证照片
function checkfile(pwd){
	var thisFile = $(pwd);
	var filepath=thisFile.val();
	var extStart=filepath.lastIndexOf(".");
	var ext=filepath.substring(extStart,filepath.length).toUpperCase();
	var imgFileSize = 0;

	if( ext ==""){
		return false;
	}
	if(ext!=".PNG"&&ext!=".JPG"&&ext!=".JPEG"){
		return false;
	}
	if(/msie/.test(navigator.userAgent.toLowerCase())){
		var img = new Image();
		img.src = filepath;
		imgFileSize = img.fileSize;
	}else{
		imgFileSize = thisFile.get(0).files[0].size;
	}
	imgFileSize = imgFileSize/1024; //转换成KB
	if(imgFileSize > 500){
		return false;
	}else{
		return true;
	}
};

//验证车牌号
function checkcarnum2(pwd) {
	var strLength = ($(pwd).val()).length;
	if ( strLength != 7 ){
		return false;
	}else if(!/^[\u4e00-\u9fa5]{1}[A-Za-z]{1}[A-Za-z0-9]{5}$/.test( $(pwd).val() )){
		return false;
	}else{
		return true;
	}
}
function checkcarnum(pwd) {
	var strLength = ($(pwd).val()).length;
	if ( strLength != 5 ){
		return false;
	}else if(!/^[0-9a-zA-Z]{5}$/.test( $(pwd).val() )){
		return false;
	}else{
		return true;
	}
}

//验证车辆识别代码
function checkvin(pwd) {
	var strLength = ($(pwd).val()).length;
	if ( strLength != 17 ) {
		return false;
	}else{
		return true;
	}
}

// 字符串过滤
function htmlspecialchars(str)
{
	var s = "";
	if (str.length == 0) return "";
	for   (var i=0; i<str.length; i++)
	{
		switch (str.substr(i,1))
		{
			case "<": s += "&lt;"; break;
			case ">": s += "&gt;"; break;
			case "&": s += "&amp;"; break;
			case " ":
				if(str.substr(i + 1, 1) == " "){
					s += " &nbsp;";
					i++;
				} else s += " ";
				break;
			case "\"": s += "&quot;"; break;
			case "\n": s += "<br>"; break;
			default: s += str.substr(i,1); break;
		}
	}
	return s;
}

