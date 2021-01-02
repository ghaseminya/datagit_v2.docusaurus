---
id: python_installation
title: نصب پایتون
sidebar_label: نصب پایتون
hide_title: false
hide_table_of_contents: false
description: نصب پایتون|دیتاگیت
keywords:
  - اموزش برنامه نویسی
  - برنامه نویسی را از کجا شروع کنیم؟
  - برای برنامه نویسی از کجا شروع کنیم؟
  - اموزش مقدماتی برنامه نویسی
  - اموزش رایگان برنامه نویسی
  - آموزش برنامه نویسی از صفر
  - آموزش برنامه نویسی دیتاگیت
  - آموزش برنامه نویسی دیتا گیت
  - آموزش برنامه نویسی datagit
  - برنامه نویسی دیتاگیت
  - برنامه نویسی datagit
  - آموزش مقدماتی پاتیون
  - آموزش پایتون
  - آموزش python
  - اموزش مقدماتی python
  - اموزش رایگان پایتون
  - آموزش برنامه نویسی پایتون
  - آموزش پایتون از صفر
  - آموزش پایتون مقدماتی
  - آموزش پایتون پیشرفته
  - آموزش پایتون انلاین
  - آموزش پایتون آنلاین
  - آموزش پایتون مسعود معبودی
  - اموزش پایتون مسعود معبودی
  - مسعود معبودی اموزش پایتون
  - مسعود معبودی پایتون
  - اموزش python مسعود معبودی
  - اموزش مقدماتی پایتون مسعود معبودی
  - اموزش مقدماتی پایتون مسعود معبودی
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
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import img1 from '@site/static/img/python/beginner/km_zero/python_installation/python-installation-1.png';
import img2 from '@site/static/img/python/beginner/km_zero/python_installation/python-installation-2.png';
import img3 from '@site/static/img/python/beginner/km_zero/python_installation/python-installation-3.png';
import img4 from '@site/static/img/python/beginner/km_zero/python_installation/python-installation-4.png';
import img5 from '@site/static/img/python/beginner/km_zero/python_installation/python-installation-5.png';
import img6 from '@site/static/img/python/beginner/km_zero/python_installation/python-installation-6.png';

## **دانلود پایتون**

