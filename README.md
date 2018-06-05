# Forminit
自用表单引入插件
``` bash

##  Forminit  使用方法
	  引入本文件后，对照需要在formcss中引入对照css 
   CSS 分别有：	(1) formandformxxl.css 移动端基础表单和信息流表单样式
			    (2) Mobyusuan.css  移动端预算页面表单样式

##  Forminit 运用: Forminit(formtype,formnum) 
     formtype:定义表单类型.
  	(1) formtype = "Mob"     			-- 移动端常用预算表单。
  	(2) formtype = "Mobxxl"  			-- 移动端xxl用预算表单。
  	(3) formtype = "Mobyusuan" 		-- 移动端预算页面用表单。
  	(4) formtypr = "PCyusuan" 			-- PC页面预算功能使用表单。

##  formnum:定义表单提交方式以及提交后的操作.
  	(1) formnum = 1 					-- 表单提交后直接跳转到预算显示页面.
	(2) formnum = 3                    -- XXL表单专用提交。又额外代码增加.
   	(3) formnum 等于其他数值                     -- 表单提交后在当前页面显示数据结果，不进行跳转



```


