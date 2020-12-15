---
id: dataframe
# slug: /
title: مقدمه
sidebar_label: مقدمه
hide_title: false
hide_table_of_contents: false
description: آموزش مقدماتی R|دیتاگیت
keywords:
  - آموزش مقدماتی R
  - آموزش R
image: "/img/r/r-logo.svg"
---

دیتا فریم
تعریف دیتا فریم
دیتا فریم (Data Frame) در R یکی از پرکاربردترین مباحثی هستش که توی کار با زبان R با اون برخورد میکنید. اگر یادتون باشه، ماتریس یکی از انواع داده ای بود که سطر و ستون داشت و میتونستیم اطلاعات توش بذاریم. اما ماتریس یه محدودیت بزرگ داشت و اون اینه که تمام داده ها باید یه جنس باشن. مثلا همشون عدد باشن. یا همشون کاراکتر باشن. اما دیتا فریم این مشکل رو برطرف میکنه و میتونیم توی یه دیتا فریم، داده های مختلفی مثل داده منطقی (TRUE - FALSE)، عدد و کاراکتر و رشته بذاریم. فرض کنید میخوایم جدول زیر رو با یه دیتا فریم پیاده سازی کنیم:

Mojarad	Jensiat	Hoghough	Tavallod	Name	ID
TRUE	M	1000000	1372	Massoud	1
FALSE	F	2500000	1363	Sahel	2
TRUE	F	900000	1355	Sara	3
TRUE	M	1400000	1361	Hosein	4
FALSE	M	3000000	1370	Babak	5
TRUE	F	2100000	1366	Zohre	6
دقت کنید که توی این جدول 6 تا ستون داریم و 6 تا سطر. به چندتا نکته اینجا باید دقت کنید که توی دیتا فریم رعایت کنید:

اسم ستون ها نباید خالی باشه، یعنی هر ستون باید یه اسمی داشته باشه.
اسم هر سطر هم نباید تکراری باشه. مثلا توی جدول بالا نباید دوتا Massoud داشته باشیم.
مقادیر توی هر ستون باید یه جنس داشته باشن. مثلا همشون عدد باشن.
تابع ()data.frame
با استفاده از این تابع میتونیم دیتا فریم رو پیاده سازی کنیم. کد پایین رو با دقت بخونید:

emp_data <- data.frame(
   
   ID = c(1:6), 
   Name = c("Massoud","Sahel","Sara","Hosein","Babak","Zohre"),
   Tavallod = c("1372", "1363", "1355", "1361", "1370", "1369"),
   Hoghough = c(1000000, 2500000, 900000, 1400000, 3000000, 2100000),
   Jensiat = c("M","F","F","M","M","F"),
   Mojarad = c(TRUE,FALSE,TRUE,TRUE,FALSE,TRUE),
   
   stringsAsFactors = FALSE
 )
 print(emp_data) 
 
 ID    Name Tavallod Hoghough Jensiat Mojarad
 1  1 Massoud     1372  1000000       M    TRUE
 2  2   Sahel     1363  2500000       F   FALSE
 3  3    Sara     1355   900000       F    TRUE
 4  4  Hosein     1361  1400000       M    TRUE
 5  5   Babak     1370  3000000       M   FALSE
 6  6   Zohre     1369  2100000       F    TRUE
همونطور که میبینید، یک متغیر به اسم emp_data تعریف کردیم و دیتا فریم رو توی اون گذاشتیم. به ازای هر ستون جدول هم معادل اون رو به عنوان پارامتر به تابع ()data.frame دادیم. یه پارامتر به اسم stringsAsFactors هم داریم که فعلا باهاش کار نداریم.

تابع ()str
با استفاده از این تابع میشه یه دید کلی نسبت به ساختار دیتا فریم، لیست و ... داشت:

print(str(emp_data))
 
 'data.frame':	6 obs. of  6 variables:
   $ ID      : int  1 2 3 4 5 6
 $ Name    : chr  "Massoud" "Sahel" "Sara" "Hosein" ...
 $ Tavallod: chr  "1372" "1363" "1355" "1361" ...
 $ Hoghough: num  1000000 2500000 900000 1400000 3000000 2100000
 $ Jensiat : chr  "M" "F" "F" "M" ...
 $ Mojarad : logi  TRUE FALSE TRUE TRUE FALSE TRUE
تابع ()summary
این تابع هم یه مدل دیگه از اطلاعات دیتا فریم و لیست و ... میده:

