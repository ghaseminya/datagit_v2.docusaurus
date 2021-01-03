---
slug: homebrew-installation
title: نصب Homebrew
draft: false
hide_table_of_contents: false
author: مسعود معبودی
author_title: ادمین
# author_url: https://github.com/endiliey
author_image_url: "/img/general/massoudmaboudi.png"
description: asd
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
  - نصب homebrew
  - اموزش نصب homebrew
  - نصب homebrew فارسی
  - نصب homebrew در مک
  - نصب homebrew در mac
tags: [macOS, Homebrew]
image: "/img/python/python-logo.svg"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Image from '@theme/IdealImage';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import img1 from '@site/static/img/blog/2021-01-02-homebrew-installation/2021-01-02-homebrew-installation-1.png';
import img2 from '@site/static/img/blog/2021-01-02-homebrew-installation/2021-01-02-homebrew-installation-2.png';

<div className="col padding-vert--lg">
  <Zoom zoomMargin={80}>
    <Image img={img1} />
  </Zoom>
</div>

توی این پست میخوایم ببینیم Homebrew چیه و چطور میتونه برای نصب پکیج توی مکینتاش کمکمون کنه.

<!--truncate-->

اول از همه باید بگم که Homebrew یه Package Manager هستش که با استفاده از اون میتونید کلی پکیج های مختلفی نصب کنید و دردسرهای مختلف نصب اونها رو کم کنید.

برای استفاده ازش باید اول Xcode رو نصب کنیم یا اگر داریمش، آپدیتش کنیم. باید بدونید که Xcode ابزاریه برای خود Apple که با اون میشه برای سیستم عامل های iOS برنامه نویسی کرد و البته کلی کار دیگه باهاش میشه انجام داد که توی این آموزش بهشون نیاز نداریم. برای نصبش کد زیر رو توی ترمینال بزنید:

```bash title="Terminal"
xcode-select --install
```

البته نصبش هم حجم زیادی از اینترنت رو مصرف میکنه (برای من ۲ گیگ مصرف کرد) و همینطور زمان زیادی میگیره. وسطش هم کلی سوال میکنه که باید تقریبا به همشون جواب مثبت بدید.

وقتی که تموم شد نصب Xcode، باید بریم سراغ Homebrew. دستور زیر رو توی ترمینال بزنید:

```bash  title="Terminal"
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

توی این قسمت باید با توجه به مدل MacBook، کد مورد نظر رو اجرا کنید.

اپل در حال حاضر دو مدل Chipset تولید میکنه. سری اول که همون سری Intel هستش و مدل جدیدتر که به اسم سری M شناخته میشه. برای اینکه ببینید MacBook شما از کدوم سری هست، باید توی صفحه دسکتاپ، قسمت بالا سمت چپ، روی آیکون Apple کلیک کنید. بعدش گزینه About This Mac رو بزنید. یکی از دوتا شکل پایین رو میبینید:

<div className="col padding-vert--lg">
  <Zoom zoomMargin={80}>
    <Image img={img2} />
  </Zoom>
</div>

اگر توی قسمت Processor مثل شکل سمت راست کلمه Intel رو دیدید یعنی chipset شما Intel هستش وگرنه که اگر مثل شکل سمت چپ باشه، chipset شما از سری جدید M هستش.

حالا با توجه به این کشف بزرگ، کد مورد نظر رو از قسمت زیر کپی کنید:

<Tabs
  defaultValue="intel"
  values={[
    { label: 'Mac with Intel chip', value: 'intel', },
    { label: 'Mac with M1 chip', value: 'm1', },
  ]
}>

<TabItem value="intel">

```bash title="Terminal"
echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile
source ~/.bash_profile
```

</TabItem>
<TabItem value="m1">

```bash title="Terminal"
echo 'export PATH=/opt/homebrew/bin:$PATH' >> ~/.bash_profile
source ~/.bash_profile
```

</TabItem>
</Tabs>

وقتی که تموم شد نصبش، برای اینکه ببینیم کارمون درست بوده یا نه، دستور زیر رو بزنید:

```bash  title="Terminal"
brew doctor
```

نتیجه میشه این:

```bash  title="Terminal"
Your system is ready to brew.
```

تبریک میگم!‌ شما تونستید Homebrew رو نصب کنید.
