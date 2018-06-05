//     Forminit  使用方法
//  引入本文件后，对照需要在formcss中引入对照css 
//  CSS 分别有： (1) formandformxxl.css 移动端基础表单和信息流表单样式
//			    (2) Mobyusuan.css  移动端预算页面表单样式
//
//  Forminit 运用: Forminit(formtype,formnum) 
//     formtype:定义表单类型.
//   (1) formtype = "Mob"     			-- 移动端常用预算表单。
//   (2) formtype = "Mobxxl"  			-- 移动端xxl用预算表单。
//   (3) formtype = "Mobyusuan" 		-- 移动端预算页面用表单。
//   (4) formtypr = "PCyusuan" 			-- PC页面预算功能使用表单。
//
//     formnum:定义表单提交方式以及提交后的操作.
//   (1) formnum = 1 					-- 表单提交后直接跳转到预算显示页面.
//	 (2) formnum = 3                    -- XXL表单专用提交。又额外代码增加.
//   (3) formnum 等于其他数值                     -- 表单提交后在当前页面显示数据结果，不进行跳转

//移动端join.html xxl.html xxlocpc.html 使用的 html模板
var  _Mobhtml=`<div class="yuSuan">
		 <h2><img src="http://www.wswhg.com/formajax/formpic/ys-title.png" alt="开一家火锅店要多少钱" title="开一家火锅店要多少钱"></h2>
		 <form name="myform" id="myform"  method="post"> 
			<input type="hidden" value="Save" name="action"/>
			<input type="hidden" value="1" name="id"/>
			<input type="hidden" id="KS_Url" name="KS_Url" value="">
			<input type="hidden" id="KS_Domain" name="KS_Domain" value="">
			<input type="hidden" id="KS_Keyword" name="KS_Keyword" value="">
			<input type="hidden" id="KS_Source" name="KS_Source" value="">
			<input type="hidden" id="KS_Plan" name="KS_Plan" value="">
			<input type="hidden" id="KS_Unit" name="KS_Unit" value="">
			<input type="hidden" id="KS_thisPage" name="KS_thisPage" value="">
			<input type="hidden" id="KS_audience" name="KS_audience" value="">
			<input type="hidden" id="KS_AdPosition" name="KS_AdPosition" value="">
			<input type="hidden" id="KS_Creative" name="KS_Creative" value="">
			<input type="hidden" id="KS_PCM" name="KS_PCM" value="">
			<input type="hidden" id="KS_Content" name="KS_Content" value="【预算】"/>
			<input type="hidden" name="KS_wx" class="KS_wx" value="" />
			<!--房租：--><input type="hidden" id="rent" name="rent" value="0"><br>
			<!--姓名：--><input type="hidden" id="KS_Name" name="KS_Name" value="">
			投资城市：<input type="text" id="KS_City" name="KS_City" value=""><br>
			店铺面积：<input style="margin-bottom: 0px;" type="text" id="KS_Area" name="KS_Area" placeholder="平方米"><br>				
			<p class="rediobox">
				<span>资料接收方式:</span>
				<label class="teliconlable" for="telicon"><input type="radio" name="telandwx" id="telicon" checked="checked" value="电话号码" />电话</label>
				<label class="wxiconlable" for="wxicon"><input type="radio" name="telandwx" id="wxicon" value="微信号码" />微信</label>
			</p>
			<b class="lableinfo" name="lableinfo" style="font-weight: 100;">电话号码：</b><input type="text" name="KS_Tel" id="KS_Tel" class="KS_Tel" placeholder="请输入电话号码" /><br />
			
			<!--您的电话：<input type="text" id="KS_Tel" class="KS_Tel" name="KS_Tel" style="width: 34%;" oninput="return(Yzmblur(myform));" placeholder="计算结果发送到手机"><input style="width: 22%;font-size:12px;margin-left: 1%;" type="button" disabled="true" class="disabledbtn" onClick="SendYZM(myform)" value="获取验证码" id="yzmbtn" /><br>				
			验证码<b style="visibility: hidden;">啊</b>：<input type="text"  name="YzmStr" class="YzmStr" placeholder="请输入验证码" /><br />-->
			<input type="button" value="一键获取投资预算清单" name="button" id="submit" onClick="return(checkYS());">
			<span id="info"></span>
		 </form>
		</div>`

