function labeling(tag,aname,avalue,content)
{
var ele=document.createElement(tag);
ele.setAttribute(aname,avalue);
ele.innerHTML=content;
return ele;
}

function lb(br1){
var br=document.createElement(br1);
return br;
}

function inputfill(tag,avname,avvalue,avname1,avvalue1)
{
var ip=document.createElement(tag);
ip.setAttribute(avname,avvalue);
ip.setAttribute(avname1,avvalue1);
return ip;
}


var emailid=labeling("label","for","email","Email");
var br1=lb("br");
var inputmailid=inputfill("input","type","email","id","email");
var br2=lb("br");
var firstname=labeling("label","for","firstname","Firstname");
var br3=lb("br");
var inputfname=inputfill("input","type","firstname","id","firstname");
var br4=lb("br");
var lastname=labeling("label","for","lastname","Lastname");
var br5=lb("br");
var inputlname=inputfill("input","type","lastname","id","lastname");
var br6=lb("br");
var phonenumber=labeling("label","for","phonenumber","Phonenumber");
var br7=lb("br");
var inputphone=inputfill("input","type","phonenumber","id","phonenumber");

document.body.append(emailid,br1,inputmailid,br2,firstname,br3,inputfname,br4,lastname,br5,inputlname,br6,phonenumber,br7,inputphone);