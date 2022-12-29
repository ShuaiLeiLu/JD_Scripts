/*
年货节助力

变量
export CODENHJ=""  //金粉码
export CODENHJZL="true"  // 是否助力赢红包，填写变量开启，不填关闭

开始时间：2022.12.29 20:00-2023.1.15 23.59
更新:
12.29:优化显示

建议禁用，避免其他问题 需要的请填写自己的码子，
cron:0 0,12,20 * * *
============Quantumultx===============
[task_local]
#年货节助力
0 0,12,20 * * * jd_redhelp.js, tag=年货节助力, enabled=true
*/
const $ = new Env('年货节助力');
var _0xodN='jsjiami.com.v6',_0xodN_=['‮_0xodN'],_0x1692=[_0xodN,'eTo0YUU=','w7Zvw7vDuTo=','FMKzw794UA==','SQbCmcKKwp4=','w7fCkcKCMcOJ','NcOqNsOfFA==','GjzCgMOzw4o=','w4hxwrpvGA==','ehctR0cr','I8Ksw5FEYw==','w5LDpcKww5bDmQ==','Zk1sJzY=','csKtw65O','ScOOWX41','wrvDi0FQTA==','w495wp1aPA==','w7ZOw6wBw6w=','w5RUw4HDmsKx','TFpLDyk=','w6RGw7MDw5k=','LxTDvcKRGA==','LR3CssOQw5g=','NCZrVQA=','MVPDlcOqIA==','w7XCnS5xKg==','Z8KGQn/Ciw==','MCg5KA==','LTQ0ID7Cszw=','K1pjw7zCmw==','wojDp2duVcOPw5U=','IsKyw6dOeg==','w43Cg2AE','wrfDn8KKwqzDqA==','ZFRyLj4=','eRogZ1Yt','wpDDoR8bw7M=','Ah/CjsO+w6w=','dHbDtMOAcXA=','w5h5w4DDocKT','wovCohZnWsKc','w63DncKEw4vDoUvCmBTDlg==','w6XCnGEsw7M=','aFXDtMOqbg==','MlPCm8KFw4XDqcK7OA==','wrDDjy5EBcOVw4dWaMKqwrliwpRCDcOWw57CslwHw4fDsBcsEXQjEMKGLUpMwpPCisOJFTDCv1LCmsK4G8KGw7g=','w6MqwrIsdyxB','FcKUw6dpeg==','wqBibQQ/','Qxc+w5fCqw==','OcKPw7JAw6VZwrDChGDDiGVzw60ZbsOYw6cPWxtHw6XCqRMJdAN9w7vDlMOdw6nDj8OvJsKmw5hMw7NULSYvG2tWwpR0bih5woVFScO+w4jDlsKXwqwFw7PDlxjCqcKOVCAoIsOMw7vCoxvCl13DulbDuDdRcknCh8OEw45PZMOKJCBfWsOmwrFELlZ8wodQdcK4ZznCmsKlMkjClDPDqFAKAGXDlz3CpsKSL8KbwoBlw54VEsOcZCoAaMOywrLDjsOWJsOmw4glw7jDisKxwqzDoMOYAWtFw6oxw50iYTIowpvDmWbCmcOhwqRMw4JmwoNWwrIaNULDi8K9wr/DisOJw4VswpnCnsKyKxLDncOGUg==','wofDqcK8wrHDlw==','MsOzwq8JwrgAw6rDknfDhCohwq5VR8OXw64SSkoMw4jCqhkUaxtrwqjCkcKYwqTCmMOAE8KGwrRPw74gWUAqJktwwrsXazN3woJRUsO6w5DDmcOswroTwprCvA==','SGFJLEzDrQ==','wqbDihw/w7VIcMK/','HMO/JsOeEA==','YBvCpMKqLQ==','P8ORwpURwoc=','QcKsAS7Dp8Oe','O8OjLUFrPMOhwrAB','w5Zuw5nDnw==','BMORAsK/','dMOLasKtWsKwOMOV','w5HCqxUMw54=','J2nDt8OUCcOFFSvDsQ==','w44Cw78+LzhTw5/CmlRdaFARVgIHw6Y8w77Ct8KRQmrCicOHwqDClMKcwo0VYzwOacOMw6nDun3DlcOjGcOxSg==','w57Cu8KBIMO7','ecK4fxws','FMK+RhA9Mj3Dp8OsCsKyw5jDhBnDoMKWf8KCLcKEDcO1w53DljbDncOcBcOjw6JLbMOuNsKFwpBrXsO9WinCmMOiwqjDlsKJcULCuUIKw63CiMKqUwLDrFtGwqAzRlJmW8K6wqQHwrkPwoMtVmhhw67CvSVrwqF2QcOENMOYDMKXw593C8O7wq3Cr8OmwoDCjUTDsMOCwoTDocO3OArCpRhvwpxhwrXCsU8Fwo5ew4N0UcKPw5wowq/DhcKtRcKQQjbCmMKxwqjDqcOJeA/Dl21nRsKBfEnClwBrCU/DjcKnwoEPw5IFw4MIVsKHNMOvwpB6J2TDsiNUw6bDosKZw7DDn2/DizjDhgnCrcKHw77CuX4GwqvCu8Kj','5YuZ5YmU56KMRQ==','OnBXw4DCrg==','MSnDmcK4Lw==','wrp+IwN+w5F/','RzwTw5nCjw==','KSzCr8Kkbw==','wqzCtzBofw==','R8KNVUQ=','DcOZJV5I','woLCtRvCswA=','NwIqwozCusK3','CcOLwoouwoo=','wogVYcKVwpQ=','w7/Cq1Mkw4w=','AA0RwqXCsA==','bMKhw7hQw4I=','bsOTQ8KYWQ==','w6vDn8Kjw67Dmg==','LwTCvsOVw7o=','N2haw5TCiw==','AyXDrMKZLA==','DABnXxY=','KSvCtsKBeg==','BcOhPMOxGg==','wrFmWDwKw6bDl8OJaEIww7hvTkwswow=','w5pGwpdO','wo3CmV4=','w4F3w5Q2w50TIsK2Og==','wpoFdg==','w5Vdw6Isw60=','5YuX5YuW56CjIg==','CBVGWSY=','wqbCnA7CmD8=','w53CgxRMCQ==','wq/DmkBXWQ==','wrDDmAwBw50=','NAvDq8K4M2jCosK+wq8=','RsKdTQ8sETc=','wpTCtxRpWg==','bsOBTsKaR8K2PcObw5w=','wqPDqg4Tw6Q=','AsKqw70TEDXDsA==','TXc+JsO4','w5nCoTRdBw==','asO4AsO8wrA=','MT7CisOEaEHCoHTDnMKt','UMKgw6hww40=','wrHClC9XQw==','wqLDk8KkwojDlg==','TsOBF8O3wos=','QFF9GS8=','w6F/w7HDpg4=','w61mwpRKNQ==','cmXDs8OJ','FBxlSG0=','MywUMQM=','NMOlwqwfwqvDqsKlw6nDhA==','wozDrj8xw4hMKw==','bMKnw6p5w6NawrfCjCo=','ST8Jw5/Cqw==','wpfDpSs4w5FgKA==','w41GwrxJEQ==','wrLDuBYWw4M=','w6dpw6bDnSg=','w6cgwqId','FMKuw7ke','eQLCisKd','FBlwfhLCrMOFwqU=','dX/Du8OWe145U38=','cRQzQw==','w4F3w5Q2w50FP8K+','KQbDvcKJOVLCu8K7','Nw/DqMKYNA==','NyzDiMOSLA==','wrgKNFolMnTDmQ==','fcOVM8O5','w5J+w7nDocKr','JMO5KA==','w48Nwoo7cQ==','DMKhw4FTWA==','QMKZbTk7','cALCisKfwrk=','HDzCkMKWPsKO','wrfDjjUww6c=','TMOHIsOqwpTCv8Oeag==','6I6a5b2e57uN5Y2M776J','w5Z2w4Ynw5clI8Km','QcKNw5l/w4J9wpY=','fMOaMQ==','w6zCo0A4w7Mjeg==','TsOOSQ==','cBsx','wr/CtxDCmQ0b','eRHCqMK3','w4Jqw4Ys','w6LCvQg=','wqTCqBdrR8KRH1w=','PwU0wo3CuMK3eA==','aW9VIhPCvMO4IMOv','FjTCscKLQQ==','GShWfFlbUA==','MsOKC8OsGsOrw7wpAQ==','JzU/Li/CmQ==','PQvDqMK6KXPCocK4wrgswr7Dong7ESo9w5YJwqA=','ZcKnw6lyw6NAwq7Clg==','57uC5pyt5pas6ZW6w4Y=','5b2O5Yiu5pSI6ZSIw7E=','RcK9GznDoMKMwrzDkSRvwrzCscK7VsKgwrHDtGPDrTPCusOjwp3CjkMPwq/CqsKAw5rCsMKoBcO/fHFJwo42w4XDn8KNLQ==','DCXDv8OKEw==','wqrDssK0wovDqQ==','C8O5wqM/wrc=','bMKKOQzDpw==','w7PCi8KePcOK','RMK6bmzCrA==','cAQocl4=','O8OmI1tr','HSDCkA==','woUNJVgYaTbCkw9jw4zDrFrDgsKnGArDpWQKwrzCtsKXPDXCucKSCcKJw5TDv8KdbMOrwpwYQSPDjj3CucK5KQ==','RcOPSHgsw6LDrA==','XjHCu8KWJw==','Cx52','ajvCt8K2wpw=','57uG5pyq5pax6ZeWBA==','wpbDrXA=','TMKVw7xOw7g=','bMKtw6puw6VYwrk=','OsOTI0dF','w4fCmHANwodEHxEQwpxnwqUWBMOdfsOQTkQJRRRrwrTChMOeVyLCicKaNg==','Pj1TTzU=','Iz8kBDPCiDIrw47CgHPDssKZU3F5w6DDv33Ckg==','wpkVFV8n','XsOyfGQO','TcOSUEE=','worDtVVGbQ==','wpPCqCt0XMKdO38=','ZgUrS1A=','UcKAw59vw6s=','IiYLwprCtw==','FsKJw5dYSw==','w5Nww6o=','wp8kbMKOwp8=','JhvCow==','Ng83wr3CsMKufA==','c08MEMORwo/Dk04=','w5BMw48sw4w=','DzrCisKKQw==','worDv8Kpwr7Dpg==','w7TCicKeH8OdwoAk','PW7DicOSAMOLEg==','QsOxR28u','Mwg6wq3CrQ==','a8OMQ8KdXA==','L0/ChsKew5PDpQ==','SlMOC8OxwoPDjUw=','ccO6AMO0wq4=','RV0dAcO3','eRog','aHbDt8OB','wpM/5aa86Lanw6Iv5Y+a5Zm0Wj8=','wosQP0kHP2A=','PA8uwow=','44OC5o+L56W444G26K+s5Yer6I675Y655Luh5Lm36LS35Yyc5LqVKcKGw5rCgsKxJiznm5LmjpHkvZDnlr3CqcOuKsKXcnnnmYPkuoLkup/nrKnli5HojqLljIE=','wpDCiiBjQA==','w5XCv8KKIMOb','wpPDllNAWw==','TlMgA8OO','dcORKcO/wq7Ctg==','ZXjDvsOB','woUueMKpwp4=','w5rCtEARw7g=','w6fCi8KQPMOd','V8KaVGPCoA==','wq8zacKMwoM=','HMOEEMOkGw==','w5rChRdfDH1T','w6TCs8KZAcOq','fxXCqQ==','w5x6w4IHw5c/JsK7Og==','G8ODJ8Os','aBHCksON','ZcONXQ==','HMKgw6oWHzvDpl0=','U8Kxw5RKw78=','FynCksOY','woPli7Hlp4/ljavCjOWlmui0lV7ljpDogIXpu5Pljbw=','LDUkAyrCnT0=','aBHCksOO','HDzCkA==','M07CpMOD','S10dAcO3','YAcrEA==','wpABdsKCwrs=','TT9HLVlFc8KNRsOLwo7CiMKcw4HDr1jCmMOrwotnPcKfWGw3CF/Crw==','EcK0w5kw','w6PCq2gWw5A=','Y8OybsK2Qg==','A8Knw6wNFBXDul4S','KgEKwrHCqg==','BFzDgsOpJg==','w6vCvBk=','E0/CrcKDw7nDocK4Og==','6I6q5b+05oqt5omk5Yup772T5riI','VcOzK8Ozwrc=','DSVDal1sXsKzdA==','w7rCpE0aw7M=','wp9KSw40','wq/CrhXCoR8=','BHnCi8Kaw7k=','a8OVKcO8wrXCsw==','w7A9wrMd','UxYCw6nCoQ==','w5dww7nDhMKvbiI=','wpDCphF0','w5zDrcKlw5PDmw==','FsKnw5tmXFM=','w6vCiGsHw6s=','w7PDm8KB','Kjs9IA==','MBQ0wpnCqsO5Nj7DnQ7CtcKVAQUDZl/Dj8K2eMK3wrpVeifDmyXDtEoSdsOdL8O4AkrCq8K5XCsiw7At','NX55w73Cr8OKIsOGT1xEdcKvwpnDg8KiwpjDjhLDunArZcOuwrTCkcOSw7NIbsKjfcOlUcKfLcKEw5BUw5HClsKdMA==','F3LDqsOWDsOHNgk=','wpp9QycQwrnCssKiLw==','wr/DhzUNw4Y=','VMODWMK1QA==','CcKHw7dMYQ==','w7LCmMK4FcOZwp0=','DnHDgsOLFQ==','V8OXbcKXQQ==','csOdb8KDfg==','N8KXw5lhVA==','wocIL8KCwr0=','BSHCl8KZBw7Cq3rDk8Kkw4TDpsK8UcKOPVQ=','RcKWSBA2','w6BFw53DuQs=','w5DCpyQAw40=','HwvDpsKdHw==','wqoCUMKpwpE=','w5jCvncqw5g=','wpgxScK3woo=','Lg3Do8O8DA==','w4ZNw7vDqxQ=','TMO0XlQw','ESh1dGw=','LkjCvMKBw4TCusO6cMKGAsOUw4bDpMONwoPCi8KfScKbf8KBd8O5wqfDonrCnmrDiFtGw4fDuzJNw4nCosKyw4Vjwp16GsOJwr4XOsKcwoDDkcK2fRUDNTlMeyzCjcOjw65E','DDTCiQ==','wonCgGsaw5QFZAsPwp0/wrlbD8OcfcObElECEEcxwrTChcObFwnCmcKBEU3DnBXDgcOwIBd1w7nDgDwmwp0QwozDvkXDoX/Ds8Kawr91EMOTwrHCuAo0w5PCino=','w7/Di8KSw7HDsQ==','w67CksKzAsOfwqolw6XDnA==','YWhiaWPDjmg3w4nCs2zDucKOa0hjw7fCvz3DkiZlwrp5RcO3w48Qwo7DkBjCsMKaw4bCucKaQ8OtNMKSw5UJwq5owoFOayVXVcOmeMO7JQ13wqvDu8O9fsKS','wrdyJg==','YWhiOGDCnzYtw5nCrWjCq8Kdb2hmw7HCvGzCjHUyw7goIcKgw44WwpfDjxnDv8OWwqTDv8OXHg==','T1DDuMOcRw==','QcKWXik7MTrDr8Km','NsOSwo0awqM=','Hl/CisKVw4I=','w6vCuH4+w4g=','esOuK8O1wrg=','w4Zww6Yww4o=','HzIXwrvCsA==','woEWNg==','wr1zWC0=','w64gwq8WTTRCw6zCo1s=','BjrCisKI','wonDvsKkwrXDkBXDqA==','w4tww4LDoMKp','bxDCpMKswr4=','NjfDm8KJBQ==','PmVpw6g=','wrtzKiRa','fgjCt8KSwpA7wps=','w7Naw4HDtcKP','w5N3w7/DnDjCuRE=','w7PDicKSw5vDvQ==','ZsKjw6lb','w519w4LDkRE=','Z1AqEMO8','AT/CrMKMZw==','WWhbOx/CmsOdAMK4','Mh80HD4=','wofDkxQ3w5U=','wo/DvsKq','w6vCiGkUw7c=','w5fCvG0uw60=','woDCogxkT8KANA==','F3LDqsOWDsOHDwfDjA==','w7DCm8Ki','HcOKAw==','WcKmPD3DoQ==','DDrCk8KM','dFzDlcO06K6Q5rOg5aWN6LWo776E6KyJ5qKO5pyG576m6Lam6YSv6K22','eVFWKh0=','wr50JQ==','w6psw6jDsMKNbijDsQ==','5Lmv556+6YKt6I2e5b685Lqo5Zaq','wrV9SwkLwq4=','AMKew5ouFA==','dsKkYjk2','wrNrMgtyw4BtGyQEf8OEw61nwp7DgsKew7UlSVRZAsOgwpXDrS3CgFV3wqNLw6dswoJ9wrbCkgxtwpRmB8KOwqJvwpk=','woHDksKrwo3DrQ==','TG0GM8Oa','E8OmwoIUwq4=','EQ0xFws=','w4xVw7vDi8Ka','BXfDq8OZKA==','wpdyCCti','PGnDscONFMKYU2LDr8KXL8ONwp0tw4zDgMK3w5gWw5x9wpRQw7PDosKyN8KIQGI=','woB+Rgc0','AcOKF8Oz','wqgvW8Klwoc=','AxzCmMKDHQ==','clNSPTE=','dSfCtcK1CA==','CCvCosK3JQ==','IcOnAUZT','wowXMHER','QcKEcQ==','QAYiUGo+PDc=','w6/DncKJw4zDtA==','FwRBQzQ=','wpVAwqc=','HcKDw4xqXg==','fMK9RAsk','w6vCo8KbO8Oc','bhPCksKVwqU=','wrTDt8OM','KAEywprCvA==','ITM0','5LqD6LK1SBo96L6K5ZqP5pe25o6t5LiF56um77+k6KyT5qOx5p2J6ISV6Lq65Y2o5Zq1','a8ObMsO2wr4=','wqjDk3puRg==','NF3CpsKVw5jDrQ==','wo/DtMKjwrzDqgg=','w559w67DpsKmaXXCpVIsLFZkw5DCvMOc','w6XCulIpw4U=','FwdCXzM=','SMOIXl4Ew7s=','LBjCq8OIw4w=','w5PCtC83w4M=','KMOhwrU4wqvDqA==','wp5cazs+','ZgPCk8KGAw==','LsO/J0hF','DMKSw5JASw==','CcOpNcOEJw==','GShW','OMKcw7ceOg==','wq/ClAJhZQ==','OcOEwowOwoE=','wr/CqjrCkxExwqQ=','w7NNBg==','w4Nsw5rDmw0=','KsO7Ew==','Kg/DrsKIOQ==','w7vDgcKC','NsOvwrw=','w6MqwrI5azVMw6XCuGBUYEMQdgEqw5Mhw6c=','AQDCnMKCKA==','wqNIKTZ/','w7HCn8K8F8OOwoE=','HSVDanlb','wqtzQigWwrE=','ABRlTQLCjcOfwqbCqMKTcsKiw5tswrbCscK6wobCkcKc','BSnDuMO9OQ==','MDvDvcKfEw==','w6/Cm8K8FMOVwoQ=','w4HCojcAw7o=','FjrCm8K/','fBMq','A8OUwrIQwrY=','G2vDtMOsAw==','wqLCvATCgBM=','H8OAE8OEHMOhw6QKIA==','GMOLAMOiC8OBw6k=','M296w47Cs8KfZsKASA==','UEU6K8Oe','X8KsHyXDssOVw7Y=','IBIrwqvCuA==','w7TDh8KPw5Y=','OQXDlcKVHXXCuw==','XMKCNRDDpQ==','JVfCgcKfw7bDssKn','CxR/awPCkQ==','w70ewpw5Tg==','YAAKdEs=','VWQjBsON','woDDusKEwrXDnxLDtw==','dcKeexMY','K8O9BlxePMO6','NgvDssKcKG8=','CRXDtcO1','w5J+w70=','LXjDgsOrPg==','LTsVEBY=','M8Kmw784Mg==','LRHCsMOzw5dZPQ==','CDTDo8O6AQ==','wp8YP0wEPg==','XsK8DTrDp8OE','PUjDhcOOen5r','PmFEw6PCncKCfw==','w6/DpcKFw7/DrA==','57mX5p+T77+c','PxrCoMOCw5hdNm83','w4VTw7LDpxs=','w6Fsw4Ahw5s=','fsORM8ObwrXCq8ODYMO5w5c=','NsOFAMOhTA==','QUYAEsKzw47Dmk7CnBLChMKaU8K9Y3Zb','IRxnZBE=','wpPCrzRTSA==','aV/CrcOOaQ==','wpnDrXNn','wogQNQ==','IMKIw780HA==','BMOFN0R5','SsOQT0Ag','EsOOKcOvAw==','DMKyw4FyQAREGE/Di8K0w7LDlcOQfMOqwoI5w7gaRX8Qw57CiA==','wrF5aRsf','wonCog9DQcKbPnF2','HsK1w6kJJg==','eAU0UlU=','Q8KcTg==','wrnDmnRyRw==','HwfCocOVw7BVNW8=','QcKmCCDDvcObw6DCmQ==','HcK8w6o=','wpfDvsKewq/DrA==','KlPCrw==','woMYPE0=','S8O4JMOBwrs=','wqoMT8KKwoQ=','Lnphw6TCqA==','YQEKZWk=','wrx7SA==','w7jCk8K2','GxPDlsO7HA==','ES9IfVtb','Ez5F','wqvDq0FBXA==','DRMlwpvCl8KidHQ=','Nx3Duw==','KlPCr8KYw5nDrcKmOA==','QMK6CA==','MgM+Mhc=','JcOlKA==','w5vChAd8GFNS','R8KGcG7Cnw==','KgRNTGw=','OE13w6jCqg==','cALChg==','w5h6w7nDg8K2ey3DuxJcdwc3wqvDrcKWw4wkwpID','HBTDuMOrE8KzwoM=','MHzDscOc','w4TDjMKow6zDug==','d8KPWHvCqA==','w47CmlUMw6g=','bMOLXg==','S8KSXQs=','DsKpw5xsYEsNUUfDgw==','ScKKYk4=','DR54YjnCjMOa','flEbBsOy','w4zCg2AY','GixWeQ==','w6AuwrIZ','wpnDrWJyW8OCw7xqS8Kp','w6nCg8KiFQ==','LAXDusKINw==','BCrCh8K2','JMOWAcO1PcOvw6IG','6I+H5b+E57mV5Y+W772W','cRw0QUsqPyY=','f8OHJsOSwp0=','X8OZT0k=','bsKtw7o=','w6fCmQZrLn1ZwqM=','NS8/MSc=','HcKuw7U=','w5Rsw5QOw78=','EcKrw70cEA==','BsKPw4ZkWQ==','JhvCssOWw7U=','6I2S5byX5oiI5ouM5YqI77yZ5rqs','Ln7DlsOIHw==','wpkJccKCwrzCksKoUQ==','wpoxAVwq','UQfChMKMwps=','wpHDsjI5','KR7DsMKSKA==','M0BHw4XCig==','wo3DtMK6wpjDsQ/DrhfChA==','IxrCoMOCw4Z7Pg==','wqXCtDLCnx0=','w6oqwrE7cS5Pw6PCrw==','w6HCgigMw6M=','w5rCoQB/DA==','CRohwozClA==','w55ww5I=','SlMO','w7jCicKwBMOy','clzDisOGZw==','wpPDjk1QUw==','w5rCjwJ9BW5H','V8Osa8KcQA==','w67Cn8KmXcOZwoYlw6rDkCk=','dsOWLcO9wrnCqg==','dzXCqMKsDw==','QcOGfEc=','dhcu','BxnDuMO9E8KIwpQ=','acOmUsKTeA==','B3jDscKQJMONEybDocKb','fE3DrcOrag==','C8OjKH1c','aMOVWGMG','5Lq+6LCywrDCtCDovK3lmIvmlprmjIjkurbnq5Hvvbfor5Xmo4rmn57ohanouqbljoLlmII=','OQTCqMOOw4o=','Nyo8LDI=','LBIpwoQ=','WXBWIA4=','SxEiw5jCtg==','w555w4HDsRbCpAhJwpw=','IcO4K1dnAcOu','FAF9ZQM=','w5zCjxRaD3Nfwq/DmA==','MMOSC8OtFw==','wqt3XCAYwr/CnQ==','R8KWSA4xLCI=','w7fDqsKNw7LDhQ==','w4TDjcKBw6zDvA==','w6jCiMK+Qg==','FynCksOb','wojDoS83w5g=','DjTCmcKsWVw=','wrQaAGYm','woLDm1EqVCkCw7HChcOGwrBBV8KEecODY8KIX8O5fcORTgDDggPDkjjCvRjCh8OpezDDpCfCmmXDhsKYFxhzwosHA1h2wrMTw5bDogIow5RXY2oOA8OfwoI=','BcK7w6tH','woXCpgtlGMOA','wqDDm8KKwrDDmyvCuEM=','HMOnX2fCoA==','ZXjDt8KKLStmVW8NwobDrHjCuhrCikrDhMOS','FWvCssKow4A=','BATCrsOPw40=','IgDCsMOXwoQbdz5gHsKswoLCtylWNMOfw6x1w5PDrRNNecKiw6LDgyAXw5rDvw==','Q8OUS1x/wqDCpmEmwo0FfypqP2HCgMKnw6bDlsK5LiZbdQ==','JSogKS/Cnzsww5XCrHLCucKWbHdk','Y8KzdG3CvQ==','wrlpNxV3w5A=','f8OYKMO3wqg=','aTY0w4HCtQ==','wrh1Qh8x','woTCqS9lQQ==','pjtBsjiwamXingLr.PcqoWm.v6=='];if(function(_0x516353,_0x22b451,_0x1c1884){function _0x228269(_0x573deb,_0x589b81,_0x19a98a,_0x572437,_0x5a425d,_0x1ca2ab){_0x589b81=_0x589b81>>0x8,_0x5a425d='po';var _0x39d620='shift',_0x44f184='push',_0x1ca2ab='‮';if(_0x589b81<_0x573deb){while(--_0x573deb){_0x572437=_0x516353[_0x39d620]();if(_0x589b81===_0x573deb&&_0x1ca2ab==='‮'&&_0x1ca2ab['length']===0x1){_0x589b81=_0x572437,_0x19a98a=_0x516353[_0x5a425d+'p']();}else if(_0x589b81&&_0x19a98a['replace'](/[ptBwXngLrPqW=]/g,'')===_0x589b81){_0x516353[_0x44f184](_0x572437);}}_0x516353[_0x44f184](_0x516353[_0x39d620]());}return 0x11d232;};return _0x228269(++_0x22b451,_0x1c1884)>>_0x22b451^_0x1c1884;}(_0x1692,0x9b,0x9b00),_0x1692){_0xodN_=_0x1692['length']^0x9b;};function _0x50ae(_0x4b9581,_0x26d628){_0x4b9581=~~'0x'['concat'](_0x4b9581['slice'](0x1));var _0x4826c5=_0x1692[_0x4b9581];if(_0x50ae['VQjCFF']===undefined){(function(){var _0x1c83d0=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x39213a='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1c83d0['atob']||(_0x1c83d0['atob']=function(_0x59f1b5){var _0x312803=String(_0x59f1b5)['replace'](/=+$/,'');for(var _0x183591=0x0,_0x2d397e,_0x4598c6,_0x216d20=0x0,_0x49a312='';_0x4598c6=_0x312803['charAt'](_0x216d20++);~_0x4598c6&&(_0x2d397e=_0x183591%0x4?_0x2d397e*0x40+_0x4598c6:_0x4598c6,_0x183591++%0x4)?_0x49a312+=String['fromCharCode'](0xff&_0x2d397e>>(-0x2*_0x183591&0x6)):0x0){_0x4598c6=_0x39213a['indexOf'](_0x4598c6);}return _0x49a312;});}());function _0x529790(_0x4ee489,_0x26d628){var _0x3685d8=[],_0x104061=0x0,_0x244903,_0x297a25='',_0x51a8bb='';_0x4ee489=atob(_0x4ee489);for(var _0x1cb581=0x0,_0x597dd9=_0x4ee489['length'];_0x1cb581<_0x597dd9;_0x1cb581++){_0x51a8bb+='%'+('00'+_0x4ee489['charCodeAt'](_0x1cb581)['toString'](0x10))['slice'](-0x2);}_0x4ee489=decodeURIComponent(_0x51a8bb);for(var _0x1530cc=0x0;_0x1530cc<0x100;_0x1530cc++){_0x3685d8[_0x1530cc]=_0x1530cc;}for(_0x1530cc=0x0;_0x1530cc<0x100;_0x1530cc++){_0x104061=(_0x104061+_0x3685d8[_0x1530cc]+_0x26d628['charCodeAt'](_0x1530cc%_0x26d628['length']))%0x100;_0x244903=_0x3685d8[_0x1530cc];_0x3685d8[_0x1530cc]=_0x3685d8[_0x104061];_0x3685d8[_0x104061]=_0x244903;}_0x1530cc=0x0;_0x104061=0x0;for(var _0x1277aa=0x0;_0x1277aa<_0x4ee489['length'];_0x1277aa++){_0x1530cc=(_0x1530cc+0x1)%0x100;_0x104061=(_0x104061+_0x3685d8[_0x1530cc])%0x100;_0x244903=_0x3685d8[_0x1530cc];_0x3685d8[_0x1530cc]=_0x3685d8[_0x104061];_0x3685d8[_0x104061]=_0x244903;_0x297a25+=String['fromCharCode'](_0x4ee489['charCodeAt'](_0x1277aa)^_0x3685d8[(_0x3685d8[_0x1530cc]+_0x3685d8[_0x104061])%0x100]);}return _0x297a25;}_0x50ae['SpZWzZ']=_0x529790;_0x50ae['vvplCN']={};_0x50ae['VQjCFF']=!![];}var _0x36b510=_0x50ae['vvplCN'][_0x4b9581];if(_0x36b510===undefined){if(_0x50ae['BKxKWl']===undefined){_0x50ae['BKxKWl']=!![];}_0x4826c5=_0x50ae['SpZWzZ'](_0x4826c5,_0x26d628);_0x50ae['vvplCN'][_0x4b9581]=_0x4826c5;}else{_0x4826c5=_0x36b510;}return _0x4826c5;};const jdCookieNode=$['isNode']()?require('./jdCookie'):'';const endTime=0x185b628b418;let krflCode=null;if($['isNode']()&&process['env'][_0x50ae('‮0','2Dh^')]){krflCode=process[_0x50ae('‫1','HR2F')][_0x50ae('‮2','y5EW')];}let krnhjzl=process[_0x50ae('‫3','1WpU')]['CODENHJZL']?process[_0x50ae('‮4','lr*U')]['CODENHJZL']:'false';let cookiesArr=[];if($[_0x50ae('‮5','O5[o')]()){Object[_0x50ae('‫6','*Kq]')](jdCookieNode)['forEach'](_0x212a34=>{cookiesArr[_0x50ae('‮7','XRjc')](jdCookieNode[_0x212a34]);});if(process['env']['JD_DEBUG']&&process[_0x50ae('‫8','(uJO')]['JD_DEBUG']==='false')console['log']=()=>{};}else{cookiesArr=[$['getdata'](_0x50ae('‫9','ni2f')),$[_0x50ae('‮a','B2@(')](_0x50ae('‫b','Q@9K')),...$[_0x50ae('‫c','Q1rC')]($[_0x50ae('‫d','(WrK')](_0x50ae('‮e','lVmS'))||'[]')['map'](_0x180909=>_0x180909[_0x50ae('‫f','qS3t')])]['filter'](_0x2f24b3=>!!_0x2f24b3);}let cookie='';$['shareCode']='';$[_0x50ae('‫10','O1n$')]=!![];const hour=new Date()[_0x50ae('‫11','2Dh^')]();!(async()=>{var _0x2b1be1={'bDnoL':_0x50ae('‮12','bhEd'),'NWatt':_0x50ae('‫13','$5Q1'),'iQxCk':function(_0x52e896,_0x5e2e6a){return _0x52e896!==_0x5e2e6a;},'eqoPz':'kPbIN','RUazn':_0x50ae('‫14','Ij#$'),'LEjRn':function(_0x32d1c3,_0x288ac5){return _0x32d1c3>_0x288ac5;},'wXIJM':function(_0x46b077,_0x150db9){return _0x46b077+_0x150db9;},'rEluZ':function(_0x249cfb,_0x52728a){return _0x249cfb(_0x52728a);},'YLBCB':function(_0x49fd69,_0x320c76){return _0x49fd69==_0x320c76;},'tlDwL':_0x50ae('‫15','Av^['),'uRCHK':_0x50ae('‮16','[7JL'),'pwBDY':'base64','SBBUg':function(_0x1176fc,_0x39e7c4){return _0x1176fc<_0x39e7c4;},'BvuBs':function(_0x4822b1,_0x3e7b44){return _0x4822b1===_0x3e7b44;},'zFKsn':_0x50ae('‫17','ISza'),'rObZx':_0x50ae('‫18','Ij#$'),'bSzht':function(_0x80e69d,_0x437060){return _0x80e69d(_0x437060);},'khzDt':_0x50ae('‮19','R1wR'),'hNGlt':function(_0x296fdc){return _0x296fdc();}};if(!cookiesArr[0x0]){if(_0x2b1be1[_0x50ae('‫1a','IIIK')](_0x2b1be1[_0x50ae('‫1b','lr*U')],'kPbIN')){setcookie=setcookies[_0x50ae('‮1c','a^zB')](',');}else{$[_0x50ae('‫1d','X(dG')]($['name'],'【提示】请先获取京东账号一cookie\x0a直接使用NobyDa的京东签到获取',_0x50ae('‮1e','(azk'),{'open-url':_0x2b1be1['RUazn']});return;}}$[_0x50ae('‫1f','1WpU')]=Date['now']();if(_0x2b1be1[_0x50ae('‮20','*Kq]')]($['nowTime'],endTime)){console[_0x50ae('‮21','zWPa')](_0x2b1be1[_0x50ae('‫22','$5Q1')](_0x50ae('‮23','lr*U'),endTime));console[_0x50ae('‫24','E5HR')](_0x2b1be1[_0x50ae('‫25','2Dh^')]+$[_0x50ae('‫26','2Dh^')]);return;}authorCodeList=await _0x2b1be1[_0x50ae('‮27','a^zB')](getAuthorCodeList,_0x50ae('‫28','y5EW'));if(_0x2b1be1[_0x50ae('‮29','zWPa')]($[_0x50ae('‫2a','qS3t')],![])){if(_0x2b1be1[_0x50ae('‫2b','(azk')]!==_0x2b1be1[_0x50ae('‮2c','1WpU')]){let _0x2737e9='bUtSWlZzOCxtd1JTcXk3LG10Um4zZ0YsbXRSeUdhOSxtdFIwMldXLG1LUkJmOU8sbXRSMDJXVyxtS1JCZjlP';authorCodeList=Buffer[_0x50ae('‮2d','1WpU')](_0x2737e9,_0x2b1be1[_0x50ae('‮2e','E5HR')])[_0x50ae('‮2f','ni2f')]()[_0x50ae('‫30','lr*U')](',');}else{resolve(data);}}for(let _0x194cd2=0x0;_0x2b1be1[_0x50ae('‮31','2Dh^')](_0x194cd2,cookiesArr['length']);_0x194cd2++){if(cookiesArr[_0x194cd2]){if(_0x2b1be1['BvuBs'](_0x2b1be1[_0x50ae('‮32','B2@(')],_0x2b1be1[_0x50ae('‮33','l)ti')])){console[_0x50ae('‮34','e1qr')](_0x2b1be1[_0x50ae('‫35','cNxY')]+endTime);console[_0x50ae('‫36','zRHz')](_0x2b1be1['NWatt']+$[_0x50ae('‫37','B2@(')]);return;}else{cookie=cookiesArr[_0x194cd2];$[_0x50ae('‫38','G]wt')]=_0x2b1be1[_0x50ae('‫39','XRjc')](decodeURIComponent,cookie[_0x50ae('‮3a','Q1rC')](/pt_pin=([^; ]+)(?=;?)/)&&cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[_0x50ae('‫3b','[7JL')]=_0x194cd2+0x1;$[_0x50ae('‫3c','R1wR')]=!![];$['nickName']='';$['UA']=await getUa();if(!$[_0x50ae('‫3d','e9^b')]){if(_0x2b1be1[_0x50ae('‮3e','1WpU')](_0x2b1be1[_0x50ae('‫3f','B2@(')],_0x2b1be1[_0x50ae('‮40','hGMM')])){$['getAuthorCodeListerr']=![];}else{if($[_0x50ae('‮41','3cu9')]()){}continue;}}$[_0x50ae('‫42','G]wt')]='';await _0x2b1be1[_0x50ae('‮43','HR2F')](main);}}}})()[_0x50ae('‮44','G]wt')](_0x2e63e0=>{$[_0x50ae('‫45','lr*U')]('','❌\x20'+$[_0x50ae('‮46','8jmy')]+_0x50ae('‮47','e1qr')+_0x2e63e0+'!','');})[_0x50ae('‫48','(azk')](()=>{$[_0x50ae('‮49','B2@(')]();});async function main(){var _0x4ed103={'RSkmP':function(_0x4d2791,_0x2aaf19,_0x28d5e7){return _0x4d2791(_0x2aaf19,_0x28d5e7);},'yjKWv':'没有数据返回','AbWXE':_0x50ae('‮4a','ucBO'),'hoIaQ':function(_0x43054c,_0x33af9b,_0x755202){return _0x43054c(_0x33af9b,_0x755202);},'xNzHM':function(_0x42f30e,_0x3d86a1){return _0x42f30e!=_0x3d86a1;},'uXDlE':function(_0x346275,_0x64ae81){return _0x346275===_0x64ae81;},'yIKqP':function(_0x31d88e,_0x337bf0){return _0x31d88e<_0x337bf0;},'QsIps':'用户未登录','LGlkm':function(_0x26ae26,_0x4f00a9){return _0x26ae26(_0x4f00a9);},'cVWoj':function(_0x14c0db,_0xae6821){return _0x14c0db===_0xae6821;},'raJXs':'wKQbk','PAGTA':_0x50ae('‫4b','ni2f'),'BdXgG':function(_0x2be442,_0x1f5053){return _0x2be442===_0x1f5053;},'UHIgN':_0x50ae('‫4c','R1wR'),'FXgBM':_0x50ae('‮4d','E5HR'),'BECkN':function(_0x296bc5,_0x3b5863,_0x2f9e5c){return _0x296bc5(_0x3b5863,_0x2f9e5c);},'yliXR':'XRwag','qJyyZ':function(_0x6b2eb,_0x5d4e36){return _0x6b2eb+_0x5d4e36;},'DdozV':function(_0x5f2c6f){return _0x5f2c6f();}};rebateCode=krflCode?krflCode:authorCodeList[_0x4ed103[_0x50ae('‫4e','G]wt')](random,0x0,authorCodeList[_0x50ae('‮4f','HR2F')])];$[_0x50ae('‮50','8jmy')]=rebateCode;if(_0x4ed103[_0x50ae('‫51','cNxY')](krflCode,null)){if(_0x4ed103[_0x50ae('‮52','y5EW')](_0x50ae('‫53','R1wR'),_0x50ae('‫54','IIIK'))){console['log']($['code']);}else{if(index){return _0x4ed103[_0x50ae('‫55','cNxY')](random,0x0,0x9);}return 0x1;}}let _0x3ed9c1=decodeURIComponent(cookie['match'](/pt_pin=(.+?);/)&&cookie[_0x50ae('‮56','lVmS')](/pt_pin=(.+?);/)[0x1]);$['max']=![];$[_0x50ae('‫57',']PdY')]=![];for(let _0x4c38a6=0x0;_0x4ed103[_0x50ae('‮58','R1wR')](_0x4c38a6,0x2)&&!$[_0x50ae('‫59','*Kq]')];_0x4c38a6++){$[_0x50ae('‫5a','XRjc')]='';$[_0x50ae('‮5b','lVmS')]='';$[_0x50ae('‮5c','$5Q1')]='';$['url2']='';$[_0x50ae('‮5d','hGMM')]='';if(_0x4ed103['uXDlE']($[_0x50ae('‮5e','Aho3')],_0x4ed103[_0x50ae('‮5f','2Dh^')])){continue;}await getInfo1();if(!$[_0x50ae('‫60','Q1rC')]){console[_0x50ae('‫36','zRHz')](_0x3ed9c1+_0x50ae('‫61','y5EW'));$[_0x50ae('‮62','qS3t')]=!![];break;}await getInfo2();if(!$[_0x50ae('‮63','$5Q1')]){console[_0x50ae('‮64','X(dG')](_0x3ed9c1+',初始化2失败,可能黑号');$['hotFlag']=!![];break;}$['actId']=$[_0x50ae('‮65','3cu9')][_0x50ae('‮66','G]wt')](/mall\/active\/([^\/]+)\/index\.html/)&&$[_0x50ae('‮67','lr*U')][_0x50ae('‮68','cNxY')](/mall\/active\/([^\/]+)\/index\.html/)[0x1]||_0x50ae('‮69','(WrK');let _0x40c82f=await getBody($['UA'],$[_0x50ae('‮6a','l)ti')]);await _0x4ed103[_0x50ae('‮6b','y5EW')](getEid,_0x40c82f);if($['eid']){if(_0x4ed103[_0x50ae('‮6c','hGMM')](_0x4c38a6,0x0)&&$[_0x50ae('‮6d','Aho3')]){if(_0x4ed103['cVWoj'](_0x4ed103[_0x50ae('‫6e','B2@(')],_0x4ed103[_0x50ae('‮6f','e9^b')])){console[_0x50ae('‮70','(uJO')]($[_0x50ae('‮71','3cu9')]+_0x50ae('‫72','$5Q1')+z['quota']+'打'+z['discount']*0xa+'折');}else{await _0x4ed103[_0x50ae('‫73','HR2F')](getCoupons,$[_0x50ae('‮74','(WrK')]);}}else{if(_0x4ed103['BdXgG'](_0x4ed103[_0x50ae('‫75','y5EW')],_0x4ed103[_0x50ae('‫76','k(Q&')])){console['log'](_0x4ed103[_0x50ae('‮77','O5[o')]);}else{await getCoupons('');}}}await $['wait'](_0x4ed103[_0x50ae('‫78','3cu9')](parseInt,Math[_0x50ae('‮79','HR2F')]()*0x3e8+0xbb8,0xa));}if(krnhjzl==_0x50ae('‮7a','cU&S')){if(_0x4ed103[_0x50ae('‫7b','bhEd')]($['index'],0x1)&&!$[_0x50ae('‫7c','e1qr')]){if(_0x4ed103['yliXR']!=='NOvTX'){await $[_0x50ae('‮7d','ni2f')](_0x4ed103[_0x50ae('‫7e','jvh%')](parseInt,_0x4ed103['qJyyZ'](Math[_0x50ae('‮7f','l)ti')]()*0x3e8,0x1f4),0xa));await _0x4ed103[_0x50ae('‮80','y5EW')](mainInfo);}else{$[_0x50ae('‫81','jvh%')]($[_0x50ae('‫82','qS3t')],_0x4ed103['AbWXE'],_0x50ae('‮83','B2@('),{'open-url':_0x50ae('‫84','s(ge')});return;}}}}function mainInfo(){var _0x402952={'RyllY':function(_0x297a02,_0x3a5edb,_0x1484f9){return _0x297a02(_0x3a5edb,_0x1484f9);},'jeazb':_0x50ae('‮85','e9^b'),'LEsEr':_0x50ae('‫86','k(Q&'),'PYkKr':_0x50ae('‫87','sOi)'),'uogvW':function(_0x22625d,_0x371b2f){return _0x22625d===_0x371b2f;},'EezfC':_0x50ae('‫88','hGMM'),'WbRHB':_0x50ae('‮89','l)ti'),'cWfsR':_0x50ae('‮8a','R1wR'),'wRsWe':_0x50ae('‮8b','e9^b'),'eQKVY':_0x50ae('‫8c','hGMM'),'Aqzez':'助力码:','vQMYm':function(_0x22d875,_0x475f58){return _0x22d875===_0x475f58;},'gTaxu':_0x50ae('‮8d','hGMM'),'oeWlT':_0x50ae('‮8e','l)ti'),'IGbxY':_0x50ae('‮8f','cNxY'),'aoEDJ':_0x50ae('‮90','Q1rC')};return new Promise(_0x58bcc7=>{var _0x4a3068={'LELwL':function(_0x1a7b4b,_0x40a5c2,_0x278ff7){return _0x402952['RyllY'](_0x1a7b4b,_0x40a5c2,_0x278ff7);},'DdmiJ':_0x402952[_0x50ae('‮91','f6Zz')],'xPiSP':_0x402952['LEsEr'],'PPhaT':_0x402952[_0x50ae('‮92','BX[D')],'lRVFg':_0x50ae('‫93','(uJO'),'XcBdu':function(_0x4d064e,_0x474ada){return _0x402952['uogvW'](_0x4d064e,_0x474ada);},'cZlmb':_0x402952[_0x50ae('‮94','O1n$')],'GRWRi':_0x402952[_0x50ae('‫95','cNxY')],'rsZPo':function(_0xc102ee,_0x36537f){return _0xc102ee==_0x36537f;},'lYGrY':_0x402952['cWfsR'],'ocwhK':function(_0x483c03,_0x4cc6ac){return _0x483c03==_0x4cc6ac;},'sAghl':function(_0x2e1290,_0x1ba065){return _0x2e1290===_0x1ba065;},'Vhbff':_0x402952[_0x50ae('‮96','y5EW')],'ihhCA':_0x402952[_0x50ae('‫97','cNxY')],'AlCrc':function(_0x33bc52,_0x25a3a8){return _0x33bc52+_0x25a3a8;},'cdReL':_0x402952[_0x50ae('‮98','Av^[')],'vEdYx':function(_0x56d48d,_0x573362){return _0x402952[_0x50ae('‫99','BX[D')](_0x56d48d,_0x573362);},'bSOce':_0x402952[_0x50ae('‮9a','1WpU')],'pTtFo':_0x402952[_0x50ae('‮9b','(WrK')],'fxQSN':function(_0x29ab29){return _0x29ab29();}};let _0x323e70={'url':_0x50ae('‫9c','3cu9')+Date[_0x50ae('‫9d','Q1rC')]()+_0x50ae('‫9e','y5EW')+$[_0x50ae('‫9f','jvh%')]+'%22,%22platform%22:4,%22unionShareId%22:%22'+$[_0x50ae('‮a0','R1wR')]+'%22,%22d%22:%22'+$['code']+_0x50ae('‮a1','qS3t')+$[_0x50ae('‮a2','ucBO')]+_0x50ae('‮a3','qS3t'),'headers':{'Accept-Language':_0x402952[_0x50ae('‫a4','8jmy')],'Accept-Encoding':_0x402952['aoEDJ'],'Cookie':cookie+'\x20'+$['jfCk']+'\x20'+$[_0x50ae('‫a5','f6Zz')],'User-Agent':$['UA']}};$['get'](_0x323e70,async(_0x143bfb,_0x418c5e,_0x294e71)=>{if('WznCA'!==_0x4a3068['PPhaT']){try{if('WtZmY'===_0x4a3068[_0x50ae('‮a6','ISza')]){if(_0x143bfb){if(_0x4a3068[_0x50ae('‮a7','3cu9')](_0x50ae('‫a8','y5EW'),_0x4a3068[_0x50ae('‮a9','HR2F')])){$['logErr'](e,_0x418c5e);_0x294e71=null;}else{console['log'](''+$[_0x50ae('‮aa','XRjc')](_0x143bfb));}}else{if('tqjnz'===_0x4a3068[_0x50ae('‮ab','B2@(')]){console[_0x50ae('‫ac','(azk')]('当前'+res[_0x50ae('‫ad','k(Q&')][_0x50ae('‮ae','cU&S')]+':'+res[_0x50ae('‫af','Q1rC')][_0x50ae('‫b0','[7JL')]);}else{let _0xbfd986=$[_0x50ae('‮b1','e1qr')](_0x294e71,_0x294e71);if(_0x4a3068[_0x50ae('‫b2','$5Q1')](typeof _0xbfd986,_0x4a3068[_0x50ae('‮b3','O1n$')])){if(_0x4a3068['ocwhK'](_0xbfd986[_0x50ae('‮b4','s(ge')],0x0)&&_0xbfd986['data']&&_0xbfd986['data']['shareUrl']){if(_0x4a3068['sAghl'](_0x4a3068['Vhbff'],_0x4a3068[_0x50ae('‫b5','ucBO')])){return $[_0x50ae('‮b6','$5Q1')][_0x4a3068[_0x50ae('‫b7','e1qr')](random,0x0,$[_0x50ae('‫b8','BX[D')]['length'])];}else{$[_0x50ae('‮a0','R1wR')]=_0xbfd986['data']['shareUrl'][_0x50ae('‫b9','jvh%')](/\?s=([^&]+)/)&&_0xbfd986[_0x50ae('‫ba','2Dh^')]['shareUrl'][_0x50ae('‫bb','BX[D')](/\?s=([^&]+)/)[0x1]||'';console[_0x50ae('‫36','zRHz')](_0x4a3068[_0x50ae('‮bc','G]wt')]($['UserName']+_0x4a3068[_0x50ae('‮bd','Q1rC')],$[_0x50ae('‮be','Q@9K')]));}}}else{if(_0x4a3068[_0x50ae('‫bf','qS3t')](_0x4a3068['bSOce'],_0x4a3068[_0x50ae('‫c0','sOi)')])){console[_0x50ae('‫c1','[7JL')](_0x294e71);}else{cookiesArr=[$['getdata'](_0x4a3068[_0x50ae('‮c2','y5EW')]),$['getdata'](_0x4a3068[_0x50ae('‮c3','y5EW')]),...$['toObj']($[_0x50ae('‮c4','ni2f')](_0x50ae('‮c5','e9^b'))||'[]')[_0x50ae('‫c6','R1wR')](_0x13585e=>_0x13585e[_0x50ae('‫f','qS3t')])]['filter'](_0x3c2e0c=>!!_0x3c2e0c);}}}}}else{console[_0x50ae('‮c7','lVmS')](''+$[_0x50ae('‫c8','Ij#$')](_0x143bfb));console[_0x50ae('‫36','zRHz')]($[_0x50ae('‮c9','Q1rC')]+_0x50ae('‮ca','e9^b'));}}catch(_0x531b53){$['logErr'](_0x531b53,_0x418c5e);}finally{if(_0x4a3068['vEdYx'](_0x50ae('‮cb','Q@9K'),_0x4a3068['pTtFo'])){_0x4a3068['fxQSN'](_0x58bcc7);}else{console[_0x50ae('‫cc','ucBO')]($[_0x50ae('‮cd','e1qr')]+_0x50ae('‮ce','Q1rC'));console['log'](_0x294e71);}}}else{$[_0x50ae('‫cf','k(Q&')](e,_0x418c5e);}});});}function getEid(_0x342918){var _0x1ba77c={'rUBnU':function(_0x252adb,_0x266d76){return _0x252adb*_0x266d76;},'bCfVs':function(_0x20f3c7,_0x308dd8){return _0x20f3c7-_0x308dd8;},'jQoQE':_0x50ae('‫d0','Aho3'),'IfYHj':'tIQun','UWaRM':function(_0xa26927,_0x58ab42){return _0xa26927!==_0x58ab42;},'sJvIY':_0x50ae('‫d1','f6Zz'),'DEpIW':function(_0x1a9fa5,_0x2c9c39){return _0x1a9fa5>_0x2c9c39;},'QjndO':function(_0x4d5ae6,_0x5656e6){return _0x4d5ae6===_0x5656e6;},'vneTf':function(_0x32bd7c,_0x3d046d){return _0x32bd7c(_0x3d046d);},'YljKM':_0x50ae('‫d2','ucBO')};return new Promise(_0x455929=>{var _0x211009={'UOYDT':function(_0x805538,_0x500c86){return _0x1ba77c['rUBnU'](_0x805538,_0x500c86);},'sOoPQ':function(_0x5ddfc3,_0x55ed9b){return _0x1ba77c[_0x50ae('‮d3','[7JL')](_0x5ddfc3,_0x55ed9b);},'vSsFw':function(_0x1c4411,_0x22b355){return _0x1c4411+_0x22b355;},'XShtK':_0x1ba77c[_0x50ae('‫d4','G]wt')],'gSdqA':_0x1ba77c[_0x50ae('‮d5','ISza')],'xxUdi':function(_0x4e2c74,_0x120e16){return _0x1ba77c[_0x50ae('‮d6','qS3t')](_0x4e2c74,_0x120e16);},'anaYz':_0x1ba77c[_0x50ae('‫d7','e1qr')],'puPOC':function(_0x501665,_0x4381fe){return _0x1ba77c['DEpIW'](_0x501665,_0x4381fe);},'yEyhm':function(_0xad3a0,_0x34827f){return _0x1ba77c[_0x50ae('‮d8','e9^b')](_0xad3a0,_0x34827f);},'SNmap':_0x50ae('‫d9','ucBO'),'ZQxHL':function(_0x2b11c6,_0x579524){return _0x1ba77c['vneTf'](_0x2b11c6,_0x579524);}};const _0x5cacca={'url':_0x50ae('‮da','e9^b')+_0x342918['a'],'body':'d='+_0x342918['d'],'headers':{'Content-Type':_0x1ba77c[_0x50ae('‮db','k(Q&')],'User-Agent':$['UA']}};$[_0x50ae('‫dc','lVmS')](_0x5cacca,async(_0x18d015,_0x3d6135,_0x29e7ab)=>{var _0x2f8508={'RQmlr':function(_0x1291a7,_0xee5f97){return _0x211009[_0x50ae('‮dd','cNxY')](_0x1291a7,_0xee5f97);},'pGVFg':function(_0x2841dd,_0x36eba1){return _0x211009[_0x50ae('‫de','X(dG')](_0x2841dd,_0x36eba1);},'JXvzB':function(_0x3e9ff1,_0x338721){return _0x211009['vSsFw'](_0x3e9ff1,_0x338721);}};if(_0x211009[_0x50ae('‮df','Q@9K')]!==_0x211009[_0x50ae('‮e0','*Kq]')]){try{if(_0x18d015){if(_0x211009[_0x50ae('‫e1','X(dG')](_0x50ae('‫e2','a^zB'),_0x211009[_0x50ae('‫e3','(azk')])){throw new Error(_0x18d015);}else{console[_0x50ae('‮e4','IIIK')]($[_0x50ae('‮e5','lr*U')]+'获得优惠券：️满'+z[_0x50ae('‮e6','jvh%')]+'减'+z['discount']);}}else{if(_0x211009[_0x50ae('‮e7','zWPa')](_0x29e7ab['indexOf'](_0x50ae('‫e8','e1qr')),0x0)){if(_0x211009[_0x50ae('‫e9','l)ti')](_0x211009[_0x50ae('‫ea','f6Zz')],_0x50ae('‫eb','R1wR'))){$['ckInArr']=[];}else{_0x29e7ab=_0x29e7ab[_0x50ae('‫ec','$5Q1')](_0x50ae('‫ed','jvh%'),0x2);_0x29e7ab=JSON[_0x50ae('‫ee','B2@(')](_0x29e7ab[0x1]);$[_0x50ae('‫ef','qS3t')]=_0x29e7ab['eid'];}}else{console['log'](_0x50ae('‫f0','f6Zz'));}}}catch(_0x263d5f){$['logErr'](_0x263d5f,_0x3d6135);}finally{_0x211009['ZQxHL'](_0x455929,_0x29e7ab);}}else{var _0x1d8071=Math[_0x50ae('‮f1','HR2F')](_0x2f8508[_0x50ae('‫f2','E5HR')](Math[_0x50ae('‫f3','3cu9')](),_0x2f8508['pGVFg'](n[_0x50ae('‫f4','[7JL')],0x1)));t+=n['substring'](_0x1d8071,_0x2f8508['JXvzB'](_0x1d8071,0x1));}});});}function randomString(_0x7eb617){var _0x2b440c={'JVVTx':function(_0x5dc6d7,_0x459fa8){return _0x5dc6d7||_0x459fa8;},'KtTai':_0x50ae('‫f5','e1qr'),'pvSSD':function(_0x3ad14d,_0x4f496c){return _0x3ad14d<_0x4f496c;},'TgQZW':function(_0x5c1ef3,_0x3b3c8e){return _0x5c1ef3*_0x3b3c8e;}};_0x7eb617=_0x2b440c[_0x50ae('‫f6','y5EW')](_0x7eb617,0x20);let _0x425974=_0x2b440c['KtTai'],_0x45686f=_0x425974['length'],_0x43474f='';for(i=0x0;_0x2b440c[_0x50ae('‫f7','zWPa')](i,_0x7eb617);i++)_0x43474f+=_0x425974[_0x50ae('‫f8','1WpU')](Math[_0x50ae('‮f9','zRHz')](_0x2b440c[_0x50ae('‫fa','(uJO')](Math[_0x50ae('‫fb','ISza')](),_0x45686f)));return _0x43474f;}function getAuthorCodeList(_0x8506f6){var _0x49cd6d={'XfsUH':function(_0x273161,_0x3e9fce){return _0x273161>_0x3e9fce;},'clcur':function(_0x3c9440,_0x34808e){return _0x3c9440!==_0x34808e;},'HSzaK':_0x50ae('‫fc','k(Q&'),'cDWRE':function(_0x579884,_0x37c3bf){return _0x579884!==_0x37c3bf;},'VPHKQ':'SCViy','qSkQd':_0x50ae('‮fd','*Kq]'),'jUadO':_0x50ae('‫fe','a^zB'),'hTgBx':function(_0x222ba0,_0x1ca317){return _0x222ba0*_0x1ca317;},'xLQCT':'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2013_2_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Version/13.0.3\x20Mobile/15E148\x20Safari/604.1\x20Edg/87.0.4280.88'};return new Promise(_0x55ab67=>{var _0x5aabd6={'zrFXh':function(_0xcdb12a,_0x72a8eb){return _0x49cd6d[_0x50ae('‮ff','l)ti')](_0xcdb12a,_0x72a8eb);}};const _0x4029de={'url':_0x8506f6+'?'+new Date(),'timeout':0x2710,'headers':{'User-Agent':_0x49cd6d[_0x50ae('‫100','lVmS')]}};$[_0x50ae('‫101','(WrK')](_0x4029de,async(_0x5a5553,_0x5922b2,_0x23fb74)=>{var _0x2ac2af={'RzTFO':function(_0x39c5c6,_0xdb7cda){return _0x49cd6d['XfsUH'](_0x39c5c6,_0xdb7cda);}};if(_0x49cd6d['clcur'](_0x49cd6d[_0x50ae('‫102','Aho3')],_0x49cd6d[_0x50ae('‫103','ni2f')])){$['logErr'](e,_0x5922b2);}else{try{if(_0x5a5553){if(_0x49cd6d[_0x50ae('‫104','ISza')](_0x49cd6d['VPHKQ'],_0x49cd6d['VPHKQ'])){if(_0x2ac2af['RzTFO'](_0x23fb74[_0x50ae('‫105','O5[o')](_0x50ae('‮106','k(Q&')),0x0)){_0x23fb74=_0x23fb74[_0x50ae('‫107','BX[D')](_0x50ae('‮108','hGMM'),0x2);_0x23fb74=JSON[_0x50ae('‫109','O1n$')](_0x23fb74[0x1]);$['eid']=_0x23fb74[_0x50ae('‫10a','jvh%')];}else{console[_0x50ae('‮10b','ISza')]('京豆api返回数据为空，请检查自身原因');}}else{$[_0x50ae('‮10c','cU&S')]=![];}}else{if(_0x49cd6d['cDWRE'](_0x49cd6d[_0x50ae('‫10d','X(dG')],_0x49cd6d[_0x50ae('‮10e','ucBO')])){e=e||0x20;let _0x366f74='abcdef0123456789',_0x39dd54=_0x366f74[_0x50ae('‮10f','R1wR')],_0x57ba6c='';for(i=0x0;i<e;i++)_0x57ba6c+=_0x366f74[_0x50ae('‫110','(WrK')](Math['floor'](_0x5aabd6['zrFXh'](Math[_0x50ae('‫111','k(Q&')](),_0x39dd54)));return _0x57ba6c;}else{if(_0x23fb74)_0x23fb74=JSON['parse'](_0x23fb74);$[_0x50ae('‮112','zWPa')]=!![];}}}catch(_0x302408){if(_0x49cd6d[_0x50ae('‫113','Av^[')]===_0x49cd6d[_0x50ae('‮114','O1n$')]){$['logErr'](_0x302408,_0x5922b2);_0x23fb74=null;}else{$['done']();}}finally{_0x55ab67(_0x23fb74);}}});});}function random(_0x46b31f,_0x4e221f){var _0x59370c={'Emuhc':function(_0x4ff0fb,_0x564e58){return _0x4ff0fb+_0x564e58;},'Tkdrq':function(_0x1460ee,_0x2aac89){return _0x1460ee*_0x2aac89;}};return _0x59370c['Emuhc'](Math[_0x50ae('‮f9','zRHz')](_0x59370c['Tkdrq'](Math[_0x50ae('‫115','R1wR')](),_0x4e221f-_0x46b31f)),_0x46b31f);}function getHash(){var _0x3e9558={'txZvz':function(_0x1a0299,_0x45f5ab){return _0x1a0299==_0x45f5ab;},'vySIA':function(_0x469dce,_0x1c4adf){return _0x469dce+_0x1c4adf;},'YTiLr':function(_0x4c24b1,_0x1919e3){return _0x4c24b1===_0x1919e3;},'vpFOr':_0x50ae('‮116','(uJO'),'xrkBa':function(_0x30bd47,_0x859e32,_0x343417){return _0x30bd47(_0x859e32,_0x343417);}};const _0x5d5111=new Array(0x9)[_0x50ae('‮117','X(dG')](0x1)[_0x50ae('‮118','bhEd')]((_0x4ca975,_0x5f1706)=>{if(_0x3e9558[_0x50ae('‫119','ISza')](_0x50ae('‮11a','e9^b'),_0x3e9558['vpFOr'])){if(_0x3e9558[_0x50ae('‮11b','O5[o')]($[_0x50ae('‮11c','lVmS')][_0x50ae('‮11d','lVmS')](name[_0x50ae('‫ec','$5Q1')]('=')[0x1]),-0x1))$[_0x50ae('‮11e','s(ge')]+=_0x3e9558[_0x50ae('‮11f','G]wt')](name[_0x50ae('‮120','Ij#$')](/ /g,''),';\x20');}else{if(_0x5f1706){return _0x3e9558[_0x50ae('‫121','B2@(')](random,0x0,0x9);}return 0x1;}});return _0x5d5111[_0x50ae('‮122','jvh%')]('');}function getCookieStr(_0x32d3d4,_0x368630){var _0x392503={'vwcHX':function(_0x4174f1,_0x5c7743,_0x4223c5){return _0x4174f1(_0x5c7743,_0x4223c5);},'qKZYv':function(_0x459d03,_0x17d713){return _0x459d03>_0x17d713;},'yQZAP':function(_0x4f8ac5,_0x3d7349){return _0x4f8ac5===_0x3d7349;},'sXJdR':'uuMVo','ZmRyL':function(_0xa6ea6b,_0x33e27d,_0x4079c8){return _0xa6ea6b(_0x33e27d,_0x4079c8);},'yeGVY':function(_0x30cb68){return _0x30cb68();},'iaEUP':function(_0x219501,_0xe53552){return _0x219501+_0xe53552;},'CirGC':function(_0x407600,_0x4ee0d9){return _0x407600+_0x4ee0d9;},'BvCyE':function(_0x1627e9,_0x6a289e){return _0x1627e9(_0x6a289e);},'gHzcw':function(_0x18df47,_0x347a74){return _0x18df47*_0x347a74;}};if(!_0x32d3d4[_0x50ae('‮123','O1n$')]){_0x32d3d4['ckInArr']=[];}if(_0x392503[_0x50ae('‫124','Ij#$')](_0x32d3d4[_0x50ae('‮125','3cu9')][_0x50ae('‮126','zWPa')],0x4)){if(_0x392503[_0x50ae('‮127','cU&S')](_0x50ae('‫128','lr*U'),_0x392503[_0x50ae('‮129','G]wt')])){return _0x32d3d4[_0x50ae('‮12a','[7JL')][_0x392503[_0x50ae('‫12b','f6Zz')](random,0x0,_0x32d3d4[_0x50ae('‮12c','a^zB')][_0x50ae('‫12d','O1n$')])];}else{var _0x40d513={'KidSO':function(_0x46aeb6,_0x15281d,_0x46ffe2){return _0x392503['vwcHX'](_0x46aeb6,_0x15281d,_0x46ffe2);}};const _0x1404c1=new Array(0x9)[_0x50ae('‫12e','Av^[')](0x1)[_0x50ae('‮12f','e1qr')]((_0x51f678,_0x5bd4ad)=>{if(_0x5bd4ad){return _0x40d513['KidSO'](random,0x0,0x9);}return 0x1;});return _0x1404c1['join']('');}}let _0x1ca488=_0x392503[_0x50ae('‮130','e9^b')](getHash);let _0xb299fc=_0x392503[_0x50ae('‫131','qS3t')](_0x392503[_0x50ae('‮132','Aho3')](new Date()[_0x50ae('‮133','zRHz')](),''),_0x392503['BvCyE'](parseInt,_0x392503[_0x50ae('‫134','Av^[')](0x7fffffff,Math[_0x50ae('‫135','(azk')]())));let _0x305ea9=_0xb299fc[_0x50ae('‮136','Ij#$')](0x0,0xa);let _0x4a2a16=0x1;let _0x292592=[_0x1ca488,_0xb299fc,_0x305ea9,_0x305ea9,_0x305ea9,_0x4a2a16]['join']('.');let _0x187105='__jda='+_0x292592+_0x50ae('‮137','8jmy')+_0x1ca488+';';_0x32d3d4[_0x50ae('‫138','s(ge')]['push'](_0x187105);return _0x187105;}async function getCoupons(_0x1f4fa1){var _0x28665e={'QiVCh':function(_0x18dd63,_0x1df63f){return _0x18dd63+_0x1df63f;},'KWgsE':function(_0x2e0633,_0x406cff){return _0x2e0633===_0x406cff;},'mpspq':_0x50ae('‫139','jvh%'),'RLcYa':function(_0x1e3cac,_0x195b74){return _0x1e3cac===_0x195b74;},'Xmrdm':function(_0x590544,_0x55e6f4){return _0x590544==_0x55e6f4;},'thLSf':_0x50ae('‫13a','cU&S'),'vYnwQ':function(_0x5a656c,_0x95df5f){return _0x5a656c!==_0x95df5f;},'jmfAX':function(_0x51ef00,_0x23d858){return _0x51ef00!==_0x23d858;},'TIoTT':'PfYLn','ZdNTo':_0x50ae('‮13b','zRHz'),'avQqU':_0x50ae('‮13c','BX[D'),'vkfsk':function(_0x113034,_0x43326b){return _0x113034==_0x43326b;},'fsaJG':function(_0x262dc6,_0x1a19ee){return _0x262dc6==_0x1a19ee;},'ezhoY':'JsUtE','adpca':function(_0x137cff,_0x3d6ab5){return _0x137cff!==_0x3d6ab5;},'zcSux':function(_0x25005,_0x13f8f0){return _0x25005*_0x13f8f0;},'hKcfl':_0x50ae('‫13d','XRjc'),'QzaeM':'CNvsT','tKPby':function(_0x3738f1){return _0x3738f1();},'Fmvhf':function(_0x865b4c,_0x52e52f){return _0x865b4c+_0x52e52f;},'PGrKm':_0x50ae('‫13e','HR2F'),'LSxvf':'11.1.4','ckMhp':_0x50ae('‫13f','hGMM'),'hkEWf':_0x50ae('‮140','G]wt')};return new Promise(async _0x21ba5a=>{var _0x31c476={'CXcps':function(_0x5b1a07,_0x31576e){return _0x28665e[_0x50ae('‮141','zWPa')](_0x5b1a07,_0x31576e);},'qkwnr':_0x28665e[_0x50ae('‮142','ni2f')],'ttMGM':'*_*'};const _0x55869d={'platform':0x4,'unionActId':_0x50ae('‫143','O1n$'),'actId':$['actId'],'d':$[_0x50ae('‫144','E5HR')],'unionShareId':_0x1f4fa1,'type':0x1,'eid':$[_0x50ae('‮145','(azk')]};const _0x262e19={'functionId':_0x28665e[_0x50ae('‮146','Aho3')],'appid':'u','clientVersion':_0x28665e[_0x50ae('‮147','a^zB')],'client':_0x50ae('‮148','1WpU'),'body':_0x55869d};const _0x23dc78=await getH5st(_0x28665e[_0x50ae('‮149','lVmS')],_0x262e19);let _0xe426d5={'url':_0x50ae('‫14a','l)ti')+_0x23dc78,'headers':{'Accept-Language':'zh-cn','Accept-Encoding':_0x28665e[_0x50ae('‫14b','k(Q&')],'Cookie':cookie+'\x20'+$['jfCk']+'\x20'+$[_0x50ae('‫14c','ni2f')],'user-agent':$['UA']}};$['get'](_0xe426d5,async(_0x52ac0c,_0x3cd7e5,_0x2886b7)=>{var _0x344623={'wHPtA':function(_0x5ba139,_0x27f317){return _0x5ba139!=_0x27f317;},'LdzpJ':'object','nJJHV':function(_0x992ec3,_0x5e72e1){return _0x992ec3==_0x5e72e1;},'fQVaw':function(_0x168a39,_0x36498a){return _0x28665e['QiVCh'](_0x168a39,_0x36498a);},'iLZRg':function(_0x4652b5,_0x4a7d7b){return _0x4652b5(_0x4a7d7b);}};if(_0x28665e['KWgsE'](_0x50ae('‫14d','Aho3'),_0x28665e[_0x50ae('‮14e','lr*U')])){console[_0x50ae('‮14f','f6Zz')](_0x31c476[_0x50ae('‫150','E5HR')](_0x31c476['CXcps']($[_0x50ae('‫151','zRHz')],_0x31c476['qkwnr']),res['msg']));$[_0x50ae('‮152','Ij#$')]=res[_0x50ae('‫153','Aho3')];}else{try{if(_0x52ac0c){console['log'](''+$[_0x50ae('‮154','[7JL')](_0x52ac0c));console[_0x50ae('‫155','3cu9')]($[_0x50ae('‮156','(azk')]+'\x20API请求失败，请检查网路重试');}else{if(_0x28665e[_0x50ae('‫157','HR2F')](_0x50ae('‫158','cNxY'),'KimEX')){_0x2886b7=_0x2886b7[_0x50ae('‮159','s(ge')](_0x31c476[_0x50ae('‮15a','lr*U')],0x2);_0x2886b7=JSON['parse'](_0x2886b7[0x1]);$[_0x50ae('‮15b','k(Q&')]=_0x2886b7[_0x50ae('‫15c','R1wR')];}else{let _0x1450a0=$[_0x50ae('‮15d','Av^[')](_0x2886b7,_0x2886b7);if(_0x28665e['Xmrdm'](typeof _0x1450a0,_0x50ae('‫15e','(WrK'))){if(_0x1450a0[_0x50ae('‫15f','(WrK')]){console['log'](_0x28665e[_0x50ae('‫160','E5HR')]($[_0x50ae('‫161','B2@(')],_0x28665e['thLSf'])+_0x1450a0[_0x50ae('‫162','O1n$')]);$[_0x50ae('‮163','3cu9')]=_0x1450a0[_0x50ae('‫164','Ij#$')];}if(_0x28665e[_0x50ae('‫165','qS3t')](_0x1450a0[_0x50ae('‫166','a^zB')][_0x50ae('‫167',']PdY')]('上限'),-0x1)){if(_0x28665e[_0x50ae('‫168','IIIK')](_0x28665e[_0x50ae('‫169','(WrK')],_0x50ae('‮16a','s(ge'))){$[_0x50ae('‮16b','$5Q1')]=!![];}else{if(_0x2886b7)_0x2886b7=JSON['parse'](_0x2886b7);$[_0x50ae('‮16c','e1qr')]=!![];}}if($[_0x50ae('‫16d','Av^[')]&&typeof _0x1450a0[_0x50ae('‫16e','e9^b')]!==_0x28665e[_0x50ae('‫16f','jvh%')]&&typeof _0x1450a0['data']['joinNum']!==_0x28665e[_0x50ae('‮170','IIIK')]){if(_0x28665e[_0x50ae('‮171','y5EW')]===_0x28665e['avQqU']){console[_0x50ae('‮172','hGMM')]('当前'+_0x1450a0[_0x50ae('‫173','f6Zz')][_0x50ae('‫174','l)ti')]+':'+_0x1450a0[_0x50ae('‫175','IIIK')][_0x50ae('‮176','zWPa')]);}else{console['log'](_0x2886b7);}}if(_0x28665e[_0x50ae('‫177','G]wt')](_0x1450a0[_0x50ae('‫178','y5EW')],0x0)&&_0x1450a0[_0x50ae('‫179','(WrK')]){$['couponList']=_0x1450a0[_0x50ae('‫17a','cU&S')]['couponList']||[];for(const _0x3d84da of $[_0x50ae('‫17b','E5HR')]){krtype=_0x3d84da[_0x50ae('‫17c','R1wR')];if(_0x28665e[_0x50ae('‮17d','O1n$')](_0x3d84da[_0x50ae('‮17e','X(dG')],0x1)){console[_0x50ae('‮34','e1qr')]($[_0x50ae('‫17f','lVmS')]+_0x50ae('‮180','X(dG')+_0x3d84da[_0x50ae('‮181','lr*U')]+'元');}else if(_0x28665e[_0x50ae('‮182','HR2F')](_0x3d84da[_0x50ae('‫183','1WpU')],0x3)){if(_0x28665e['RLcYa'](_0x28665e['ezhoY'],_0x28665e['ezhoY'])){console[_0x50ae('‮184','2Dh^')]($[_0x50ae('‮185',']PdY')]+'获得优惠券：️满'+_0x3d84da[_0x50ae('‫186','qS3t')]+'减'+_0x3d84da['discount']);}else{$[_0x50ae('‮187','Aho3')]=!![];}}else if(_0x28665e[_0x50ae('‫188','XRjc')](_0x3d84da[_0x50ae('‮17e','X(dG')],0x6)){if(_0x28665e[_0x50ae('‫189','Aho3')](_0x50ae('‫18a','l)ti'),_0x50ae('‫18b','zRHz'))){console[_0x50ae('‮21','zWPa')]($[_0x50ae('‫151','zRHz')]+_0x50ae('‫18c','sOi)')+_0x3d84da[_0x50ae('‫186','qS3t')]+'打'+_0x28665e[_0x50ae('‮18d','e9^b')](_0x3d84da[_0x50ae('‫18e','cNxY')],0xa)+'折');}else{if(_0x344623[_0x50ae('‮18f','(azk')](typeof setcookies,_0x344623[_0x50ae('‮190','$5Q1')])){setcookie=setcookies['split'](',');}else setcookie=setcookies;for(let _0x25176c of setcookie){let _0x4e7577=_0x25176c['split'](';')[0x0][_0x50ae('‮191','sOi)')]();if(_0x4e7577[_0x50ae('‫192','O1n$')]('=')[0x1]){if(_0x344623[_0x50ae('‫193','s(ge')]($[_0x50ae('‮194','[7JL')][_0x50ae('‮195','zRHz')](_0x4e7577[_0x50ae('‮196','O5[o')]('=')[0x1]),-0x1))$[_0x50ae('‫197','cU&S')]+=_0x344623[_0x50ae('‮198','(uJO')](_0x4e7577['replace'](/ /g,''),';\x20');}}}}else{console['log']($[_0x50ae('‫17f','lVmS')]+'不知道获得了啥');console[_0x50ae('‮10b','ISza')](_0x2886b7);}}}}else{if(_0x28665e[_0x50ae('‫199',']PdY')]!==_0x28665e[_0x50ae('‮19a','B2@(')]){console[_0x50ae('‮19b','XRjc')](_0x2886b7);}else{console[_0x50ae('‮19c','G]wt')](_0x2886b7);}}}}}catch(_0x234eb4){$['logErr'](_0x234eb4,_0x3cd7e5);}finally{if(_0x50ae('‫19d','R1wR')==='esbtH'){_0x28665e[_0x50ae('‮19e','8jmy')](_0x21ba5a);}else{_0x344623[_0x50ae('‮19f','E5HR')](_0x21ba5a,result);}}}});});}async function getInfo2(){var _0x401fd9={'WHREh':_0x50ae('‫1a0',']PdY'),'eAyhF':function(_0x4f5a41,_0x17646a){return _0x4f5a41+_0x17646a;},'Jrzph':'Location'};return new Promise(_0x3d8a5c=>{var _0x1952d6={'iBkJP':_0x401fd9[_0x50ae('‫1a1','hGMM')],'otpuz':_0x50ae('‫1a2','R1wR'),'zZwOt':_0x50ae('‮1a3','HR2F'),'ZcxVP':function(_0x3c5e53,_0x1d5ea2){return _0x3c5e53==_0x1d5ea2;},'Awojd':function(_0x5ce8b4,_0x4dee4e){return _0x401fd9[_0x50ae('‮1a4','*Kq]')](_0x5ce8b4,_0x4dee4e);},'ZegTi':_0x401fd9['Jrzph'],'YcQNM':function(_0x572cff,_0x50e097){return _0x572cff(_0x50e097);}};const _0x5f6cf0={'url':$['url1'],'followRedirect':![],'headers':{'Cookie':cookie+'\x20'+$[_0x50ae('‫1a5','1WpU')]+'\x20'+$['newCookie'],'user-agent':$['UA']}};$[_0x50ae('‫1a6','bhEd')](_0x5f6cf0,async(_0x37309b,_0x2f02aa,_0x259923)=>{try{let _0x476765=_0x2f02aa&&_0x2f02aa[_0x50ae('‮1a7','Av^[')]&&(_0x2f02aa[_0x1952d6[_0x50ae('‫1a8','hGMM')]][_0x1952d6['otpuz']]||_0x2f02aa[_0x1952d6['iBkJP']][_0x50ae('‮1a9','e9^b')]||'')||'';let _0x1d4675='';if(_0x476765){if(typeof _0x476765!=_0x1952d6[_0x50ae('‫1aa','8jmy')]){if(_0x50ae('‮1ab','a^zB')!==_0x50ae('‮1ac','1WpU')){console['log'](_0x50ae('‫1ad','*Kq]'));}else{_0x1d4675=_0x476765[_0x50ae('‫1ae','zRHz')](',');}}else _0x1d4675=_0x476765;for(let _0x54a995 of _0x1d4675){let _0x13aab5=_0x54a995[_0x50ae('‫1af','qS3t')](';')[0x0][_0x50ae('‫1b0','B2@(')]();if(_0x13aab5[_0x50ae('‮1b1','Q@9K')]('=')[0x1]){if(_0x1952d6[_0x50ae('‮1b2','bhEd')]($[_0x50ae('‮1b3','BX[D')][_0x50ae('‮1b4','a^zB')](_0x13aab5[_0x50ae('‫1b5','zWPa')]('=')[0x1]),-0x1))$[_0x50ae('‮1b6',']PdY')]+=_0x1952d6[_0x50ae('‫1b7','lVmS')](_0x13aab5[_0x50ae('‫1b8','k(Q&')](/ /g,''),';\x20');}}}$[_0x50ae('‮63','$5Q1')]=_0x2f02aa&&_0x2f02aa[_0x50ae('‮1b9','f6Zz')]&&(_0x2f02aa[_0x1952d6[_0x50ae('‮1ba','jvh%')]]['location']||_0x2f02aa[_0x1952d6['iBkJP']][_0x1952d6[_0x50ae('‫1bb','jvh%')]]||'')||'';$['url2']=_0x1952d6['YcQNM'](decodeURIComponent,$[_0x50ae('‮1bc','R1wR')]);$['url2']=$[_0x50ae('‫1bd','Q1rC')][_0x50ae('‮1be','sOi)')](/(https:\/\/prodev\.m\.jd\.com\/mall[^'"]+)/)&&$['url2']['match'](/(https:\/\/prodev\.m\.jd\.com\/mall[^'"]+)/)[0x1]||'';}catch(_0x57b6f2){$[_0x50ae('‫1bf','Q1rC')](_0x57b6f2,_0x2f02aa);}finally{_0x1952d6[_0x50ae('‮1c0','(azk')](_0x3d8a5c,_0x259923);}});});}function getH5st(_0x424055,_0x319412){var _0x885755={'xDnOS':function(_0x38a8d2,_0x9b868b){return _0x38a8d2==_0x9b868b;},'agnSH':_0x50ae('‫1c1',']PdY'),'nSUdu':function(_0x50e2c3,_0x601ac1){return _0x50e2c3-_0x601ac1;},'cnWeo':_0x50ae('‮1c2','Aho3'),'lOsCa':_0x50ae('‮1c3','ni2f'),'FsMKC':_0x50ae('‮1c4','[7JL'),'BFrGR':_0x50ae('‫1c5','Ij#$'),'puJzc':_0x50ae('‮1c6','8jmy'),'TegvO':function(_0x33da30,_0xc40fb6){return _0x33da30!==_0xc40fb6;},'jkPAs':_0x50ae('‫1c7','3cu9'),'TEfoh':function(_0x3146af,_0x27c46e){return _0x3146af===_0x27c46e;},'DORXg':_0x50ae('‮1c8','zRHz'),'qXIDc':function(_0x43c08c,_0x13784f){return _0x43c08c===_0x13784f;},'GjdFP':function(_0x5b410e,_0x24580d){return _0x5b410e!==_0x24580d;},'LMVnL':'AmnWC','swBtU':_0x50ae('‫1c9','zRHz'),'NXbBz':_0x50ae('‫1ca','1WpU'),'BLoji':function(_0x43c5ef,_0x251aaa){return _0x43c5ef*_0x251aaa;},'qTLeA':_0x50ae('‮1cb','qS3t')};let _0x46cf58={'appId':_0x424055,..._0x319412,'ua':$['UA'],'pin':$['UserName']};let _0x2aa388=[_0x885755['swBtU'],_0x885755[_0x50ae('‮1cc','IIIK')]];$[_0x50ae('‫1cd','ucBO')]=_0x2aa388[Math[_0x50ae('‮1ce','HR2F')](_0x885755['BLoji'](Math['random'](),_0x2aa388['length']))];let _0x3477c5={'url':$['krurls'],'body':JSON['stringify'](_0x46cf58),'headers':{'Content-Type':_0x885755['qTLeA']},'timeout':0x7530};return new Promise(async _0x39e889=>{var _0xe1898b={'kGhAD':function(_0x28ba92,_0xd4001b){return _0x885755[_0x50ae('‮1cf','bhEd')](_0x28ba92,_0xd4001b);},'vPnqG':function(_0x5b322,_0x23ce77){return _0x5b322+_0x23ce77;},'bnfRp':_0x885755[_0x50ae('‫1d0','k(Q&')],'AIVRx':function(_0x577760,_0x552105){return _0x577760<_0x552105;},'CLVWm':function(_0x1e685e,_0x486ad0){return _0x885755['nSUdu'](_0x1e685e,_0x486ad0);},'DQYET':_0x885755[_0x50ae('‮1d1','ni2f')],'wyMEe':_0x885755[_0x50ae('‫1d2','lr*U')],'kKLXr':_0x885755[_0x50ae('‮1d3','BX[D')],'fZqFS':_0x885755['BFrGR'],'VYFGa':_0x885755[_0x50ae('‮1d4','l)ti')],'uzajD':function(_0x2f4bfa,_0x1a9e9f){return _0x885755[_0x50ae('‫1d5','$5Q1')](_0x2f4bfa,_0x1a9e9f);},'givwf':_0x885755[_0x50ae('‫1d6','R1wR')],'eNPWG':function(_0x34adfb,_0x37b55e){return _0x885755['TEfoh'](_0x34adfb,_0x37b55e);},'GwMhJ':_0x885755[_0x50ae('‫1d7','lVmS')],'JmTPL':_0x50ae('‫1d8','zRHz'),'kicBO':function(_0x40b316,_0x5494a7){return _0x885755[_0x50ae('‮1d9','mfhX')](_0x40b316,_0x5494a7);},'FtRLI':_0x50ae('‮1da','lr*U'),'TNGwv':'没有数据返回','dxqjI':function(_0x2dc70b,_0x2ac7ad){return _0x2dc70b(_0x2ac7ad);}};if(_0x885755[_0x50ae('‮1db','l)ti')](_0x885755[_0x50ae('‮1dc','jvh%')],_0x885755[_0x50ae('‮1dd','Q@9K')])){throw new Error(err);}else{$[_0x50ae('‮1de','2Dh^')](_0x3477c5,(_0x462f7b,_0x25fb59,_0x46cf58)=>{var _0x900eaa={'uaDOC':_0xe1898b[_0x50ae('‫1df','1WpU')],'HkJYR':function(_0x37fc47,_0x3b483f){return _0xe1898b[_0x50ae('‫1e0','E5HR')](_0x37fc47,_0x3b483f);},'gfMcP':function(_0x78d981,_0x4a26a6){return _0xe1898b['CLVWm'](_0x78d981,_0x4a26a6);},'JpeQN':function(_0x50eba3,_0x56fead){return _0xe1898b[_0x50ae('‮1e1','mfhX')](_0x50eba3,_0x56fead);},'nBnNp':_0xe1898b[_0x50ae('‫1e2','XRjc')],'LlmQL':_0xe1898b['wyMEe'],'qRRkI':_0xe1898b[_0x50ae('‮1e3','e1qr')],'ypAHF':_0xe1898b[_0x50ae('‫1e4','Q@9K')],'RedYM':_0xe1898b[_0x50ae('‮1e5','XRjc')]};if(_0xe1898b[_0x50ae('‫1e6','O1n$')](_0xe1898b[_0x50ae('‫1e7','zRHz')],_0x50ae('‮1e8','zWPa'))){setcookie=setcookies['split'](',');}else{let _0x180160='';try{if(_0xe1898b[_0x50ae('‮1e9','e9^b')](_0xe1898b[_0x50ae('‮1ea',']PdY')],_0xe1898b[_0x50ae('‮1eb','IIIK')])){let _0x90aecc=ck['split'](';')[0x0][_0x50ae('‫1ec','qS3t')]();if(_0x90aecc[_0x50ae('‫30','lr*U')]('=')[0x1]){if(_0xe1898b['kGhAD']($[_0x50ae('‮194','[7JL')][_0x50ae('‫1ed','qS3t')](_0x90aecc[_0x50ae('‫1ae','zRHz')]('=')[0x1]),-0x1))$['newCookie']+=_0xe1898b[_0x50ae('‫1ee','s(ge')](_0x90aecc[_0x50ae('‮1ef','E5HR')](/ /g,''),';\x20');}}else{if(_0x462f7b){}else{_0x46cf58=JSON[_0x50ae('‫109','O1n$')](_0x46cf58);if(_0xe1898b['kicBO'](typeof _0x46cf58,_0xe1898b[_0x50ae('‫1f0','l)ti')])&&_0x46cf58&&_0x46cf58[_0x50ae('‮1f1','y5EW')]){if(_0x46cf58['body']){_0x180160=_0x46cf58['body']||'';}}else{console['log'](_0xe1898b[_0x50ae('‮1f2','[7JL')]);}}}}catch(_0x4b9141){if(_0xe1898b['uzajD'](_0x50ae('‫1f3','Q@9K'),'nYutS')){$[_0x50ae('‫1f4','lr*U')](_0x4b9141,_0x25fb59);}else{for(var _0x1cc527='',_0x5c2a19=_0x900eaa[_0x50ae('‮1f5','sOi)')],_0x355d32=0x0;_0x900eaa[_0x50ae('‮1f6','zRHz')](_0x355d32,0x10);_0x355d32++){var _0x54cf2d=Math['round'](Math[_0x50ae('‫1f7','8jmy')]()*_0x900eaa[_0x50ae('‫1f8','e1qr')](_0x5c2a19[_0x50ae('‮1f9','ni2f')],0x1));_0x1cc527+=_0x5c2a19[_0x50ae('‮1fa','jvh%')](_0x54cf2d,_0x900eaa[_0x50ae('‮1fb','y5EW')](_0x54cf2d,0x1));}uuid=Buffer['from'](_0x1cc527,_0x900eaa[_0x50ae('‫1fc','8jmy')])[_0x50ae('‮1fd','3cu9')](_0x900eaa['LlmQL']);ep=encodeURIComponent(JSON['stringify']({'hdid':_0x50ae('‮1fe','E5HR'),'ts':new Date()[_0x50ae('‫1ff','cU&S')](),'ridx':-0x1,'cipher':{'sv':_0x900eaa[_0x50ae('‫200','l)ti')],'iad':'','ud':uuid},'ciphertype':0x5,'version':_0x900eaa[_0x50ae('‫201','k(Q&')],'appname':_0x900eaa[_0x50ae('‫202','bhEd')]}));return'jdapp;iPhone;11.1.4;;;M/5.0;appBuild/168210;jdSupportDarkMode/1;ef/1;ep/'+ep+_0x50ae('‫203','2Dh^');}}finally{_0xe1898b[_0x50ae('‫204','[7JL')](_0x39e889,_0x180160);}}});}});}async function getUa(){var _0x500018={'mZBYc':_0x50ae('‫205','2Dh^'),'BdonC':function(_0x467444,_0x39cb80){return _0x467444<_0x39cb80;},'eQNMC':function(_0x27fbf7,_0x2c9fb7){return _0x27fbf7-_0x2c9fb7;},'PGmsP':function(_0xefbea0,_0x2a7c4d){return _0xefbea0+_0x2a7c4d;},'VxkaJ':_0x50ae('‮206','Q@9K'),'kzcyc':function(_0x885cd,_0x3ca02e){return _0x885cd(_0x3ca02e);},'CASPA':_0x50ae('‮207','sOi)'),'FiPwX':'com.360buy.jdmobile'};for(var _0x1687bc='',_0xbccd59=_0x500018[_0x50ae('‮208','lVmS')],_0x5d8b05=0x0;_0x500018['BdonC'](_0x5d8b05,0x10);_0x5d8b05++){var _0x35a1ff=Math[_0x50ae('‫209','*Kq]')](Math['random']()*_0x500018[_0x50ae('‫20a','ISza')](_0xbccd59[_0x50ae('‮20b','Ij#$')],0x1));_0x1687bc+=_0xbccd59[_0x50ae('‫20c','a^zB')](_0x35a1ff,_0x500018['PGmsP'](_0x35a1ff,0x1));}uuid=Buffer[_0x50ae('‫20d','BX[D')](_0x1687bc,_0x50ae('‫20e','lVmS'))[_0x50ae('‮20f','hGMM')](_0x500018[_0x50ae('‮210','(uJO')]);ep=_0x500018['kzcyc'](encodeURIComponent,JSON[_0x50ae('‮211','e9^b')]({'hdid':_0x50ae('‮212','cU&S'),'ts':new Date()['getTime'](),'ridx':-0x1,'cipher':{'sv':_0x500018[_0x50ae('‮213','R1wR')],'iad':'','ud':uuid},'ciphertype':0x5,'version':_0x50ae('‮214','a^zB'),'appname':_0x500018['FiPwX']}));return'jdapp;iPhone;11.1.4;;;M/5.0;appBuild/168210;jdSupportDarkMode/1;ef/1;ep/'+ep+_0x50ae('‫215','f6Zz');}async function getInfo1(){var _0xa105e={'TqEEi':function(_0x2ad465,_0x34b998){return _0x2ad465+_0x34b998;},'SKQrN':_0x50ae('‫216','Aho3'),'uuctG':function(_0x5c918d,_0x3fb10c){return _0x5c918d(_0x3fb10c);},'PGWYq':function(_0x5a7ddb,_0x1936c3){return _0x5a7ddb+_0x1936c3;},'XmQLi':_0x50ae('‮217','s(ge'),'VpHjZ':_0x50ae('‮218','O1n$'),'ncejN':_0x50ae('‫219','ucBO'),'nwzAq':'set-cookie','paiOd':_0x50ae('‮21a','bhEd'),'uwEVO':function(_0x37d78b,_0xcb5188){return _0x37d78b!=_0xcb5188;},'epzrD':function(_0x43b9b2,_0x29e02b){return _0x43b9b2===_0x29e02b;},'jbWYW':'qxrKM','xnNFc':_0x50ae('‫21b','Q1rC'),'YKpbp':function(_0x31dcaa,_0xe7c4aa){return _0x31dcaa==_0xe7c4aa;},'kqvSa':function(_0x125836,_0x4bfb2f){return _0x125836===_0x4bfb2f;},'tDXvi':_0x50ae('‫21c','ni2f'),'EOjlW':function(_0x594820,_0x336695,_0x864b4e){return _0x594820(_0x336695,_0x864b4e);}};$[_0x50ae('‫21d','IIIK')]=_0xa105e[_0x50ae('‮21e','a^zB')](getCookieStr,$,cookie);return new Promise(_0x293e6f=>{var _0x4a87e3={'WxMBs':function(_0x31c1d0,_0x25d16b){return _0x31c1d0==_0x25d16b;},'FjUGT':function(_0x14a29c,_0x32319e){return _0xa105e[_0x50ae('‫21f','O5[o')](_0x14a29c,_0x32319e);},'WuPoQ':_0x50ae('‮220','B2@('),'XPQKZ':function(_0x30b7f5,_0x509034){return _0x30b7f5+_0x509034;},'tAOli':_0xa105e[_0x50ae('‫221','ISza')],'RNndW':function(_0x38382b,_0x524e59){return _0xa105e[_0x50ae('‫222','cNxY')](_0x38382b,_0x524e59);},'gBWhU':function(_0x4a67de,_0x52c8a5){return _0xa105e[_0x50ae('‮223','y5EW')](_0x4a67de,_0x52c8a5);},'odWUQ':_0xa105e[_0x50ae('‫224','B2@(')],'oiwUi':function(_0x4f970d,_0x4b58da){return _0x4f970d!==_0x4b58da;},'UXWUm':_0xa105e['VpHjZ'],'kKWDg':_0xa105e[_0x50ae('‮225','2Dh^')],'sLEdj':_0xa105e[_0x50ae('‮226','hGMM')],'RbuJA':function(_0x708cd0,_0x10a35d){return _0x708cd0!==_0x10a35d;},'VSWWm':_0xa105e['paiOd'],'ABiSH':function(_0x742e19,_0x1f84db){return _0xa105e[_0x50ae('‫227','jvh%')](_0x742e19,_0x1f84db);},'jQGPU':function(_0x491684,_0x197123){return _0xa105e[_0x50ae('‮228','zRHz')](_0x491684,_0x197123);},'TOgaN':_0xa105e[_0x50ae('‫229','s(ge')],'wvDtE':_0xa105e['xnNFc'],'lphtl':function(_0xe169da,_0x3968bf){return _0xa105e[_0x50ae('‮22a','O1n$')](_0xe169da,_0x3968bf);},'XMSQM':function(_0xd3485d,_0x5c25c7){return _0xd3485d+_0x5c25c7;},'LeMYy':function(_0x2735f5,_0x46a4d6){return _0xa105e['uuctG'](_0x2735f5,_0x46a4d6);}};if(_0xa105e[_0x50ae('‫22b','zWPa')](_0x50ae('‮22c','Q1rC'),_0xa105e[_0x50ae('‮22d','lVmS')])){const _0x540599={'url':_0x50ae('‫22e','k(Q&')+$[_0x50ae('‮22f','mfhX')]+_0x50ae('‮230',']PdY')+$[_0x50ae('‫231','XRjc')],'followRedirect':![],'headers':{'Cookie':cookie,'user-agent':$['UA']}};$[_0x50ae('‮232','cNxY')](_0x540599,async(_0x12447a,_0x550ba5,_0x47bbe6)=>{var _0x59131c={'KBLCo':function(_0x4df9ec,_0x1d15a1){return _0x4df9ec+_0x1d15a1;},'hgtQk':function(_0x4f4794,_0x5f2e08){return _0x4a87e3[_0x50ae('‫233','XRjc')](_0x4f4794,_0x5f2e08);},'ojDSo':_0x50ae('‮234','(WrK')};if(_0x4a87e3[_0x50ae('‮235','zWPa')]!==_0x50ae('‮236','O5[o')){try{if(_0x4a87e3[_0x50ae('‮237',']PdY')](_0x4a87e3[_0x50ae('‫238','E5HR')],_0x4a87e3[_0x50ae('‫239','sOi)')])){if(_0x4a87e3['WxMBs']($[_0x50ae('‫23a','O1n$')][_0x50ae('‫23b','f6Zz')](name[_0x50ae('‮23c','ni2f')]('=')[0x1]),-0x1))$[_0x50ae('‮23d','hGMM')]+=_0x4a87e3[_0x50ae('‮23e','sOi)')](name[_0x50ae('‫23f','Aho3')](/ /g,''),';\x20');}else{let _0x3dc54c=_0x550ba5&&_0x550ba5[_0x4a87e3[_0x50ae('‮240','G]wt')]]&&(_0x550ba5[_0x4a87e3[_0x50ae('‮241',']PdY')]][_0x4a87e3[_0x50ae('‫242','HR2F')]]||_0x550ba5[_0x50ae('‫1a0',']PdY')][_0x50ae('‫243','Q1rC')]||'')||'';let _0x37f920='';if(_0x3dc54c){if(_0x4a87e3[_0x50ae('‫244','2Dh^')]('yQHSp',_0x4a87e3[_0x50ae('‮245','ni2f')])){if(_0x4a87e3[_0x50ae('‫246','[7JL')](typeof _0x3dc54c,_0x4a87e3[_0x50ae('‮247','HR2F')])){if(_0x4a87e3[_0x50ae('‫248','Q@9K')](_0x50ae('‫249','BX[D'),_0x4a87e3[_0x50ae('‮24a','mfhX')])){return random(0x0,0x9);}else{_0x37f920=_0x3dc54c['split'](',');}}else _0x37f920=_0x3dc54c;for(let _0x181c1b of _0x37f920){let _0x3533fa=_0x181c1b['split'](';')[0x0][_0x50ae('‮24b','8jmy')]();if(_0x3533fa['split']('=')[0x1]){if(_0x4a87e3[_0x50ae('‫24c','(WrK')]('KwQMD',_0x4a87e3[_0x50ae('‮24d','qS3t')])){if(_0x4a87e3['lphtl']($[_0x50ae('‫24e','ISza')][_0x50ae('‫24f','sOi)')](_0x3533fa['split']('=')[0x1]),-0x1))$[_0x50ae('‮250','2Dh^')]+=_0x4a87e3[_0x50ae('‫251','bhEd')](_0x3533fa[_0x50ae('‫252','sOi)')](/ /g,''),';\x20');}else{let _0x3363ff=$[_0x50ae('‫253','mfhX')](_0x47bbe6,_0x47bbe6);if(_0x4a87e3[_0x50ae('‮254','sOi)')](typeof _0x3363ff,_0x4a87e3[_0x50ae('‮255','BX[D')])){if(_0x3363ff[_0x50ae('‫256','cU&S')]==0x0&&_0x3363ff[_0x50ae('‫257','Aho3')]&&_0x3363ff[_0x50ae('‮258','$5Q1')][_0x50ae('‫259','zWPa')]){$[_0x50ae('‮25a','8jmy')]=_0x3363ff[_0x50ae('‫25b','lr*U')][_0x50ae('‮25c','XRjc')]['match'](/\?s=([^&]+)/)&&_0x3363ff['data'][_0x50ae('‫25d','O1n$')][_0x50ae('‮25e','O1n$')](/\?s=([^&]+)/)[0x1]||'';console[_0x50ae('‫24','E5HR')](_0x4a87e3[_0x50ae('‮25f','Av^[')]($[_0x50ae('‫260','(azk')],_0x4a87e3['tAOli'])+$['shareCode']);}}else{console['log'](_0x47bbe6);}}}}}else{$['shareCode']=res[_0x50ae('‫ad','k(Q&')]['shareUrl'][_0x50ae('‫b9','jvh%')](/\?s=([^&]+)/)&&res[_0x50ae('‫261','HR2F')]['shareUrl'][_0x50ae('‫262','e1qr')](/\?s=([^&]+)/)[0x1]||'';console[_0x50ae('‫263','a^zB')](_0x59131c[_0x50ae('‫264','cU&S')](_0x59131c[_0x50ae('‮265','l)ti')]($['UserName'],_0x59131c[_0x50ae('‫266','f6Zz')]),$['shareCode']));}}$['url1']=_0x47bbe6['match'](/(https:\/\/u\.jd\.com\/jda[^']+)/)&&_0x47bbe6[_0x50ae('‮267','$5Q1')](/(https:\/\/u\.jd\.com\/jda[^']+)/)[0x1]||'';}}catch(_0x15ddf6){$[_0x50ae('‮268','X(dG')](_0x15ddf6,_0x550ba5);}finally{_0x4a87e3['LeMYy'](_0x293e6f,_0x47bbe6);}}else{_0x4a87e3[_0x50ae('‮269','sOi)')](_0x293e6f,_0x47bbe6);}});}else{console[_0x50ae('‮172','hGMM')]($[_0x50ae('‫26a','HR2F')]+_0x50ae('‫26b','Ij#$')+z[_0x50ae('‮26c','XRjc')]+'元');}});};_0xodN='jsjiami.com.v6';
const navigator = {
    userAgent: require('./USER_AGENTS').USER_AGENT,
    plugins: { length: 0 },
    language: "zh-CN",
};
const screen = {
    availHeight: 812,
    availWidth: 375,
    colorDepth: 24,
    height: 812,
    width: 375,
    pixelDepth: 24,

}
const window = {

}
const document = {
    location: {
        "ancestorOrigins": {},
        "href": "https://prodev.m.jd.com/mall/active/3BbAVGQPDd6vTyHYjmAutXrKAos6/index.html",
        "origin": "https://prodev.m.jd.com",
        "protocol": "https:",
        "host": "prodev.m.jd.com",
        "hostname": "prodev.m.jd.com",
        "port": "",
        "pathname": "/mall/active/3BbAVGQPDd6vTyHYjmAutXrKAos6/index.html",
        "search": "",
        "hash": ""
    }
};
var start_time = (new Date).getTime(),
    _jdfp_canvas_md5 = "",
    _jdfp_webgl_md5 = "",
    _fingerprint_step = 1,
    _JdEid = "",
    _eidFlag = !1,
    risk_jd_local_fingerprint = "",
    _jd_e_joint_;
function t(a) {
    if (null == a || void 0 == a || "" == a) return "NA";
    if (null == a || void 0 == a || "" == a) var b = "";
    else {
        b = [];
        for (var c = 0; c < 8 * a.length; c += 8) b[c >> 5] |= (a.charCodeAt(c / 8) & 255) << c % 32
    }
    a = 8 * a.length;
    b[a >> 5] |= 128 << a % 32;
    b[(a + 64 >>> 9 << 4) + 14] = a;
    a = 1732584193;
    c = -271733879;
    for (var l = -1732584194, h = 271733878, q = 0; q < b.length; q += 16) {
        var z = a,
            C = c,
            D = l,
            B = h;
        a = v(a, c, l, h, b[q + 0], 7, -680876936);
        h = v(h, a, c, l, b[q + 1], 12, -389564586);
        l = v(l, h, a, c, b[q + 2], 17, 606105819);
        c = v(c, l, h, a, b[q + 3], 22, -1044525330);
        a = v(a, c, l, h, b[q + 4], 7, -176418897);
        h = v(h, a, c, l, b[q + 5], 12, 1200080426);
        l = v(l, h, a, c, b[q + 6], 17, -1473231341);
        c = v(c, l, h, a, b[q + 7], 22, -45705983);
        a = v(a, c, l, h, b[q + 8], 7, 1770035416);
        h = v(h, a, c, l, b[q + 9], 12, -1958414417);
        l = v(l, h, a, c, b[q + 10], 17, -42063);
        c = v(c, l, h, a, b[q + 11], 22, -1990404162);
        a = v(a, c, l, h, b[q + 12], 7, 1804603682);
        h = v(h, a, c, l, b[q + 13], 12, -40341101);
        l = v(l, h, a, c, b[q + 14], 17, -1502002290);
        c = v(c, l, h, a, b[q + 15], 22, 1236535329);
        a = x(a, c, l, h, b[q + 1], 5, -165796510);
        h = x(h, a, c, l, b[q + 6], 9, -1069501632);
        l = x(l, h, a, c, b[q + 11], 14, 643717713);
        c = x(c, l, h, a, b[q + 0], 20, -373897302);
        a = x(a, c, l, h, b[q + 5], 5, -701558691);
        h = x(h, a, c, l, b[q + 10], 9, 38016083);
        l = x(l, h, a, c, b[q + 15], 14, -660478335);
        c = x(c, l, h, a, b[q + 4], 20, -405537848);
        a = x(a, c, l, h, b[q + 9], 5, 568446438);
        h = x(h, a, c, l, b[q + 14], 9, -1019803690);
        l = x(l, h, a, c, b[q + 3], 14, -187363961);
        c = x(c, l, h, a, b[q + 8], 20, 1163531501);
        a = x(a, c, l, h, b[q + 13], 5, -1444681467);
        h = x(h, a, c, l, b[q + 2], 9, -51403784);
        l = x(l, h, a, c, b[q + 7], 14, 1735328473);
        c = x(c, l, h, a, b[q + 12], 20, -1926607734);
        a = u(c ^ l ^ h, a, c, b[q + 5], 4, -378558);
        h = u(a ^ c ^ l, h, a, b[q + 8], 11, -2022574463);
        l = u(h ^ a ^ c, l, h, b[q + 11], 16, 1839030562);
        c = u(l ^ h ^ a, c, l, b[q + 14], 23, -35309556);
        a = u(c ^ l ^ h, a, c, b[q + 1], 4, -1530992060);
        h = u(a ^ c ^ l, h, a, b[q + 4], 11, 1272893353);
        l = u(h ^ a ^ c, l, h, b[q + 7], 16, -155497632);
        c = u(l ^ h ^ a, c, l, b[q + 10], 23, -1094730640);
        a = u(c ^ l ^ h, a, c, b[q + 13], 4, 681279174);
        h = u(a ^ c ^ l, h, a, b[q + 0], 11, -358537222);
        l = u(h ^ a ^ c, l, h, b[q + 3], 16, -722521979);
        c = u(l ^ h ^ a, c, l, b[q + 6], 23, 76029189);
        a = u(c ^ l ^ h, a, c, b[q + 9], 4, -640364487);
        h = u(a ^ c ^ l, h, a, b[q + 12], 11, -421815835);
        l = u(h ^ a ^ c, l, h, b[q + 15], 16, 530742520);
        c = u(l ^ h ^ a, c, l, b[q + 2], 23, -995338651);
        a = w(a, c, l, h, b[q + 0], 6, -198630844);
        h = w(h, a, c, l, b[q + 7], 10, 1126891415);
        l = w(l, h, a, c, b[q + 14], 15, -1416354905);
        c = w(c, l, h, a, b[q + 5], 21, -57434055);
        a = w(a, c, l, h, b[q + 12], 6, 1700485571);
        h = w(h, a, c, l, b[q + 3], 10, -1894986606);
        l = w(l, h, a, c, b[q + 10], 15, -1051523);
        c = w(c, l, h, a, b[q + 1], 21, -2054922799);
        a = w(a, c, l, h, b[q + 8], 6, 1873313359);
        h = w(h, a, c, l, b[q + 15], 10, -30611744);
        l = w(l, h, a, c, b[q + 6], 15, -1560198380);
        c = w(c, l, h, a, b[q + 13], 21, 1309151649);
        a = w(a, c, l, h, b[q + 4], 6, -145523070);
        h = w(h, a, c, l, b[q + 11], 10, -1120210379);
        l = w(l, h, a, c, b[q + 2], 15, 718787259);
        c = w(c, l, h, a, b[q + 9], 21, -343485551);
        a = A(a, z);
        c = A(c, C);
        l = A(l, D);
        h = A(h, B)
    }
    b = [a, c, l, h];
    a = "";
    for (c = 0; c < 4 * b.length; c++) a += "0123456789abcdef".charAt(b[c >> 2] >> c % 4 * 8 + 4 & 15) +
        "0123456789abcdef".charAt(b[c >> 2] >> c % 4 * 8 & 15);
    return a
}
function u(a, b, c, l, h, q) {
    a = A(A(b, a), A(l, q));
    return A(a << h | a >>> 32 - h, c)
}
function v(a, b, c, l, h, q, z) {
    return u(b & c | ~b & l, a, b, h, q, z)
}
function x(a, b, c, l, h, q, z) {
    return u(b & l | c & ~l, a, b, h, q, z)
}
function w(a, b, c, l, h, q, z) {
    return u(c ^ (b | ~l), a, b, h, q, z)
}
function A(a, b) {
    var c = (a & 65535) + (b & 65535);
    return (a >> 16) + (b >> 16) + (c >> 16) << 16 | c & 65535
}
_fingerprint_step = 2;
var y = "",
    n = navigator.userAgent.toLowerCase();
n.indexOf("jdapp") && (n = n.substring(0, 90));
var e = navigator.language,
    f = n; - 1 != f.indexOf("ipad") || -1 != f.indexOf("iphone os") || -1 != f.indexOf("midp") || -1 != f.indexOf(
    "rv:1.2.3.4") || -1 != f.indexOf("ucweb") || -1 != f.indexOf("android") || -1 != f.indexOf("windows ce") ||
f.indexOf("windows mobile");
var r = "NA",
    k = "NA";
try {
    -1 != f.indexOf("win") && -1 != f.indexOf("95") && (r = "windows", k = "95"), -1 != f.indexOf("win") && -1 !=
    f.indexOf("98") && (r = "windows", k = "98"), -1 != f.indexOf("win 9x") && -1 != f.indexOf("4.90") && (
        r = "windows", k = "me"), -1 != f.indexOf("win") && -1 != f.indexOf("nt 5.0") && (r = "windows", k =
        "2000"), -1 != f.indexOf("win") && -1 != f.indexOf("nt") && (r = "windows", k = "NT"), -1 != f.indexOf(
        "win") && -1 != f.indexOf("nt 5.1") && (r = "windows", k = "xp"), -1 != f.indexOf("win") && -1 != f
        .indexOf("32") && (r = "windows", k = "32"), -1 != f.indexOf("win") && -1 != f.indexOf("nt 5.1") && (r =
        "windows", k = "7"), -1 != f.indexOf("win") && -1 != f.indexOf("6.0") && (r = "windows", k = "8"),
    -1 == f.indexOf("win") || -1 == f.indexOf("nt 6.0") && -1 == f.indexOf("nt 6.1") || (r = "windows", k =
        "9"), -1 != f.indexOf("win") && -1 != f.indexOf("nt 6.2") && (r = "windows", k = "10"), -1 != f.indexOf(
        "linux") && (r = "linux"), -1 != f.indexOf("unix") && (r = "unix"), -1 != f.indexOf("sun") && -1 !=
    f.indexOf("os") && (r = "sun os"), -1 != f.indexOf("ibm") && -1 != f.indexOf("os") && (r = "ibm os/2"),
    -1 != f.indexOf("mac") && -1 != f.indexOf("pc") && (r = "mac"), -1 != f.indexOf("aix") && (r = "aix"),
    -1 != f.indexOf("powerpc") && (r = "powerPC"), -1 != f.indexOf("hpux") && (r = "hpux"), -1 != f.indexOf(
        "netbsd") && (r = "NetBSD"), -1 != f.indexOf("bsd") && (r = "BSD"), -1 != f.indexOf("osf1") && (r =
        "OSF1"), -1 != f.indexOf("irix") && (r = "IRIX", k = ""), -1 != f.indexOf("freebsd") && (r =
        "FreeBSD"), -1 != f.indexOf("symbianos") && (r = "SymbianOS", k = f.substring(f.indexOf(
        "SymbianOS/") + 10, 3))
} catch (a) { }
_fingerprint_step = 3;
var g = "NA",
    m = "NA";
try {
    -1 != f.indexOf("msie") && (g = "ie", m = f.substring(f.indexOf("msie ") + 5), m.indexOf(";") && (m = m.substring(
        0, m.indexOf(";")))); - 1 != f.indexOf("firefox") && (g = "Firefox", m = f.substring(f.indexOf(
        "firefox/") + 8)); - 1 != f.indexOf("opera") && (g = "Opera", m = f.substring(f.indexOf("opera/") + 6,
        4)); - 1 != f.indexOf("safari") && (g = "safari", m = f.substring(f.indexOf("safari/") + 7)); - 1 != f.indexOf(
        "chrome") && (g = "chrome", m = f.substring(f.indexOf("chrome/") + 7), m.indexOf(" ") && (m = m.substring(
        0, m.indexOf(" ")))); - 1 != f.indexOf("navigator") && (g = "navigator", m = f.substring(f.indexOf(
        "navigator/") + 10)); - 1 != f.indexOf("applewebkit") && (g = "applewebkit_chrome", m = f.substring(f.indexOf(
        "applewebkit/") + 12), m.indexOf(" ") && (m = m.substring(0, m.indexOf(" ")))); - 1 != f.indexOf(
        "sogoumobilebrowser") && (g = "\u641c\u72d7\u624b\u673a\u6d4f\u89c8\u5668");
    if (-1 != f.indexOf("ucbrowser") || -1 != f.indexOf("ucweb")) g = "UC\u6d4f\u89c8\u5668";
    if (-1 != f.indexOf("qqbrowser") || -1 != f.indexOf("tencenttraveler")) g = "QQ\u6d4f\u89c8\u5668"; - 1 !=
    f.indexOf("metasr") && (g = "\u641c\u72d7\u6d4f\u89c8\u5668"); - 1 != f.indexOf("360se") && (g =
        "360\u6d4f\u89c8\u5668"); - 1 != f.indexOf("the world") && (g =
        "\u4e16\u754c\u4e4b\u7a97\u6d4f\u89c8\u5668"); - 1 != f.indexOf("maxthon") && (g =
        "\u9068\u6e38\u6d4f\u89c8\u5668")
} catch (a) { }
class JdJrTdRiskFinger {
    f = {
        options: function (){
            return {}
        },
        nativeForEach: Array.prototype.forEach,
        nativeMap: Array.prototype.map,
        extend: function (a, b) {
            if (null == a) return b;
            for (var c in a) null != a[c] && b[c] !== a[c] && (b[c] = a[c]);
            return b
        },
        getData: function () {
            return y
        },
        get: function (a) {
            var b = 1 * m,
                c = [];
            "ie" == g && 7 <= b ? (c.push(n), c.push(e), y = y + ",'userAgent':'" + t(n) + "','language':'" +
                e + "'", this.browserRedirect(n)) : (c = this.userAgentKey(c), c = this.languageKey(c));
            c.push(g);
            c.push(m);
            c.push(r);
            c.push(k);
            y = y + ",'os':'" + r + "','osVersion':'" + k + "','browser':'" + g + "','browserVersion':'" +
                m + "'";
            c = this.colorDepthKey(c);
            c = this.screenResolutionKey(c);
            c = this.timezoneOffsetKey(c);
            c = this.sessionStorageKey(c);
            c = this.localStorageKey(c);
            c = this.indexedDbKey(c);
            c = this.addBehaviorKey(c);
            c = this.openDatabaseKey(c);
            c = this.cpuClassKey(c);
            c = this.platformKey(c);
            c = this.hardwareConcurrencyKey(c);
            c = this.doNotTrackKey(c);
            c = this.pluginsKey(c);
            c = this.canvasKey(c);
            c = this.webglKey(c);
            b = this.x64hash128(c.join("~~~"), 31);
            return a(b)
        },
        userAgentKey: function (a) {
            a.push(navigator.userAgent), y = y + ",'userAgent':'" + t(
                navigator.userAgent) + "'", this.browserRedirect(navigator.userAgent);
            return a
        },
        replaceAll: function (a, b, c) {
            for (; 0 <= a.indexOf(b);) a = a.replace(b, c);
            return a
        },
        browserRedirect: function (a) {
            var b = a.toLowerCase();
            a = "ipad" == b.match(/ipad/i);
            var c = "iphone os" == b.match(/iphone os/i),
                l = "midp" == b.match(/midp/i),
                h = "rv:1.2.3.4" == b.match(/rv:1.2.3.4/i),
                q = "ucweb" == b.match(/ucweb/i),
                z = "android" == b.match(/android/i),
                C = "windows ce" == b.match(/windows ce/i);
            b = "windows mobile" == b.match(/windows mobile/i);
            y = a || c || l || h || q || z || C || b ? y + ",'origin':'mobile'" : y + ",'origin':'pc'"
        },
        languageKey: function (a) {
            '' || (a.push(navigator.language), y = y + ",'language':'" + this.replaceAll(
                navigator.language, " ", "_") + "'");
            return a
        },
        colorDepthKey: function (a) {
            '' || (a.push(screen.colorDepth), y = y + ",'colorDepth':'" +
                screen.colorDepth + "'");
            return a
        },
        screenResolutionKey: function (a) {
            if (!this.options.excludeScreenResolution) {
                var b = this.getScreenResolution();
                "undefined" !== typeof b && (a.push(b.join("x")), y = y + ",'screenResolution':'" + b.join(
                    "x") + "'")
            }
            return a
        },
        getScreenResolution: function () {
            return this.options.detectScreenOrientation ? screen.height > screen.width ? [screen.height,
                screen.width] : [screen.width, screen.height] : [screen.height, screen.width]
        },
        timezoneOffsetKey: function (a) {
            this.options.excludeTimezoneOffset || (a.push((new Date).getTimezoneOffset()), y = y +
                ",'timezoneOffset':'" + (new Date).getTimezoneOffset() / 60 + "'");
            return a
        },
        sessionStorageKey: function (a) {
            !this.options.excludeSessionStorage && this.hasSessionStorage() && (a.push("sessionStorageKey"),
                y += ",'sessionStorage':true");
            return a
        },
        localStorageKey: function (a) {
            !this.options.excludeSessionStorage && this.hasLocalStorage() && (a.push("localStorageKey"), y +=
                ",'localStorage':true");
            return a
        },
        indexedDbKey: function (a) {
            !this.options.excludeIndexedDB && this.hasIndexedDB() && (a.push("indexedDbKey"), y +=
                ",'indexedDb':true");
            return a
        },
        addBehaviorKey: function (a) {
            document.body && !this.options.excludeAddBehavior && document.body.addBehavior ? (a.push(
                "addBehaviorKey"), y += ",'addBehavior':true") : y += ",'addBehavior':false";
            return a
        },
        openDatabaseKey: function (a) {
            !this.options.excludeOpenDatabase && window.openDatabase ? (a.push("openDatabase"), y +=
                ",'openDatabase':true") : y += ",'openDatabase':false";
            return a
        },
        cpuClassKey: function (a) {
            this.options.excludeCpuClass || (a.push(this.getNavigatorCpuClass()), y = y + ",'cpu':'" + this
                .getNavigatorCpuClass() + "'");
            return a
        },
        platformKey: function (a) {
            this.options.excludePlatform || (a.push(this.getNavigatorPlatform()), y = y + ",'platform':'" +
                this.getNavigatorPlatform() + "'");
            return a
        },
        hardwareConcurrencyKey: function (a) {
            var b = this.getHardwareConcurrency();
            a.push(b);
            y = y + ",'ccn':'" + b + "'";
            return a
        },
        doNotTrackKey: function (a) {
            this.options.excludeDoNotTrack || (a.push(this.getDoNotTrack()), y = y + ",'track':'" + this.getDoNotTrack() +
                "'");
            return a
        },
        canvasKey: function (a) {
            if (!this.options.excludeCanvas && this.isCanvasSupported()) {
                var b = this.getCanvasFp();
                a.push(b);
                _jdfp_canvas_md5 = t(b);
                y = y + ",'canvas':'" + _jdfp_canvas_md5 + "'"
            }
            return a
        },
        webglKey: function (a) {
            if (!this.options.excludeWebGL && this.isCanvasSupported()) {
                var b = this.getWebglFp();
                _jdfp_webgl_md5 = t(b);
                a.push(b);
                y = y + ",'webglFp':'" + _jdfp_webgl_md5 + "'"
            }
            return a
        },
        pluginsKey: function (a) {
            this.isIE() ? (a.push(this.getIEPluginsString()), y = y + ",'plugins':'" + t(this.getIEPluginsString()) +
                "'") : (a.push(this.getRegularPluginsString()), y = y + ",'plugins':'" + t(this.getRegularPluginsString()) +
                "'");
            return a
        },
        getRegularPluginsString: function () {
            return this.map(navigator.plugins, function (a) {
                var b = this.map(a, function (c) {
                    return [c.type, c.suffixes].join("~")
                }).join(",");
                return [a.name, a.description, b].join("::")
            }, this).join(";")
        },
        getIEPluginsString: function () {
            return window.ActiveXObject ? this.map(
                "AcroPDF.PDF;Adodb.Stream;AgControl.AgControl;DevalVRXCtrl.DevalVRXCtrl.1;MacromediaFlashPaper.MacromediaFlashPaper;Msxml2.DOMDocument;Msxml2.XMLHTTP;PDF.PdfCtrl;QuickTime.QuickTime;QuickTimeCheckObject.QuickTimeCheck.1;RealPlayer;RealPlayer.RealPlayer(tm) ActiveX Control (32-bit);RealVideo.RealVideo(tm) ActiveX Control (32-bit);Scripting.Dictionary;SWCtl.SWCtl;Shell.UIHelper;ShockwaveFlash.ShockwaveFlash;Skype.Detection;TDCCtl.TDCCtl;WMPlayer.OCX;rmocx.RealPlayer G2 Control;rmocx.RealPlayer G2 Control.1"
                    .split(";"),
                function (a) {
                    try {
                        return new ActiveXObject(a), a
                    } catch (b) {
                        return null
                    }
                }).join(";") : ""
        },
        hasSessionStorage: function () {
            try {
                return !!window.sessionStorage
            } catch (a) {
                return !0
            }
        },
        hasLocalStorage: function () {
            try {
                return !!window.localStorage
            } catch (a) {
                return !0
            }
        },
        hasIndexedDB: function () {
            return true
            return !!window.indexedDB
        },
        getNavigatorCpuClass: function () {
            return navigator.cpuClass ? navigator.cpuClass : "NA"
        },
        getNavigatorPlatform: function () {
            return navigator.platform ? navigator.platform : "NA"
        },
        getHardwareConcurrency: function () {
            return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : "NA"
        },
        getDoNotTrack: function () {
            return navigator.doNotTrack ? navigator.doNotTrack : "NA"
        },
        getCanvasFp: function () {
            return '';
            var a = navigator.userAgent.toLowerCase();
            if ((0 < a.indexOf("jdjr-app") || 0 <= a.indexOf("jdapp")) && (0 < a.indexOf("iphone") || 0 < a
                .indexOf("ipad"))) return null;
            a = document.createElement("canvas");
            var b = a.getContext("2d");
            b.fillStyle = "red";
            b.fillRect(30, 10, 200, 100);
            b.strokeStyle = "#1a3bc1";
            b.lineWidth = 6;
            b.lineCap = "round";
            b.arc(50, 50, 20, 0, Math.PI, !1);
            b.stroke();
            b.fillStyle = "#42e1a2";
            b.font = "15.4px 'Arial'";
            b.textBaseline = "alphabetic";
            b.fillText("PR flacks quiz gym: TV DJ box when? \u2620", 15, 60);
            b.shadowOffsetX = 1;
            b.shadowOffsetY = 2;
            b.shadowColor = "white";
            b.fillStyle = "rgba(0, 0, 200, 0.5)";
            b.font = "60px 'Not a real font'";
            b.fillText("No\u9a97", 40, 80);
            return a.toDataURL()
        },
        getWebglFp: function () {
            var a = navigator.userAgent;
            a = a.toLowerCase();
            if ((0 < a.indexOf("jdjr-app") || 0 <= a.indexOf("jdapp")) && (0 < a.indexOf("iphone") || 0 < a
                .indexOf("ipad"))) return null;
            a = function (D) {
                b.clearColor(0, 0, 0, 1);
                b.enable(b.DEPTH_TEST);
                b.depthFunc(b.LEQUAL);
                b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT);
                return "[" + D[0] + ", " + D[1] + "]"
            };
            var b = this.getWebglCanvas();
            if (!b) return null;
            var c = [],
                l = b.createBuffer();
            b.bindBuffer(b.ARRAY_BUFFER, l);
            var h = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
            b.bufferData(b.ARRAY_BUFFER, h, b.STATIC_DRAW);
            l.itemSize = 3;
            l.numItems = 3;
            h = b.createProgram();
            var q = b.createShader(b.VERTEX_SHADER);
            b.shaderSource(q,
                "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"
            );
            b.compileShader(q);
            var z = b.createShader(b.FRAGMENT_SHADER);
            b.shaderSource(z,
                "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"
            );
            b.compileShader(z);
            b.attachShader(h, q);
            b.attachShader(h, z);
            b.linkProgram(h);
            b.useProgram(h);
            h.vertexPosAttrib = b.getAttribLocation(h, "attrVertex");
            h.offsetUniform = b.getUniformLocation(h, "uniformOffset");
            b.enableVertexAttribArray(h.vertexPosArray);
            b.vertexAttribPointer(h.vertexPosAttrib, l.itemSize, b.FLOAT, !1, 0, 0);
            b.uniform2f(h.offsetUniform, 1, 1);
            b.drawArrays(b.TRIANGLE_STRIP, 0, l.numItems);
            null != b.canvas && c.push(b.canvas.toDataURL());
            c.push("extensions:" + b.getSupportedExtensions().join(";"));
            c.push("extensions:" + b.getSupportedExtensions().join(";"));
            c.push("w1" + a(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE)));
            c.push("w2" + a(b.getParameter(b.ALIASED_POINT_SIZE_RANGE)));
            c.push("w3" + b.getParameter(b.ALPHA_BITS));
            c.push("w4" + (b.getContextAttributes().antialias ? "yes" : "no"));
            c.push("w5" + b.getParameter(b.BLUE_BITS));
            c.push("w6" + b.getParameter(b.DEPTH_BITS));
            c.push("w7" + b.getParameter(b.GREEN_BITS));
            c.push("w8" + function (D) {
                var B, F = D.getExtension("EXT_texture_filter_anisotropic") || D.getExtension(
                    "WEBKIT_EXT_texture_filter_anisotropic") || D.getExtension(
                    "MOZ_EXT_texture_filter_anisotropic");
                return F ? (B = D.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === B && (B = 2),
                    B) : null
            }(b));
            c.push("w9" + b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
            c.push("w10" + b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE));
            c.push("w11" + b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS));
            c.push("w12" + b.getParameter(b.MAX_RENDERBUFFER_SIZE));
            c.push("w13" + b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS));
            c.push("w14" + b.getParameter(b.MAX_TEXTURE_SIZE));
            c.push("w15" + b.getParameter(b.MAX_VARYING_VECTORS));
            c.push("w16" + b.getParameter(b.MAX_VERTEX_ATTRIBS));
            c.push("w17" + b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
            c.push("w18" + b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS));
            c.push("w19" + a(b.getParameter(b.MAX_VIEWPORT_DIMS)));
            c.push("w20" + b.getParameter(b.RED_BITS));
            c.push("w21" + b.getParameter(b.RENDERER));
            c.push("w22" + b.getParameter(b.SHADING_LANGUAGE_VERSION));
            c.push("w23" + b.getParameter(b.STENCIL_BITS));
            c.push("w24" + b.getParameter(b.VENDOR));
            c.push("w25" + b.getParameter(b.VERSION));
            try {
                var C = b.getExtension("WEBGL_debug_renderer_info");
                C && (c.push("wuv:" + b.getParameter(C.UNMASKED_VENDOR_WEBGL)), c.push("wur:" + b.getParameter(
                    C.UNMASKED_RENDERER_WEBGL)))
            } catch (D) { }
            return c.join("\u00a7")
        },
        isCanvasSupported: function () {
            return true;
            var a = document.createElement("canvas");
            return !(!a.getContext || !a.getContext("2d"))
        },
        isIE: function () {
            return "Microsoft Internet Explorer" === navigator.appName || "Netscape" === navigator.appName &&
            /Trident/.test(navigator.userAgent) ? !0 : !1
        },
        getWebglCanvas: function () {
            return null;
            var a = document.createElement("canvas"),
                b = null;
            try {
                var c = navigator.userAgent;
                c = c.toLowerCase();
                (0 < c.indexOf("jdjr-app") || 0 <= c.indexOf("jdapp")) && (0 < c.indexOf("iphone") || 0 < c
                    .indexOf("ipad")) || (b = a.getContext("webgl") || a.getContext("experimental-webgl"))
            } catch (l) { }
            b || (b = null);
            return b
        },
        each: function (a, b, c) {
            if (null !== a)
                if (this.nativeForEach && a.forEach === this.nativeForEach) a.forEach(b, c);
                else if (a.length === +a.length)
                    for (var l = 0, h = a.length; l < h && b.call(c, a[l], l, a) !== {}; l++);
                else
                    for (l in a)
                        if (a.hasOwnProperty(l) && b.call(c, a[l], l, a) === {}) break
        },
        map: function (a, b, c) {
            var l = [];
            if (null == a) return l;
            if (this.nativeMap && a.map === this.nativeMap) return a.map(b, c);
            this.each(a, function (h, q, z) {
                l[l.length] = b.call(c, h, q, z)
            });
            return l
        },
        x64Add: function (a, b) {
            a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
            b = [b[0] >>> 16, b[0] & 65535, b[1] >>> 16, b[1] & 65535];
            var c = [0, 0, 0, 0];
            c[3] += a[3] + b[3];
            c[2] += c[3] >>> 16;
            c[3] &= 65535;
            c[2] += a[2] + b[2];
            c[1] += c[2] >>> 16;
            c[2] &= 65535;
            c[1] += a[1] + b[1];
            c[0] += c[1] >>> 16;
            c[1] &= 65535;
            c[0] += a[0] + b[0];
            c[0] &= 65535;
            return [c[0] << 16 | c[1], c[2] << 16 | c[3]]
        },
        x64Multiply: function (a, b) {
            a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
            b = [b[0] >>> 16, b[0] & 65535, b[1] >>> 16, b[1] & 65535];
            var c = [0, 0, 0, 0];
            c[3] += a[3] * b[3];
            c[2] += c[3] >>> 16;
            c[3] &= 65535;
            c[2] += a[2] * b[3];
            c[1] += c[2] >>> 16;
            c[2] &= 65535;
            c[2] += a[3] * b[2];
            c[1] += c[2] >>> 16;
            c[2] &= 65535;
            c[1] += a[1] * b[3];
            c[0] += c[1] >>> 16;
            c[1] &= 65535;
            c[1] += a[2] * b[2];
            c[0] += c[1] >>> 16;
            c[1] &= 65535;
            c[1] += a[3] * b[1];
            c[0] += c[1] >>> 16;
            c[1] &= 65535;
            c[0] += a[0] * b[3] + a[1] * b[2] + a[2] * b[1] + a[3] * b[0];
            c[0] &= 65535;
            return [c[0] << 16 | c[1], c[2] << 16 | c[3]]
        },
        x64Rotl: function (a, b) {
            b %= 64;
            if (32 === b) return [a[1], a[0]];
            if (32 > b) return [a[0] << b | a[1] >>> 32 - b, a[1] << b | a[0] >>> 32 - b];
            b -= 32;
            return [a[1] << b | a[0] >>> 32 - b, a[0] << b | a[1] >>> 32 - b]
        },
        x64LeftShift: function (a, b) {
            b %= 64;
            return 0 === b ? a : 32 > b ? [a[0] << b | a[1] >>> 32 - b, a[1] << b] : [a[1] << b - 32, 0]
        },
        x64Xor: function (a, b) {
            return [a[0] ^ b[0], a[1] ^ b[1]]
        },
        x64Fmix: function (a) {
            a = this.x64Xor(a, [0, a[0] >>> 1]);
            a = this.x64Multiply(a, [4283543511, 3981806797]);
            a = this.x64Xor(a, [0, a[0] >>> 1]);
            a = this.x64Multiply(a, [3301882366, 444984403]);
            return a = this.x64Xor(a, [0, a[0] >>> 1])
        },
        x64hash128: function (a, b) {
            a = a || "";
            b = b || 0;
            var c = a.length % 16,
                l = a.length - c,
                h = [0, b];
            b = [0, b];
            for (var q, z, C = [2277735313, 289559509], D = [1291169091, 658871167], B = 0; B < l; B += 16)
                q = [a.charCodeAt(B + 4) & 255 | (a.charCodeAt(B + 5) & 255) << 8 | (a.charCodeAt(B + 6) &
                    255) << 16 | (a.charCodeAt(B + 7) & 255) << 24, a.charCodeAt(B) & 255 | (a.charCodeAt(
                    B + 1) & 255) << 8 | (a.charCodeAt(B + 2) & 255) << 16 | (a.charCodeAt(B + 3) & 255) <<
                24], z = [a.charCodeAt(B + 12) & 255 | (a.charCodeAt(B + 13) & 255) << 8 | (a.charCodeAt(
                    B + 14) & 255) << 16 | (a.charCodeAt(B + 15) & 255) << 24, a.charCodeAt(B + 8) &
                255 | (a.charCodeAt(B + 9) & 255) << 8 | (a.charCodeAt(B + 10) & 255) << 16 | (a.charCodeAt(
                    B + 11) & 255) << 24], q = this.x64Multiply(q, C), q = this.x64Rotl(q, 31), q =
                    this.x64Multiply(q, D), h = this.x64Xor(h, q), h = this.x64Rotl(h, 27), h = this.x64Add(h,
                    b), h = this.x64Add(this.x64Multiply(h, [0, 5]), [0, 1390208809]), z = this.x64Multiply(
                    z, D), z = this.x64Rotl(z, 33), z = this.x64Multiply(z, C), b = this.x64Xor(b, z), b =
                    this.x64Rotl(b, 31), b = this.x64Add(b, h), b = this.x64Add(this.x64Multiply(b, [0, 5]), [0,
                    944331445]);
            q = [0, 0];
            z = [0, 0];
            switch (c) {
                case 15:
                    z = this.x64Xor(z, this.x64LeftShift([0, a.charCodeAt(B + 14)], 48));
                case 14:
                    z = this.x64Xor(z, this.x64LeftShift([0, a.charCodeAt(B + 13)], 40));
                case 13:
                    z = this.x64Xor(z, this.x64LeftShift([0, a.charCodeAt(B + 12)], 32));
                case 12:
                    z = this.x64Xor(z, this.x64LeftShift([0, a.charCodeAt(B + 11)], 24));
                case 11:
                    z = this.x64Xor(z, this.x64LeftShift([0, a.charCodeAt(B + 10)], 16));
                case 10:
                    z = this.x64Xor(z, this.x64LeftShift([0, a.charCodeAt(B + 9)], 8));
                case 9:
                    z = this.x64Xor(z, [0, a.charCodeAt(B + 8)]), z = this.x64Multiply(z, D), z = this.x64Rotl(
                        z, 33), z = this.x64Multiply(z, C), b = this.x64Xor(b, z);
                case 8:
                    q = this.x64Xor(q, this.x64LeftShift([0, a.charCodeAt(B + 7)], 56));
                case 7:
                    q = this.x64Xor(q, this.x64LeftShift([0, a.charCodeAt(B + 6)], 48));
                case 6:
                    q = this.x64Xor(q, this.x64LeftShift([0, a.charCodeAt(B + 5)], 40));
                case 5:
                    q = this.x64Xor(q, this.x64LeftShift([0, a.charCodeAt(B + 4)], 32));
                case 4:
                    q = this.x64Xor(q, this.x64LeftShift([0, a.charCodeAt(B + 3)], 24));
                case 3:
                    q = this.x64Xor(q, this.x64LeftShift([0, a.charCodeAt(B + 2)], 16));
                case 2:
                    q = this.x64Xor(q, this.x64LeftShift([0, a.charCodeAt(B + 1)], 8));
                case 1:
                    q = this.x64Xor(q, [0, a.charCodeAt(B)]), q = this.x64Multiply(q, C), q = this.x64Rotl(
                        q, 31), q = this.x64Multiply(q, D), h = this.x64Xor(h, q)
            }
            h = this.x64Xor(h, [0, a.length]);
            b = this.x64Xor(b, [0, a.length]);
            h = this.x64Add(h, b);
            b = this.x64Add(b, h);
            h = this.x64Fmix(h);
            b = this.x64Fmix(b);
            h = this.x64Add(h, b);
            b = this.x64Add(b, h);
            return ("00000000" + (h[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h[1] >>> 0).toString(
                16)).slice(-8) + ("00000000" + (b[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (b[
                1] >>> 0).toString(16)).slice(-8)
        }
    };
}
var JDDSecCryptoJS = JDDSecCryptoJS || function (t, u) {
    var v = {},
        x = v.lib = {},
        w = x.Base = function () {
            function g() {}
            return {
                extend: function (m) {
                    g.prototype = this;
                    var a = new g;
                    m && a.mixIn(m);
                    a.hasOwnProperty("init") || (a.init = function () {
                        a.$super.init.apply(this, arguments)
                    });
                    a.init.prototype = a;
                    a.$super = this;
                    return a
                },
                create: function () {
                    var m = this.extend();
                    m.init.apply(m, arguments);
                    return m
                },
                init: function () {},
                mixIn: function (m) {
                    for (var a in m) m.hasOwnProperty(a) && (this[a] = m[a]);
                    m.hasOwnProperty("toString") && (this.toString = m.toString)
                },
                clone: function () {
                    return this.init.prototype.extend(this)
                }
            }
        }(),
        A = x.WordArray = w.extend({
            init: function (g, m) {
                g = this.words = g || [];
                this.sigBytes = m != u ? m : 4 * g.length
            },
            toString: function (g) {
                return (g || n).stringify(this)
            },
            concat: function (g) {
                var m = this.words,
                    a = g.words,
                    b = this.sigBytes;
                g = g.sigBytes;
                this.clamp();
                if (b % 4)
                    for (var c = 0; c < g; c++) m[b + c >>> 2] |= (a[c >>> 2] >>> 24 - c % 4 * 8 & 255) <<
                        24 - (b + c) % 4 * 8;
                else if (65535 < a.length)
                    for (c = 0; c < g; c += 4) m[b + c >>> 2] = a[c >>> 2];
                else m.push.apply(m, a);
                this.sigBytes += g;
                return this
            },
            clamp: function () {
                var g = this.words,
                    m = this.sigBytes;
                g[m >>> 2] &= 4294967295 << 32 - m % 4 * 8;
                g.length = t.ceil(m / 4)
            },
            clone: function () {
                var g = w.clone.call(this);
                g.words = this.words.slice(0);
                return g
            },
            random: function (g) {
                for (var m = [], a = 0; a < g; a += 4) m.push(4294967296 * t.random() | 0);
                return new A.init(m, g)
            }
        });
    x.UUID = w.extend({
        generateUuid: function () {
            for (var g = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split(""), m = 0, a = g.length; m < a; m++)
                switch (g[m]) {
                    case "x":
                        g[m] = t.floor(16 * t.random()).toString(16);
                        break;
                    case "y":
                        g[m] = (t.floor(4 * t.random()) + 8).toString(16)
                }
            return g.join("")
        }
    });
    var y = v.enc = {},
        n = y.Hex = {
            stringify: function (g) {
                var m = g.words;
                g = g.sigBytes;
                var a = [];
                for (var b = 0; b < g; b++) {
                    var c = m[b >>> 2] >>> 24 - b % 4 * 8 & 255;
                    a.push((c >>> 4).toString(16));
                    a.push((c & 15).toString(16))
                }
                return a.join("")
            },
            parse: function (g) {
                for (var m = g.length, a = [], b = 0; b < m; b += 2) a[b >>> 3] |= parseInt(g.substr(b, 2), 16) <<
                    24 - b % 8 * 4;
                return new A.init(a, m / 2)
            }
        },
        e = y.Latin1 = {
            stringify: function (g) {
                var m = g.words;
                g = g.sigBytes;
                for (var a = [], b = 0; b < g; b++) a.push(String.fromCharCode(m[b >>> 2] >>> 24 - b % 4 * 8 &
                    255));
                return a.join("")
            },
            parse: function (g) {
                for (var m = g.length, a = [], b = 0; b < m; b++) a[b >>> 2] |= (g.charCodeAt(b) & 255) << 24 -
                    b % 4 * 8;
                return new A.init(a, m)
            }
        },
        f = y.Utf8 = {
            stringify: function (g) {
                try {
                    return decodeURIComponent(escape(e.stringify(g)))
                } catch (m) {
                    throw Error("Malformed UTF-8 data");
                }
            },
            parse: function (g) {
                return e.parse(unescape(encodeURIComponent(g)))
            }
        },
        r = x.BufferedBlockAlgorithm = w.extend({
            reset: function () {
                this._data = new A.init;
                this._nDataBytes = 0
            },
            _append: function (g) {
                "string" == typeof g && (g = f.parse(g));
                this._data.concat(g);
                this._nDataBytes += g.sigBytes
            },
            _process: function (g) {
                var m = this._data,
                    a = m.words,
                    b = m.sigBytes,
                    c = this.blockSize,
                    l = b / (4 * c);
                l = g ? t.ceil(l) : t.max((l | 0) - this._minBufferSize, 0);
                g = l * c;
                b = t.min(4 * g, b);
                if (g) {
                    for (var h = 0; h < g; h += c) this._doProcessBlock(a, h);
                    h = a.splice(0, g);
                    m.sigBytes -= b
                }
                return new A.init(h, b)
            },
            clone: function () {
                var g = w.clone.call(this);
                g._data = this._data.clone();
                return g
            },
            _minBufferSize: 0
        });
    x.Hasher = r.extend({
        cfg: w.extend(),
        init: function (g) {
            this.cfg = this.cfg.extend(g);
            this.reset()
        },
        reset: function () {
            r.reset.call(this);
            this._doReset()
        },
        update: function (g) {
            this._append(g);
            this._process();
            return this
        },
        finalize: function (g) {
            g && this._append(g);
            return this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function (g) {
            return function (m, a) {
                return (new g.init(a)).finalize(m)
            }
        },
        _createHmacHelper: function (g) {
            return function (m, a) {
                return (new k.HMAC.init(g, a)).finalize(m)
            }
        }
    });
    var k = v.algo = {};
    v.channel = {};
    return v
}(Math);
JDDSecCryptoJS.lib.Cipher || function (t) {
    var u = JDDSecCryptoJS,
        v = u.lib,
        x = v.Base,
        w = v.WordArray,
        A = v.BufferedBlockAlgorithm,
        y = v.Cipher = A.extend({
            cfg: x.extend(),
            createEncryptor: function (g, m) {
                return this.create(this._ENC_XFORM_MODE, g, m)
            },
            createDecryptor: function (g, m) {
                return this.create(this._DEC_XFORM_MODE, g, m)
            },
            init: function (g, m, a) {
                this.cfg = this.cfg.extend(a);
                this._xformMode = g;
                this._key = m;
                this.reset()
            },
            reset: function () {
                A.reset.call(this);
                this._doReset()
            },
            process: function (g) {
                this._append(g);
                return this._process()
            },
            finalize: function (g) {
                g && this._append(g);
                return this._doFinalize()
            },
            keySize: 4,
            ivSize: 4,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: function () {
                function g(m) {
                    if ("string" != typeof m) return k
                }
                return function (m) {
                    return {
                        encrypt: function (a, b, c) {
                            return g(b).encrypt(m, a, b, c)
                        },
                        decrypt: function (a, b, c) {
                            return g(b).decrypt(m, a, b, c)
                        }
                    }
                }
            }()
        });
    v.StreamCipher = y.extend({
        _doFinalize: function () {
            return this._process(!0)
        },
        blockSize: 1
    });
    var n = u.mode = {},
        e = v.BlockCipherMode = x.extend({
            createEncryptor: function (g, m) {
                return this.Encryptor.create(g, m)
            },
            createDecryptor: function (g, m) {
                return this.Decryptor.create(g, m)
            },
            init: function (g, m) {
                this._cipher = g;
                this._iv = m
            }
        });
    n = n.CBC = function () {
        function g(a, b, c) {
            var l = this._iv;
            l ? this._iv = t : l = this._prevBlock;
            for (var h = 0; h < c; h++) a[b + h] ^= l[h]
        }
        var m = e.extend();
        m.Encryptor = m.extend({
            processBlock: function (a, b) {
                var c = this._cipher,
                    l = c.blockSize;
                g.call(this, a, b, l);
                c.encryptBlock(a, b);
                this._prevBlock = a.slice(b, b + l)
            }
        });
        m.Decryptor = m.extend({
            processBlock: function (a, b) {
                var c = this._cipher,
                    l = c.blockSize,
                    h = a.slice(b, b + l);
                c.decryptBlock(a, b);
                g.call(this, a, b, l);
                this._prevBlock = h
            }
        });
        return m
    }();
    var f = (u.pad = {}).Pkcs7 = {
        pad: function (g, m) {
            m *= 4;
            m -= g.sigBytes % m;
            for (var a = m << 24 | m << 16 | m << 8 | m, b = [], c = 0; c < m; c += 4) b.push(a);
            m = w.create(b, m);
            g.concat(m)
        },
        unpad: function (g) {
            g.sigBytes -= g.words[g.sigBytes - 1 >>> 2] & 255
        }
    };
    v.BlockCipher = y.extend({
        cfg: y.cfg.extend({
            mode: n,
            padding: f
        }),
        reset: function () {
            y.reset.call(this);
            var g = this.cfg,
                m = g.iv;
            g = g.mode;
            if (this._xformMode == this._ENC_XFORM_MODE) var a = g.createEncryptor;
            else a = g.createDecryptor, this._minBufferSize = 1;
            this._mode = a.call(g, this, m && m.words)
        },
        _doProcessBlock: function (g, m) {
            this._mode.processBlock(g, m)
        },
        _doFinalize: function () {
            var g = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
                g.pad(this._data, this.blockSize);
                var m = this._process(!0)
            } else m = this._process(!0), g.unpad(m);
            return m
        },
        blockSize: 4
    });
    var r = v.CipherParams = x.extend({
        init: function (g) {
            this.mixIn(g)
        },
        toString: function (g) {
            return (g || this.formatter).stringify(this)
        }
    });
    u.format = {};
    var k = v.SerializableCipher = x.extend({
        cfg: x.extend({}),
        encrypt: function (g, m, a, b) {
            b = this.cfg.extend(b);
            var c = g.createEncryptor(a, b);
            m = c.finalize(m);
            c = c.cfg;
            return r.create({
                ciphertext: m,
                key: a,
                iv: c.iv,
                algorithm: g,
                mode: c.mode,
                padding: c.padding,
                blockSize: g.blockSize,
                formatter: b.format
            })
        },
        decrypt: function (g, m, a, b) {
            b = this.cfg.extend(b);
            m = this._parse(m, b.format);
            return g.createDecryptor(a, b).finalize(m.ciphertext)
        },
        _parse: function (g, m) {
            return "string" == typeof g ? m.parse(g, this) : g
        }
    })
}();
(function () {
    var t = JDDSecCryptoJS,
        u = t.lib.BlockCipher,
        v = t.algo,
        x = [],
        w = [],
        A = [],
        y = [],
        n = [],
        e = [],
        f = [],
        r = [],
        k = [],
        g = [];
    (function () {
        for (var a = [], b = 0; 256 > b; b++) a[b] = 128 > b ? b << 1 : b << 1 ^ 283;
        var c = 0,
            l = 0;
        for (b = 0; 256 > b; b++) {
            var h = l ^ l << 1 ^ l << 2 ^ l << 3 ^ l << 4;
            h = h >>> 8 ^ h & 255 ^ 99;
            x[c] = h;
            w[h] = c;
            var q = a[c],
                z = a[q],
                C = a[z],
                D = 257 * a[h] ^ 16843008 * h;
            A[c] = D << 24 | D >>> 8;
            y[c] = D << 16 | D >>> 16;
            n[c] = D << 8 | D >>> 24;
            e[c] = D;
            D = 16843009 * C ^ 65537 * z ^ 257 * q ^ 16843008 * c;
            f[h] = D << 24 | D >>> 8;
            r[h] = D << 16 | D >>> 16;
            k[h] = D << 8 | D >>> 24;
            g[h] = D;
            c ? (c = q ^ a[a[a[C ^ q]]], l ^= a[a[l]]) : c = l = 1
        }
    })();
    var m = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
    v = v.AES = u.extend({
        _doReset: function () {
            var a = this._key,
                b = a.words,
                c = a.sigBytes / 4;
            a = 4 * ((this._nRounds = c + 6) + 1);
            for (var l = this._keySchedule = [], h = 0; h < a; h++)
                if (h < c) l[h] = b[h];
                else {
                    var q = l[h - 1];
                    h % c ? 6 < c && 4 == h % c && (q = x[q >>> 24] << 24 | x[q >>> 16 & 255] << 16 | x[
                    q >>> 8 & 255] << 8 | x[q & 255]) : (q = q << 8 | q >>> 24, q = x[q >>> 24] <<
                        24 | x[q >>> 16 & 255] << 16 | x[q >>> 8 & 255] << 8 | x[q & 255], q ^= m[h /
                    c | 0] << 24);
                    l[h] = l[h - c] ^ q
                } b = this._invKeySchedule = [];
            for (c = 0; c < a; c++) h = a - c, q = c % 4 ? l[h] : l[h - 4], b[c] = 4 > c || 4 >= h ? q :
                f[x[q >>> 24]] ^ r[x[q >>> 16 & 255]] ^ k[x[q >>> 8 & 255]] ^ g[x[q & 255]]
        },
        encryptBlock: function (a, b) {
            this._doCryptBlock(a, b, this._keySchedule, A, y, n, e, x)
        },
        decryptBlock: function (a, b) {
            var c = a[b + 1];
            a[b + 1] = a[b + 3];
            a[b + 3] = c;
            this._doCryptBlock(a, b, this._invKeySchedule, f, r, k, g, w);
            c = a[b + 1];
            a[b + 1] = a[b + 3];
            a[b + 3] = c
        },
        _doCryptBlock: function (a, b, c, l, h, q, z, C) {
            for (var D = this._nRounds, B = a[b] ^ c[0], F = a[b + 1] ^ c[1], H = a[b + 2] ^ c[2], G =
                a[b + 3] ^ c[3], I = 4, M = 1; M < D; M++) {
                var J = l[B >>> 24] ^ h[F >>> 16 & 255] ^ q[H >>> 8 & 255] ^ z[G & 255] ^ c[I++],
                    K = l[F >>> 24] ^ h[H >>> 16 & 255] ^ q[G >>> 8 & 255] ^ z[B & 255] ^ c[I++],
                    L = l[H >>> 24] ^ h[G >>> 16 & 255] ^ q[B >>> 8 & 255] ^ z[F & 255] ^ c[I++];
                G = l[G >>> 24] ^ h[B >>> 16 & 255] ^ q[F >>> 8 & 255] ^ z[H & 255] ^ c[I++];
                B = J;
                F = K;
                H = L
            }
            J = (C[B >>> 24] << 24 | C[F >>> 16 & 255] << 16 | C[H >>> 8 & 255] << 8 | C[G & 255]) ^ c[
                I++];
            K = (C[F >>> 24] << 24 | C[H >>> 16 & 255] << 16 | C[G >>> 8 & 255] << 8 | C[B & 255]) ^ c[
                I++];
            L = (C[H >>> 24] << 24 | C[G >>> 16 & 255] << 16 | C[B >>> 8 & 255] << 8 | C[F & 255]) ^ c[
                I++];
            G = (C[G >>> 24] << 24 | C[B >>> 16 & 255] << 16 | C[F >>> 8 & 255] << 8 | C[H & 255]) ^ c[
                I++];
            a[b] = J;
            a[b + 1] = K;
            a[b + 2] = L;
            a[b + 3] = G
        },
        keySize: 8
    });
    t.AES = u._createHelper(v)
})();

(function () {
    var t = JDDSecCryptoJS,
        u = t.lib,
        v = u.WordArray,
        x = u.Hasher,
        w = [];
    u = t.algo.SHA1 = x.extend({
        _doReset: function () {
            this._hash = new v.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
        },
        _doProcessBlock: function (A, y) {
            for (var n = this._hash.words, e = n[0], f = n[1], r = n[2], k = n[3], g = n[4], m = 0; 80 >
            m; m++) {
                if (16 > m) w[m] = A[y + m] | 0;
                else {
                    var a = w[m - 3] ^ w[m - 8] ^ w[m - 14] ^ w[m - 16];
                    w[m] = a << 1 | a >>> 31
                }
                a = (e << 5 | e >>> 27) + g + w[m];
                a = 20 > m ? a + ((f & r | ~f & k) + 1518500249) : 40 > m ? a + ((f ^ r ^ k) +
                    1859775393) : 60 > m ? a + ((f & r | f & k | r & k) - 1894007588) : a + ((f ^ r ^
                    k) - 899497514);
                g = k;
                k = r;
                r = f << 30 | f >>> 2;
                f = e;
                e = a
            }
            n[0] = n[0] + e | 0;
            n[1] = n[1] + f | 0;
            n[2] = n[2] + r | 0;
            n[3] = n[3] + k | 0;
            n[4] = n[4] + g | 0
        },
        _doFinalize: function () {
            var A = this._data,
                y = A.words,
                n = 8 * this._nDataBytes,
                e = 8 * A.sigBytes;
            y[e >>> 5] |= 128 << 24 - e % 32;
            y[(e + 64 >>> 9 << 4) + 14] = Math.floor(n / 4294967296);
            y[(e + 64 >>> 9 << 4) + 15] = n;
            A.sigBytes = 4 * y.length;
            this._process();
            return this._hash
        },
        clone: function () {
            var A = x.clone.call(this);
            A._hash = this._hash.clone();
            return A
        }
    });
    t.SHA1 = x._createHelper(u);
    t.HmacSHA1 = x._createHmacHelper(u)
})();

(function () {
    var t = JDDSecCryptoJS,
        u = t.channel;
    u.Downlink = {
        deBase32: function (v) {
            if (void 0 == v || "" == v || null == v) return "";
            var x = t.enc.Hex.parse("30313233343536373839616263646566"),
                w = t.enc.Hex.parse("724e5428476f307361374d3233784a6c");
            return t.AES.decrypt({
                ciphertext: t.enc.Base32.parse(v)
            }, w, {
                mode: t.mode.CBC,
                padding: t.pad.Pkcs7,
                iv: x
            }).toString(t.enc.Utf8)
        },
        deBase64: function (v) {
            return ""
        }
    };
    u.Uplink = {
        enAsBase32: function (v) {
            return ""
        },
        enAsBase64: function (v) {
            return ""
        }
    }
})();

(function () {
    var t = JDDSecCryptoJS,
        u = t.lib.WordArray;
    t.enc.Base32 = {
        stringify: function (v) {
            var x = v.words,
                w = v.sigBytes,
                A = this._map;
            v.clamp();
            v = [];
            for (var y = 0; y < w; y += 5) {
                for (var n = [], e = 0; 5 > e; e++) n[e] = x[y + e >>> 2] >>> 24 - (y + e) % 4 * 8 & 255;
                n = [n[0] >>> 3 & 31, (n[0] & 7) << 2 | n[1] >>> 6 & 3, n[1] >>> 1 & 31, (n[1] & 1) << 4 |
                n[2] >>> 4 & 15, (n[2] & 15) << 1 | n[3] >>> 7 & 1, n[3] >>> 2 & 31, (n[3] & 3) <<
                3 | n[4] >>> 5 & 7, n[4] & 31];
                for (e = 0; 8 > e && y + .625 * e < w; e++) v.push(A.charAt(n[e]))
            }
            if (x = A.charAt(32))
                for (; v.length % 8;) v.push(x);
            return v.join("")
        },
        parse: function (v) {
            var x = v.length,
                w = this._map,
                A = w.charAt(32);
            A && (A = v.indexOf(A), -1 != A && (x = A));
            A = [];
            for (var y = 0, n = 0; n < x; n++) {
                var e = n % 8;
                if (0 != e && 2 != e && 5 != e) {
                    var f = 255 & w.indexOf(v.charAt(n - 1)) << (40 - 5 * e) % 8,
                        r = 255 & w.indexOf(v.charAt(n)) >>> (5 * e - 3) % 8;
                    e = e % 3 ? 0 : 255 & w.indexOf(v.charAt(n - 2)) << (3 == e ? 6 : 7);
                    A[y >>> 2] |= (f | r | e) << 24 - y % 4 * 8;
                    y++
                }
            }
            return u.create(A, y)
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"
    }
})();

class JDDMAC {
    static t() {
        return "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D"
            .split(" ").map(function (v) {
                return parseInt(v, 16)
            })
    }
    mac(v) {
        for (var x = -1, w = 0, A = v.length; w < A; w++) x = x >>> 8 ^ t[(x ^ v.charCodeAt(w)) & 255];
        return (x ^ -1) >>> 0
    }
}
var _CurrentPageProtocol = "https:" == document.location.protocol ? "https://" : "http://",
    _JdJrTdRiskDomainName = window.__fp_domain || "gia.jd.com",
    _url_query_str = "",
    _root_domain = "",
    _CurrentPageUrl = function () {
        var t = document.location.href.toString();
        try {
            _root_domain = /^https?:\/\/(?:\w+\.)*?(\w*\.(?:com\.cn|cn|com|net|id))[\\\/]*/.exec(t)[1]
        } catch (v) {}
        var u = t.indexOf("?");
        0 < u && (_url_query_str = t.substring(u + 1), 500 < _url_query_str.length && (_url_query_str = _url_query_str.substring(
            0, 499)), t = t.substring(0, u));
        return t = t.substring(_CurrentPageProtocol.length)
    }(),
    jd_shadow__ = function () {
        try {
            var t = JDDSecCryptoJS,
                u = [];
            u.push(_CurrentPageUrl);
            var v = t.lib.UUID.generateUuid();
            u.push(v);
            var x = (new Date).getTime();
            u.push(x);
            var w = t.SHA1(u.join("")).toString().toUpperCase();
            u = [];
            u.push("JD3");
            u.push(w);
            var A = (new JDDMAC).mac(u.join(""));
            u.push(A);
            var y = t.enc.Hex.parse("30313233343536373839616263646566"),
                n = t.enc.Hex.parse("4c5751554935255042304e6458323365"),
                e = u.join("");
            return t.AES.encrypt(t.enc.Utf8.parse(e), n, {
                mode: t.mode.CBC,
                padding: t.pad.Pkcs7,
                iv: y
            }).ciphertext.toString(t.enc.Base32)
        } catch (f) {
            console.log(f)
        }
    }()
var td_collect = new function () {
    function t() {
        var n = window.webkitRTCPeerConnection || window.mozRTCPeerConnection || window.RTCPeerConnection;
        if (n) {
            var e = function (k) {
                    var g = /([0-9]{1,3}(\.[0-9]{1,3}){3})/,
                        m =
                            /\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*/;
                    try {
                        var a = g.exec(k);
                        if (null == a || 0 == a.length || void 0 == a) a = m.exec(k);
                        var b = a[1];
                        void 0 === f[b] && w.push(b);
                        f[b] = !0
                    } catch (c) { }
                },
                f = {};
            try {
                var r = new n({
                    iceServers: [{
                        url: "stun:stun.services.mozilla.com"
                    }]
                })
            } catch (k) { }
            try {
                void 0 === r && (r = new n({
                    iceServers: []
                }))
            } catch (k) { }
            if (r || window.mozRTCPeerConnection) try {
                r.createDataChannel("chat", {
                    reliable: !1
                })
            } catch (k) { }
            r && (r.onicecandidate = function (k) {
                k.candidate && e(k.candidate.candidate)
            }, r.createOffer(function (k) {
                r.setLocalDescription(k, function () { }, function () { })
            }, function () { }), setTimeout(function () {
                try {
                    r.localDescription.sdp.split("\n").forEach(function (k) {
                        0 === k.indexOf("a=candidate:") && e(k)
                    })
                } catch (k) { }
            }, 800))
        }
    }

    function u(n) {
        var e;
        return (e = document.cookie.match(new RegExp("(^| )" + n + "=([^;]*)(;|$)"))) ? e[2] : ""
    }

    function v() {
        function n(g) {
            var m = {};
            r.style.fontFamily = g;
            document.body.appendChild(r);
            m.height = r.offsetHeight;
            m.width = r.offsetWidth;
            document.body.removeChild(r);
            return m
        }
        var e = ["monospace", "sans-serif", "serif"],
            f = [],
            r = document.createElement("span");
        r.style.fontSize = "72px";
        r.style.visibility = "hidden";
        r.innerHTML = "mmmmmmmmmmlli";
        for (var k = 0; k < e.length; k++) f[k] = n(e[k]);
        this.checkSupportFont = function (g) {
            for (var m = 0; m < f.length; m++) {
                var a = n(g + "," + e[m]),
                    b = f[m];
                if (a.height !== b.height || a.width !== b.width) return !0
            }
            return !1
        }
    }

    function x(n) {
        var e = {};
        e.name = n.name;
        e.filename = n.filename.toLowerCase();
        e.description = n.description;
        void 0 !== n.version && (e.version = n.version);
        e.mimeTypes = [];
        for (var f = 0; f < n.length; f++) {
            var r = n[f],
                k = {};
            k.description = r.description;
            k.suffixes = r.suffixes;
            k.type = r.type;
            e.mimeTypes.push(k)
        }
        return e
    }
    this.bizId = "";
    this.bioConfig = {
        type: "42",
        operation: 1,
        duraTime: 2,
        interval: 50
    };
    this.worder = null;
    this.deviceInfo = {
        userAgent: "",
        isJdApp: !1,
        isJrApp: !1,
        sdkToken: "",
        fp: "",
        eid: ""
    };
    this.isRpTok = !1;
    this.obtainLocal = function (n) {
        n = "undefined" !== typeof n && n ? !0 : !1;
        var e = {};
        try {
            var f = document.cookie.replace(/(?:(?:^|.*;\s*)3AB9D23F7A4B3C9B\s*=\s*([^;]*).*$)|^.*$/, "$1");
            0 !== f.length && (e.cookie = f)
        } catch (k) { }
        try {
            window.localStorage && null !== window.localStorage && 0 !== window.localStorage.length && (e.localStorage =
                window.localStorage.getItem("3AB9D23F7A4B3C9B"))
        } catch (k) { }
        try {
            window.sessionStorage && null !== window.sessionStorage && (e.sessionStorage = window.sessionStorage[
                "3AB9D23F7A4B3C9B"])
        } catch (k) { }
        try {
            p.globalStorage && (e.globalStorage = window.globalStorage[".localdomain"]["3AB9D23F7A4B3C9B"])
        } catch (k) { }
        try {
            d && "function" == typeof d.load && "function" == typeof d.getAttribute && (d.load(
                "jdgia_user_data"), e.userData = d.getAttribute("3AB9D23F7A4B3C9B"))
        } catch (k) { }
        try {
            E.indexedDbId && (e.indexedDb = E.indexedDbId)
        } catch (k) { }
        try {
            E.webDbId && (e.webDb = E.webDbId)
        } catch (k) { }
        try {
            for (var r in e)
                if (32 < e[r].length) {
                    _JdEid = e[r];
                    n || (_eidFlag = !0);
                    break
                }
        } catch (k) { }
        try {
            ("undefined" === typeof _JdEid || 0 >= _JdEid.length) && this.db("3AB9D23F7A4B3C9B");
            if ("undefined" === typeof _JdEid || 0 >= _JdEid.length) _JdEid = u("3AB9D23F7A4B3C9B");
            if ("undefined" === typeof _JdEid || 0 >= _JdEid.length) _eidFlag = !0
        } catch (k) { }
        return _JdEid
    };
    var w = [],
        A =
            "Abadi MT Condensed Light;Adobe Fangsong Std;Adobe Hebrew;Adobe Ming Std;Agency FB;Arab;Arabic Typesetting;Arial Black;Batang;Bauhaus 93;Bell MT;Bitstream Vera Serif;Bodoni MT;Bookman Old Style;Braggadocio;Broadway;Calibri;Californian FB;Castellar;Casual;Centaur;Century Gothic;Chalkduster;Colonna MT;Copperplate Gothic Light;DejaVu LGC Sans Mono;Desdemona;DFKai-SB;Dotum;Engravers MT;Eras Bold ITC;Eurostile;FangSong;Forte;Franklin Gothic Heavy;French Script MT;Gabriola;Gigi;Gisha;Goudy Old Style;Gulim;GungSeo;Haettenschweiler;Harrington;Hiragino Sans GB;Impact;Informal Roman;KacstOne;Kino MT;Kozuka Gothic Pr6N;Lohit Gujarati;Loma;Lucida Bright;Lucida Fax;Magneto;Malgun Gothic;Matura MT Script Capitals;Menlo;MingLiU-ExtB;MoolBoran;MS PMincho;MS Reference Sans Serif;News Gothic MT;Niagara Solid;Nyala;Palace Script MT;Papyrus;Perpetua;Playbill;PMingLiU;Rachana;Rockwell;Sawasdee;Script MT Bold;Segoe Print;Showcard Gothic;SimHei;Snap ITC;TlwgMono;Tw Cen MT Condensed Extra Bold;Ubuntu;Umpush;Univers;Utopia;Vladimir Script;Wide Latin"
                .split(";"),
        y =
            "4game;AdblockPlugin;AdobeExManCCDetect;AdobeExManDetect;Alawar NPAPI utils;Aliedit Plug-In;Alipay Security Control 3;AliSSOLogin plugin;AmazonMP3DownloaderPlugin;AOL Media Playback Plugin;AppUp;ArchiCAD;AVG SiteSafety plugin;Babylon ToolBar;Battlelog Game Launcher;BitCometAgent;Bitdefender QuickScan;BlueStacks Install Detector;CatalinaGroup Update;Citrix ICA Client;Citrix online plug-in;Citrix Receiver Plug-in;Coowon Update;DealPlyLive Update;Default Browser Helper;DivX Browser Plug-In;DivX Plus Web Player;DivX VOD Helper Plug-in;doubleTwist Web Plugin;Downloaders plugin;downloadUpdater;eMusicPlugin DLM6;ESN Launch Mozilla Plugin;ESN Sonar API;Exif Everywhere;Facebook Plugin;File Downloader Plug-in;FileLab plugin;FlyOrDie Games Plugin;Folx 3 Browser Plugin;FUZEShare;GDL Object Web Plug-in 16.00;GFACE Plugin;Ginger;Gnome Shell Integration;Google Earth Plugin;Google Earth Plug-in;Google Gears 0.5.33.0;Google Talk Effects Plugin;Google Update;Harmony Firefox Plugin;Harmony Plug-In;Heroes & Generals live;HPDetect;Html5 location provider;IE Tab plugin;iGetterScriptablePlugin;iMesh plugin;Kaspersky Password Manager;LastPass;LogMeIn Plugin 1.0.0.935;LogMeIn Plugin 1.0.0.961;Ma-Config.com plugin;Microsoft Office 2013;MinibarPlugin;Native Client;Nitro PDF Plug-In;Nokia Suite Enabler Plugin;Norton Identity Safe;npAPI Plugin;NPLastPass;NPPlayerShell;npTongbuAddin;NyxLauncher;Octoshape Streaming Services;Online Storage plug-in;Orbit Downloader;Pando Web Plugin;Parom.TV player plugin;PDF integrado do WebKit;PDF-XChange Viewer;PhotoCenterPlugin1.1.2.2;Picasa;PlayOn Plug-in;QQ2013 Firefox Plugin;QQDownload Plugin;QQMiniDL Plugin;QQMusic;RealDownloader Plugin;Roblox Launcher Plugin;RockMelt Update;Safer Update;SafeSearch;Scripting.Dictionary;SefClient Plugin;Shell.UIHelper;Silverlight Plug-In;Simple Pass;Skype Web Plugin;SumatraPDF Browser Plugin;Symantec PKI Client;Tencent FTN plug-in;Thunder DapCtrl NPAPI Plugin;TorchHelper;Unity Player;Uplay PC;VDownloader;Veetle TV Core;VLC Multimedia Plugin;Web Components;WebKit-integrierte PDF;WEBZEN Browser Extension;Wolfram Mathematica;WordCaptureX;WPI Detector 1.4;Yandex Media Plugin;Yandex PDF Viewer;YouTube Plug-in;zako"
                .split(";");
    this.toJson = "object" === typeof JSON && JSON.stringify;
    this.init = function () {
        _fingerprint_step = 6;
        t();
        _fingerprint_step = 7;
        "function" !== typeof this.toJson && (this.toJson = function (n) {
            var e = typeof n;
            if ("undefined" === e || null === n) return "null";
            if ("number" === e || "boolean" === e) return n + "";
            if ("object" === e && n && n.constructor === Array) {
                e = [];
                for (var f = 0; n.length > f; f++) e.push(this.toJson(n[f]));
                return "[" + (e + "]")
            }
            if ("object" === e) {
                e = [];
                for (f in n) n.hasOwnProperty(f) && e.push('"' + f + '":' + this.toJson(n[f]));
                return "{" + (e + "}")
            }
        });
        this.sdkCollectInit()
    };
    this.sdkCollectInit = function () {
        try {
            try {
                bp_bizid && (this.bizId = bp_bizid)
            } catch (f) {
                this.bizId = "jsDefault"
            }
            var n = navigator.userAgent.toLowerCase(),
                e = !n.match(/(iphone|ipad|ipod)/i) && (-1 < n.indexOf("android") || -1 < n.indexOf("adr"));
            this.deviceInfo.isJdApp = -1 < n.indexOf("jdapp");
            this.deviceInfo.isJrApp = -1 < n.indexOf("jdjr");
            this.deviceInfo.userAgent = navigator.userAgent;
            this.deviceInfo.isAndroid = e;
            this.createWorker()
        } catch (f) { }
    };
    this.db = function (n, e) {
        try {
            _fingerprint_step = "m";
            if (window.openDatabase) {
                var f = window.openDatabase("sqlite_jdtdstorage", "", "jdtdstorage", 1048576);
                void 0 !== e && "" != e ? f.transaction(function (r) {
                    r.executeSql(
                        "CREATE TABLE IF NOT EXISTS cache(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, value TEXT NOT NULL, UNIQUE (name))",
                        [],
                        function (k, g) { },
                        function (k, g) { });
                    r.executeSql("INSERT OR REPLACE INTO cache(name, value) VALUES(?, ?)", [n, e],
                        function (k, g) { },
                        function (k, g) { })
                }) : f.transaction(function (r) {
                    r.executeSql("SELECT value FROM cache WHERE name=?", [n], function (k, g) {
                        1 <= g.rows.length && (_JdEid = g.rows.item(0).value)
                    }, function (k, g) { })
                })
            }
            _fingerprint_step = "n"
        } catch (r) { }
    };
    this.setCookie = function (n, e) {
        void 0 !== e && "" != e && (document.cookie = n + "=" + e +
            "; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/; domain=" + _root_domain)
    };
    this.tdencrypt = function (n) {
        n = this.toJson(n);
        n = encodeURIComponent(n);
        var e = "",
            f = 0;
        do {
            var r = n.charCodeAt(f++);
            var k = n.charCodeAt(f++);
            var g = n.charCodeAt(f++);
            var m = r >> 2;
            r = (r & 3) << 4 | k >> 4;
            var a = (k & 15) << 2 | g >> 6;
            var b = g & 63;
            isNaN(k) ? a = b = 64 : isNaN(g) && (b = 64);
            e = e + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(m) +
                "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(r) +
                "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(a) +
                "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(b)
        } while (f < n.length);
        return e + "/"
    };
    this.collect = function () {
        var n = new Date;
        try {
            var e = document.createElement("div"),
                f = {},
                r =
                    "ActiveBorder ActiveCaption AppWorkspace Background ButtonFace ButtonHighlight ButtonShadow ButtonText CaptionText GrayText Highlight HighlightText InactiveBorder InactiveCaption InactiveCaptionText InfoBackground InfoText Menu MenuText Scrollbar ThreeDDarkShadow ThreeDFace ThreeDHighlight ThreeDLightShadow ThreeDShadow Window WindowFrame WindowText"
                        .split(" ");
            if (window.getComputedStyle)
                for (var k = 0; k < r.length; k++) document.body.appendChild(e), e.style.color = r[k], f[r[k]] =
                    window.getComputedStyle(e).getPropertyValue("color"), document.body.removeChild(e)
        } catch (D) { }
        e = {
            ca: {},
            ts: {},
            m: {}
        };
        r = e.ca;
        r.tdHash = _jdfp_canvas_md5;
        var g = !1;
        if (k = window.WebGLRenderingContext) k = navigator.userAgent, k = k.toLowerCase(), k = (0 < k.indexOf(
            "jdjr-app") || 0 <= k.indexOf("jdapp")) && (0 < k.indexOf("iphone") || 0 < k.indexOf("ipad")) ?
            !0 : !1, k = !k;
        if (k) {
            var m = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"],
                a = [],
                b;
            for (k = 0; k < m.length; k++) try {
                var c = !1;
                (c = document.createElement("canvas").getContext(m[k], {
                    stencil: !0
                })) && c && (b = c, a.push(m[k]))
            } catch (D) { }
            a.length && (g = {
                name: a,
                gl: b
            })
        }
        if (g) {
            k = g.gl;
            r.contextName = g.name.join();
            r.webglversion = k.getParameter(k.VERSION);
            r.shadingLV = k.getParameter(k.SHADING_LANGUAGE_VERSION);
            r.vendor = k.getParameter(k.VENDOR);
            r.renderer = k.getParameter(k.RENDERER);
            b = [];
            try {
                b = k.getSupportedExtensions(), r.extensions = b
            } catch (D) { }
            try {
                var l = k.getExtension("WEBGL_debug_renderer_info");
                l && (r.wuv = k.getParameter(l.UNMASKED_VENDOR_WEBGL), r.wur = k.getParameter(l.UNMASKED_RENDERER_WEBGL))
            } catch (D) { }
        }
        e.m.documentMode = document.documentMode;
        e.m.compatMode = document.compatMode;
        l = [];
        // r = new v;
        // for (k = 0; k < A.length; k++) b = A[k], r.checkSupportFont(b) && l.push(b);
        e.fo = l;
        k = {};
        l = [];
        for (var h in navigator) "object" != typeof navigator[h] && (k[h] = navigator[h]), l.push(h);
        k.enumerationOrder = l;
        k.javaEnabled = false;
        try {
            k.taintEnabled = navigator.taintEnabled()
        } catch (D) { }
        e.n = k;
        k = navigator.userAgent.toLowerCase();
        if (h = k.match(/rv:([\d.]+)\) like gecko/)) var q = h[1];
        if (h = k.match(/msie ([\d.]+)/)) q = h[1];
        h = [];
        if (q)
            for (q =
                     "AcroPDF.PDF;Adodb.Stream;AgControl.AgControl;DevalVRXCtrl.DevalVRXCtrl.1;MacromediaFlashPaper.MacromediaFlashPaper;Msxml2.DOMDocument;Msxml2.XMLHTTP;PDF.PdfCtrl;QuickTime.QuickTime;QuickTimeCheckObject.QuickTimeCheck.1;RealPlayer;RealPlayer.RealPlayer(tm) ActiveX Control (32-bit);RealVideo.RealVideo(tm) ActiveX Control (32-bit);rmocx.RealPlayer G2 Control;Scripting.Dictionary;Shell.UIHelper;ShockwaveFlash.ShockwaveFlash;SWCtl.SWCtl;TDCCtl.TDCCtl;WMPlayer.OCX"
                         .split(";"), k = 0; k < q.length; k++) {
                var z = q[k];
                try {
                    var C = new ActiveXObject(z);
                    l = {};
                    l.name = z;
                    try {
                        l.version = C.GetVariable("$version")
                    } catch (D) { }
                    try {
                        l.version = C.GetVersions()
                    } catch (D) { }
                    l.version && 0 < l.version.length || (l.version = "");
                    h.push(l)
                } catch (D) { }
            } else {
            q = navigator.plugins;
            l = {};
            for (k = 0; k < q.length; k++) z = q[k], l[z.name] = 1, h.push(x(z));
            for (k = 0; k < y.length; k++) C = y[k], l[C] || (z = q[C], z && h.push(x(z)))
        }
        q =
            "availHeight availWidth colorDepth bufferDepth deviceXDPI deviceYDPI height width logicalXDPI logicalYDPI pixelDepth updateInterval"
                .split(" ");
        z = {};
        for (k = 0; q.length > k; k++) C = q[k], void 0 !== screen[C] && (z[C] = screen[C]);
        q = ["devicePixelRatio", "screenTop", "screenLeft"];
        l = {};
        for (k = 0; q.length > k; k++) C = q[k], void 0 !== window[C] && (l[C] = window[C]);
        e.p = h;
        e.w = l;
        e.s = z;
        e.sc = f;
        e.tz = n.getTimezoneOffset();
        e.lil = w.sort().join("|");
        e.wil = "";
        f = {};
        try {
            f.cookie = navigator.cookieEnabled, f.localStorage = !!window.localStorage, f.sessionStorage = !!
                window.sessionStorage, f.globalStorage = !!window.globalStorage, f.indexedDB = !!window.indexedDB
        } catch (D) { }
        e.ss = f;
        e.ts.deviceTime = n.getTime();
        e.ts.deviceEndTime = (new Date).getTime();
        return this.tdencrypt(e)
    };
    this.collectSdk = function (n) {
        try {
            var e = this,
                f = !1,
                r = e.getLocal("BATQW722QTLYVCRD");
            if (null != r && void 0 != r && "" != r) try {
                var k = JSON.parse(r),
                    g = (new Date).getTime();
                null != k && void 0 != k.t && "number" == typeof k.t && (12E5 >= g - k.t && void 0 != k.tk &&
                null != k.tk && "" != k.tk && k.tk.startsWith("jdd") ? (e.deviceInfo.sdkToken = k.tk,
                    f = !0) : void 0 != k.tk && null != k.tk && "" != k.tk && (e.deviceInfo.sdkToken =
                    k.tk))
            } catch (m) { }
            r = !1;
            e.deviceInfo.isJdApp ? (e.deviceInfo.clientVersion = navigator.userAgent.split(";")[2], (r = 0 < e.compareVersion(
                e.deviceInfo.clientVersion, "7.0.2")) && !f && e.getJdSdkCacheToken(function (m) {
                e.deviceInfo.sdkToken = m;
                null != m && "" != m && m.startsWith("jdd") || e.getJdBioToken(n)
            })) : e.deviceInfo.isJrApp && (e.deviceInfo.clientVersion = navigator.userAgent.match(
                /clientVersion=([^&]*)(&|$)/)[1], (r = 0 < e.compareVersion(e.deviceInfo.clientVersion,
                "4.6.0")) && !f && e.getJdJrSdkCacheToken(function (m) {
                e.deviceInfo.sdkToken = m;
                null != m && "" != m && m.startsWith("jdd") || e.getJdJrBioToken(n)
            }));
            "function" == typeof n && n(e.deviceInfo)
        } catch (m) { }
    };
    this.compareVersion = function (n, e) {
        try {
            if (n === e) return 0;
            var f = n.split(".");
            var r = e.split(".");
            for (n = 0; n < f.length; n++) {
                var k = parseInt(f[n]);
                if (!r[n]) return 1;
                var g = parseInt(r[n]);
                if (k < g) break;
                if (k > g) return 1
            }
        } catch (m) { }
        return -1
    };
    this.isWKWebView = function () {
        return this.deviceInfo.userAgent.match(/supportJDSHWK/i) || 1 == window._is_jdsh_wkwebview ? !0 : !1
    };
    this.getErrorToken = function (n) {
        try {
            if (n) {
                var e = (n + "").match(/"token":"(.*?)"/);
                if (e && 1 < e.length) return e[1]
            }
        } catch (f) { }
        return ""
    };
    this.getJdJrBioToken = function (n) {
        var e = this;
        "undefined" != typeof JrBridge && null != JrBridge && "undefined" != typeof JrBridge._version && (0 > e
            .compareVersion(JrBridge._version, "2.0.0") ? console.error(
            "\u6865\u7248\u672c\u4f4e\u4e8e2.0\u4e0d\u652f\u6301bio") : JrBridge.callNative({
            type: e.bioConfig.type,
            operation: e.bioConfig.operation,
            biometricData: {
                bizId: e.bizId,
                duraTime: e.bioConfig.duraTime,
                interval: e.bioConfig.interval
            }
        }, function (f) {
            try {
                "object" != typeof f && (f = JSON.parse(f)), e.deviceInfo.sdkToken = f.token
            } catch (r) {
                console.error(r)
            }
            null != e.deviceInfo.sdkToken && "" != e.deviceInfo.sdkToken && (f = {
                tk: e.deviceInfo.sdkToken,
                t: (new Date).getTime()
            }, e.store("BATQW722QTLYVCRD", JSON.stringify(f)))
        }))
    };
    this.getJdJrSdkCacheToken = function (n) {
        var e = this;
        try {
            "undefined" == typeof JrBridge || null == JrBridge || "undefined" == typeof JrBridge._version || 0 >
            e.compareVersion(JrBridge._version, "2.0.0") || JrBridge.callNative({
                type: e.bioConfig.type,
                operation: 5,
                biometricData: {
                    bizId: e.bizId,
                    duraTime: e.bioConfig.duraTime,
                    interval: e.bioConfig.interval
                }
            }, function (f) {
                var r = "";
                try {
                    "object" != typeof f && (f = JSON.parse(f)), r = f.token
                } catch (k) {
                    console.error(k)
                }
                null != r && "" != r && "function" == typeof n && (n(r), r.startsWith("jdd") && (f = {
                    tk: r,
                    t: (new Date).getTime()
                }, e.store("BATQW722QTLYVCRD", JSON.stringify(f))))
            })
        } catch (f) { }
    };
    this.getJdBioToken = function (n) {
        var e = this;
        n = JSON.stringify({
            businessType: "bridgeBiologicalProbe",
            callBackName: "_bioDeviceCb",
            params: {
                pin: "",
                jsonData: {
                    type: e.bioConfig.type,
                    operation: e.bioConfig.operation,
                    data: {
                        bizId: e.bizId,
                        duraTime: e.bioConfig.duraTime,
                        interval: e.bioConfig.interval
                    },
                    biometricData: {
                        bizId: e.bizId,
                        duraTime: e.bioConfig.duraTime,
                        interval: e.bioConfig.interval
                    }
                }
            }
        });
        e.isWKWebView() ? window.webkit.messageHandlers.JDAppUnite.postMessage({
            method: "notifyMessageToNative",
            params: n
        }) : window.JDAppUnite && window.JDAppUnite.notifyMessageToNative(n);
        window._bioDeviceCb = function (f) {
            try {
                var r = "object" == typeof f ? f : JSON.parse(f);
                if (void 0 != r && null != r && "0" != r.status) return;
                null != r.data.token && void 0 != r.data.token && "" != r.data.token && (e.deviceInfo.sdkToken =
                    r.data.token)
            } catch (k) {
                f = e.getErrorToken(f), null != f && "" != f && (e.deviceInfo.sdkToken = f)
            }
            null != e.deviceInfo.sdkToken && "" != e.deviceInfo.sdkToken && (f = {
                tk: e.deviceInfo.sdkToken,
                t: (new Date).getTime()
            }, e.store("BATQW722QTLYVCRD", JSON.stringify(f)))
        }
    };
    this.getJdSdkCacheToken = function (n) {
        try {
            var e = this,
                f = JSON.stringify({
                    businessType: "bridgeBiologicalProbe",
                    callBackName: "_bioDeviceSdkCacheCb",
                    params: {
                        pin: "",
                        jsonData: {
                            type: e.bioConfig.type,
                            operation: 5,
                            data: {
                                bizId: e.bizId,
                                duraTime: e.bioConfig.duraTime,
                                interval: e.bioConfig.interval
                            },
                            biometricData: {
                                bizId: e.bizId,
                                duraTime: e.bioConfig.duraTime,
                                interval: e.bioConfig.interval
                            }
                        }
                    }
                });
            e.isWKWebView() ? window.webkit.messageHandlers.JDAppUnite.postMessage({
                method: "notifyMessageToNative",
                params: f
            }) : window.JDAppUnite && window.JDAppUnite.notifyMessageToNative(f);
            window._bioDeviceSdkCacheCb = function (r) {
                var k = "";
                try {
                    var g = "object" == typeof r ? r : JSON.parse(r);
                    if (void 0 != g && null != g && "0" != g.status) return;
                    k = g.data.token
                } catch (m) {
                    k = e.getErrorToken(r)
                }
                null != k && "" != k && "function" == typeof n && (n(k), k.startsWith("jdd") && (r = {
                    tk: k,
                    t: (new Date).getTime()
                }, e.store("BATQW722QTLYVCRD", JSON.stringify(r))))
            }
        } catch (r) { }
    };
    this.store = function (n, e) {
        try {
            this.setCookie(n, e)
        } catch (f) { }
        try {
            window.localStorage && window.localStorage.setItem(n, e)
        } catch (f) { }
        try {
            window.sessionStorage && window.sessionStorage.setItem(n, e)
        } catch (f) { }
        try {
            window.globalStorage && window.globalStorage[".localdomain"].setItem(n, e)
        } catch (f) { }
        try {
            this.db(n, _JdEid)
        } catch (f) { }
    };
    this.getLocal = function (n) {
        var e = {},
            f = null;
        try {
            var r = document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)" + n + "\\s*\\=\\s*([^;]*).*$)|^.*$"),
                "$1");
            0 !== r.length && (e.cookie = r)
        } catch (g) { }
        try {
            window.localStorage && null !== window.localStorage && 0 !== window.localStorage.length && (e.localStorage =
                window.localStorage.getItem(n))
        } catch (g) { }
        try {
            window.sessionStorage && null !== window.sessionStorage && (e.sessionStorage = window.sessionStorage[
                n])
        } catch (g) { }
        try {
            p.globalStorage && (e.globalStorage = window.globalStorage[".localdomain"][n])
        } catch (g) { }
        try {
            d && "function" == typeof d.load && "function" == typeof d.getAttribute && (d.load(
                "jdgia_user_data"), e.userData = d.getAttribute(n))
        } catch (g) { }
        try {
            E.indexedDbId && (e.indexedDb = E.indexedDbId)
        } catch (g) { }
        try {
            E.webDbId && (e.webDb = E.webDbId)
        } catch (g) { }
        try {
            for (var k in e)
                if (32 < e[k].length) {
                    f = e[k];
                    break
                }
        } catch (g) { }
        try {
            if (null == f || "undefined" === typeof f || 0 >= f.length) f = u(n)
        } catch (g) { }
        return f
    };
    this.createWorker = function () {
        if (window.Worker) {
            try {
                var n = new Blob([
                    "onmessage = function (event) {\n    var data = JSON.parse(event.data);\n    try {\n        var httpRequest;\n        try {\n            httpRequest = new XMLHttpRequest();\n        } catch (h) {}\n        if (!httpRequest)\n            try {\n                httpRequest = new (window['ActiveXObject'])('Microsoft.XMLHTTP')\n            } catch (l) {}\n        if (!httpRequest)\n            try {\n                httpRequest = new (window['ActiveXObject'])('Msxml2.XMLHTTP')\n            } catch (r) {}\n        if (!httpRequest)\n            try {\n                httpRequest = new (window['ActiveXObject'])('Msxml3.XMLHTTP')\n            } catch (n) {}\n\n        if(data){\n            httpRequest['open']('POST', data.url, false);\n            httpRequest['setRequestHeader']('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');\n            httpRequest['onreadystatechange'] = function () {\n                if (4 === httpRequest['readyState'] && 200 === httpRequest['status']) {\n                    postMessage(httpRequest.responseText);\n                }\n            };\n            httpRequest['send'](data.data);\n        }\n\n    }catch (e){console.error(e);}\n};"
                ], {
                    type: "application/javascript"
                })
            } catch (e) {
                window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder, n =
                    new BlobBuilder, n.append(
                    "onmessage = function (event) {\n    var data = JSON.parse(event.data);\n    try {\n        var httpRequest;\n        try {\n            httpRequest = new XMLHttpRequest();\n        } catch (h) {}\n        if (!httpRequest)\n            try {\n                httpRequest = new (window['ActiveXObject'])('Microsoft.XMLHTTP')\n            } catch (l) {}\n        if (!httpRequest)\n            try {\n                httpRequest = new (window['ActiveXObject'])('Msxml2.XMLHTTP')\n            } catch (r) {}\n        if (!httpRequest)\n            try {\n                httpRequest = new (window['ActiveXObject'])('Msxml3.XMLHTTP')\n            } catch (n) {}\n\n        if(data){\n            httpRequest['open']('POST', data.url, false);\n            httpRequest['setRequestHeader']('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');\n            httpRequest['onreadystatechange'] = function () {\n                if (4 === httpRequest['readyState'] && 200 === httpRequest['status']) {\n                    postMessage(httpRequest.responseText);\n                }\n            };\n            httpRequest['send'](data.data);\n        }\n\n    }catch (e){console.error(e);}\n};"
                ), n = n.getBlob()
            }
            try {
                this.worker = new Worker(URL.createObjectURL(n))
            } catch (e) { }
        }
    };
    this.reportWorker = function (n, e, f, r) {
        try {
            null != this.worker && (this.worker.postMessage(JSON.stringify({
                url: n,
                data: e,
                success: !1,
                async: !1
            })), this.worker.onmessage = function (k) { })
        } catch (k) { }
    }
};

function td_collect_exe() {
    _fingerprint_step = 8;
    var t = td_collect.collect();
    td_collect.collectSdk();
    var u = "string" === typeof orderId ? orderId : "",
        v = "undefined" !== typeof jdfp_pinenp_ext && jdfp_pinenp_ext ? 2 : 1;
    u = {
        pin: _jdJrTdCommonsObtainPin(v),
        oid: u,
        p: "https:" == document.location.protocol ? "s" : "h",
        fp: risk_jd_local_fingerprint,
        ctype: v,
        v: "2.7.10.4",
        f: "3"
    };
    try {
        u.o = _CurrentPageUrl, u.qs = _url_query_str
    } catch (w) { }
    _fingerprint_step = 9;
    0 >= _JdEid.length && (_JdEid = td_collect.obtainLocal(), 0 < _JdEid.length && (_eidFlag = !0));
    u.fc = _JdEid;
    try {
        u.t = jd_risk_token_id
    } catch (w) { }
    try {
        if ("undefined" != typeof gia_fp_qd_uuid && 0 <= gia_fp_qd_uuid.length) u.qi = gia_fp_qd_uuid;
        else {
            var x = _JdJrRiskClientStorage.jdtdstorage_cookie("qd_uid");
            u.qi = void 0 == x ? "" : x
        }
    } catch (w) { }
    "undefined" != typeof jd_shadow__ && 0 < jd_shadow__.length && (u.jtb = jd_shadow__);
    try {
        td_collect.deviceInfo && void 0 != td_collect.deviceInfo && null != td_collect.deviceInfo.sdkToken && "" !=
        td_collect.deviceInfo.sdkToken ? (u.stk = td_collect.deviceInfo.sdkToken, td_collect.isRpTok = !0) :
            td_collect.isRpTok = !1
    } catch (w) {
        td_collect.isRpTok = !1
    }
    x = td_collect.tdencrypt(u);
    // console.log(u)
    return { a: x, d: t }
}

function _jdJrTdCommonsObtainPin(t) {
    var u = "";
    "string" === typeof jd_jr_td_risk_pin && 1 == t ? u = jd_jr_td_risk_pin : "string" === typeof pin ? u = pin :
        "object" === typeof pin && "string" === typeof jd_jr_td_risk_pin && (u = jd_jr_td_risk_pin);
    return u
};

function getBody(userAgent, url = document.location.href) {
    navigator.userAgent = userAgent
    let href = url
    let choose = /((https?:)\/\/([^\/]+))(.+)/.exec(url)
    let [, origin, protocol, host, pathname] = choose;
    document.location.href = href
    document.location.origin = origin
    document.location.protocol = protocol
    document.location.host = host
    document.location.pathname = pathname
    const JF = new JdJrTdRiskFinger();
    let fp = JF.f.get(function (t) {
        risk_jd_local_fingerprint = t
        return t
    });
    let arr = td_collect_exe()
    return { fp, ...arr }
}

function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}