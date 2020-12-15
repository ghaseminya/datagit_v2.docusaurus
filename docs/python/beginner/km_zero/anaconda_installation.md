---
id: anaconda_installation
title: آناکوندا (Anaconda)
sidebar_label: Anaconda
hide_title: false
hide_table_of_contents: false
description: Anaconda|دیتاگیت
keywords:
  - آموزش مقدماتی Anaconda
  - آموزش Anaconda
  - نصب Anaconda
  - آموزش نصب Anaconda
  - نصب Anaconda در ویندوز
  - نصب Anaconda در لینوکس
  - نصب Anaconda در مک
  - آموزش مقدماتی آناکوندا
  - آموزش آناکوندا
  - نصب آناکوندا
  - آموزش نصب آناکوندا
  - نصب آناکوندا در ویندوز
  - نصب آناکوندا در لینوکس
  - نصب آناکوندا در مک
image: "/img/python/python-logo.svg"
---

import Image from '@theme/IdealImage';

## **معرفی**

نرم افزار **Anaconda** به صورت ساده یه محیط جامع برنامه نویسی برای زبان های پایتون و R هست که هدفش آسون کردن مدیریت پکیج های مختلف و کار با پروژه های بزرگ هستش. البته یکی از مهمترین کاربردهای این محیط برنامه نویسی قابلیت کار اون برای مفاهیم یادگیری ماشین و علم داده و آنالیز داده هستش. همینطور بسیاری از مشکلات برنامه نویسی پایتون و R رو برطرف میکنه و بعضی از مباحث از جمله فاصله گذاری که توی درس فاصله گذاری در پایتون به اون اشاره میکنیم رو به صورت اتوماتیک برطرف میکنه.

## **دانلود**