print(summary(emp_data))
 ID           Name             Tavallod            Hoghough         Jensiat           Mojarad       
 Min.   :1.00   Length:6           Length:6           Min.   : 900000   Length:6           Mode :logical  
 1st Qu.:2.25   Class :character   Class :character   1st Qu.:1100000   Class :character   FALSE:2        
 Median :3.50   Mode  :character   Mode  :character   Median :1750000   Mode  :character   TRUE :4        
 Mean   :3.50                                         Mean   :1816667                                     
 3rd Qu.:4.75                                         3rd Qu.:2400000                                     
 Max.   :6.00                                         Max.   :3000000
دسترسی به عناصر دیتا فریم
برای دسترسی به عناصر دیتا فریم میتونیم از سه روش استفاده کنیم. استفاده از اندیس دیتا فریم، استفاده از اسم ستون و یا استفاده از علامت $. باید دقت کنید که اندیس های دیتا فریم توی زبان R از 1 شروع میشن. مثال های زیر رو ببینید (برای اینکه کدهای تکراری ننویسم، از دیتا فریمی که توی کد بالا تعریف کردیم استفاده میکنم):

کد زیر عنصر سطر 1 و ستون 3 رو نشون میده:

print(emp_data[1,3]) 
 [1] "1372"
کد زیر تمام عناصر سطر 4 رو نشون میده:

print(emp_data[4,])
 ID   Name Tavallod Hoghough Jensiat Mojarad
 4  4 Hosein     1361  1400000       M    TRUE
کد زیر تمام عناصر ستون 3 رو نشون میده:

print(emp_data[,3])
 [1] "1372" "1363" "1355" "1361" "1370" "1369"
همینطور، کد زیر سطرهای 2 تا 4 و ستون های 1 تا 2 رو نشون میده:

print(emp_data[2:4,1:2])
   ID   Name
 2  2  Sahel
 3  3   Sara
 4  4 Hosein
برای اینکه استفاده از اسم ستون و علامت $ رو متوجه بشید، کد زیر رو ببینید.

print(emp_data[,3])
 [1] "1372" "1363" "1355" "1361" "1370" "1369"
 
 print(emp_data[,"Tavallod"])
 [1] "1372" "1363" "1355" "1361" "1370" "1369"
 
 print(emp_data$Tavallod)
 [1] "1372" "1363" "1355" "1361" "1370" "1369"
همونطور که دیدید، کد بالا خروجی یکسانی تولید میکنه که سه روش دسترسی به عناصر دیتا فریم رو توضیح میده.

اضافه کردن ستون
با استفاده از دو روش زیر میشه به دیتا فریم ستون اضافه کرد:

#Raveshe Aval
 emp_data["Farzand"] <- c(0,2,0,0,1,0)
 
 #Raveshe Dovom
 emp_data$Farzand <- c(0,2,0,0,1,0)
 
 print(emp_data)
 ID    Name Tavallod Hoghough Jensiat Mojarad Farzand
 1  1 Massoud     1372  1000000       M    TRUE       0
 2  2   Sahel     1363  2500000       F   FALSE       2
 3  3    Sara     1355   900000       F    TRUE       0
 4  4  Hosein     1361  1400000       M    TRUE       0
 5  5   Babak     1370  3000000       M   FALSE       1
 6  6   Zohre     1369  2100000       F    TRUE       0
یعنی برای اضافه کردن ستون فقط باید اسم ستون جدید رو بنویسیم و از دو روش بالا استفاده کنیم.

اضافه کردن سطر
برای اضافه کردن سطر باید از تابع ()rbind استفاده کنیم. این تابع همونطور که ماتریس ها هم دیدیم، به ما این امکان رو میده که دوتا چیز همجنس مثلا ماتریس به ماتریس و یا دیتا فریم به دیتا فریم رو به هم بچسبونیم. توی مثال زیر اول از همه یک دیتا فریم جدید تعریف میکنیم و اون رو به دیتا فریم قبلیمون میچسبونیم:

emp_data_2 <- data.frame(
   
   ID = c (7:9), 
   Name = c("Karim","Ziba","Leila"),
   Tavallod = c("1370", "1361", "1350"),
   Hoghough = c(2300000, 1570000, 4500000),
   Jensiat = c("M","F","F"),
   Mojarad = c(TRUE,FALSE,TRUE),
   Farzand = c(0,2,0),
   
   stringsAsFactors = FALSE
 )
 print(emp_data_2)
 ID  Name Tavallod Hoghough Jensiat Mojarad Farzand
 1  7 Karim     1370  2300000       M    TRUE       0
 2  8  Ziba     1361  1570000       F   FALSE       2
 3  9 Leila     1350  4500000       F    TRUE       0
 
 emp_final <- rbind(emp_data,emp_data_2)
 print(emp_final)
 ID    Name Tavallod Hoghough Jensiat Mojarad Farzand
 1  1 Massoud     1372  1000000       M    TRUE       0
 2  2   Sahel     1363  2500000       F   FALSE       2
 3  3    Sara     1355   900000       F    TRUE       0
 4  4  Hosein     1361  1400000       M    TRUE       0
 5  5   Babak     1370  3000000       M   FALSE       1
 6  6   Zohre     1369  2100000       F    TRUE       0
 7  7   Karim     1370  2300000       M    TRUE       0
 8  8    Ziba     1361  1570000       F   FALSE       2
 9  9   Leila     1350  4500000       F    TRUE       0
