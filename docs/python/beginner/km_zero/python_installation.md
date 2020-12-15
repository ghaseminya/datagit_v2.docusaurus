---
id: python_installation
title: نصب پایتون
sidebar_label: نصب پایتون
hide_title: false
hide_table_of_contents: false
description: نصب پایتون|دیتاگیت
keywords:
  - آموزش مقدماتی پاتیون
  - آموزش پایتون
  - نصب پایتون
  - آموزش نصب پایتون
  - نصب پایتون در ویندوز
  - نصب پایتون در لینوکس
  - نصب پایتون در مک
  - آموزش مقدماتی python
  - آموزش python
  - نصب python
  - آموزش نصب python
  - نصب python در ویندوز
  - نصب python در لینوکس
  - نصب python در مک
image: "/img/python/python-logo.svg"
---
import Image from '@theme/IdealImage';
import img1 from '@site/static/img/python/beginner/python-installation/python-beginner-introduction-1.png';
import img2 from '@site/static/img/python/beginner/python-installation/python-beginner-introduction-2.png';
import img3 from '@site/static/img/python/beginner/python-installation/python-beginner-introduction-3.png';
import img4 from '@site/static/img/python/beginner/python-installation/python-beginner-introduction-4.png';
import img5 from '@site/static/img/python/beginner/python-installation/python-beginner-introduction-5.png';
import img6 from '@site/static/img/python/beginner/python-installation/python-beginner-introduction-6.png';

## **دانلود پایتون**