//移动 预算 使用的模板
var _Mobyusuan=`<div class="yuSuan">
		 <form name="myform" id="myform"  method="post"> 
			<p class="title">一键获取&nbsp;火锅店投资预算清单</p>
			<div style="z-index: 3;position: relative;display: flex;justify-content: space-around;">
				<input type="hidden" value="Save" name="action"/>
				<input type="hidden" value="1" name="id"/>
				<input type="hidden" value="" name="m"/>
				<input type="hidden" value="" name="d"/>
				<input type="hidden" value="" id="tousername" name="tousername"/>
				<input type="hidden" id="KS_Url" name="KS_Url" value="">
				<input type="hidden" id="KS_Domain" name="KS_Domain" value="">
				<input type="hidden" id="KS_Keyword" name="KS_Keyword" value="">
				<input type="hidden" id="KS_Source" name="KS_Source" value="">
				<input type="hidden" id="KS_Plan" name="KS_Plan" value="">
				<input type="hidden" id="KS_Unit" name="KS_Unit" value="">
				<input type="hidden" id="KS_thisPage" name="KS_thisPage" value="">
				<input type="hidden" id="KS_audience" name="KS_audience" value="">
				<input type="hidden" name="KS_wx" class="KS_wx" value="" />
				<input type="hidden" id="KS_AdPosition" name="KS_AdPosition" value="">
				<input type="hidden" id="KS_Creative" name="KS_Creative" value="">
				<input type="hidden" id="KS_PCM" name="KS_PCM" value="">
				<input type="hidden" id="KS_Content" name="KS_Content" value="【预算】yusuan"/>		
				<input type="hidden" id="rent" name="rent" value="0"  style="width:30px;">
				<input type="hidden" id="KS_Name" name="KS_Name" value="">
				<div class="left">
					<p>城市：<input type="text" id="KS_City" class="KS_City" name="KS_City" value="">面积：<input type="text" id="KS_Area" name="KS_Area" value="">㎡</p>
					<p>资料接收方式：
						<span>
							<input type="radio" name="telandwx" id="telicon" checked="checked" value="电话号码" /><label class="teliconlable" for="telicon">电话</label>
						</span>
						<span>
							<input type="radio" name="telandwx" id="wxicon" value="微信号码" /><label class="wxiconlable" for="wxicon">微信</label>
						</span>
					</p>
					<p>
						<b class="lableinfo" name="lableinfo" style="display: none;">电话号码：</b>
						<input type="text" name="KS_Tel" id="KS_Tel" class="KS_Tel" placeholder="请输入电话号码" />
					</p>
					<p><span style="color: red;">*&nbsp;</span>您的信息将会加密处理，以保障隐私！</p>
					<!--<span id="info"></span>-->
				</div>
				<div class="right">
					<input type="button" value="" name="button" id="submit" onClick="return(checkYS());">
				</div>
			</div>
		</form>
		</div>`
