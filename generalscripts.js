const express = require('express')
const path = require('path')

const app = express()

const dirPath = path.join(__dirname)
console.log(dirPath)
// const indexPath = dirPath + "/GS Index file/index.html"
// console.log(indexPath)

app.use(express.static(dirPath),function(req,res,next){
    console.log("===========================================")
    console.log("domain name is " + req.hostname)
    console.log("path ; " +  req.path)
    console.log("originalurl ; " +  req.originalUrl)
    console.log("baseurl ; " +  req.baseUrl)
    console.log("===========================================")
    next()
})

//------------------------General Scripts Basic Tage ------------------------------
app.get('/' , function (req , res){

    res.sendFile(dirPath + '/GS Index file/index.html')

})

app.get('/Terms' , function (req , res){

    res.sendFile(dirPath + '/Terms Of Use/TermsOfUse.html')

})

app.get('/PrivacyPolicy' , function (req , res){

    res.sendFile(dirPath + '/Privacy Policy/PrivacyPolicy.html')

})

app.get('/Disclaimer' , function (req , res){

    res.sendFile(dirPath + '/Disclaimer/Disclaimer.html')

})

//------------------------Ubuntu Guide --------------------------------------------

app.get('/UbuntuGuide/CreatingBootableUsbDrive/' , function (req , res){

    res.sendFile(dirPath + '/Ubuntu guide/creating bootable usb drive/creating bootable usb drive.html')

})

app.get('/UbuntuGuide/InstallingUbuntuAlongsideWindows10/' , function (req , res){

    res.sendFile(dirPath + '/Ubuntu guide/Installing Ubuntu Alongside Windows 10/installing ubuntu alongside windows 10.html')

})

app.get('/UbuntuGuide/ReinstallingUbuntu/' , function (req , res){

    res.sendFile(dirPath + '/Ubuntu guide/Reinstalling Ubuntu/Reinstalling Ubuntu.html')

})

app.get('/UbuntuGuide/ResolvingIssues/' , function (req , res){

    res.sendFile(dirPath + '/Ubuntu guide/Resolving Issues/Resolving Issues.html')

})

app.get('/UbuntuGuide/UninstallUbuntu/' , function (req , res){

    res.sendFile(dirPath + '/Ubuntu guide/Uninstall Ubuntu/Uninstall Ubuntu.html')

})


//------------------------ ERROR 404 --------------------------------------------


app.get('*' , function (req , res){

    res.sendFile(dirPath + '/error404/404 error.html')

})

//------------------------         --------------------------------------------

console.log("started")

app.listen(1027,function (){
    console.log("server started at port 1027")
})