برای نصب آخرین نسخه پایتون باید به سایت [**www.python.org**](https://www.python.org/) برید تا یک چیزی مثل شکل زیر ببینید:

<div className="container">
	<div className="row">
		<div className="col padding-vert--lg">
			<Image className="img-inside-markdown" img={img1} />
		</div>
	</div>
</div>

برای اینکه به قسمت دانلود برید، روی اون فلشی که پایین صفحه کشیدم کلیک کنید. وارد یک صفحه جدید میشید. پایین صفحه برید تا جدول زیر رو ببینید:

<div className="container">
	<div className="row">
		<div className="col padding-vert--lg">
			<Image className="img-inside-markdown" img={img2} />
		</div>
	</div>
</div>

همونطور که میبینید، سمت چپ شکل رو شماره گذاری کردم تا راحت تر دانلود کنید.

- شماره 3 برای مک 64 بیتی

- شماره 6 برای ویندوز 64 بیتی و 32 بیتی

برای لینوکس رو یکم پایین تر توضیح دادم چرا که اگر با روشی که اونجا میگم پایتونو نصب کنید، خیلی از ارورهایی که ممکنه باهاش مواجه بشید رو دیگه بهشون برنمیخورین.

## **نصب پایتون در ویندوز (Windows)**

قبل از شروع باید بگم که این آموزش بر مبنای نصب پایتون v3.8.2 جلو میره. البته باید بگم ورژن های جدیدتر هم خیلی تفاوتی ندارن.
وقتی که فایل مورد نظر رو دانلود کردید، روش دوتا کلیک کنید تا باز بشه. بعدش یک صفحه مثل صفحه زیر میاد:

<div className="container">
	<div className="row">
		<div className="col padding-vert--lg">
			<Image className="img-inside-markdown" img={img3} />
		</div>
	</div>
</div>
دوتا تیک پایین صفحه رو بزنید و گزینه **Install Now** بزنید تا نصب بشه. فقط بعد از نصب، قبل اینکه گزینه **Close** رو بزنید، روی گزینه **Disable path length limit** کلیک کنید حتما مثل شکل زیر!

<div className="container">
	<div className="row">
		<div className="col padding-vert--lg">
			<Image className="img-inside-markdown" img={img4} />
		</div>
	</div>
</div>
تبریک میگم، الان شما پایتون رو نصب کردید.

حالا از منوی استارت، قسمت **All Programs**، فولدر **python 3.8** رو می بینید. روش کلیک کنید و اسم **IDLE Python 3.8** رو بزنید (احتمالا توی دسکتاپ هم این گزینه اضافه شده) تا یک صفحه سفید براتون باز بشه. به این صفحه سفید **Shell** میگن و شما میتونید کدهای پایتون رو بنویسید و اجرا کنید.

برای شروع، کد زیر رو بنویسید (کپی کنید) و دکمه اینتر رو بزنید:

```python
print("Salam duste man!")
```

## **نصب پایتون در مکینتاش (Mac)**

باید خدمتتون عرض کنم که **macOS Catalina (version 10.15)** به صورت پیشفرض نسخه **v3.7.3** رو داره و میتونید دستور زیرو توی ترمینال (Terminal) بزنید و ببینید نتیجه رو:

```bash
$ xcrun python3
Python 3.7.3 (default, Sep 5 2019, 17:14:41)
[Clang 11.0.0 (clang-1100.0.33.8)] on darwin
```

ولی شاید نیاز داشته باشید که نسخه های دیگه رو هم نصب کنید. برای همین میتونید از روش های مختلفی این کارو انجام بدید و من یه جندتاییشو پایین براتون نوشتم.

### نصب با نسخه اصلی از سایت

خب بعد از اینکه فایل مورد نظر با پسوند **pkg.** رو دانلود کردید، روش دوتا کلیک کنید و همینطوری **Next** بزنید. بعدز از تموم شدن نصب، ترمینال رو باز کنید و کد زیر رو توش بزنید:

```bash
$ python –version
```

برای اینکه بتونید با پایتون برنامه نویسی کنید، توی ترمینال اول کلمه **** رو بنویسید و اینتر بزنید. برای شروع، کد زیر رو بنویسید (کپی کنید) و دکمه اینتر رو بزنید:

```python
print("Salam duste man!")
```

### نصب با Homebrew (روش پیشنهادی)

اول از همه باید بگم که **Homebrew** یه **Package Manager** هستش که با استفاده از اون میتونید کلی پکیج های مختلفی نصب کنید و دردسرهای مختلف نصب اونها رو کم کنید.

برای اینکه با استفاده ازش بتونیم پایتون رو نصب کنیم باید اول **XCode** رو نصب کنیم یا اگر داریمش، آپدیتش کنیم. باید بدونید که **XCode** ابزاریه برای خود **Apple** که با اون میشه برای سیستم عامل های **iOS** برنامه نویسی کرد و البته کلی کار دیگه باهاش میشه انجام داد که توی این آموزش بهشون نیاز نداریم. برای نصبش کد زیر رو توی ترمینال بزنید:

```bash
$ xcode-select --install
```

البته نصبش هم حجم زیادی از اینترنت رو مصرف میکنه (برای من ۲ گیگ مصرف کرد) و همینطور زمان زیادی میگیره. وسطش هم کلی سوال میکنه که باید تقریبا به همشون جواب مثبت بدید.

وقتی که تموم شد نصب **XCode**، باید بریم سراغ **Homebrew**. دستور زیر رو توی ترمینال بزنید:

```bash
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

وقتی که تموم شد نصبش، برای اینکه ببینیم کارمون درست بوده یا نه، دستور زیر رو بزنید و نتیجه رو ببینید:

```bash
$ brew doctor
Your system is ready to brew.
```

حالا وقتشه بریم سراغ پایتون.برای نصب آخرین ورژن **Python 3** میتونید دستور زیر رو بزنید توی ترمینال:

```bash
$ brew install python3
```

برای اینکه نتیجه عملمون رو ببینیم هم دستور زیر رو بزنید توی ترمینال:

```bash
$ python3 --version
Python 3.7.7
```

حالا برای اینکه کارمون رو شروع کنیم با پایتون، توی ترمینال بنویسید **python3** و برای شروع، کد زیر رو بنویسید (کپی کنید) و دکمه اینتر رو بزنید:

```python
print("Salam duste man!")
```

## **نصب پایتون در لینوکس (Linux/Ubuntu)**

باید خدمتتون عرض کنم که **Ubuntu 18.04** به صورت پیشفرض نسخه v3.6.9 رو داره و میتونید دستور زیرو توی ترمینال (Terminal) بزنید و ببینید نتیجه رو:

```bash
python -V
```

اگر به بزرگ بودن حرف **V** دقت کرده باشید و دستوری که زدید ران بشه، یه چیزی مثل تصویر پایینو میبینید:

<div className="container">
	<div className="row">
		<div className="col padding-vert--lg">
			<Image className="img-inside-markdown" img={img5} />
		</div>
	</div>
</div>
ولی برای اینکه پایتون **v3.8.2** یا ورژن های دیگه پایتون رو نصب کنید، بهتره از روشی که میگم استفاده کنید. دقت کنید که این آموزش بر مبنای پایتون **v3.8.2** هستش ولی اگر ورژن دیگه ای رو نیاز داشتید، صرفا عدد ورژن رو تغییر بدید توی کدهای زیر.

نصب پایتون یه سری پیش نیازا داره. کد زیر رو توی ترمینال اجرا کنید تا این پیش نیازها نصب بشن.

```bash
$ sudo apt-get install build-essential checkinstall
$ sudo apt-get install libreadline-gplv2-dev libncursesw5-dev libssl-dev libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev libffi-dev liblzma-dev
```

حالا باید بریم سراغ دانلود پایتون. کدهای زیر رو اجرا کنید.

```bash
$ cd /usr/src
$ sudo wget https://www.python.org/ftp/python/3.8.2/Python-3.8.2.tgz
$ sudo tar xzf Python-3.8.2.tgz
$ sudo rm Python-3.8.2.tgz
```

حالا باید سورس پایتون رو کامپایل کنیم تا پایتون توی لینوکسمون نصب بشه.

```bash
$ cd Python-3.8.2
$ sudo ./configure --enable-optimizations
$ sudo make altinstall
```

کد زیر رو بزنید تا نتیجه رو ببینیم که چه ورژنی از پایتون توی کامپیوتر نصب شده.

```bash
$ python3.8 -V
```

برای من که نوشت **Python 3.8.2**. یعنی کارمون درست بوده. دقت کنید که حرف اول V- بزرگه. حالا برای استفاده از پایتون باید توی ترمینال بنویسید **python3.8** و اینتر بزنید و بعدش میتونید از پایتون استفاده کنید، مثل شکل زیر:

<div className="container">
	<div className="row">
		<div className="col padding-vert--lg">
			<Image className="img-inside-markdown" img={img6} />
		</div>
	</div>
</div>

برای شروع، کد زیر رو بنویسید (کپی کنید) و دکمه اینتر رو بزنید:

```python
print("Salam duste man!")
```

حالا میتونید با دکمه **CTRL + D** از پایتون خارج بشید و دوباره با ترمینال کار کنید. پیشنهاد من اینه دستور زیر رو هم بعد خارج شدن از پایتون توی ترمینال بنویسید. این دستور باعث میشه که **pip** آپدیت بشه. راجع بهش بعدا صحبت میکنیم.

```bash
$ sudo pip3.8 install --upgrade pip
```

## **انتخاب سخت!**

حالا که پایتون رو نصب کردیم باید تصمیم بگیریم برای این دوره کجا باید کدمون رو بنویسیم. توی دو قسمت بعدی ابزارهایی به اسم [Anaconda](anaconda_installation.md) و [Jupyter Notebook](jupyter_installation.md) رو معرفی میکنم و نحوه نصبش رو آموزش میدم.

توی این دوره آموزشی خودم از [Jupyter Notebook](jupyter_installation.md) استفاده میکنم ولی شما میتونین حتی با ترمینال پایتون هم این دوره رو انجام بدین.