دقت کنید برای استفاده از این تابع باید تعداد ستون های دوتا دیتا فریم یکی باشه.

تابع ()subset
با استفاده از این تابع میتونیم یه قسمت خاص از دیتا فریم رو جدا کنیم. دقت کنید که میتونیم برای این کار شرط بذاریم. مثلا اینکه Mojarad==TRUE:

print(subset(emp_data, Mojarad == TRUE))
 ID    Name Tavallod Hoghough Jensiat Mojarad Farzand
 1  1 Massoud     1372  1000000       M    TRUE       0
 3  3    Sara     1355   900000       F    TRUE       0
 4  4  Hosein     1361  1400000       M    TRUE       0
 6  6   Zohre     1369  2100000       F    TRUE       0
لطفا دقت کنید که برای اینکه TRUE یا FALSE بودن رو بسنجیم باید دو تا مساوی بذاریم.

یا اینکه اگر Farzand>0:

print(subset(emp_data, Farzand > 0))
 ID  Name Tavallod Hoghough Jensiat Mojarad Farzand
 2  2 Sahel     1363  2500000       F   FALSE       2
 5  5 Babak     1370  3000000       M   FALSE       1
تابع ()head
وقتی تعداد سطرها زیاد باشن، R دیگه همه اونها رو نشون نمیده و یه تعداد محدودی رو نشون میده. تابع ()head چند تا سطر اول نشون میده. دقت کنید که توی کد زیر از دیتا فریمی که چند خط بالاتر توی قسمت اضافه کردن سطر ساختیم داریم استفاده میکنیم:

print(head(emp_final))
 ID    Name Tavallod Hoghough Jensiat Mojarad Farzand
 1  1 Massoud     1372  1000000       M    TRUE       0
 2  2   Sahel     1363  2500000       F   FALSE       2
 3  3    Sara     1355   900000       F    TRUE       0
 4  4  Hosein     1361  1400000       M    TRUE       0
 5  5   Babak     1370  3000000       M   FALSE       1
 6  6   Zohre     1369  2100000       F    TRUE       0
تابع ()tail
برعکس تابع ()head، تابع ()tail چند تا سطر آخر نشون میده.

print(tail(emp_final))
 ID   Name Tavallod Hoghough Jensiat Mojarad Farzand
 4  4 Hosein     1361  1400000       M    TRUE       0
 5  5  Babak     1370  3000000       M   FALSE       1
 6  6  Zohre     1369  2100000       F    TRUE       0
 7  7  Karim     1370  2300000       M    TRUE       0
 8  8   Ziba     1361  1570000       F   FALSE       2
 9  9  Leila     1350  4500000       F    TRUE       0
تابع ()order
با استفاده از این تابع میتونیم تقریبا تمام چیزایی که باهاشون آشنا شدیم مثل دیتا فریم، لیست و ... رو مرتب کنیم. کد زیر رو ببینید:

bb <- c(200, 10, 3000)
 print(order(bb))
 [1] 2 1 3
همونطور که میبیند، خروجی این تابع، اندیس های مقادیر هست که به ترتیب نوشته شدن. میشه از این اندیس ها استفاده کرد تا لیست قدیمی رو آپدیت کنیم:

bb[order(bb)]
 [1] 10 200 3000
همین کارا رو میشه برای دیتا فریم انجام داد. مثلا توی کد زیر، اندیس های مورد نظر رو بر اساس سال تولد میگیریم:

print(order(emp_data$Tavallod))
 [1] 3 4 2 6 5 1
میتونیم دیتا فریم رو بر اساس این اندیس ها بنویسیم:

print(emp_data[order(emp_data$Tavallod),])
 ID    Name Tavallod Hoghough Jensiat Mojarad
 3  3    Sara     1355   900000       F    TRUE
 4  4  Hosein     1361  1400000       M    TRUE
 2  2   Sahel     1363  2500000       F   FALSE
 6  6   Zohre     1369  2100000       F    TRUE
 5  5   Babak     1370  3000000       M   FALSE
 1  1 Massoud     1372  1000000       M    TRUE
دقت کنید که تمام ستون ها رو پرینت کردیم فقط ترتیب سطرها بر اساس خروجی تابع ()order هست.