window.onload=function () {
    document.getElementById("name").focus();
    if(document.getElementById("contact")!=null){
        document.getElementById("contact").onsubmit=function () {
            var sName=document.getElementById("name").value;
            var sDzyj=document.getElementById("dzyj").value;
            var sTelephone=document.getElementById("telephone").value;
            var sCompany=document.getElementById("company").value;
            var oSex=document.getElementsByName("sex");
            /*获得性别选项值*/
            for(iCv=0;iCv<oSex.length;iCv++){
                if(oSex.item(iCv).checked)
                    sSex=oSex.item(iCv).value;
            }
            alert("!");
            var oAge=document.getElementById("age");
            /*获得年龄选项值*/
            for(iCv=0;iCv<oAge.length;iCv++){
                if(oAge.options[iCv].selected)
                    sAge=oAge.options[iCv].firstChild.nodeValue;
            }
            //alert("!!");
            var sInterst="";
            var oInterst=document.getElementsByName("interest");
            /*获得爱好选项值*/
            for(iCv=0;iCv<oInterst.length;iCv++){
                if(oInterst.item(iCv).checked)
                    sInterst+=oInterst.item(iCv).value;
            }
            //alert("!!!");
            document.getElementById("message").style.visibility="visible";
            //alert("!!!!");
            document.getElementById("submitmessage").innerHTML="<strong>姓名："+sName+"<br>性别："+sSex+
                "<br>年龄范围："+sAge+"<br>爱好："+sInterst+"<br>电子邮件："+sDzyj+"<br>固定电话："+sTelephone+
            "<br>公司："+sCompany+"</strong>";

            return false;/*不提交表单*/
            /*return true; 提交表单*/
        }
    }
}