برای نصب آخرین نسخه پایتون باید به سایت [www.python.org](https://www.python.org/) برید تا یک چیزی مثل شکل زیر ببینید:

<div className="col padding-vert--lg">
  <Zoom zoomMargin={80}>
    <Image img={img1} />
  </Zoom>
</div>

برای اینکه به قسمت دانلود برید، روی اون فلشی که پایین صفحه کشیدم کلیک کنید. وارد یک صفحه جدید میشید. پایین صفحه برید تا جدول زیر رو ببینید:

<div className="col padding-vert--lg">
  <Zoom zoomMargin={80}>
    <Image img={img2} />
  </Zoom>
</div>

همونطور که میبینید، سمت چپ شکل رو شماره گذاری کردم تا راحت تر دانلود کنید.

- شماره 3 برای مک 64 بیتی

- شماره 6 برای ویندوز 64 بیتی و 32 بیتی

پیشنهاد من اینه برای لینوکس و مکینتاش از روش هایی استفاده کنید که پایین تر توضیح دادم. اینطوری کلی توی وقتتون صرفه جویی میشه و کلی از ارورها برطرف میشه.

## **نصب پایتون در ویندوز (Windows)**

قبل از شروع باید بگم که این آموزش بر مبنای نصب پایتون v3.8.2 جلو میره. البته باید بگم ورژن های جدیدتر هم خیلی تفاوتی ندارن.

وقتی که فایل مورد نظر رو دانلود کردید، روش دوتا کلیک کنید تا باز بشه. بعدش یک صفحه مثل صفحه زیر میاد:

<div className="col padding-vert--lg">
  <Zoom zoomMargin={80}>
    <Image img={img3} />
  </Zoom>
</div>

دوتا تیک پایین صفحه رو بزنید و گزینه Install Now بزنید تا نصب بشه. فقط بعد از نصب، قبل اینکه گزینه Close رو بزنید، روی گزینه Disable path length limit کلیک کنید حتما مثل شکل زیر!

<div className="col padding-vert--lg">
  <Zoom zoomMargin={80}>
    <Image img={img4} />
  </Zoom>
</div>

تبریک میگم، الان شما پایتون رو نصب کردید.

حالا از منوی استارت، قسمت All Programs، فولدر python 3.8 رو می بینید. روش کلیک کنید و اسم IDLE Python 3.8 رو بزنید (احتمالا توی دسکتاپ هم این گزینه اضافه شده) تا یک صفحه سفید براتون باز بشه. به این صفحه سفید Shell میگن و شما میتونید کدهای پایتون رو بنویسید و اجرا کنید.

برای شروع، کد زیر رو بنویسید (کپی کنید) و دکمه اینتر رو بزنید:

```python title="Python"
print("Salam duste man!")
```

## **نصب پایتون در مکینتاش (Mac)**

باید خدمتتون عرض کنم که macOS Big Sur Version 11.1 به صورت پیشفرض نسخه v3.8.2 رو داره و میتونید دستور زیر رو توی ترمینال (Terminal) بزنید:

```bash title="Terminal"
xcrun python3
```

نتیجه زیر رو باید ببینید:

```bash title="Terminal"
Python 3.8.2 (default, Nov  4 2020, 21:23:28) 
[Clang 12.0.0 (clang-1200.0.32.28)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
```

ولی شاید نیاز داشته باشید که نسخه های دیگه رو هم نصب کنید. برای همین میتونید از روش های مختلفی این کارو انجام بدید و من یه چندتاییشو پایین براتون نوشتم.

### نصب با نسخه اصلی از سایت

خب بعد از اینکه فایل مورد نظر با پسوند pkg رو دانلود کردید، روش دوتا کلیک کنید و همینطوری Next بزنید. بعد از تموم شدن نصب، ترمینال رو باز کنید و کد زیر رو توش بزنید:

```bash title="Terminal"
python3 –version
```

برای اینکه بتونید با پایتون برنامه نویسی کنید، توی ترمینال اول کلمه python3 رو بنویسید و اینتر بزنید. برای شروع، کد زیر رو بنویسید (کپی کنید) و دکمه اینتر رو بزنید:

```python title="Python"
print("Salam duste man!")
```

### نصب با Homebrew

برای آشنایی و نصب Homebrew میتونید به مطلبی که راجع به [آموزش نصب Homebrew](../../../../blog/homebrew-installation) توی قسمت وبلاگ سایت منتشر کردم مراجعه کنید. وقتی تونستید Homebrew رو نصب کنید میتونید ادامه آموزش رو دنبال کنید.

حالا وقتشه بریم سراغ پایتون.برای نصب آخرین ورژن Python 3 میتونید دستور زیر رو بزنید توی ترمینال:

```bash  title="Terminal"
brew install python3
```

برای اینکه نتیجه عملمون رو ببینیم هم دستور زیر رو بزنید توی ترمینال:

```bash  title="Terminal"
python3 --version
```

اینم نتیجش:

```bash  title="Terminal"
Python 3.8.2
```

حالا برای اینکه کارمون رو شروع کنیم با پایتون، توی ترمینال بنویسید python3 و برای شروع، کد زیر رو بنویسید (کپی کنید) و دکمه اینتر رو بزنید:

```python  title="Python"
print("Salam duste man!")
```

### نصب با pyenv (روش پیشنهادی)

برای آشنایی و نصب Homebrew میتونید به مطلبی که راجع به [آموزش نصب Homebrew](../../../../blog/homebrew-installation) توی قسمت وبلاگ سایت منتشر کردم مراجعه کنید. وقتی تونستید Homebrew رو نصب کنید میتونید ادامه آموزش رو دنبال کنید.

## **نصب پایتون در لینوکس (Linux/Ubuntu)**

باید خدمتتون عرض کنم که Ubuntu 18.04 به صورت پیشفرض نسخه v3.6.9 رو داره و میتونید دستور زیرو توی ترمینال (Terminal) بزنید و ببینید نتیجه رو:

```bash title="Terminal"
python -V
```

اگر به بزرگ بودن حرف V دقت کرده باشید و دستوری که زدید ران بشه، یه چیزی مثل تصویر پایینو میبینید:

<div className="col padding-vert--lg">
  <Zoom zoomMargin={80}>
    <Image img={img5} />
  </Zoom>
</div>

ولی برای اینکه پایتون v3.8.2 یا ورژن های دیگه پایتون رو نصب کنید، بهتره از روشی که میگم استفاده کنید. دقت کنید که این آموزش بر مبنای پایتون v3.8.2 هستش ولی اگر ورژن دیگه ای رو نیاز داشتید، صرفا عدد ورژن رو تغییر بدید توی کدهای زیر.

نصب پایتون یه سری پیش نیازا داره. کد زیر رو توی ترمینال اجرا کنید تا این پیش نیازها نصب بشن.

```bash  title="Terminal"
sudo apt-get install build-essential checkinstall
sudo apt-get install libreadline-gplv2-dev libncursesw5-dev libssl-dev libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev libffi-dev liblzma-dev
```

حالا باید بریم سراغ دانلود پایتون. کدهای زیر رو اجرا کنید.

```bash title="Terminal"
cd /usr/src
sudo wget https://www.python.org/ftp/python/3.8.2/Python-3.8.2.tgz
sudo tar xzf Python-3.8.2.tgz
sudo rm Python-3.8.2.tgz
```

حالا باید سورس پایتون رو کامپایل کنیم تا پایتون توی لینوکسمون نصب بشه.

```bash title="Terminal"
cd Python-3.8.2
sudo ./configure --enable-optimizations
sudo make altinstall
```

کد زیر رو بزنید تا نتیجه رو ببینیم که چه ورژنی از پایتون توی کامپیوتر نصب شده.

```bash title="Terminal"
python3.8 -V
```

برای من که نوشت Python 3.8.2. یعنی کارمون درست بوده. دقت کنید که حرف V بزرگه. حالا برای استفاده از پایتون باید توی ترمینال بنویسید python3.8 و اینتر بزنید و بعدش میتونید از پایتون استفاده کنید، مثل شکل زیر:

<div className="col padding-vert--lg">
  <Zoom zoomMargin={80}>
    <Image img={img6} />
  </Zoom>
</div>

برای شروع، کد زیر رو بنویسید (کپی کنید) و دکمه اینتر رو بزنید:

```python title="Python"
print("Salam duste man!")
```

حالا میتونید با دکمه CTRL + D از پایتون خارج بشید و دوباره با ترمینال کار کنید.

## **انتخاب سخت!**

حالا که پایتون رو نصب کردیم باید تصمیم بگیریم برای این دوره کجا باید کدمون رو بنویسیم. توی دو قسمت بعدی ابزارهایی به اسم [Anaconda](anaconda_installation.md) و [Jupyter Notebook](jupyter_installation.md) رو معرفی میکنم و نحوه نصبش رو آموزش میدم.

توی این دوره آموزشی خودم از [Jupyter Notebook](jupyter_installation.md) استفاده میکنم ولی شما میتونین حتی با ترمینال پایتون هم این دوره رو انجام بدین.