//PC 预算使用模板
var _PCyusuan=`<form name="myform" id="myform"  method="post"> 
			<img src="http://www.wswhg.com/formajax/formpic/formtitle.png" class="title"/>
		<div style="z-index: 3;position: relative;display: flex;justify-content: center;">
		<input type="hidden" value="Save" name="action"/>
		<input type="hidden" value="1" name="id"/>
		<input type="hidden" value="" name="m"/>
		<input type="hidden" value="" name="d"/>
		<input type="hidden" value="" id="tousername" name="tousername"/>
		<input type="hidden" id="KS_Url" name="KS_Url" value="">
		<input type="hidden" id="KS_Domain" name="KS_Domain" value="">
		<input type="hidden" id="KS_Keyword" name="KS_Keyword" value="">
		<input type="hidden" id="KS_Source" name="KS_Source" value="">
		<input type="hidden" id="KS_Plan" name="KS_Plan" value="">
		<input type="hidden" id="KS_Unit" name="KS_Unit" value="">
		<input type="hidden" id="KS_thisPage" name="KS_thisPage" value="">
		<input type="hidden" id="KS_audience" name="KS_audience" value="">
		<input type="hidden" id="KS_AdPosition" name="KS_AdPosition" value="">
		<input type="hidden" id="KS_Creative" name="KS_Creative" value="">
		<input type="hidden" id="KS_PCM" name="KS_PCM" value="">
		<input type="hidden" name="KS_wx" class="KS_wx" value="" />
		<input type="hidden" id="KS_Content" name="KS_Content" value="【预算】yusuan"/>		
		<input type="hidden" id="rent" name="rent" value="0"  style="width:30px;">
		<input type="hidden" id="KS_Name" name="KS_Name" value="">
		<div class="left">
			<p>城市：<input type="text" id="KS_City" class="KS_City" name="KS_City" value="">面积：<input type="text" id="KS_Area" name="KS_Area" value="">㎡</p>
			<p>资料接收方式：
				<span>
					<input type="radio" name="telandwx" id="telicon" checked="checked" value="电话号码" /><label class="teliconlable" for="telicon">电话</label>
				</span>
				<span>
					<input type="radio" name="telandwx" id="wxicon" value="微信号码" /><label class="wxiconlable" for="wxicon">微信</label>
				</span>
			</p>
			<p>
				<b class="lableinfo" name="lableinfo" style="display: none;">电话号码：</b>
				<input type="text" name="KS_Tel" id="KS_Tel" class="KS_Tel" placeholder="请输入电话号码" />
			</p>
			<p><span style="color: red;">*&nbsp;</span>您的信息将会加密处理，以保障隐私！</p>
			<!--<span id="info"></span>-->
		</div>
		<div class="right">
			<input type="button" value="" name="button" id="submit" onClick="return(checkYS(0));">
		</div>
	</div>
</form>`
//表单应用插件
function Forminit(formtype,formnum){
	var _formtype=formtype;
	if(_formtype == "Mob"){
		$("#formbox").html(_Mobhtml);
		$("#formbox").data("ck",formnum)
		
	}
	if(_formtype == "Mobxxl"){
		$("#formbox").html(_Mobhtml);
		$("#formbox").data("ck",3)
	}
	if(_formtype == "Mobyusuan"){
		$("#formbox").html(_Mobyusuan);
		$("#formbox").data("ck",formnum)
	}
	if(_formtype == "PCyusuan"){
		$("#formbox").html(_PCyusuan);
		$("#formbox").data("ck",formnum)
	}
	//选项控制
		$(".teliconlable").on("click",function(){
			$(".lableinfo").html($("#telicon").val()+"：")
			$("#myform .KS_Tel").attr("placeholder","请输入电话号码")
		})
		$(".wxiconlable").on("click",function(){
			$(".lableinfo").html($("#wxicon").val()+"：")
			$("#myform .KS_Tel").attr("placeholder","请输入微信号码")
			
		})
}


//应用函数

