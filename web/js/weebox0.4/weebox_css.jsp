<%@ page language="java" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
/**
* weebox.css
*
* @category javascript
* @package jquery
* @author Jack
<xiejinci
@gmail.com>
* @version
*/

.dialog-loading {background:url(img/common_loading.gif) no-repeat center; width:100%; height:100%}
.dialog-mask{border:0px; background:#000; margin:0px; padding:0px; position:absolute; top:0px; left:0px;background:url(img/dialog_bg.png); _filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod="scale", src="<%=basePath %>js/weebox0.4/img/dialog_bg.png"); _background:none;}
.dialog-button{clear: both;}
.dialog-button input{overflow:visible; overflow-y:hidden;}
.dialog-btn1,.dialog-ok{border:1px solid #999; background:url(img/common_btn_cancel.gif) top;height:24px; line-height:24px; color:#666;cursor:pointer;padding:0px;padding-left:5px; padding-right:5px; margin:0px;}
.dialog-btn2,.dialog-cancel{border:1px solid #999; background:url(img/common_btn_cancel.gif) top;height:24px; line-height:24px; color:#666;cursor:pointer;padding:0px;padding-left:5px; padding-right:5px; margin:0px;}
.dialog-btn1,.dialog-btn2{margin-right:10px}
.dialog-content{text-align:left; clear:both; overflow:auto;}

.weedialog{width:300px; color:#444;}
.weedialog a:link,weedialog a:visited {color: #005EAC; text-decoration:none;}
.weedialog a:hover {color:#ff6600; text-decoration:underline;}
.weedialog .dialog-header{height:40px; position:relative; cursor:move;}
.weedialog .dialog-tc{margin-left:11px; margin-right:11px; width:auto; height:40px;font-weight:bold;}
.weedialog .dialog-tc2{height:34px; line-height:34px; font-size:14px; width:100%; clear:both;background:url(img/dialog_tc2.gif) top; text-align:left;}
.weedialog .dialog-tc1{height:6px; overflow:hidden; background:url(img/dialog_tc1.png) repeat-x; _filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod="scale", src="<%=basePath %>js/weebox0.4/img/dialog_tc1.png"); _background:none;}
.weedialog .dialog-tl{position:absolute; left:0px; top:0px;width:11px; height:40px; background:url(img/dialog_tl.png) no-repeat; _filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod="scale", src="<%=basePath %>js/weebox0.4/img/dialog_tl.png"); _background:none;}
.weedialog .dialog-tr{position:absolute; right:0px;top:0px;width:11px; height:40px; background:url(img/dialog_tr.png) no-repeat; _filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod="scale", src="<%=basePath %>js/weebox0.4/img/dialog_tr.png"); _background:none;}
.weedialog .dialog-close{float:right;cursor:pointer;margin:8px 3px 0 0; height:14px; width:14px; background:url(img/dialog_close1.png) no-repeat; /*_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod="scale", src="<%=basePath %>js/weebox0.4/img/dialog_close1.png"); _background:none;*/}
.weedialog .dialog-close:hover{background:url(img/dialog_close2.png) no-repeat; /*_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod="scale", src="<%=basePath %>js/weebox0.4/img/dialog_close2.png"); _background:none;*/}
.weedialog .dialog-content{clear:both; line-height:20px; padding:5px; background:#fff; text-align:left; overflow-y:auto; overflow-x:hidden;}
.weedialog .dialog-button{clear:both; background:#fff;}
.weedialog .dialog-cl{width:6px;background:url(img/dialog_con_lc.png); _filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod="scale", src="<%=basePath %>js/weebox0.4/img/dialog_con_lc.png"); _background:none;}
.weedialog .dialog-cr{width:6px;background:url(img/dialog_con_rc.png); _filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod="scale", src="<%=basePath %>js/weebox0.4/img/dialog_con_rc.png"); _background:none;}
.weedialog .dialog-button{text-align:right; font-size:12px; padding-right:6px; _padding-right:2px;}
.weedialog .dialog-ok{border:1px solid #999; background:url(img/btn_cancel.gif) top; height:24px; line-height:24px; color:#666;cursor:pointer; padding:0 5px; margin:0px;}
.weedialog .dialog-cancel{border:1px solid #999; background:url(img/btn_cancel.gif) top; height:24px; line-height:24px; color:#666;cursor:pointer; padding:0 5px; margin:0px;}
.weedialog .dialog-button-disabled{overflow:visible; overflow-y:hidden; border:1px solid #999; background:url(img/btn_cancel.gif) top; height:24px; line-height:24px; color:#666;cursor:pointer; padding:0 5px; margin:0px;}
.weedialog .dialog-bot{clear:both; height:11px; position:relative; font-size:0px;}
.weedialog .dialog-bl{position:absolute; left:0px; top:0px; width:11px; height:11px; background:url(img/dialog_bl.png) no-repeat; _filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod="scale", src="<%=basePath %>js/weebox0.4/img/dialog_bl.png"); _background:none;}
.weedialog .dialog-bc{margin-left:11px; margin-right:11px; width:auto; height:11px; background:url(img/dialog_bc.png) repeat-x; _filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod="scale", src="<%=basePath %>js/weebox0.4/img/dialog_bc.png"); _background:none;}
.weedialog .dialog-br{position:absolute; right:0px; top:0px; width:11px; height:11px; background:url(img/dialog_br.png) no-repeat; _filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod="scale", src="<%=basePath %>js/weebox0.4/img/dialog_br.png"); _background:none;}

.weealert .dialog-cancel{display:none;}

.weeselect li{float:left; width:120px;}
.weeselect .wsearch{width:100%;text-align:right;}

.weesuggest{width:160px;background:#ccc;}
.weesuggest .dialog-content{padding:5px;}
.weesuggest li{padding:0px;margin:0px;line-height:20px;cursor:pointer;border-bottom:1px dotted #bbb;}