از اونجایی که کشور عزیزمون به هیچ سایتی دسترسی نداره، شما هم نمیتونید به صورت مستقیم وارد سایت [www.anaconda.com](https://www.anaconda.com) بشید و نرم افزار رو دانلود کنید. ولی توی جدول زیر لینک دانلود **Anaconda-2020.02** رو از سایت اصلی میذارم و سعی میکنم هر چند وقت یکبار هم آپدیت کنم به ورژن های جدید.

### مخصوص ویندوز (Windows)

- [دانلود (Graphical Installer (64-bit مخصوص پایتون 3.7](https://repo.anaconda.com/archive/Anaconda3-2020.02-Windows-x86_64.exe)
- [دانلود (Graphical Installer (32-bit مخصوص پایتون 3.7](https://repo.anaconda.com/archive/Anaconda3-2020.02-Windows-x86.exe)
- [دانلود (Graphical Installer (64-bit مخصوص پایتون 2.7](https://repo.anaconda.com/archive/Anaconda2-2019.10-Windows-x86_64.exe)
- [دانلود (Graphical Installer (32-bit مخصوص پایتون 2.7](https://repo.anaconda.com/archive/Anaconda2-2019.10-Windows-x86.exe)

### مخصوص مکینتاش (Mac)

- [دانلود (Graphical Installer (64-bit مخصوص پایتون 3.7](https://repo.anaconda.com/archive/Anaconda3-2020.02-MacOSX-x86_64.pkg)
- [دانلود (Command Line Installer (64-bit مخصوص پایتون 3.7](https://repo.anaconda.com/archive/Anaconda3-2020.02-MacOSX-x86_64.sh)
- [دانلود (Graphical Installer (64-bit مخصوص پایتون 2.7](https://repo.anaconda.com/archive/Anaconda2-2019.10-MacOSX-x86_64.pkg)
- [دانلود (Command Line Installer (64-bit مخصوص پایتون 2.7](https://repo.anaconda.com/archive/Anaconda2-2019.10-MacOSX-x86_64.sh)

### مخصوص لینوکس (Linux/Ubuntu)

- [دانلود (x86 Installer (64-bit مخصوص پایتون 3.7](https://repo.anaconda.com/archive/Anaconda3-2020.02-Linux-x86_64.sh)
- [دانلود (Power8 and Power9 Installer (64-bit مخصوص پایتون 3.7](https://repo.anaconda.com/archive/Anaconda3-2020.02-Linux-ppc64le.sh)
- [دانلود (x86 Installer (64-bit مخصوص پایتون 2.7](https://repo.anaconda.com/archive/Anaconda2-2019.10-Linux-x86_64.sh)
- [دانلود (Power8 and Power9 Installer (64-bit مخصوص پایتون 2.7](https://repo.anaconda.com/archive/Anaconda2-2019.10-Linux-ppc64le.sh)

## **نصب**

### نصب Anaconda در ویندوز (Windows)

وقتی که فایل مورد نظر رو دانلود کردید، روش دو تا کلیک کنید تا باز بشه. دیگه نیازی نیست چیزی رو تغییر بدید و همینطور روی گزینه **Next** کلیک کنید تا نرم افزار برای شما نصب بشه.

وقتی که نصب تموم بشه، گزینه **Next** فعال میشه. بعدش توی صفحه بعدی گزینه **Skip** رو بزنید و در صفحه آخر هم گزینه **Finish**.

تبریک میگم، الان شما **Anaconda** رو نصب کردید.

آناکوندا یه محیط گرافیکی داره که میتونید از اونجا به ابزارای مختلفش دسترسی داشته باشید. این محیط گرافیکی اسمش **Anaconda Navigator** هست. دستور زیر رو توی ترمینال بزنید:

```bash
$ ~/anaconda3/bin/anaconda-navigator
```

تصویر زیر رو میتونید ببینید:

<div><Image  img={require('@site/static/img/python/beginner/anaconda-installation/python-beginner-anaconda-instalation-1.png')} /></div>

همونطور که میبینید ابزارهای مختلفی در دسترس شماست. مثلا **Spyder** هستش که یه محیط برنامه نویسیه که [اینجا](jupyter_installation.md) توضیح دادم. یا مثلا متونید از اونجا بدون هیچ دستوری به **Jupyter Notebook** دسترسی داشته باشید.

برای تست مثلا **Spyder** رو پیدا کنید و روی **Lunch** کلیک کنید. همونطور که توی شکل پایین می بینید، قسمت شماره 1 همون کنسول رو نشون میده و قسمت شماره 2 جایی هست که میتونیم فایل با پسوند **py.** تولید کنید.

<div><Image  img={require('@site/static/img/python/beginner/anaconda-installation/python-beginner-anaconda-instalation-2.png')} /></div>

### نصب Anaconda در مکینتاش (Mac)

وقتی که فایل مورد نظر با پسوند **pkg.** رو دانلود کردید، روش دو تا کلیک کنید تا باز بشه. دیگه نیازی نیست چیزی رو تغییر بدید و همینطور روی گزینه **Next** کلیک کنید تا نرم افزار برای شما نصب بشه.

برای اینکه ببینیم توسنتین نصب کنید آناکوندا رو، دستور زیر رو تایپ کنید توی ترمینال:

```bash
$ conda info
```

### نصب Anaconda در لینوکس (Linux/Ubuntu)

وقتی فایل مورد نظر رو از قسمت بالا دانلود کردید میتونید اون رو نصب کنید. وقتی من فایل مورد نظر رو دانلود کردم، توی فولدر **Downloads** گذاشتمتش بعدش دستور زیر رو اجرا کردم:

```bash
$ bash Anaconda3-2020.02-Linux-x86_64.sh
```

بعدش باید یه چیزی مثل کد پایین ببینید:

```bash
Welcome to Anaconda3 2020.02

In order to continue the installation process, please review the license
agreement.
Please, press ENTER to continue
>>>
...
Do you approve the license terms? [yes|no]
```

حالا باید اینقدر کلید اینتر رو بزنید تا متن زیر رو ببینید:

```bash
Anaconda3 will now be installed into this location:
/home/massoud/anaconda3

  - Press ENTER to confirm the location
  - Press CTRL-C to abort the installation
  - Or specify a different location below

[/home/massoud/anaconda3] >>>
```

توی این خط عملا داره میپرسه ازتون که کجا میخواین نصب کنید آناکوندا رو. میتونین همین جایی که خودش گفته رو قبول کنید پس یه بار بازم دکمه اینتر رو بزنید. حالا اینبار دیگه یکم ممکنه طول بکشه نصب و نگران نباشید.

بعد از یه مدتی یه چیزی مثل متن پایین میبیند:

```bash
...
installation finished.
Do you wish the installer to prepend the Anaconda3 install location
to PATH in your /home/sammy/.bashrc ? [yes|no]
[no] >>> 
```

اینجام پیشنهاد میکنم که کلمه **yes** رو تایپ کنید و اینتر بزنید.

حالا برای اینکه این چیزایی که نصب کردید فعال بشه بدون نیاز به ری استارت کردن کامپیوترتون، دستور زیر رو تایپ کنید و اینتر بزنید:

```bash
$ source ~/.bashrc
```

برای اینکه ببینیم توسنتین نصب کنید آناکوندا رو، دستور زیر رو تایپ کنید توی ترمینال:

```bash
$ conda info
```

اگر نصب رو کامل انجام داده باشید، دستور بالا باید یه چیزی مثل کد زیر به شما نشون بده که توش میتونید ببینید مثلا چه ورژنی از پایتون نصبه یا مثلا آناکوندا کجا نصب شده و از این جور چیزا.

```bash
     active environment : None
            shell level : 0
       user config file : /home/massoud/.condarc
 populated config files : 
          conda version : 4.8.2
    conda-build version : 3.18.11
         python version : 3.7.6.final.0
       virtual packages : __glibc=2.27
       base environment : /home/massoud/anaconda3  (writable)
           channel URLs : https://repo.anaconda.com/pkgs/main/linux-64
                          https://repo.anaconda.com/pkgs/main/noarch
                          https://repo.anaconda.com/pkgs/r/linux-64
                          https://repo.anaconda.com/pkgs/r/noarch
          package cache : /home/massoud/anaconda3/pkgs
                          /home/massoud/.conda/pkgs
       envs directories : /home/massoud/anaconda3/envs
                          /home/massoud/.conda/envs
               platform : linux-64
             user-agent : conda/4.8.2 requests/2.22.0 CPython/3.7.6 Linux/5.3.0-46-generic elementary/5.1.3 glibc/2.27
                UID:GID : 1000:1000
             netrc file : None
           offline mode : False
```

آناکوندا یه محیط گرافیکی داره که میتونید از اونجا به ابزارای مختلفش دسترسی داشته باشید. این محیط گرافیکی اسمش **Anaconda Navigator** هست. دستور زیر رو توی ترمینال بزنید:

```bash
$ ~/anaconda3/bin/anaconda-navigator
```

تصویر زیر رو میتونید ببینید:

<div><Image  img={require('@site/static/img/python/beginner/anaconda-installation/python-beginner-anaconda-instalation-1.png')} /></div>

همونطور که میبینید ابزارهای مختلفی در دسترس شماست. مثلا **Spyder** هستش که یه محیط برنامه نویسیه که [اینجا](jupyter_installation.md) توضیح دادم. یا مثلا متونید از اونجا بدون هیچ دستوری به **Jupyter Notebook** دسترسی داشته باشید.

برای تست مثلا **Spyder** رو پیدا کنید و روی **Lunch** کلیک کنید. همونطور که توی شکل پایین می بینید، قسمت شماره 1 همون کنسول رو نشون میده و قسمت شماره 2 جایی هست که میتونیم فایل با پسوند **py.** تولید کنید.

<div><Image  img={require('@site/static/img/python/beginner/anaconda-installation/python-beginner-anaconda-instalation-2.png')} /></div>


:::tip
ممکنه **Anaconda Navigator** توی صفحه شما جا نشه و نتونین و سایزش رو تغییر بدین. برای این مشکل برطرف بشه، از منوی **File** گزینه **Preferences** رو بزنین و **enable high DPI scaling** رو غیر فعال کنید. حالا یه بار دیگه باز کنید **Anaconda Navigator** رو.
:::