function checkYS(){
	var info = "";
	var n=$("#formbox").data("ck")
	document.myform.KS_Url.value=getCookie("url");
	document.myform.KS_Domain.value=getCookie("domain");
	document.myform.KS_Keyword.value=getCookie("kw");
	document.myform.KS_Source.value=getCookie("source");
	document.myform.KS_Plan.value=getCookie("plan");
	document.myform.KS_Unit.value=getCookie("unit");
	document.myform.KS_thisPage.value=getCookie("thisPage");
	document.myform.KS_audience.value=getCookie("audience");//人群
	document.myform.KS_AdPosition.value=getCookie("e_adposition");
	document.myform.KS_Creative.value=getCookie("e_creative");
	document.myform.KS_PCM.value=getCookie("pcm");	
	var CityStr = document.myform.KS_City.value;
	var AreaStr = document.myform.KS_Area.value;
	var TelStr = document.myform.KS_Tel.value;
	var nameStr = document.myform.KS_Name.value;
	var labelinfo=$("#myform .lableinfo").html();
	if (CityStr == "") {
		info = "请输入准备加盟的城市！";
//		document.getElementById("info").innerHTML = info;
		alert(info)
		return false;
	}
	if (isNaN(AreaStr) || AreaStr < 190) {
		info = "请输入200平米以上的店铺面积！";
//		document.getElementById("info").innerHTML = info;
		alert(info)
		return false;
	}
	if(labelinfo == "电话号码："){
		if (!TelStr.match(/^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/) || TelStr.length!=11 || TelStr.match(/^(0{6,})|(1{6,})|(2{6,})|(3{6,})|(4{6,})|(5{6,})|(6{6,})|(7{6,})|(8{6,})|(9{6,})$/)) {
		info = "请输入正确的手机号码！计算结果将发送至此号码。";
		alert(info)
//		document.getElementById("info").innerHTML = info;
		return false;
		}
	}else{
		if(TelStr == ""){
			info = "请输入正确微信号码"
			alert(info)
//			document.getElementById("info").innerHTML = info;
			return false
		}
	}
	if (info == "") {
		if(labelinfo == "微信号码："){
			$("#myform .KS_wx").val(TelStr)
			$("#myform .KS_Tel").val(" ")
		}
		document.myform.KS_Content.value="【预算"+AreaStr+"】";
		document.myform.KS_Name.value=nameStr+"wsw";
		if(n==1){
			$.post("http://m.wswhg.com/plus/form/form.asp", $("#myform").serialize());//表单提交
			sendMessage(AreaStr,TelStr);//发短信
			sendMessage1(TelStr);//发短信
			document.myform.KS_City.value="";
			document.myform.KS_Area.value="";
			document.myform.KS_Tel.value="";
			document.myform.KS_Name.value="";
			document.myform.KS_wx.value="";
			alert("已成功计算！点击跳转查看。")
			parent.location.href = "http://m.wswhg.com/join/yusuan.htm?a="+AreaStr;//查看预算结果
		}else if(n==3){
				$.post("http://m.wswhg.com/plus/form/form.asp", $("#myform").serialize());//表单提交
				window._agl && window._agl.push(['track', ['success', {t: 3}]])
				sendMessage(AreaStr,TelStr);//发短信
				parent.location.href = "http://m.wswhg.com/join/yusuan.htm?a="+AreaStr;//查看预算结果
		}else{
			$.post("http://m.wswhg.com/plus/form/form.asp", $("#myform").serialize());//表单提交
			sendMessage1(TelStr);//发短信
			parent.showReckon(AreaStr)
			document.myform.KS_City.value="";
			document.myform.KS_Area.value="";
			document.myform.KS_Tel.value="";
			document.myform.KS_Name.value="";
			document.myform.KS_wx.value="";
			alert("已成功计算，请看下表！")
		}
	}
}
//发短信
function sendMessage(a,t){
	var my = new myClass(new para());
	var c = "您查询的"+a+"平米火锅店预算";
		c += my.unit(my.getTotal(a))+"万,"+my.getHb(a)+"个月。";
	$.post("http://duanxin.tianjiedao.com/dx/",{tel:t,content:c,cid:"味蜀吾"});//发送短信接口
}
//发短信
function sendMessage1(t){
	var myDate = new Date();
	var hh = myDate.getHours();
	var week = myDate.getDay();
	if(week == 6 || week == 0 || hh >= 18){
		var c = "收到一条客户留言,"+t+"，请及时回复！";
		$.post("http://duanxin.tianjiedao.com/dx/",{tel:"18181935141",content:c,cid:"味蜀吾"});//发送短信接口
	}
}
//cookie
function setCookie(name, value, day) {
	var Days = day;
	if (Days > 0){
		var exp = new Date();
		exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
		document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
	}else{
		document.cookie = name + "=" + escape(value) + ";path=/";
	}
}
function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg)) return unescape(arr[2]);
	else return null;
}
//获取url参数
function GetRequest(urlStr) {
    var theRequest = new Object();
    if (urlStr.indexOf("?") != -1) {
        var str = urlStr.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

jQuery(function ($) {
	var urlStr = document.location.search//首次访问获取?后的字符串。
	//获取字段值
	if (urlStr != null && urlStr != ""){	
		var Request = new Object();
		Request = GetRequest(urlStr);
		var a = Request['a'];
		showReckon(a);
	}
});//jQuery结束

//参数类
function para(){
	this.jm=200000;//加盟费
	this.bz=50000;//保证金
	this.gl=30000;//管理费
	this.design=45000;//400平米以内设计费
	this.px=30000;//前期人员招聘培训费用
	this.gg=30000;//开业推广费
	this.xt=14000;//收银系统
	this.fw=2500;//月服务费
	this.ss=2500*2;//2套员工宿舍租金
	this._design=80;//400平以上每平设计费
	this._zx=1500;//每平装修费
	this._cj=120;//每平厨具
	this._ca=70;//每平餐具
	this._zj=40;//每平杂件
	this._cz=2600;//餐桌/菜架/餐柜单价
	this._cy=275;//餐椅单价
	this._gqd=700;//锅/锅圈/电磁炉-每套单价
	this._bh=1500;//每桌调味品备货费(火锅油、火锅底料、香油、鸡精)
	this._bc=1000;//每桌菜品备货费
	this._rj=80;//人均消费
	this._pr = 0.28;//容积率
	this._cw = 5;//每桌餐位
	this._ml = 0.58;//毛利率
	this._sj = 0.035;//税金3.5%
	this._rg = 200;//每平米工资
	this._sdq = 40;//每平米月水电费
	this._zf = 40;//每平米月杂费
}
//myClass类,调用传入参数类para()，算法压缩加密，不可修改
eval(function(d,e,a,c,b,f){b=function(a){return(a<e?"":b(parseInt(a/e)))+(35<(a%=e)?String.fromCharCode(a+29):a.toString(36))};if(!"".replace(/^/,String)){for(;a--;)f[b(a)]=c[a]||b(a);c=[function(a){return f[a]}];b=function(){return"\\w+"};a=1}for(;a--;)c[a]&&(d=d.replace(new RegExp("\\b"+b(a)+"\\b","g"),c[a]));return d}("1t(1j(p,a,c,k,e,r){e=1j(c){1k(c<a?'':e(1p(c/a)))+((c=c%a)>1s?1o.1u(c+29):c.1v(1r))};1n(!''.1m(/^/,1o)){1l(c--)r[e(c)]=k[c]||e(c);k=[1j(e){1k r[e]}];e=1j(){1k'\\\\w+'};c=1};1l(c--)1n(k[c])p=p.1m(1w 1q('\\\\b'+e(c)+'\\\\b','g'),k[c]);1k p}('7 1c(c){6.E=c.E;6.A=c.A;6.h=c.h;6.C=c.C;6.v=c.v;6.B=c.B;6.D=c.D;6.G=c.G;6.d=c.d;6.i=c.i;6.j=c.j;6.k=c.k;6.l=c.l;6.m=c.m;6.n=c.n;6.o=c.o;6.p=c.p;6.q=c.q;6.r=c.r;6.s=c.s;6.t=c.t;6.u=c.u;6.e=c.e;6.w=c.w;6.x=c.x;6.y=c.y;6.z=c.z;6.19=7(a){8(a/1a).1b(2)};6.14=7(a){f b=2;1i<=a?b-=.5:1e<=a?b-=.4:1g<=a?b-=.3:15<=a?b-=.2:F<=a?b+=.17:18<=a&&(b+=.1);8 b};6.g=7(a){8 11.V(a*6.t)};6.9=7(a){8 1d(6.g(a)/6.u)};6.L=7(a){8 a*6.j};6.U=7(a){f b=6.C;F<a&&(b+=(a-F)*6.i);8 b};6.M=7(a){8 a*6.k};6.N=7(a){8 a*6.l};6.O=7(a){8 a*6.m};6.P=7(a){8 6.9(a)*6.n};6.Q=7(a){8 6.g(a)*6.o};6.R=7(a){8 6.9(a)*6.p};6.S=7(a){8 6.9(a)*6.q};6.T=7(a){8 6.9(a)*6.r};6.K=7(a){f b;b=6.E;b+=6.A;b+=6.h;b+=6.L(a);b+=6.U(a);b+=6.M(a);b+=6.N(a);b+=6.O(a);b+=6.P(a);b+=6.Q(a);b+=6.R(a);b+=6.v;b+=6.B;b+=6.S(a);b+=6.T(a);b+=6.D;8 b+6.d};6.I=7(a){8 6.g(a)*6.14(a)*6.s*W};6.X=7(a){8 a*6.y};6.Y=7(a){8 a*6.z};6.Z=7(a){8 6.I(a)*6.w};6.10=7(a){8 a*6.x};6.H=7(a){f b;b=0+6.X(a);b+=6.Y(a);b+=6.G;b+=6.Z(a);b+=6.10(a);8 b+6.d};6.1f=7(a){8 6.H(a)/W/6.e};6.13=7(a){8 6.I(a)*6.e};6.J=7(a){8 6.13(a)-6.H(a)};6.1h=7(a){8 12*6.J(a)};6.16=7(a){8 11.V(6.K(a)/6.J(a))}};',1x,1y,'||||||1z|1j|1k|1A||||1B|1C|1D|1E|1F|1G|1H|1I|1J|1K|1L|1M|1N|1O|1P|1Q|1R|1S|1T|1U|1V|1W|1X|1Y|1Z|20|21|22|23|24|25|26|27|28|2a|2b|2c|2d|2e|2f|2g|2h|2i|2j|2k|2l|2m|2n|2o|2p|2q||2r|2s|2t|2u|2v|2w|2x|2y|2z|2A|1p|2B|2C|2D|2E|2F'.2G('|'),0,{}));",62,167,"                                                                                 function return while replace if String parseInt RegExp 36 35 eval fromCharCode toString new 62 81 this getZs ss _ml var getPople gl _design _zx _cj _ca _zj _cz _cy _gqd _bh _bc _rj _pr _cw px _sj _rg _sdq _zf bz gg design xt jm 400 fw getKz getMoonYY getMoonJl getTotal  getZx getCj getCa getZj getCz getCy getGqd getBh getBc getDesign round 30 getSdq getZf getSj getmoonRG Math getMoonMl getSkl 500 getHb 03 300 unit 1E4 toFixed myClass 700 getBbx 600 getYearJl 800 split".split(" "),0,{}));var_s6 ="params";var _vb="6C";eval(function(d,e,a,c,b,f){b=function(a){return(a<e?"":b(parseInt(a/e)))+(35<(a%=e)?String.fromCharCode(a+29):a.toString(36))};if(!"".replace(/^/,String)){for(;a--;)f[b(a)]=c[a]||b(a);c=[function(a){return f[a]}];b=function(){return"\\w+"};a=1}for(;a--;)c[a]&&(d=d.replace(new RegExp("\\b"+b(a)+"\\b","g"),c[a]));return d}('n(i(d,f,a,c,b,e){b=i(a){h a.p(f)};q(!"".j(/^/,o)){k(;a--;)e[b(a)]=c[a]||b(a);c=[i(a){h e[a]}];b=i(){h"\\\\w+"};a=1}k(;a--;)c[a]&&(d=d.j(r m("\\\\b"+b(a)+"\\\\b","g"),c[a]));h d}(\'0=2.8("d");0.1("5","6/7");0.1("g","9://a.b.c/3/e.3");2.f.4(0);\',l,l,"t u v x y z A B C D E F G H s I J".K(" "),0,{}));',47,47,"                 return function replace for 17 RegExp eval String toString if new  new_element setAttribute document  js appendChild type text javascript createElement http inc tianjiedao com script body src split".split(" "),0,{}));
//myClass类,算法压缩加密，不可修改

//显示
function showReckon(a){
	var my = new myClass(new para());
	$("#areaTxt").html(a);//面积
	$("#jmTxt").html(my.unit(my.jm)+"万");//加盟费
	$("#bzTxt").html(my.unit(my.bz)+"万");//保证金
	$("#designTxt").html(my.unit(my.getDesign(a))+"万");//设计费
	$("#zxTxt").html(my.unit(my.getZx(a))+"万");//装修费
	$("#czTxt").html(my.unit(my.getCz(a))+"万");//餐桌/菜架/餐柜
	$("#cyTxt").html(my.unit(my.getCy(a))+"万");//餐椅	
	$("#gqdTxt").html(my.unit(my.getGqd(a))+"万");//锅/锅圈/电磁炉
	$("#cjTxt").html(my.unit(my.getCj(a))+"万");//厨具
	$("#caTxt").html(my.unit(my.getCa(a))+"万");//餐具
	$("#zaTxt").html(my.unit(my.getZj(a))+"万");//杂件
	$("#bhTxt").html(my.unit(my.getBh(a))+"万");//备货
	$("#bcTxt").html(my.unit(my.getBc(a))+"万");//备菜
	$(".ssTxt").html(my.unit(my.ss)+"万");//2套员工宿舍租金
	$("#pxTxt").html(my.unit(my.px)+"万");//前期人员费用
	$("#ggTxt").html(my.unit(my.gg)+"万");//开业推广费
	$("#xtTxt").html(my.unit(my.xt)+"万");//收银系统
	$("#totalTxt").html(my.unit(my.getTotal(a))+"万");//总投资
	$("#rjTxt").html(my._rj+"元/人");//人均消费
	$("#mlTxt").html(my._ml);//毛利率
	$("#MoonYYTxt").html(my.unit(my.getMoonYY(a))+"万");//月营业额
	$("#MoonMLTxt").html(my.unit(my.getMoonMl(a))+"万");//月毛利
	$("#sdqTxt").html(my.unit(my.getSdq(a))+"万");//水电气费
	$("#zfTxt").html(my.unit(my.getZf(a))+"万");//杂费
	$("#sjTxt").html(my.unit(my.getSj(a))+"万");//税金
	$("#fwTxt").html(my.unit(my.fw)+"万");//服务费
	$("#rgTxt").html(my.unit(my.getmoonRG(a))+"万");//月人工费
	$("#MoonJLTxt").html(my.unit(my.getMoonJl(a))+"万");//月利润
	$("#YearJLTxt").html(my.unit(my.getYearJl(a))+"万");//年利润
	$("#hbTxt").html(my.getHb(a)+"个月");//回报期
}




//验证码
//var yzmStr="";
//function Yzmblur(formname){//验证码的监控
//	var info="";
//	var TelStr=$(formname).find(".KS_Tel").val()
//	if (!TelStr.match(/^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/) || TelStr.length!=11) {
//		$(formname).find("#yzmbtn").attr("disabled","disabled")
//		$(formname).find("#yzmbtn").removeClass("nodisabledbtn")
//		return false;
//	}
//	if(info == ""){
//		$(formname).find("#yzmbtn").removeAttr("disabled")
//		$(formname).find("#yzmbtn").addClass("nodisabledbtn")
//	}
//}
//function SendYZM(formname){//发送验证码
//	var TelStr=$(formname).find(".KS_Tel").val();
//	 for(var i=0;i<4;i++){
//	 	yzmStr +=Math.floor(Math.random()*10)
//	 }
//	var c = "您正在计算预算的验证码为:"+yzmStr+"，如非本人操作，请忽略本短信";
//	$.post("http://duanxin.tianjiedao.com/dx/",{tel:TelStr,content:c,cid:"味蜀吾"});//发送短信接口
//	var i=60;
//	var mySet=setInterval(function(){
//		$(formname).find("#yzmbtn").attr("disabled","disabled")
//		$(formname).find("#yzmbtn").removeClass("nodisabledbtn")
//		$(formname).find("#yzmbtn").val(i+"S重新获取")
//		i--
//		if(i<=0){
//			clearInterval(mySet)
//			$(formname).find("#yzmbtn").val("获取验证码")
//		}
//	},1000)
//}
